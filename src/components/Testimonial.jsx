import mayank from '../images/mayank.jpg'

export default function Testimonial() {
    return (
      <section className="relative isolate overflow-hidden bg-white px-6 py-6 sm:py-8 lg:px-8">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
        <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <h2 className="text-center text-3xl font-semibold">SolarShopSolutions</h2>
          {/* <img className="mx-auto h-12" src="https://tailwindui.com/img/logos/workcation-logo-indigo-600.svg" alt="" /> */}
          <figure className="mt-10">
            <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
              <p>
                “We are a solar products and services company that is committed to providing sustainable and cost-effective solutions to our customers. <br />
 Our team of experts has over 10 years of experience in the solar industry and has helped numerous clients achieve their energy goals. <br />
 Our company specializes in the installation of solar panels for residential and commercial properties. <br />
We offer a wide range of solar products, including solar panels, inverters, and batteries, that are designed to meet the unique needs of our customers. <br />
At our core, we believe that solar energy is the future of sustainable energy. 
We are dedicated to helping our customers reduce their carbon footprint and save money on their energy bills. <br />
 Our team is passionate about what we do, and we are committed to providing the highest level of service to our customers. <br />
 Thank you for considering our company for your solar needs. We look forward to working with you to create a brighter and more sustainable future.

”
              </p>
            </blockquote>
            {/* <figcaption className="mt-10">
              <img
                className="mx-auto h-10 w-10 rounded-full"
                src={mayank}
                alt=""
              />
              <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                <div className="font-semibold text-gray-900">Mayank Puri</div>
                <svg viewBox="0 0 2 2" width={3} height={3} aria-hidden="true" className="fill-gray-900">
                  <circle cx={1} cy={1} r={1} />
                </svg>
                <div className="text-gray-600">CEO of SolarShopSolutions</div>
              </div>
            </figcaption> */}
          </figure>
        </div>
      </section>
    )
  }
  