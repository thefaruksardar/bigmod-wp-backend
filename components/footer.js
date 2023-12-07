import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-slate-100 mt-5 p-5 ">
      <div className="lg:max-w-6xl lg:m-auto">
        <div className=" grid grid-cols-1 gap-6 md:grid-cols-3">
          <section className="flex flex-col gap-3">
            <strong className="block font-semibold mb-4 text-gray-800">
              More About BIGMOD.io
            </strong>
            <Link className="not-a text-gray-700" href="/about">
              About
            </Link>
            <Link className="not-a text-gray-700" href="/contact">
              Contact
            </Link>
            <Link className="not-a text-gray-700" href="/privacy-policy">
              Privacy Policy
            </Link>
            <Link className="not-a text-gray-700" href="/terms-and-services">
              Terms of Services
            </Link>
            <Link className="not-a text-gray-700" href="/dmca-disclarmer">
              DMCA Disclarmer
            </Link>
          </section>
          <section className="flex flex-col gap-3">
            <strong className="block font-semibold mb-4 text-gray-800">
              Most Downloaded
            </strong>
            <Link className="not-a text-gray-700" href="/games/gta-sa-apk">
              GTA San Andreas
            </Link>
            <Link className="not-a text-gray-700" href="/games/minecraft-apk">
              Minecraft Apk
            </Link>
            <Link className="not-a text-gray-700" href="/apps/picsart-mod-apk">
              PicsArt
            </Link>
            <Link className="not-a text-gray-700" href="/apps/spotify-mod-apk">
              Spotify
            </Link>
            <Link className="not-a text-gray-700" href="/apps/netflix-mod-apk">
              Netflix
            </Link>
            <Link className="not-a text-gray-700" href="/apps/gb-whatsapp-apk">
              GB Whatsapp
            </Link>
          </section>
          <section className="flex flex-col gap-3">
            <strong className="block font-semibold mb-4 text-gray-800">
              Social Platforms
            </strong>
            <Link className="not-a text-gray-700" href="/">
              Facebook
            </Link>
            <Link className="not-a text-gray-700" href="/">
              YouTube
            </Link>
            <Link className="not-a text-gray-700" href="/">
              Telegram
            </Link>
            <Link className="not-a text-gray-700" href="/">
              Twitter
            </Link>
          </section>
        </div>
        <p className="text-center mt-6">
          Copyright © {new Date().getFullYear()} <Link href="/">BIGMOD</Link>.
          Download MOD Games, Premium APK for Android
        </p>
      </div>
    </footer>
  );
};
export default Footer;
