import AboutImg from "../images/about.gif";
function About() {
  return (
    <div className="sm:flex mx-auto w-11/12">
      <div className="flex-1">
        <h1 className="text-2xl uppercase font-semibold mt-8">About Us</h1>
        <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700" />
        <p className="leading-7 pt-2 text-base">
          We are a solar products and services company that is committed to
          providing sustainable and cost-effective solutions to our customers.
          Our team of experts has over 10 years of experience in the solar
          industry and has helped numerous clients achieve their energy goals.
          Our company specializes in the installation of solar panels for
          residential and commercial properties. <br /> <br /> We offer a wide range of solar
          products, including solar panels, inverters, and batteries, that are
          designed to meet the unique needs of our customers. At our core, we
          believe that solar energy is the future of sustainable energy. We are
          dedicated to helping our customers reduce their carbon footprint and
          save money on their energy bills. <br /> <br /> Our team is passionate about what we
          do, and we are committed to providing the highest level of service to
          our customers. <br /> <br /> Thank you for considering our company for your solar
          needs. We look forward to working with you to create a brighter and
          more sustainable future.{" "}
        </p>
      </div>
      <div className="flex-1">
        <img src={AboutImg} alt="" className="w-full h-full"/>
      </div>
    </div>
  );
}

export default About;
