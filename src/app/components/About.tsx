"use client";

import Link from "next/link";

export default function About(){


  return(
    <div>
      <Link href={"/curriculo.pdf"}
        target="_blank"
      >
        cv
      </Link>
    </div>
  );
}