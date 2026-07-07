import { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Varna Projects | Real Estate Inquiries Visakhapatnam",
  description: "Get in touch with Varna Projects for luxury real estate inquiries, commercial space bookings, and premium construction services in Vizag.",
  openGraph: {
    title: "Contact Varna Projects | Premium Real Estate Vizag",
    description: "Our dedicated team of luxury real estate experts is ready to assist you. Contact us today.",
    url: "https://varnaprojects.com/contact",
    images: [{ url: "/images/skyline_tower.png", width: 1200, height: 630, alt: "Varna Projects Global Headquarters" }],
  },
};

export default function Contact() {
  return <ContactClient />;
}
