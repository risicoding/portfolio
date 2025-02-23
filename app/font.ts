import localFont from "next/font/local";

export const helvetica = localFont({
  src: [
    { path: "../public/fonts/Helvetica-Bold.ttf", weight: "400" },
    {
      path: "../public/fonts/Helvetica.ttf",
      weight: "200",
    },
    {
      path: "../public/fonts/helvetica-rounded-bold-5871d05ead8de.otf",
    },
  ],
});
