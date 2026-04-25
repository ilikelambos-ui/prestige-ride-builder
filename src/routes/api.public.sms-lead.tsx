import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";

const LeadSchema = z.object({
  name: z.string().trim().min(1).max(100),
  phone: z.string().trim().min(7).max(20).regex(/^[0-9+\-\s().]+$/),
  message: z.string().trim().min(1).max(500),
  vehicle: z.string().trim().max(100).optional(),
});

const DEALER_NUMBER = "+16142597761";
const GATEWAY_URL = "https://connector-gateway.lovable.dev/twilio";

async function sendSms(to: string, body: string) {
  const LOVABLE_API_KEY = process.env.LOVABLE_API_KEY;
  const TWILIO_API_KEY = process.env.TWILIO_API_KEY;
  const FROM = process.env.TWILIO_FROM_NUMBER;
  if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY not configured");
  if (!TWILIO_API_KEY) throw new Error("TWILIO_API_KEY not configured");
  if (!FROM) throw new Error("TWILIO_FROM_NUMBER not configured — add your Twilio phone number as a project secret");

  const res = await fetch(`${GATEWAY_URL}/Messages.json`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${LOVABLE_API_KEY}`,
      "X-Connection-Api-Key": TWILIO_API_KEY,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({ To: to, From: FROM, Body: body }),
  });
  const data = await res.json();
  if (!res.ok) throw new Error(`Twilio error [${res.status}]: ${JSON.stringify(data)}`);
  return data;
}

export const Route = createFileRoute("/api/public/sms-lead")({
  server: {
    handlers: {
      OPTIONS: async () =>
        new Response(null, {
          status: 204,
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "POST, OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type",
          },
        }),
      POST: async ({ request }) => {
        try {
          const body = await request.json();
          const parsed = LeadSchema.safeParse(body);
          if (!parsed.success) {
            return Response.json({ error: "Invalid input", details: parsed.error.flatten() }, { status: 400 });
          }
          const { name, phone, message, vehicle } = parsed.data;
          const text = `New lead from prautocolumbus.com\nName: ${name}\nPhone: ${phone}${vehicle ? `\nVehicle: ${vehicle}` : ""}\nMessage: ${message}`;
          await sendSms(DEALER_NUMBER, text);
          return Response.json({ success: true });
        } catch (err) {
          console.error("sms-lead error:", err);
          return Response.json({ error: "Failed to send. Please call (614) 259-7761." }, { status: 500 });
        }
      },
    },
  },
});
