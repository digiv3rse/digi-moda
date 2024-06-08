import Container from "@/components/container";
import ThemeSwitch from "@/components/themeSwitch";
import Image from "next/image";
import { myLoader } from "@/utils/all";

export default function Footer(props) {
  return (
    <Container className="mt-10 border-t border-gray-100 dark:border-gray-800">
      <div className="text-center text-sm">
        Copyright © {new Date().getFullYear()} {props?.copyright}. All
        rights reserved DiGi Moda.
      </div>
      <div className="mt-2 flex items-center justify-between">
        <ThemeSwitch />
      </div>
       <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
            <a href="/about" className="hover:underline me-4 md:me-6">About</a>
        </li>
        <li>
            <a href="/contact" className="hover:underline me-4 md:me-6">Contact</a>
        </li>
        <li>
            <a href="https://kimhabork.com" className="hover:underline me-4 md:me-6">Portfolio</a>
        </li>
        <li>
            <a href="https://kimhabork.com/privacy" className="hover:underline me-4 md:me-6">Privacy Policy</a>
        </li>
        <li>
            <a href="https://kimhabork.com/terms" className="hover:underline me-4 md:me-6">Terms and Conditions</a>
        </li>
    </ul>
    </Container>
  );
}