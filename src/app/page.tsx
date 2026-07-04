import Hero from "@/components/Hero";
import HomeSections from "@/components/HomeSections";
import Testimonials from "@/components/Testimonials";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Luxury Real Estate & Construction in Visakhapatnam",
  description: "Discover unparalleled luxury living and premium construction services in Vizag with Varna Projects. Explore our villas, commercial spaces, and layout ventures.",
};

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-transparent">
      <Hero />
      <HomeSections />
      <Testimonials />
    </main>
  );
}

