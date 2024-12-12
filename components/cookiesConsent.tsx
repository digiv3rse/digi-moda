'use client'
import { useState } from "react";
import Cookies from "js-cookie";
import Image from "next/image";
import Link from "next/link";

const CookieConsent = () => {
  const [showConsent, setShowConsent] = useState(false);
  const consent = Cookies.get("consent");
  Cookies.set("consent", "true", { expires: 365 }); // Expires in 1 year
  Cookies.remove("consent");

  const handleAccept = () => {
    setShowConsent(true);
    // Set cookie or perform other actions
  };

  const handleDecline = () => {
    setShowConsent  (false);
    // Remove cookie or perform other actions
  };

  return (
    <div>
      <div className="container mx-auto max-w-[20%] mt-[10rem] px-2 flex justify-center items-center">
        <div style="background-color:rgb(0, 0, 0)">
          <div
            className="w-72 bg-gray-200 rounded-xl shadow-md p-6"
            style="cursor: auto;"
          >
            <div className="w-16 mx-auto relative -mt-10 mb-3">
              <Image
                className="-mt-1"
                src="https://www.svgrepo.com/show/30963/cookie.svg"
                alt="Cookie Icon SVG"
              />
            </div>
            <span className="w-full sm:w-48  block leading-normal text-gray-800 text-md mb-1">
              We use cookies to provide a better user experience.
            </span>
            <Link
              className="text-xs text-gray-500 mr-1 mb-4 hover:text-gray-800"
              href="https://digimoda.site/privacy"
            >
              Privacy Policy
            </Link>
            <div className="flex items-center justify-between pt-4 pb-2">
              {!consent && (
                <div className="w-full flex flex-wrap justify-evenly">
                  <button
                    type="button"
                    className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full/2 transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                    onClick={handleAccept}
                  >
                    Accept
                  </button>
                  <button
                    type="button"
                    className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full/2 transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                    onClick={handleDecline}
                  >
                    Decline
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
