import { Navbar } from "@/components/navbar";
import "./globals.css";
import { Poppins, Preahvihear } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: "300",
  variable: "--font-poppins",
});

const preahvihear = Preahvihear({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  variable: "--font-preahvihear",
});

const RootLayout = ({ children }: { children: Readonly<React.ReactNode> }) => {
  return (
    <html lang="en" className={`${poppins.variable} ${preahvihear.variable}`}>
      <body className="min-h-screen bg-black text-white">
        <Navbar />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
