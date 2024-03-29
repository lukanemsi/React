import React from "react";
import Link from 'next/link';
import "@/app/components/layout/layout.css"

const Header = ({ navigation }) => {
    return (
      <header>
        <nav className="header-navigation">
          <ul>
            {navigation.map(({ path, name }) => (
              <li key={path}>
                <Link href={path}>
                {name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    );
  }

export default Header;