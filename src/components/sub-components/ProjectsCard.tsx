interface ProjectCardProps {
    title: string,
    image: string,
    link: string
}


function ProjectCard({title, image, link} : ProjectCardProps) {
    return (
        <div 
            onClick={() => window.open(link, "_blank")} 
            className="relative rounded-lg overflow-hidden shadow-lg w-100 h-40 cursor-pointer">
                <div className="absolute inset-0 bg-black opacity-50 z-0" />
                <img className="w-full h-full object-cover" src={image} alt={image} />
                <div className="absolute inset-0 flex items-end justify-end p-6 text-white font-bold text-xl ">
                    {title}
                </div>
        </div>
    )
}

export default ProjectCard