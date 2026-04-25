export function AutoDealerSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "AutoDealer",
    name: "Prestige Rides — PR Auto Group",
    image: "https://prautocolumbus.com/logo.png",
    "@id": "https://prautocolumbus.com",
    url: "https://prautocolumbus.com",
    telephone: "+1-614-259-7761",
    email: "sales@prautocolumbus.com",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "2300 E Dublin Granville Rd",
      addressLocality: "Columbus",
      addressRegion: "OH",
      postalCode: "43229",
      addressCountry: "US",
    },
    geo: { "@type": "GeoCoordinates", latitude: 40.0739, longitude: -82.9988 },
    openingHoursSpecification: [
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], opens: "09:00", closes: "20:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Sunday", opens: "11:00", closes: "17:00" },
    ],
    sameAs: [],
    areaServed: { "@type": "City", name: "Columbus, OH" },
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
