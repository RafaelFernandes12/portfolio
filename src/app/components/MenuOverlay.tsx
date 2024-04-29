"use client";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import { useState } from "react";

export function MenuOverlay(){
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  return(
    <div className="md:hidden ">
      <button onClick={toggleMenu} className={`${open ? "hidden" : ""}`}>
        <MenuIcon className="rounded"/>
      </button>
      {open && (
        <div className="fixed top-0 left-0 bg-black/80 w-full h-screen">
          <div className="right-10 top-28 w-fit h-fit origin-top fixed bg-white rounded-2xl text-black ">
            <button onClick={toggleMenu} className="absolute right-0 -top-12">
              <CloseIcon className="text-prettyYellow"/>
            </button>
            <p className="text-center bg-[#ebeff8] rounded-t-2xl">Opções</p>
            <ul onClick={toggleMenu} className="flex flex-col pb-6 pt-2 px-2 text-xl">
              <li className="hover:text-prettyPink">
                <Link href='#about'>
                  <span className="font-semibold">01 </span> 
                  Sobre mim
                </Link>
              </li>
              <li className="hover:text-prettyPink">
                <Link href='#projects'>
                  <span className="font-semibold">02 </span> 
                  Projetos
                </Link>
              </li>
              <li className="hover:text-prettyPink">
                <Link href='#contact'>
                  <span className="font-semibold">03 </span> 
                  Contato
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )
      }
    </div>
  );
}