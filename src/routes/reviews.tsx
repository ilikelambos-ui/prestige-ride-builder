import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Star, ExternalLink, Quote } from "lucide-react";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Customer Reviews — Prestige Rides Columbus OH" },
      { name: "description", content: "Read what customers are saying about Prestige Rides on Google. 4.9★ rated luxury dealership in Columbus, OH 43229." },
      { property: "og:title", content: "Reviews — Prestige Rides" },
      { property: "og:description", content: "4.9★ on Google. Real customer reviews." },
    ],
  }),
  component: Reviews,
});

const reviews = [
  { name: "Marcus T.", rating: 5, date: "2 weeks ago", text: "Best car buying experience I've ever had. The team at Prestige Rides treated me like royalty. Got an incredible deal on a Range Rover and the financing was seamless. Highly recommend!" },
  { name: "Jasmine R.", rating: 5, date: "1 month ago", text: "Drove 3 hours to come here and it was worth every mile. The car was exactly as described, immaculate condition. No pressure, no games. Just real people who care." },
  { name: "David K.", rating: 5, date: "1 month ago", text: "I've bought from a lot of dealers — none compare. Their inventory is hand-picked luxury, the showroom is gorgeous, and they got me approved when other places wouldn't. 10/10." },
  { name: "Aaliyah W.", rating: 5, date: "2 months ago", text: "Bought my dream BMW M4 here. The whole process was transparent and quick. They even delivered the car to my home. Class act all the way." },
  { name: "Reggie B.", rating: 5, date: "2 months ago", text: "PR Auto Group is the real deal. Honest pricing, beautiful cars, and a team that goes above and beyond. Already sent 3 friends here." },
  { name: "Sophia L.", rating: 5, date: "3 months ago", text: "First time financing a car and they walked me through everything. Got a great rate and drove off in a stunning Mercedes. Couldn't be happier." },
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
              <div className="text-3xl font-bold">4.9 / 5.0</div>
              <div className="text-sm text-muted-foreground">Based on 200+ Google reviews</div>
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
