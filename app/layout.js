import Header from "@/components/header";
import "@/styles/globals.css";
import { Poppins } from "next/font/google";
import Footer from "@/components/footer";
import Script from "next/script";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata = {
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_SITE}`),
  themeColor: [{ color: "#377EF1" }],
  verification: {
    // google: "google",
    yandex: "fede0efc98769622",
    // other: {
    //   me: ["my-email", "my-link"],
    // },
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-gray-50`}>
        <GoogleAnalytics />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
