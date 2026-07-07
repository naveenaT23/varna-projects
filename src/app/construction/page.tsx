import { Metadata } from "next";
import ConstructionClient from "./ConstructionClient";

export const metadata: Metadata = {
  title: "Premium Construction Services | Varna Projects Visakhapatnam",
  description: "Varna Projects employs cutting-edge methodologies and uncompromising quality control to deliver engineering excellence in every residential and commercial build.",
  openGraph: {
    title: "Varna Projects | Engineering & Construction Excellence",
    description: "Discover our uncompromising approach to high-end construction and robust structural engineering.",
    url: "https://varnaprojects.com/construction",
    images: [{ url: "/images/construction_hero.png", width: 1200, height: 630, alt: "Varna Construction Services" }],
  },
};

export default function Construction() {
  return <ConstructionClient />;
}
