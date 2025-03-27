
import React from 'react';
import { AppearanceTheme } from '../App';

interface CarrerCardProps {
    children?: React.ReactNode,
    logo: string,
    title: string,
    description: string,
    technologies: string
    Theme: AppearanceTheme

}


function CarrerCard({children, logo, title, description, technologies, Theme}: CarrerCardProps) {
    return (
        <div className={`rounded ${Theme.alternativeBackgroundColor} shadow max-w-100 space-y-4 p-6`}>
            <img className="w-[50px]" src={logo} alt={`${logo} image`}/>
            <h1 className={`${Theme.textColor} text-center text-3xl font-bold`}>{title}</h1>
                    <p className={`${Theme.textColor}`}>{description}</p>
                    <p className={`${Theme.textColor}`}> <b>Tecnologias Utilizadas:</b> {technologies}</p>
            {children}
        </div>

    )
}

export default CarrerCard