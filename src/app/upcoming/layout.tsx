import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Upcoming Projects | Future Landmarks & Early Access",
  description: "Discover the future of luxury living with Varna Projects' upcoming residential and commercial developments. Register for exclusive early access.",
};


export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
