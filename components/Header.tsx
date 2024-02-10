'use client'
import React, { useState } from "react";

type Props = {};

const Header = (props: Props) => {

  const [active, setActive] = useState(false);

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      if (window.screenY > 100) {
        setActive(true);
      } else {
        setActive(false);
      }
    });
  }

  return <div>Header</div>;
};

export default Header;
