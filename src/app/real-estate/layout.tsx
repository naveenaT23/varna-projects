import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Luxury Real Estate Properties | Villas, Commercial & Layouts in Vizag",
  description: "Explore Varna Projects' exclusive portfolio of luxury coastal villas, modern commercial spaces, and premium layout ventures in Visakhapatnam.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
