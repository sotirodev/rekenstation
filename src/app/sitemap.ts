import type { MetadataRoute } from "next";
import { calculators } from "@/data/calculators";
import { categories } from "@/data/categories";

const baseUrl = "https://rekenstation.nl";

const staticRoutes = [
  "",
  "/calculators",
  "/categorieen",
  "/over-ons",
  "/contact",
  "/privacybeleid",
  "/cookiebeleid",
  "/algemene-voorwaarden",
  "/disclaimer",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
  }));

  const categoryEntries: MetadataRoute.Sitemap = categories.map((category) => ({
    url: `${baseUrl}/${category.slug}`,
    lastModified: new Date(),
  }));

  const calculatorEntries: MetadataRoute.Sitemap = calculators.map((calculator) => ({
    url: `${baseUrl}/${calculator.slug}`,
    lastModified: new Date(),
  }));

  return [...staticEntries, ...categoryEntries, ...calculatorEntries];
}
