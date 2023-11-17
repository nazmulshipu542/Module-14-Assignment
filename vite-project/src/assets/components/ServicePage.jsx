import ServiceData from "./ServiceData";

const data = [{
    year: 2023,
    title: 'Facebook',
    duration: '3 years',
    details: 'lorem ipsum, dolor sit amet consectetur adipiscing elit'
},
{
    year: 2022,
    title: 'Google',
    duration: '3 years',
    details: 'lorem ipsum, dolor sit amet consectetur adipiscing elit'
},
{
    year: 2021,
    title: 'YouTube',
    duration: '3 years',
    details: 'lorem ipsum, dolor sit amet consectetur adipiscing elit'
},
]

const ServicePage = () => {
    return (
        <div id='service' className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
            <h1 className="text-4xl font-bold text-center text-[#001b5e]">Service</h1>
            {data.map((item, idx)=>(
                <ServiceData key={idx} year={item.year} title={item.title} duration={item.duration} details={item.details}/>
            ))}
        </div>
    );
};

export default ServicePage;