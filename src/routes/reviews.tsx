import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Star, ExternalLink, Quote } from "lucide-react";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Customer Reviews — Prestige Rides Columbus OH" },
      { name: "description", content: "Read what customers are saying about Prestige Rides on Google. 4.9★ rated dealership in Columbus, OH 43229." },
      { property: "og:title", content: "Reviews — Prestige Rides" },
      { property: "og:description", content: "4.9★ on Google. Real customer reviews." },
    ],
  }),
  component: Reviews,
});

const reviews = [
  { name: "Marcus T.", rating: 5, date: "March 2024", text: "Easiest car buying experience I've ever had. No pressure, honest pricing, and the car was in perfect condition. Prestige Rides is the real deal!" },
  { name: "Latoya W.", rating: 5, date: "January 2024", text: "I was nervous about buying a used car but the team here made me feel completely comfortable. They walked me through everything and I drove off same day. 10/10 recommend." },
  { name: "Derek S.", rating: 5, date: "November 2023", text: "Great selection, great prices, and zero hidden fees. They even helped me find financing. Will be sending all my friends and family here." },
  { name: "Amanda R.", rating: 5, date: "February 2024", text: "Bought my SUV from Prestige Rides and couldn't be happier. The staff was professional and knowledgeable. The extended warranty option gave me real peace of mind." },
  { name: "James O.", rating: 5, date: "December 2023", text: "Transparent pricing, clean vehicles, no games. I've bought from big dealerships before and this was by far the best experience. Highly recommend!" },
  { name: "Priya M.", rating: 5, date: "April 2024", text: "Found exactly what I was looking for at the right price. The team was friendly and made the whole process smooth and stress-free. Love my new car!" },
  { name: "Darnell B.", rating: 5, date: "November 2025", text: "Started 2026 off right with a new ride from PR Auto Group! The whole team was incredibly helpful and the process was fast. No runaround, just straight talk and a great deal." },
  { name: "Keisha F.", rating: 5, date: "January 2026", text: "I came in just to look and drove home with my dream car! The staff never pressured me once. They genuinely wanted to find me the right vehicle. Will be back for my next one!" },
  { name: "Monique H.", rating: 5, date: "February 2026", text: "PR Auto Group helped me get into a beautiful SUV even with my credit situation. They worked with me every step of the way. 5 stars isn't enough!" },
];

function Reviews() {
  return (
    <Layout>
      <section className="border-b border-border/60 bg-gradient-dark py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <span className="text-xs uppercase tracking-[0.3em] text-primary">Reviews</span>
          <h1 className="text-5xl md:text-6xl font-bold mt-3">What Drivers Are Saying</h1>
          <div className="mt-6 flex items-center gap-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => <Star key={i} className="h-7 w-7 fill-primary text-primary" />)}
            </div>
            <div>
              <div className="text-3xl font-bold">5.0 / 5.0</div>
              <div className="text-sm text-muted-foreground">Rated on Google</div>
            </div>
          </div>
          <Button asChild className="mt-6 bg-gradient-red shadow-red h-12 uppercase tracking-wider">
            <a href="https://www.google.com/search?q=PR+Auto+Group+Prestige+Rides+Columbus+OH" target="_blank" rel="noopener noreferrer">
              View on Google <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 md:px-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <article key={r.name} className="rounded-lg border border-border/60 bg-card p-6 transition-smooth hover:border-primary/40">
              <Quote className="h-6 w-6 text-primary mb-3 opacity-60" />
              <div className="flex mb-2">
                {[...Array(r.rating)].map((_, i) => <Star key={i} className="h-4 w-4 fill-primary text-primary" />)}
              </div>
              <p className="text-sm text-foreground/90 leading-relaxed">{r.text}</p>
              <div className="mt-5 pt-4 border-t border-border/60 flex justify-between items-center">
                <div>
                  <div className="font-semibold text-sm">{r.name}</div>
                  <div className="text-xs text-muted-foreground">{r.date}</div>
                </div>
                <div className="h-8 w-8 rounded-full bg-gradient-red flex items-center justify-center text-xs font-bold">
                  {r.name[0]}
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button asChild variant="outline" className="h-12 px-8 uppercase tracking-wider border-foreground/30">
            <Link to="/contact">Share Your Experience</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
