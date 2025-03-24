import PurpleButton from "./PurpleButton"


function DownloadPdf(download: string) {
    const link = document.createElement('a')
    link.href = download
    link.download = "curriculum.docx"
    link.click()
}


function Nav() {
    return (
        <nav className="flex flex-wrap text-white justify-between items-center py-10 px-20">
            <h1 className="text-2xl font-bold">Portfólio em Desenvolvimento</h1>
            <div className="flex items-center space-x-6 text-sm">
                <PurpleButton OnClick={() => DownloadPdf("/assets/curriculum/curriculum.docx")}>Meu currículo</PurpleButton>
            </div>
        </nav>
    );
}

export default Nav;