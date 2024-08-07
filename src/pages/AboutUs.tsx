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
        <div className="flex flex-col items-center gap-4 mb-5 mt-7">
          <h1 className="text-3xl font-header text-h1Color">Sobre Nós</h1>
          <p className="text-center text-textBody">Nossa missão é simples: capacitar pessoas cegas e com baixa visão a gerenciar seus medicamentos de maneira independente e segura. A tecnologia pode ser uma ponte para a inclusão, e nosso objetivo é criar soluções que realmente façam a diferença na vida dos usuários.
          <br /> <br />
          A paixão pela inovação e pela acessibilidade impulsiona a equipe da PillBox a continuar evoluindo e aprimorando as soluções, para que possamos sempre oferecer o melhor em termos de tecnologia assistiva.</p>
          <img src={AboutImg} alt="" />
        </div>

        <div className="flex flex-col gap-4 mb-5">
          <h2 className="text-2xl font-header text-h1Color text-center">Nossos valores</h2>
          <div className="mb-5">
            <img src={CheckB} alt="" />
            <h3 className="text-xl text-h1Color font-semibold">Acessibilidade</h3>
            <p className=" text-textBody">Garantir que todos os produtos e serviços sejam totalmente acessíveis.</p>
          </div>
          <div className="mb-5">
            <img src={CheckB} alt="" />
            <h3 className="text-xl text-h1Color font-semibold">Empatia</h3>
            <p className=" text-textBody">Ouvir e entender as necessidades reais dos usuários para oferecer soluções verdadeiramente eficazes.</p>
          </div>
          <div className="mb-5">
            <img src={CheckB} alt="" />
            <h3 className="text-xl text-h1Color font-semibold">Inovação</h3>
            <p className=" text-textBody">Buscar continuamente novas maneiras de melhorar e evoluir as soluções.</p>
          </div>
          <div className="mb-5">
            <img src={CheckB} alt="" />
            <h3 className="text-xl text-h1Color font-semibold">Autonomia</h3>
            <p className=" text-textBody">Promover a independência de nossos usuários em suas rotinas de saúde.</p>
          </div>
          <img src={ValueImg} alt="" className="mb-5"/>
        </div>

        <div className="flex flex-col gap-4 mb-5">
          <h2 className="text-2xl font-header text-h1Color text-center">Nosso time</h2>
          <p className="text-center text-textBody">Com uma equipe dedicada de desenvolvedores, designers e especialistas em saúde, estamos comprometidos em ouvir, entender e atender às necessidades dos usuários. Cada funcionalidade do nosso aplicativo foi desenvolvida com base em feedback real, garantindo que seja intuitiva, acessível e, acima de tudo, útil.</p>
        </div>
        <div className="flex flex-wrap gap-4 mb-7">
          <img src={Mateus} alt="Mateus" />
          <img src={Gustavo} alt="Gustavo" />
          <img src={Caua} alt="Cauã" />
          <img src={Otavio} alt="Otávio" />
        </div>

        <div>
        <h1 className="text-2xl font-header text-white text-center">Fale Conosco</h1>
        <form>
            <div>
                <label htmlFor="name">Nome</label>
                <input type="text" name="Nome" id="name" placeholder="Digite seu nome" required/>
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="Digite seu email" required/>
            </div>
            <div>
                <label htmlFor="feedback">Feedback</label>
                <textarea id="feedback" name="feedback" placeholder="Digite seu feedback" required></textarea>
            </div>
            <div>
                <button type="submit">Enviar</button>
            </div>
        </form>
        </div>

        <Footer/>
    </div>
  )
}


export default AboutUs