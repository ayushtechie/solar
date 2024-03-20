import {
  ClockIcon,
  EnvelopeIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import { DevicePhoneMobileIcon } from "@heroicons/react/24/outline";
import indicate from "../images/indicate.png";
import Map from "../components/IndianMap";

const ContactPage = () => {
  return (
    <>
      <div className="sm:flex pt-[3.5vh]">
        <div className="flex-1 flex justify-center">
          
            <div className="group">
              <img src={indicate} alt="" width="60" height="60" className="absolute sm:top-60 sm:left-56 group-hover:visible"/>
              <div className="invisible group-hover:visible absolute sm:top-60 sm:left-72 w-64 bg-white rounded-lg p-4">
                <h2 className="text-lg underline">Delhi</h2>
                <p>1024, opposite om bikaner, Maruti Vihar, Maruti Housing Colony, Sector 28, Gurugram, Sarhol, Haryana 122001</p>
              </div>
              </div>
          
          <Map/>
        </div>
        <div className="flex-1">
          <h1 className="text-center uppercase font-bold sm:text-[2.4vw]">
            Contact Us
          </h1>
          <h3 className="text-xl text-center font-light text-gray-600">
            SolarShopSolutions is the leading solar energy marketplace of <br />
            India helping industries shift to solar power more easily. <br />
            Contact us today to get a solar power plant installed at your site.
          </h3>
          <form className="w-[70%] mt-2 m-auto">
            <input
              className="block w-full mt-2 rounded-lg"
              type="text"
              name="name"
              id="name"
              placeholder="Name"
            />
            <input
              className="block w-full mt-2 rounded-lg"
              type="tel"
              name="phone"
              id="phone"
              placeholder="Phone No"
            />
            <input
              className="block w-full mt-2 rounded-lg"
              type="text"
              name="cname"
              id="cname"
              placeholder="Company"
            />
            <input
              className="block w-full mt-2 rounded-lg"
              type="email"
              name="email"
              id="email"
              placeholder="Email"
            />
            <textarea
              className="block w-full mt-2 rounded-lg"
              placeholder="Comment"
              name="comment"
              id="comment"
              cols="30"
              rows="1"
            ></textarea>
            <button
              className="block mt-2 py-1 rounded-lg m-auto bg-black text-white w-2/6"
              type="submit"
            >
              Get in touch
            </button>
          </form>
        </div>
      </div>
      {/* <div className="bg-[url('https://res.cloudinary.com/dtyhpa19d/image/upload/v1708361078/SolarShopSolutions/industry-factory-area-solar-cells-electric-green-energy-solar-panels-line-view_44353-1405_yca3qe.jpg')] bg-no-repeat bg-center bg-cover flex gap-4 px-32 py-10">
        <div className="flex-auto w-6/12 bg-[#337037ab] p-12 rounded">
          <p className="text-xl text-white">CONTACT US</p>
          <p className="text-3xl text-white">Get in Touch</p>
          <form action="" method="post">
            <div className="flex gap-4 my-2">
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="First Name"
                  className="block rounded-lg w-full"
                />
              </div>
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Last Name"
                  className="block rounded-lg w-full"
                />
              </div>
            </div>
            <div className="flex gap-4 my-2">
              <div className="flex-1">
                <input type="email" name="email" id="email" placeholder="email" className="block rounded-lg w-full"/>
              </div>
              <div className="flex-1">
                <input type="tel" name="telephone" id="telephone" placeholder="Telephone" className="block rounded-lg w-full"/>
              </div>
            </div>
            
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="5"
              className="block rounded-lg w-full"
            ></textarea>
            <button type="submit" className="self-center mt-2 bg-green-700 text-white py-2 px-4 rounded-lg">Submit</button>
          </form>
        </div>
        <div className="flex-1 p-2 bg-[#ffde7ca2] text-[#337037]">
          <h2 className="text-3xl font-semibold">INFO</h2>

          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-4">
              <div className="w-1/6  p-2 rounded-full bg-gradient-to-t from-indigo-400 from-10% via-yellow-500 via-30% to-orange-500 to-90%">
                <MapPinIcon />
              </div>
              <div className="w-5/6">
                <h2 className="text-xl font-semibold">Office Address</h2>
                <p>Sector 28, Gurugram, Sarhol, Haryana 122001</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-1/6 bg-gradient-to-t from-indigo-400 from-10% via-yellow-500 via-30% to-orange-500 to-90% p-2 rounded-full">
                <DevicePhoneMobileIcon />
              </div>
              <div className="w-5/6">
                <h2 className="text-xl font-semibold">Telephone</h2>
                <a href="tel:+918447705400">+918447705400</a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-1/6 p-2 rounded-full bg-gradient-to-t from-indigo-400 from-10% via-yellow-500 via-30% to-orange-500 to-90%">
                <EnvelopeIcon />
              </div>
              <div className="w-5/6">
                <h2 className="text-xl font-semibold">Mail Us</h2>
                <a href="mailto:mayank@solarshopsolutions.in">Support</a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-1/6 p-2 rounded-full bg-gradient-to-t from-indigo-400 from-10% via-yellow-500 via-30% to-orange-500 to-90%">
                <ClockIcon />
              </div>
              <div className="w-5/6">
                <h2 className="text-xl font-semibold">Opening Hours</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14028.440577532183!2d77.0823455!3d28.4762294!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19e512a51995%3A0xd8399df4d2423de8!2ssolar%20shop%20solutions!5e0!3m2!1sen!2sin!4v1708371299775!5m2!1sen!2sin"
          width="340"
          height="220"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe> */}
    </>
  );
};

export default ContactPage;
