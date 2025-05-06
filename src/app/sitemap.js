export const dynamic = "force-static";

export default function sitemap() {
  return [
    {
      url: "https://ginagonzalezgut.com",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: "https://ginagonzalezgut.com/about",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
