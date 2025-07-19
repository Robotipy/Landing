import Link from "next/link";
import Image from "next/image";
import config from "@/config";
import logo from "@/app/icon.png";

// Add the Footer to the bottom of your landing page and more.
// The support link is connected to the config.js file. If there's no config.mailgun.supportEmail, the link won't be displayed.

const Footer = () => {
  return (
    <footer className="border-t border-base-content/10 text-white">
      <div className="px-12 mx-auto py-24">
        <div className="flex flex-col xl:flex-row gap-36 w-full">
          <div className="flex-shrink-0 mx-auto md:mx-0 text-center md:text-left">
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
          <div className="grid grid-cols-2 md:flex md:flex-row gap-4 md:gap-16 justify-center -mb-10 md:mt-0 mt-10 text-center">
            <div className="w-full lg:w-1/3 md:w-1/2 px-4">
              <div className="footer-title font-semibold tracking-widest text-sm md:text-left mb-3">
                RPA
              </div>
              <div className="flex flex-col gap-4 justify-center items-center md:items-start mb-10 text-sm">
                <Link href="/rpa" className="link link-hover text-start">
                  Why RPA
                </Link>
                <Link href="#" className="link link-hover text-start">
                  Rocketbot RPA
                </Link>
                <a href="/#" target="_blank" className="link link-hover text-start">
                  Robotipy Process
                </a>
              </div>
            </div>
            <div className="lg:w-1/3 md:w-1/2 w-full px-4">
              <div className="footer-title font-semibold tracking-widest text-sm md:text-left mb-3">
                SOLUTIONS
              </div>
              <div className="flex flex-col justify-center items-center md:items-start gap-4 mb-10 text-sm">
                <Link href="/solutions" className="link link-hover text-start">
                  Team Training
                </Link>
                <Link href="/solutions" className="link link-hover text-start">
                  Process automations
                </Link>
                <Link href="/solutions" className="link link-hover text-start">
                  Chatbots
                </Link>
                <Link href="/solutions" className="link link-hover text-start">
                  Software development
                </Link>
                <Link href="/solutions" className="link link-hover text-start">
                  AI Solutions
                </Link>
              </div>
            </div>
            <div className="lg:w-1/3 md:w-1/2 w-full px-4">
              <div className="footer-title font-semibold tracking-widest text-sm md:text-left mb-3">
                RESOURCES
              </div>
              <div className="flex flex-col justify-center items-center md:items-start gap-2 mb-10 text-sm">
                <Link href="//blog.robotipy.com" className="link link-hover text-start">
                  Blog
                </Link>
                <Link href="/#" className="link link-hover text-start">
                  Training
                </Link>
                <Link href="/#" className="link link-hover text-start">
                  Forum
                </Link>
              </div>
            </div>
            <div className="lg:w-1/3 md:w-1/2 w-full px-4">
              <div className="footer-title font-semibold tracking-widest text-sm md:text-left mb-3">
                COMPANY
              </div>
              <div className="flex flex-col justify-center items-center md:items-start gap-2 mb-10 text-sm">
                <Link href="/tos" className="link link-hover text-start">
                  Terms of services
                </Link>
                <Link href="/privacy-policy" className="link link-hover text-start">
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
