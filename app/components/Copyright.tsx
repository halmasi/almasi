import Link from "next/link";
import React from "react";

export default function Copyright() {
  return (
    <div className="flex flex-col text-xs justify-center">
      <p className="text-center self-center text-gray-200">
        &copy; {new Date().getFullYear()} Hossein Almasi. All rights reserved.
      </p>
      <ul className="text-center self-center text-gray-200 flex flex-row space-x-2">
        <li>
          <Link href="/privacy-policy">Privacy Policy</Link>
        </li>

        <li>
          <Link href="/terms-and-conditions">Terms and Conditions</Link>
        </li>

        {/* <li>
          <Link href="/sitemap">Sitemap</Link>
        </li> */}

        {/* <li>
          <Link href="/contact">Contact Me</Link>
        </li> */}
      </ul>
    </div>
  );
}
