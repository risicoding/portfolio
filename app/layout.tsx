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
<div className="max-w-3xl mx-auto">

        {children}

</div>
        {/* <Navbar /> */}
      </body>
    </html>
  );
};

export default RootLayout;
