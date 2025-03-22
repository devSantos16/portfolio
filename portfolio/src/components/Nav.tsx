import PurpleButton from "./sub-components/PurpleButton";

function Nav() {
    return (
        <nav className="flex flex-wrap text-white justify-between items-center py-10 px-20">
            <h1 className="text-lg font-bold">Emanuel dos Santos Paz</h1>
            <div className="flex items-center space-x-6 text-sm">
                <ul className="flex space-x-6">
                    <li>Home</li>
                    <li>Sobre</li>
                    <li>Projetos</li>
                    <li>Contatos</li>
                </ul>
                <PurpleButton>Meu currículo</PurpleButton>
            </div>
        </nav>
    );
}

export default Nav;