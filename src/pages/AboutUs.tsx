
import Footer from "@/components/Footer";
import Header from "@/components/Header";

import AboutImg from '/about-us.svg'
import ValueImg from '/value.svg'
import CheckB from '/checkbox.svg'

import Caua from '/CauaImg.svg'
import Otavio from '/OtavioImg.svg'
import Gustavo from '/GustavoImg.svg'
import Mateus from '/MateusImg.svg'

function AboutUs() {
  return (
    <div>
        <Header/>
        <section className="flex flex-col items-center">
        <div className="flex flex-col items-center gap-4 mb-12 mt-7 md:mb-40">
          <div className="md:w-[900px] items-center flex flex-col ">
          <h1 className="text-3xl font-header text-h1Color md:text-6xl md:mb-8">Sobre nós</h1>
          <p className="text-center text-textBody md:text-justify md:mb-7">Nossa missão é simples: capacitar pessoas cegas e com baixa visão a gerenciar seus medicamentos de maneira independente e segura. A tecnologia pode ser uma ponte para a inclusão, e nosso objetivo é criar soluções que realmente façam a diferença na vida dos usuários.
          <br /> <br />
          A paixão pela inovação e pela acessibilidade impulsiona a equipe da PillBox a continuar evoluindo e aprimorando as soluções, para que possamos sempre oferecer o melhor em termos de tecnologia assistiva.</p>
          </div>
          <img src={AboutImg} alt="" className="md:w-[820px]"/>
        </div>

        <div className="flex flex-col md:flex-row md:w-[1150px] md:h-[570px] md:justify-center md:items-center md:mb-24">
          <div className="flex flex-col gap-4 mb-5">
          <h2 className="text-2xl font-header text-h1Color text-center md:text-6xl md:mb-10">Nossos valores</h2>
          <div className="mb-5 flex gap-4">
            <img src={CheckB} alt="" />
            <div>
              <h3 className="text-xl text-h1Color font-semibold">Acessibilidade</h3>
              <p className=" text-textBody">Garantir que todos os produtos e serviços sejam totalmente acessíveis.</p>
            </div>
          </div>
          <div className="mb-5 flex gap-4">
            <img src={CheckB} alt="" />
            <div>
              <h3 className="text-xl text-h1Color font-semibold">Empatia</h3>
              <p className=" text-textBody">Ouvir e entender as necessidades reais dos usuários para oferecer soluções verdadeiramente eficazes.</p>
            </div>
          </div>
          <div className="mb-5 flex gap-4">
            <img src={CheckB} alt="" />
            <div>
            <h3 className="text-xl text-h1Color font-semibold">Inovação</h3>
            <p className=" text-textBody">Buscar continuamente novas maneiras de melhorar e evoluir as soluções.</p>
            </div>
          </div>
          <div className="mb-5 flex gap-4">
            <img src={CheckB} alt="" />
            <div>
            <h3 className="text-xl text-h1Color font-semibold">Autonomia</h3>
            <p className=" text-textBody">Promover a independência de nossos usuários em suas rotinas de saúde.</p>
            </div>
          </div>
          </div>
          <img src={ValueImg} alt="" className="mb-5 md:w-[480px]"/>
        </div>

        <div className="flex flex-col gap-4 mb-5 md:mb-10">
          <h2 className="text-2xl font-header text-h1Color text-center md:text-6xl">Nosso time</h2>
          <div className="md:w-[890px]">
          <p className="text-center text-textBody md:text-justify">Com uma equipe dedicada de desenvolvedores, designers e especialistas em saúde, estamos comprometidos em ouvir, entender e atender às necessidades dos usuários. Cada funcionalidade do nosso aplicativo foi desenvolvida com base em feedback real, garantindo que seja intuitiva, acessível e, acima de tudo, útil.</p>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-2 mb-12 md:mb-24 md:gap-6">
          <img src={Mateus} alt="Mateus" className="md:w-[200px]"/>
          <img src={Gustavo} alt="Gustavo" className="md:w-[200px]"/>
          <img src={Caua} alt="Cauã" className="md:w-[200px]"/>
          <img src={Otavio} alt="Otávio" className="md:w-[200px]"/>
        </div>

        <section className="flex justify-center">
        <div className="bg-gradient-to-b from-blue-500 to-cyan-500 pt-8 pb-10 px-8 mb-28 md:bg-gradient-to-br md:from-gradienteLeft md:via-linearColor1 md:via-80% md:to-linearColor1 md:flex md:flex-col md:items-center md:justify-center md:w-[1150px] md:h-[680px]">
        <h1 className="text-2xl font-header text-white text-center mb-2 md:text-6xl md:mb-8 md:mt-5">Fale conosco</h1>
        <form>
            <div className="flex flex-col mb-5 md:w-[650px] md:flex md:flex-col md:justify-center">
                <label htmlFor="name" className="text-white">Nome</label>
                <input className="rounded-md placeholder:text-h1Color py-1.5 pl-0.5 md:px-1.5" type="text" name="Nome" id="name" placeholder="Digite seu nome" required/>
            </div>
            <div className="flex flex-col mb-5 md:flex md:flex-col md:justify-center">
                <label htmlFor="email" className="text-white">Email</label>
                <input className="rounded-md placeholder:text-h1Color py-1.5 pl-0.5 md:mb-7 md:px-1.5" type="email" id="email" name="email" placeholder="Digite seu email" required/>
            </div>
            <div className="flex flex-col mb-10 md:flex md:flex-col md:justify-center">
                <label htmlFor="feedback" className="text-white">Feedback</label>
                <textarea className="rounded-md placeholder:text-h1Color pl-0.5 pt-1.5 pb-28 resize-none md:px-1.5" id="feedback" name="feedback" placeholder="Digite seu feedback" required></textarea>
            </div>
            <div className="flex justify-center text-center">
                <button type="submit" className="py-3 px-24 bg-linerColor2 rounded-md text-white">Enviar</button>
            </div>
        </form>
        </div>
        </section>
        </section>

        <Footer/>
    </div>
  )
}


export default AboutUs