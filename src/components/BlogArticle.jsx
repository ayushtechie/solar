    const articles = [
        {
            title: "Private House with Solar Panels",
            img: "https://res.cloudinary.com/dtyhpa19d/image/upload/v1708361112/SolarShopSolutions/aerial-view-private-house-with-solar-panels-roof_181624-14677_tbrjcn.jpg",
            category: "Residential",
            desc: "Many homeowners are embracing solar energy by installing solar panels on their roofs. Not only does this reduce their reliance on traditional energy sources, but it also helps lower electricity bills and minimize their carbon footprint. With advancements in technology and government incentives, solar panel installation has become more accessible to homeowners, making it an attractive option for those seeking sustainable living solutions."
        },
        {
            title: "Industry Factory Area with Solar Cells",
            img: "https://res.cloudinary.com/dtyhpa19d/image/upload/v1708361078/SolarShopSolutions/industry-factory-area-solar-cells-electric-green-energy-solar-panels-line-view_44353-1405_yca3qe.jpg",
            category: "Industrial",
            desc: "Industrial facilities are increasingly turning to solar energy to power their operations. By covering factory rooftops and unused land with solar panels, these facilities can generate clean electricity to meet their energy needs. This not only reduces their dependence on fossil fuels but also demonstrates their commitment to environmental sustainability. With the integration of solar cells, industrial areas can transform into hubs of green energy production, contributing to a cleaner and greener future."
        },
        {
            title: "Solar Panel Installation Guide for Beginners",
            img: "https://res.cloudinary.com/dtyhpa19d/image/upload/v1708361002/SolarShopSolutions/man-worker-firld-by-solar-panels_1303-15597_q1lhtd.jpg",
            category: "Solar Panel Installation",
            desc: "New to solar energy? Get started with our comprehensive guide to installing solar panels for beginners. Learn about the process, equipment needed, and steps to take for a successful solar panel installation."
        },
        {
            title: "Maximizing Solar Panel Efficiency: Tips and Tricks",
            img: "https://res.cloudinary.com/dtyhpa19d/image/upload/v1708361055/SolarShopSolutions/new-family-homes-with-solar-panels_252025-623_mp5atr.jpg",    
            category: "Solar Panel Efficiency",
            desc: "Learn how to maximize the efficiency of your solar panels and optimize energy production. Discover tips and tricks for cleaning, maintenance, and placement to ensure you get the most out of your solar power system."
        },
    ]

    const BlogArticle = () => {
        return (
            <div>
            {articles.map((article, index) => (

                <article className="w-3/4 px-12 py-4">
                <a href="#">
                    <img src={article.img} alt="solar panels used renewable energy field" className="w-full h-56 mb-4" />
                </a>
                <h2 className="pb-1 text-xl font-bold"><a href="">{article.title}</a></h2>
                <p className="mb-2 text-base font-semibold">Categories: <a href="" className="text-blue-700">{article.category}</a></p>
                <p className="text-base text-gray-600 mb-4">{article.desc}</p>
                <a href="" className="p-3 bg-green-600 text-white hover:bg:green-700 rounded-full">READ MORE</a>
            </article>
            ))}
            </div>
        )
    }


    export default BlogArticle