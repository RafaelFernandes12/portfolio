"use client";
import hero from "@/assets/hero.png";
import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";

export default function Hero(){
  return(
    <div className="h-full w-full mb-36 max-sm:mb-10">
      <div className="flex items-center justify-between max-sm:flex-col max-sm:justify-center">
        <div className="flex flex-col justify-around h-[360px]">
          <div>
            <p className="text-5xl max-md:text-2xl">Eu sou</p>
            <p className="font-bold text-5xl text-transparent bg-gradient-to-r from-[#5F5DB8] to-prettyPink bg-clip-text max-md:text-2xl">
              <TypeAnimation
                sequence={[
                  "Rafael",
                  1000,
                  "Desenvolvedor Web",
                  1000,
                  "Estudante",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                style={{ fontSize: "2em", display: "inline-block" }}
                repeat={Infinity}
              />
            </p>
            <p className="text-2xl mt-7 font-sans font-medium max-md:text-base">
           Eu sou um desenvolvedor Web ávido por aprender coisas novas e sempre pronto para um desafio
            </p>
          </div>
          <div className="flex gap-2 max-sm:flex-col max-sm:w-3/4 max-sm:items-center max-sm:m-auto">
            <Link href="#contact"
              className="bg-prettyPink rounded-full py-3 px-6 max-sm:w-full h-full font-regular text-white font-sans border-2 border-prettyPink "
            >
              Me contrate
            </Link>
            <Link href={"/curriculo.pdf"} target="_blank"
              className="border-2 border-prettyPink rounded-full py-3 max-sm:w-full h-full px-6 font-regular text-white font-sans hover:bg-white/10"
            >
              Curriculo
            </Link>
          </div>
        </div>
        <Image src={hero} alt='' className="w-1/3 h-auto max-sm:w-1/2"/>
      </div>
    </div>
  );
}