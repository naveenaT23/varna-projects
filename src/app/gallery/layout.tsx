import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery | Visual Tour of Our Premium Developments",
  description: "Take a visual tour through Varna Projects' stunning architectural designs, exquisite interiors, and world-class amenities in our premium real estate properties.",
};


export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
