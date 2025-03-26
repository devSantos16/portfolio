import PurpleButton from "./PurpleButton"


function DownloadPdf(download: string) {
    const link = document.createElement('a')
    link.href = download
    link.download = "curriculum.docx"
    link.click()
}


function Nav() {
    return (
        <nav className="flex flex-wrap gap-5 text-white justify-between items-center p-10">
            <h1 className="font-bold">Portfólio em Desenvolvimento</h1>
            <div className="flex items-center text-sm">
                <PurpleButton OnClick={() => DownloadPdf("/assets/curriculum.docx")}>Meu currículo</PurpleButton>
            </div>
        </nav>
    );
}

export default Nav;