import { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About Varna Projects | Top Construction Company in Visakhapatnam",
  description: "Learn about Varna Projects, our history, our leadership, and our vision to redefine luxury real estate and premium construction in Vizag.",
  openGraph: {
    title: "About Varna Projects | Luxury Real Estate & Construction",
    description: "Varna Projects is a multidisciplinary powerhouse crafting environments that inspire and endure.",
    url: "https://varnaprojects.com/about",
    images: [{ url: "/images/founder.png", width: 800, height: 600, alt: "Varna Projects Leadership" }],
  },
};

export default function About() {
  return <AboutClient />;
}
