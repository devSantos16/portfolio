
import { AppearanceTheme } from "../App";

interface NavProps {
    Theme : AppearanceTheme 
}

function Nav({ Theme } : NavProps) {
    return (
        <nav className="flex flex-wrap gap-5 justify-between items-center p-10">
            <h1 className={`${Theme.textColor} font-bold`}>Portfólio em Desenvolvimento</h1>
            <div className="flex items-center text-sm">
                <button onClick= {() =>  window.location.href = "/curriculum.docx"} className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-400 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
                    <a className={`relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:${Theme.buttonBackgroundColor} rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent`}>
                        Meu currículo
                    </a>
                </button>
            </div>
        </nav>
    );
}

export default Nav;