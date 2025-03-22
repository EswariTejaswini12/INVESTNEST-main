import React from 'react';
import founder1 from '../images/clients/founder1.png';
import founder2 from '../images/clients/founder2.png';
import founder3 from '../images/clients/founder3.png';
import founder4 from '../images/clients/founder4.png';
import founder5 from '../images/clients/founder5.png';
import founder6 from '../images/clients/founder6.png';

const founderImageStyle = {
    height: '15rem',
    width: '23rem',
    objectFit: 'cover',
    mixBlendMode: 'colorBurn',
    transition: 'opacity 0.3s ease',
};

const Founders = () => {
    const founders = [
        { img: founder1, name: "Nisha Choudhary", company: "PurePetal Beauty", description: "Leading innovation in cosmetics with natural ingredients, crafting luxurious products for radiant and healthy skin care solutions." },
        { img: founder2, name: "Mira Gupta ", company: "MunchBuds", description: "Revolutionizing children's snacking with innovative chips, prioritizing health and flavor for young palates with organic and nutritious options." },
        { img: founder5, name: "Rohan Verma", company: "Travel-Tech Innovations", description: "Infusing cutting-edge technology into travel bags, ensuring seamless journeys with smart, functional designs that enhance convenience and safety." },
        { img: founder3, name: "Siddharth Rao", company: "HydroSmart Solutions", description: "Pioneering advanced technology in water bottles, promoting sustainability and health with every sip through innovative filtration and eco-friendly materials." },
        { img: founder4, name: "Amit & Neha Reddy", company: "UrbanGarden", description: "Advocating urban gardens to enrich city landscapes, fostering green spaces for community and environmental benefits while promoting organic urban farming practices." },
        { img: founder6, name: "Priya Mehra", company: "EarthSoles", description: "Crafting eco-friendly shoes using sustainable materials and stylish designs, stepping towards a greener future in fashion with a commitment to ethical production and comfort." },
    ];

    return (
        <div className="mt-8 bg-gray-100">
            <section data-aos="fade-up">
                <div className="my-4 py-4">
                    <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">Founders</h2>
                    <div className="flex justify-center">
                        <div className="w-24 border-b-4 border-blue-900"></div>
                    </div>
                    <h2 className="mt-4 mx-12 text-center text-xl lg:text-2xl font-semibold text-blue-900">Some of our successful founders</h2>
                </div>

                <div className="p-8 lg:p-16" data-aos="fade-in" data-aos-delay="600">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
                        {founders.map((founder, index) => (
                            <div key={index} className="overflow-hidden flex flex-col items-center p-6 bg-white shadow-lg rounded-lg border border-gray-200 transition-all hover:opacity-70">
                                <img src={founder.img} alt="founder" style={founderImageStyle} />
                                <p className="mt-4 text-center font-bold">{founder.name}</p>
                                <p className="mb-2 text-center text-gray-800" style={{ fontSize: '1.35rem', fontWeight: 'bold' }}>{founder.company}</p>
                                <p className="mb-4 text-center text-gray-600">{founder.description}</p>
                                <a href="/join-us" className="text-blue-600 hover:underline">Know More</a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Founders;
