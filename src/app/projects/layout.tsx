import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Portfolio | Luxury Properties & Construction Projects",
  description: "Browse the complete portfolio of Varna Projects, showcasing our finest luxury villas, commercial spaces, and premium residential layouts.",
};


export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
