import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://verifypropertiesltd.com",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    // {
    //   url: "https://musabbirsagar.com/about",
    //   lastModified: new Date(),
    //   changeFrequency: "yearly",
    //   priority: 0.8,
    // },
    // {
    //   url: "https://musabbirsagar.com/articles",
    //   lastModified: new Date(),
    //   changeFrequency: "weekly",
    //   priority: 0.5,
    // },
    // {
    //   url: "https://musabbirsagar.com/projects",
    //   lastModified: new Date(),
    //   changeFrequency: "weekly",
    //   priority: 0.5,
    // },
  ];
}
