import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Enquire for Real Estate & Construction Services",
  description: "Get in touch with Varna Projects. Enquire about our luxury properties, NRI investment opportunities, or schedule a consultation with our real estate experts.",
};


export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
