import laptop from "@/assets/laptop-bg.png";
import Image from "next/image";
import About from "./components/About";
import Card from "./components/Card";
import ContactForm from "./components/ContactForm";

export default function Home() {

  return (
    <div className="my-24">
      <div className="h-[800px] w-full flex items-center justify-center gap-8">
        <div>
          <p className="text-prettyBlue font-bold text-xl">Olá! Meu nome é Rafael</p>
          <h1 className="font-bold text-7xl">Eu faço websites.</h1>
          <p className="text-2xl mt-7 font-sans font-medium">
        Eu sou um desenvolvedor front-end, Sou um ávido estudante, sempre pronto para aprender coisas novas e disposto a novas experiências
          </p>
          <p className="text-2xl font-sans font-medium">
        Sou técnico em Informatica para Internet pelo IFRN e estou cursando Tecnologia da informação pela UFRN desde 2024.
          </p>
        </div>
        <div className="bg-[url('../assets/stars.gif')] w-full">
          <Image src={laptop} alt='' className="w-[500px] h-auto"/>
        </div>
      </div>
      <div>
        <About />
      </div>
      <div className="my-16">
        <h2 className="font-semibold text-4xl">Projetos</h2>
        <div className="font-playFair mt-10 grid grid-cols-4 gap-8">
          <Card 
            bg="cpsi"
            title="CPSI Web"
            text="O CPSIWeb é um projeto que tem como objetivo organizar os alunos e cursos 
            cadastrados no projeto da terceira idade oferecido pela IFRN."
            textColor="black"
            tech1="NextJs"
            tech2="Firebase"
            link="https://github.com/RafaelFernandes12/terceira_idade"
          />
          <Card 
            bg="lyricsLogo"
            title="LyricsLab"
            text="O LyricsLab é um site onde compositores podem criar as próprias cifras."
            textColor="white"
            tech1="NextJs"
            tech2="NodeJs"
            link="https://github.com/infoweb-projetos/lyrics-front-end"
          />
          <Card 
            bg="joguinho_f"
            title="joguinho-f"
            text="Joguinho_f é um jogo que eu ainda estou desenvolvendo, o objetivo 
            do jogo é simples, alcançar o objetivo sem ser pego inimigo"
            textColor="white"
            tech1="Python"
            tech2="Pygame"
            link="https://github.com/RafaelFernandes12/joguinho-faith"
          />
        </div>
      </div>
      <div>
        <h2 className="font-semibold text-4xl">Contato</h2>
        <ContactForm />
      </div>
    </div>
  );
}
