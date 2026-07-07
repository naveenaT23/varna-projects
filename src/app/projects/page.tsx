import { Metadata } from "next";
import ProjectsClient from "./ProjectsClient";

export const metadata: Metadata = {
  title: "Featured Luxury Projects | Varna Projects Visakhapatnam",
  description: "Explore Varna Projects' portfolio of premium real estate, luxury villas, commercial spaces, and exclusive residential developments in Vizag.",
  openGraph: {
    title: "Varna Projects | Featured Luxury Real Estate Portfolio",
    description: "Discover our landmark developments and luxury properties across Visakhapatnam.",
    url: "https://varnaprojects.com/projects",
    images: [{ url: "/images/layout.png", width: 1200, height: 630, alt: "Varna Projects Portfolio" }],
  },
};

export default function Projects() {
  return <ProjectsClient />;
}
