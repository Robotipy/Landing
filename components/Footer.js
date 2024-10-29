import Link from "next/link";
import Image from "next/image";
import config from "@/config";
import logo from "@/app/icon.png";

// Add the Footer to the bottom of your landing page and more.
// The support link is connected to the config.js file. If there's no config.mailgun.supportEmail, the link won't be displayed.

const Footer = () => {
  return (
    <footer className="border-t border-base-content/10 text-white">
      <div className="px-12 py-10 mx-auto py-24">
        <div className=" flex lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col gap-36">
          <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <Link
              href="/#"
              aria-current="page"
              className="flex gap-2 justify-center md:justify-start items-center"
            >
              <Image
                src={logo}
                alt={`${config.appName} logo`}
                priority={true}
                className="w-6 h-6"
                width={24}
                height={24}
              />
              <strong className="font-extrabold tracking-tight text-base md:text-lg">
                {config.appName}
              </strong>
            </Link>

            <p className="mt-3 text-sm">{config.appDescription}</p>
            <p className="mt-3 text-sm">
              Copyright © {new Date().getFullYear()} - All rights reserved
            </p>
          </div>
          <div className="flex-grow flex flex-row gap-16 justify-center -mb-10 md:mt-0 mt-10 text-center">
            <div className="lg:w-1/3 md:w-1/2 w-full px-4">
              <div className="footer-title font-semibold tracking-widest text-sm md:text-left mb-3">
                RPA
              </div>
              <div className="flex flex-col gap-4 justify-center items-center md:items-start mb-10 text-sm">
                <Link href="/#pricing" className="link link-hover">
                  Why RPA
                </Link>
                <Link href="/blog" className="link link-hover">
                  Rocketbot RPA
                </Link>
                <a href="/#" target="_blank" className="link link-hover">
                  Robotipy Process
                </a>
              </div>
            </div>
            <div className="lg:w-1/3 md:w-1/2 w-full px-4">
              <div className="footer-title font-semibold tracking-widest text-sm md:text-left mb-3">
                SOLUTIONS
              </div>

              <div className="flex flex-col justify-center items-center md:items-start gap-4 mb-10 text-sm">
                <Link href="/#pricing" className="link link-hover">
                  Team Training
                </Link>
                <Link href="/#pricing" className="link link-hover">
                  Process automations
                </Link>
                <Link href="/blog" className="link link-hover">
                  Chatbots
                </Link>
                <Link href="/blog" className="link link-hover">
                  Software development
                </Link>
                <Link href="/blog" className="link link-hover">
                  AI Solutions
                </Link>
              </div>
            </div>
            <div className="lg:w-1/3 md:w-1/2 w-full px-4">
              <div className="footer-title font-semibold tracking-widest text-sm md:text-left mb-3">
                RESOURCES
              </div>

              <div className="flex flex-col justify-center items-center md:items-start gap-2 mb-10 text-sm">
                <Link href="/tos" className="link link-hover">
                  Blog
                </Link>
                <Link href="/privacy-policy" className="link link-hover">
                  Training
                </Link>
                <Link href="/privacy-policy" className="link link-hover">
                  Forum
                </Link>
              </div>
            </div>

            <div className="lg:w-1/3 md:w-1/2 w-full px-4">
              <div className="footer-title font-semibold tracking-widest text-sm md:text-left mb-3">
                COMPANY
              </div>

              <div className="flex flex-col justify-center items-center md:items-start gap-2 mb-10 text-sm">
                <Link href="/tos" className="link link-hover">
                  Terms of services
                </Link>
                <Link href="/privacy-policy" className="link link-hover">
                  Privacy policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
