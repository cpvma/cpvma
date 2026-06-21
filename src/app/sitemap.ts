import { MetadataRoute } from "next";
import { executiveRoles } from "@/data/executiveTeam";

const BASE_URL = "https://cpvma.ca";

export default function sitemap(): MetadataRoute.Sitemap {
  const slugRoutes = executiveRoles.map((role) => ({
    url: `${BASE_URL}/about/team/${role.slug}`,
    changeFrequency: "yearly" as const,
    priority: 0.5
  }));

  return [
    { url: BASE_URL, changeFrequency: "monthly", priority: 1 },
    { url: `${BASE_URL}/about`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/about/mission`, changeFrequency: "yearly", priority: 0.7 },
    { url: `${BASE_URL}/about/team`, changeFrequency: "yearly", priority: 0.8 },
    ...slugRoutes,
    { url: `${BASE_URL}/about/clubs`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/about/newsletters`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/about/constitution`, changeFrequency: "yearly", priority: 0.5 },
    { url: `${BASE_URL}/about/join-us`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/events`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/events/upcoming`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/events/past`, changeFrequency: "yearly", priority: 0.7 },
    { url: `${BASE_URL}/events/packages`, changeFrequency: "yearly", priority: 0.7 },
    { url: `${BASE_URL}/contact`, changeFrequency: "yearly", priority: 0.6 },
    { url: `${BASE_URL}/get-involved/volunteers`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/get-involved/volunteers/apply`, changeFrequency: "monthly", priority: 0.6 }
  ];
}
