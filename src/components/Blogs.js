import React, { useState } from 'react';

const Blogs = () => {
    const [showMore, setShowMore] = useState(false);
    const [blogsToShow, setBlogsToShow] = useState(4); 

    const toggleShowMore = () => {
        setShowMore(!showMore);
        setBlogsToShow(showMore ? 4 : blogsToShow + 4); 
    };

    const blogs = [
        {
            title: "Exceeding Expectations: Tech Titan's Record-Breaking Quarter",
            content: "Tech Innovations Inc. shatters industry forecasts with a stellar quarter, surpassing experts' projections by 20%. Dive into how their strategic investments and cutting-edge technologies propelled them ahead.",
            website: "https://economictimes.indiatimes.com/markets/stocks/earnings/titan-q4-preview-profit-revenue-seen-rising-in-high-double-digits/articleshow/109774829.cms?from=mdr",
        },
        {
            title: "Market Disruption: Startup Disrupts Traditional Retail",
            content: "E-Comm Dynamics redefines retail with a disruptive approach, gaining 30% market share in online sales. Explore their journey from startup to industry game-changer, reshaping consumer expectations and market dynamics.",
            website: "https://www.startus-insights.com/innovators-guide/disrupting-retail-industry-breakdown-startup-driven-innovation/",
        },
        {
            title: "Venture Capital Win: Bold Ventures' 10X ROI",
            content: "Bold Ventures hits it big with a 10X return on investment in a high-growth tech startup. Learn how their savvy investment strategy and deep industry insights paid off handsomely, solidifying their position as a top-tier investor in the tech landscape.",
            website: "https://www.businessofbusiness.com/articles/10-bold-venture-capital-investments-massive-returns-Peter-Thiel-Jim-Goetz-Sequoia/",
        },
        {
            title: "Healthcare Innovation: MedTech Firm's Breakthrough Device Approval",
            content: "MedTech Solutions Inc. achieves FDA approval for groundbreaking health device, setting new standards in patient care. Uncover how their innovation is transforming healthcare, improving outcomes and patient experiences globally.",
            website: "https://www.healthcaredive.com/news/digital-health-funding-q1-2024-pitchbook/720067/",
        },
        {
            title: "Retail Reinvention: FashionTech's Virtual Shopping Success",
            content: "StyleTech Ventures pioneers virtual shopping experiences, doubling online sales and captivating fashion enthusiasts worldwide. Step into the future of retail innovation, where virtual reality transforms how consumers interact with fashion.",
            website: "https://www.voguebusiness.com/consumers/virtual-retail-the-tech-redefining-in-store-sales",
        },
        {
            title: "Global Expansion: FinTech Leader's Asian Market Triumph",
            content: "Finance Fusion expands into Asian markets, doubling its customer base and securing strategic partnerships. Discover their playbook for international success in fintech, navigating regulatory landscapes and cultural nuances adeptly.",
            website: "https://timesofindia.indiatimes.com/blogs/bluesky-thinking/indias-expanding-biz-ed-fuels-international-partnership-demand/",
        },
        {
            title: "Green Energy Revolution: SolarTech Co.'s Mega Project",
            content: "SolarTech Innovations completes largest solar farm in the region, powering 100,000 homes sustainably. Explore their role in driving renewable energy adoption, contributing to a greener future and sustainable development goals.",
            website: "https://www.linkedin.com/pulse/green-energy-revolution-innovations-shaping-future-vg3ge/",
        },
        {
            title: "Automotive Innovation: Electric Vehicles' Sales Surge",
            content: "ElectroDrive Motors accelerates electric vehicle sales, capturing 15% of the global EV market. Learn how their eco-friendly solutions are reshaping the automotive industry, paving the way for a cleaner and more efficient transportation future.",
            website: "https://kadence.com/revving-up-innovation-the-surge-of-electric-vehicles-in-global-markets/",
        },
    ];

    return (
        <div id="blogs" className="bg-gray-100 py-12">
            <section data-aos="zoom-in-down">
                <div className="my-4 py-4">
                    <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">Blogs</h2>
                    
                    <div className='flex justify-center'>
                        <div className='w-24 border-b-4 border-blue-900'></div>
                    </div>
                    <h2 className="mt-4 mx-12 text-center text-xl lg:text-2xl font-semibold text-blue-900">Recent Updates, Success Stories and General News</h2>
                </div>

                <div className="px-12" data-aos="fade-down" data-aos-delay="600">
                    <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-5">
                        {blogs.slice(0, blogsToShow).map((blog, index) => (
                            <div key={index} className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                                <div className="m-2 text-justify text-sm">
                                    <h2 className="font-semibold my-4 text-2xl text-center">{blog.title}</h2>
                                    <p className="text-md font-medium">
                                        {blog.content} <a href={blog.website} className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">Read more</a>
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex justify-center my-8">
                    <button onClick={toggleShowMore} className="bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                        {showMore ? 'Show Less' : 'Show More'}
                    </button>
                </div>
            </section>
        </div>
    );
};

export default Blogs;
