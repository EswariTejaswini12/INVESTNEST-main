import React from 'react';
import { Link } from 'react-router-dom';
import grpinvestor1 from '../images/clients/grpinvestor1.png';
import grpinvestor3 from '../images/clients/grpinvestor3.png';
import grpinvestor5 from '../images/clients/grpinvestor5.png';
import investor2 from '../images/clients/investor2.png';
import investor4 from '../images/clients/investor4.png';
import investor6 from '../images/clients/investor6.png';

const investorImageStyle = {
    height: '15rem',
    width: '23rem',
    objectFit: 'cover',
    mixBlendMode: 'colorBurn',
    transition: 'opacity 0.3s ease',
};

const Investors = () => {
    return (
        <div className="mt-8 bg-gray-100">
            <section data-aos="fade-up">
                <div className="my-4 py-4">
                    <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">Investors</h2>
                    <div className="flex justify-center">
                        <div className="w-24 border-b-4 border-blue-900"></div>
                    </div>
                    <h2 className="mt-4 mx-12 text-center text-xl lg:text-2xl font-semibold text-blue-900">Some of our investors</h2>
                </div>

                <div className="p-16" data-aos="fade-in" data-aos-delay="600">
                    <div className="grid sm:grid-cols-3 lg:grid-cols-3 gap-8">
                        {[
                            { img: grpinvestor1, name: "Quantum Capital Partners", experience: "10 years" },
                            { img: investor2, name: "Aarav Kapoor Ventures", experience: "8 years" },
                            { img: grpinvestor3, name: "Apex Venture Group", experience: "12 years" },
                            { img: investor4, name: "Meera Patel Associates", experience: "7 years" },
                            { img: grpinvestor5, name: "Horizon Equity Collective", experience: "15 years" },
                            { img: investor6, name: "Rohan Iyer Capital", experience: "5 years" },
                        ].map((investor, index) => (
                            <div key={index} className="overflow-hidden flex flex-col items-center p-6 bg-white shadow-lg rounded-lg border border-gray-200 transition-all hover:opacity-70">
                                <img src={investor.img} alt="investor" style={investorImageStyle} />
                                <p className="mt-2 text-center font-bold">{investor.name}</p>
                                <p className="text-center text-gray-600">{investor.experience} experience</p>
                                <Link to="/join-us" className="mt-2 text-blue-500 hover:underline">Know More</Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Investors;
