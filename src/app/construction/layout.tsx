import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Premium Construction Services | Residential & Commercial Builders",
  description: "Expert construction and engineering services in Visakhapatnam. We build tomorrow's landmarks with uncompromising quality and sustainable practices.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
