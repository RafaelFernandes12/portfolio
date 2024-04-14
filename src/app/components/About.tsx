"use client";
import computer from "@/assets/computer.webp";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const skills = ["JavaScript","NextJs","NodeJs","Fastify","Git"];
const education = ["Técnico em Informática para Internet pelo IFRN","Graduação em Tecnologia da Informação pela UFRN"];
const variants = {
  default: { width: 0 },
  active: { width: "calc(100%)" },
};
export default function About(){

  const [option,setOption] = useState("skills");
  function handleList(option:string){
    if(option === "skills") setOption("skills");
    if(option === "education") setOption("education");
  }
  return(
    <section className="h-full w-full flex gap-60 max-md:flex-col max-md:items-center max-md:gap-10 max-lg:gap-10" id="about">
      <Image src={computer} alt='' className="w-[500px] h-[500px] max-md:w-auto max-md:h-auto"/>
      <div>
        <p className="text-4xl max-md:text-2xl">Sobre mim</p>
        <p className="font-medium font-sans text-lg my-4 max-md:text-base">
        Sou um desenvolvedor web full stack apaixonado por criar aplicações web interativas e responsivas. 
        Tenho experiência em trabalhar com JavaScript, React, Node.js, fastify, sqlite, 
        HTML, CSS e Git. Aprendo rápido e estou sempre em busca de expandir meus conhecimentos e habilidades. 
        Trabalho em equipe e estou animado para trabalhar com outras pessoas para criar aplicativos incríveis.
        </p>
        <div className="flex flex-col gap-2 mt-8">

          <div className="flex gap-6 text-xl ">
            <button onClick={() => handleList("skills")}
              className="hover:text-prettyPink"
            >
              Habilidades
              <motion.div
                animate={option === "skills" ? "active" : "default"}
                variants={variants}
                className="h-1 bg-prettyPink mt-2">
              </motion.div>
            </button>

            <button onClick={() => handleList("education")}
              className="hover:text-prettyPink">
              Formação
              <motion.div
                animate={option === "education" ? "active" : "default"}
                variants={variants}
                className="h-1 bg-prettyPink mt-2">
              </motion.div> 
            </button>
          </div>
          <ul className="list-disc m-4">
            {option === "skills" ? 
              skills.map((item,index) => {
                return (
                  <li key={index} className="text-lg">{item}</li>
                );
              }) 
              : 
              education.map((item,index) => {
                return (
                  <li key={index}>{item}</li>
                );
              }) 
            }
          </ul>
        </div>
      </div>
    </section>
  );
}