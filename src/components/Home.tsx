import { AppearanceTheme } from '../App';
import profilePhoto from '../assets/profile-photo.jpg';
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

interface HomeProps{
    FadeIn: string
    Theme: AppearanceTheme
}


function Home({ FadeIn, Theme }: HomeProps) {
    return (
        <div className={`flex flex-wrap justify-center items-center gap-20 p-6 ${FadeIn}`}>
            <div className='max-w-2xl space-y-6'>
                <div>
                    <p className={`${Theme.paragraphColor} font-semibold`}>Desenvolvedor de Software | .NET | C# </p>
                    <h1 className={`text-4xl ${Theme.textColor} font-semibold`}>Emanuel dos Santos Paz</h1>
                </div>
                <p className={`${Theme.paragraphColor}`}>Sou formado em Análise e Desenvolvimento de Sistemas pela UniRitter e iniciei minha trajetória em 2019, desenvolvendo software para automação de processos internos na própria instituição. Esse projeto não apenas fortaleceu minhas habilidades técnicas, como também viabilizou minha graduação, uma vez que fui contemplado com o pagamento integral do curso pelas atividades prestadas. 
                    Em 2022, após concluir minha graduação, ingressei na Altus, onde atuo como Assistente de Produtos, sendo responsável pela manutenção e evolução de sistemas robustos de automação para PLCs, incluindo softwares como MasterTool IEC XE, ArchiteX e soluções parceiras como BCSTools.
                    Atualmente, estou ampliando meus conhecimentos por meio de uma pós-graduação em Engenharia de Software na Unisinos. Estou em transição da senioridade Júnior para Pleno, aprimorando minhas habilidades para o mercado de software de alto nível.</p>
                <div className='flex space-x-4'>
                    <a href="https://github.com/devSantos16" target="_blank" rel="noopener noreferrer">
                        <FaGithub className={`${Theme.textColor} text-3xl transition-colors duration-300 hover:text-gray-400`} />
                    </a>
                    <a href="https://www.linkedin.com/in/devsantos16/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className={`${Theme.textColor} text-3xl transition-colors duration-300 hover:text-blue-600`} />
                    </a>
                    <a href="https://www.instagram.com/vulgo_hunkzin/" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className={`${Theme.textColor} text-3xl transition-colors duration-300 hover:text-pink-500`} />
                    </a>
                </div>
            </div>
            <div className='max-w-xs'>
                <img className="shadow rounded" src={profilePhoto} alt="My photo" />
            </div>
        </div>
    )
}


export default Home