import PurpleButton from "./PurpleButton"

function Nav() {
    return (
        <nav className="flex flex-wrap gap-5 text-white justify-between items-center p-10">
            <h1 className="font-bold">Portfólio em Desenvolvimento</h1>
            <div className="flex items-center text-sm">
                <PurpleButton OnClick={() => window.location.href = "/curriculum.docx"}>Meu currículo</PurpleButton>
            </div>
        </nav>
    );
}

export default Nav;