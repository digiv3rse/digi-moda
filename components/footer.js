import Container from "@/components/container";
import Link from "next/link";
import ThemeSwitch from "@/components/themeSwitch";
import Image from "next/image";
import { myLoader } from "@/utils/all";

export default function Footer() {
  return (
    <div className="mx-auto">
      <Container className="items-center justify-center w-full py-8 mx-auto border-t border-gray-100 mt-14 dark:border-gray-800">
        <div className="grid grid-cols-1 gap-4 px-4 mt-4 md:px-6">
          <div className="flex flex-row justify-center">
            <Link
              href="/"
              className="px-4 py-2 text-sm text-gray-500 rounded-md md:text-xl dark:focus:bg-trueGray-700 hover:text-indigo-500 focus:bg-cyan-500 focus:text-indigo-500 focus:outline-none dark:text-gray-300">
              Home
            </Link>
            <Link
              href="/about"
              className="px-4 py-2 text-sm text-gray-500 rounded-md md:text-xl dark:focus:bg-trueGray-700 hover:text-indigo-500 focus:bg-cyan-500 focus:text-indigo-500 focus:outline-none dark:text-gray-300">
              About
            </Link>
            <Link
              href="/contact"
              className="px-4 py-2 text-sm text-gray-500 rounded-md md:text-xl dark:focus:bg-trueGray-700 hover:text-indigo-500 focus:bg-cyan-500 focus:text-indigo-500 focus:outline-none dark:text-gray-300">
              Contact
            </Link>
            <Link
              href="/gallery"
              className="px-4 py-2 text-sm text-gray-500 rounded-md md:text-xl dark:focus:bg-trueGray-700 hover:text-indigo-500 focus:bg-cyan-500 focus:text-indigo-500 focus:outline-none dark:text-gray-300">
              Gallery
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 px-4 mt-4 md:px-6">
          <div className="flex flex-row justify-center">
            <Link
              href="/portfolio"
              className="px-4 py-2 text-sm text-gray-800 rounded-md md:text-xl dark:focus:bg-trueGray-700 hover:text-indigo-500 focus:bg-cyan-500 focus:text-indigo-500 focus:outline-none dark:text-gray-200">
              Portfolio
            </Link>
            <Link
              href="/terms"
              className="px-4 py-2 text-sm text-gray-800 rounded-md md:text-xl dark:focus:bg-trueGray-700 hover:text-indigo-500 focus:bg-cyan-500 focus:text-indigo-500 focus:outline-none dark:text-gray-200">
              Terms and Conditions
            </Link>
            <Link
              href="/privacy"
              className="px-4 py-2 text-sm text-gray-800 rounded-md md:text-xl dark:focus:bg-trueGray-700 hover:text-indigo-500 focus:bg-cyan-500 focus:text-indigo-500 focus:outline-none dark:text-gray-200">
              Privacy Policy
            </Link>
          </div>
        </div>
        <div className="px-4 mt-4 md:px-6">
          <div className="flex justify-center gap-2 space-x-5 text-gray-800 dark:text-gray-300">
            <a
              href="https://twitter.com/digimoda_kh"
              target="_blank"
              rel="noopener">
              <span className="sr-only">Twitter</span>
              <Twitter />
            </a>
            <a
              href="https://instagram.com/digimoda_kh"
              target="_blank"
              rel="noopener">
              <span className="sr-only">Instagram</span>
              <Instagram />
            </a>
            <a
              href="https://linkedin.com/digi_moda"
              target="_blank"
              rel="noopener">
              <span className="sr-only">Linkedin</span>
              <Linkedin />
            </a>
          </div>
        </div>
        <div className="items-center content-center justify-center max-w-screen-lg px-8 pt-2 pb-5 mx-auto mt-2 text-gray-800 dark:text-gray-300 lg:py-8 xl:px-5">
          <div className="py-5 text-center text-md md:text-xl">
            Copyright © {new Date().getFullYear()}. by{" "}
            <a
              href="https://digimoda.site/"
              target="_blank"
              rel="noopener">
              DiGi Moda. All rights reserved.
            </a>
          </div>
          <div className="flex items-center content-center justify-center w-full pt-5">
            <ThemeSwitch />
          </div>
        </div>
      </Container>
    </div>
  );
}

const Twitter = ({ size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor">
    <path d="M24 4.37a9.6 9.6 0 0 1-2.83.8 5.04 5.04 0 0 0 2.17-2.8c-.95.58-2 1-3.13 1.22A4.86 4.86 0 0 0 16.61 2a4.99 4.99 0 0 0-4.79 6.2A13.87 13.87 0 0 1 1.67 2.92 5.12 5.12 0 0 0 3.2 9.67a4.82 4.82 0 0 1-2.23-.64v.07c0 2.44 1.7 4.48 3.95 4.95a4.84 4.84 0 0 1-2.22.08c.63 2.01 2.45 3.47 4.6 3.51A9.72 9.72 0 0 1 0 19.74 13.68 13.68 0 0 0 7.55 22c9.06 0 14-7.7 14-14.37v-.65c.96-.71 1.79-1.6 2.45-2.61z" />
  </svg>
);

const Instagram = ({ size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor">
    <path d="M16.98 0a6.9 6.9 0 0 1 5.08 1.98A6.94 6.94 0 0 1 24 7.02v9.96c0 2.08-.68 3.87-1.98 5.13A7.14 7.14 0 0 1 16.94 24H7.06a7.06 7.06 0 0 1-5.03-1.89A6.96 6.96 0 0 1 0 16.94V7.02C0 2.8 2.8 0 7.02 0h9.96zm.05 2.23H7.06c-1.45 0-2.7.43-3.53 1.25a4.82 4.82 0 0 0-1.3 3.54v9.92c0 1.5.43 2.7 1.3 3.58a5 5 0 0 0 3.53 1.25h9.88a5 5 0 0 0 3.53-1.25 4.73 4.73 0 0 0 1.4-3.54V7.02a5 5 0 0 0-1.3-3.49 4.82 4.82 0 0 0-3.54-1.3zM12 5.76c3.39 0 6.2 2.8 6.2 6.2a6.2 6.2 0 0 1-12.4 0 6.2 6.2 0 0 1 6.2-6.2zm0 2.22a3.99 3.99 0 0 0-3.97 3.97A3.99 3.99 0 0 0 12 15.92a3.99 3.99 0 0 0 3.97-3.97A3.99 3.99 0 0 0 12 7.98zm6.44-3.77a1.4 1.4 0 1 1 0 2.8 1.4 1.4 0 0 1 0-2.8z" />
  </svg>
);

const Linkedin = ({ size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor">
    <path d="M22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0zM7.27 20.1H3.65V9.24h3.62V20.1zM5.47 7.76h-.03c-1.22 0-2-.83-2-1.87 0-1.06.8-1.87 2.05-1.87 1.24 0 2 .8 2.02 1.87 0 1.04-.78 1.87-2.05 1.87zM20.34 20.1h-3.63v-5.8c0-1.45-.52-2.45-1.83-2.45-1 0-1.6.67-1.87 1.32-.1.23-.11.55-.11.88v6.05H9.28s.05-9.82 0-10.84h3.63v1.54a3.6 3.6 0 0 1 3.26-1.8c2.39 0 4.18 1.56 4.18 4.89v6.21z" />
  </svg>
);
