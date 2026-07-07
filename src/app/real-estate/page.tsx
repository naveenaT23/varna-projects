import { Metadata } from "next";
import RealEstateClient from "./RealEstateClient";

export const metadata: Metadata = {
  title: "Premium Real Estate Services | Varna Projects Visakhapatnam",
  description: "Varna Projects provides elite real estate services in Vizag, including luxury residential layouts, high-end commercial spaces, and NRI property investments.",
  openGraph: {
    title: "Varna Projects | Premium Real Estate Services",
    description: "Explore our exclusive real estate services and meticulously crafted master layouts.",
    url: "https://varnaprojects.com/real-estate",
    images: [{ url: "/images/realestate_penthouse.png", width: 1200, height: 630, alt: "Varna Projects Real Estate Services" }],
  },
};

export default function RealEstate() {
  return <RealEstateClient />;
}
