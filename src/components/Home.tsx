import profilePhoto from '../assets/profile-photo.jpg';


function Home() {
    return (
        <div className="flex justify-center items-center gap-44 p-6">
            <div className='max-w-2xl  space-y-6'>
                <div>
                    <p className='text-gray-400 font-semibold'>Desenvolvedor de Software | .NET | C# </p>
                    <h1 className='text-4xl text-white font-semibold'>Emanuel dos Santos Paz</h1>
                </div>
                <p className='text-gray-400'>Sou formado em Análise e Desenvolvimento de Sistemas pela UniRitter e iniciei minha trajetória em 2019, desenvolvendo software para automação de processos internos na própria instituição. Esse projeto não apenas fortaleceu minhas habilidades técnicas, como também viabilizou minha graduação, uma vez que fui contemplado com o pagamento integral do curso pelas atividades prestadas. 
                    Em 2022, após concluir minha graduação, ingressei na Altus, onde atuo como Assistente de Produtos, sendo responsável pela manutenção e evolução de sistemas robustos de automação para PLCs, incluindo softwares como MasterTool IEC XE, ArchiteX e soluções parceiras como BCSTools.
                    Atualmente, estou ampliando meus conhecimentos por meio de uma pós-graduação em Engenharia de Software na Unisinos. Estou em transição da senioridade Júnior para Pleno, aprimorando minhas habilidades para o mercado de software de alto nível..</p>
            </div>
            <div className='max-w-xs'>
                <img className="shadow rounded" src={profilePhoto} alt="My photo" />
            </div>
        </div>
    )
}


export default Home