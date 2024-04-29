import About from "./components/About";
import Card from "./components/Card";
import ContactForm from "./components/ContactForm";
import Hero from "./components/Hero";

export default function Home() {

  return (
    <div className="my-24">
      <Hero />
      <About />
      <section className="my-16" id="projects">
        <h2 className="font-semibold text-4xl">Projetos</h2>
        <div className="font-playFair mt-10 grid grid-cols-4 gap-8 max-md:grid-cols-1 max-md:text-center">
          <Card 
            bg="/cellCPSI.png"
            title="CPSI Web"
            text="O CPSIWeb é um projeto que tem como objetivo organizar os alunos e cursos 
            cadastrados no projeto da terceira idade oferecido pela IFRN."
            gitUrl="https://github.com/RafaelFernandes12/terceira_idade"
            previewUrl="https://terceira-idade.vercel.app/"
          />
          <Card 
            bg="/lyricsLogo.png"
            title="LyricsLab"
            text="O LyricsLab é um site onde compositores podem criar as próprias cifras."
            gitUrl="https://github.com/infoweb-projetos/lyrics-front-end"
            previewUrl="/"
          />
          <Card 
            bg="/joguinho_f.png"
            title="Joguinho-f"
            text="Joguinho_f é um jogo que eu ainda estou desenvolvendo, o objetivo 
            do jogo é simples, alcançar o objetivo sem ser pego inimigo"
            gitUrl="https://github.com/RafaelFernandes12/joguinho-faith"
            previewUrl="/"
          />
        </div>
      </section>
      <div>
        <h2 className="font-semibold text-4xl mb-8">Contato</h2>
        <ContactForm />
      </div>
    </div>
  );
}
