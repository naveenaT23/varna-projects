import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Top Construction & Real Estate Builders in Vizag",
  description: "Learn about the legacy of Varna Projects, delivering architectural excellence across residential and commercial sectors for over a decade in Andhra Pradesh.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
