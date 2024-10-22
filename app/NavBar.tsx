"use client";

import Link from "next/link"; // Importing the Next.js Link component for client-side navigation
import { usePathname } from "next/navigation";
import React from "react"; // Importing React to create the NavBar component
import { AiFillBug } from "react-icons/ai"; // Importing a bug icon from react-icons to use in the navbar
import classnames from "classnames";

const NavBar = () => {
  const currentPath = usePathname();
  // Defining an array of navigation links, each with a label and a destination href
  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues" },
  ];

  return (
    <nav className="flex space-x-6 border-b mb-5 px-5 h-14 items-center">
      {/* Link to home ("/") with a bug icon as the logo */}
      <Link href="/">
        <AiFillBug />
      </Link>
      <ul className="flex space-x-6">
        {/* Dynamically render each link in the 'links' array */}
        {links.map((link) => (
          <Link
            key={link.href} // Using href as the unique key for each link
            className={classnames({
              "text-zinc-900": link.href === currentPath, // Apply this class if the link is active
              "text-zinc-500": link.href !== currentPath, // Apply this class if the link is not active
              "hover:text-zinc-800 transition-colors": true, // Always apply hover and transition classes
            })}
            href={link.href} // The href determines where the link will navigate to
          >
            {/* Add label dynamically */}
            {link.label} {/* Displaying the label for each link */}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
