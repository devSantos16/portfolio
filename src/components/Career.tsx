import logo_altus from "./../assets/logo_altus.png"
import logo_uniritter from "./../assets/logo_uniritter.png"
import CarrerCard from "./CareerCard"

function Carrer(){
    return (
        <div className="p-8 space-y-12">
            <h1 className="text-white text-center text-5xl font-bold">Minha Carreira</h1>
            <div className="flex flex-wrap justify-center items-center gap-8">
                <CarrerCard
                    logo={logo_uniritter}
                    title="Alunx Brilhantes"
                    description="Desenvolvimento de aplicações para automação do processo de aditamento de contratos do FIES, utilizando técnicas de Web Scraping para extração e processamento de dados. Este projeto colaborou com o pagamento integral da minha graduação em Análise e Desenvolvimento de Sistemas."
                    technologies=".NET, C#, Selenium WebDriver, WinForms, Git, GitHub, Trello, LiteDB, SQLite."
                />
                <CarrerCard
                    logo={logo_altus}
                    title="Altus SA"
                    description="Responsável pela manutenção dos softwares de automação da Altus, como ArchiteX e MasterTool IEC XE, além de softwares parceiros como BCSTools. Em julho de 2023, fui promovido a Assistente de Produtos 2, com a missão de unificar os sistemas MasterTool Xtorm e MasterTool IEC XE em uma única plataforma."
                    technologies=".NET, C#, MsBuild, Python, WPF, WinForms, Git com Git Flow e merge request utilizando GitLab, Codesys Automation Platform, LateX, Bugzilla, Bitrix."
                />
            </div>
        </div>
    )
    
}

export default Carrer