import type { Metadata } from "next";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./globals.css";


export const metadata: Metadata = {
  title: "Rafael Fernandes",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="max-w-[1440px] m-auto mt-16 bg-[#13032a] bg-[url('../assets/stars.gif')] 
      text-prettyYellow font-merriWeather font-semibold max-md:text-base max-2xl:px-10">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}