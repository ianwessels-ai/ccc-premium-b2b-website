import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://corporatecricketcollective.com";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/experiences`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/networking`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/tournaments`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/proposal`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
    },
  ];
}