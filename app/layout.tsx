import "./globals.css";
// import { Poppins, Preahvihear } from "next/font/google";

import FloatingSocial from "@/components/floating-social";
import { helvetica } from "./font";

// const poppins = Poppins({
//   subsets: ["latin"],
//   display: "swap",
//   weight: "300",
//   variable: "--font-poppins",
// });
//
// const preahvihear = Preahvihear({
//   subsets: ["latin"],
//   display: "swap",
//   weight: "400",
//   variable: "--font-preahvihear",
// });

const RootLayout = ({ children }: { children: Readonly<React.ReactNode> }) => {
  return (
    <html lang="en" className={`${helvetica.className}`}>
      <body className="min-h-screen scroll-smooth bg-black text-white">
        <div className="mx-auto max-w-4xl">{children}</div>
        {/* <Navbar /> */}
        <FloatingSocial />
      </body>
    </html>
  );
};

export default RootLayout;
