

const ServiceData = ({year, title, duration, details}) => {
    return (
        <ol className="flex flex-col md:flex-row relative border-l border-stone-200">
        <li className="mb-10 ml-4">
        <div className="absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left border-white">
        <p className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm">
        <span>{year}</span>
        <span>{title}</span>
        <span>{duration}</span>    
        </p>
        <p>{details}</p>    
        </div>    
        </li>    
        </ol>
    );
};

export default ServiceData;