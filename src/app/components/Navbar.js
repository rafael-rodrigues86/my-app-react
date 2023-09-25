import Link from "next/link";
import React from "react";

function Navbar() {
  const navItems = [
    { label: "Home", path: "/" },
    // { label: "Contador", path: "/contador" },
    { label: "About", path: "/sobre" },
    { label: "Posts", path: "/posts" },
    { label: "Users", path: "/users" },
    { label: "Albums", path: "/albums" },
    // { label: "Photos", path: "/photos" },
  ];

  return (
    <nav className="bg-cyan-950 p-8 flex justify-between">
      <p className="text-xl text-orange-200">Logo</p>
      <ul className="flex space-x-4 text-orange-200">
        {navItems.map((item, index) => (
          <li key={index}>
            <Link href={item.path}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
