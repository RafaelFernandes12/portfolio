"use client";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Link from "next/link";
import { useState } from "react";

export default function ContactForm() {

  const [isSent, setIsSent] = useState(true);

  async function handleSubmit(e:any) {
    e.preventDefault();
    setIsSent((prevOpen) => !prevOpen);
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: "9c7aa973-0b26-4620-8068-d4b0d570874a",
        name: e.target.name.value,
        email: e.target.email.value,
        phone: e.target.phone.value,
        message: e.target.message.value,
      }),
    });
    const result = await response.json();
  }

  return (
    <section className="rounded-2xl border-2 border-prettyPink bg-prettyPurple max-sm:border-0 max-sm:bg-transparent" id="contact">
      <div className="flex justify-between max-sm:flex-col max-sm:items-center">
        <div className="w-1/2 mt-6 ml-6 max-sm:w-full max-sm:text-center max-sm:m-0">
          <h2 className="text-white text-3xl my-4 max-sm:text-xl">Vamos conversar</h2>
          <p className="w-3/4 text-lg max-sm:text-base max-sm:w-full">Atualmente estou em busca de novas oportunidades, minha caixa de entrada está sempre aberta. 
            Se você tiver alguma dúvida ou apenas quiser dizer oi, farei o possível para entrar em contato com você!
          </p>
          <div className="flex mt-6 gap-2 max-sm:justify-center">
            <Link href="https://github.com/RafaelFernandes12">
              <GitHubIcon className="w-10 h-10"/>
            </Link>
            <Link href="https://www.linkedin.com/in/rafaelfernandes-7aba69221/">
              <LinkedInIcon className="w-10 h-10"/>
            </Link>
          </div>
        </div>
        {
          isSent  ? 
            <form onSubmit={handleSubmit} 
              className=" flex items-center gap-4 flex-col font-sans my-7 w-1/2 max-sm:w-full">
              <input type="text" name="name" required placeholder="Nome:"
                className="p-3 pl-12 rounded-xl mt-4 text-black bg-gray-200 placeholder:text-gray-400 bg-user
              bg-no-repeat bg-[center_left_1rem] w-3/4 max-sm:w-full"
              />
              <input type="text" name="phone" required placeholder="Nome:"
                className="p-3 pl-12 rounded-xl mt-4 text-black bg-gray-200 placeholder:text-gray-400 bg-phone
              bg-no-repeat bg-[center_left_1rem] w-3/4 max-sm:w-full"
              />
              <input type="email" name="email" required placeholder="Email:" 
                className="p-3 pl-12 rounded-xl mt-4 text-black bg-gray-200 placeholder:text-gray-400 w-3/4 max-sm:w-full
              bg-email bg-no-repeat bg-[center_left_1rem]"
              />
              <textarea name="message" required rows={3} placeholder="Mensagem:"
                className="p-3 rounded-xl mt-4 text-black bg-gray-200 placeholder:text-gray-400 w-3/4 max-sm:w-full"
              />
              <button type="submit"
                className="w-3/4 max-sm:w-full bg-[#311b46] p-4 mt-2 rounded-2xl border-prettyPink border-[1px] hover:bg-prettyPurple"
              >Enviar</button>
            </form> 
            : 
            <div className="w-1/2 h-[434px] flex items-center justify-center max-sm:h-24">
              <p className="">Email enviado com sucesso!</p>
            </div>
        }
      </div>
    </section>
  );
}