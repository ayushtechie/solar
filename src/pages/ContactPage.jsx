import {
  ClockIcon,
  EnvelopeIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import { DevicePhoneMobileIcon } from "@heroicons/react/24/outline";
const ContactPage = () => {
  return (
    <>
      <div className="bg-[url('https://res.cloudinary.com/dtyhpa19d/image/upload/v1708361078/SolarShopSolutions/industry-factory-area-solar-cells-electric-green-energy-solar-panels-line-view_44353-1405_yca3qe.jpg')] bg-no-repeat bg-center bg-cover flex gap-4 px-32 py-10">
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
        <div className="flex-1 p-2 bg-[#ffd75ea3] text-[#6e5b21]">
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

      <div className="flex">
        <form action="" className="pl-48 pr-96 py-24 w-4/5">
          <h2 className="text-4xl font-semibold tracking-wider">Contact Us</h2>
          <p className="text-base px-2 py-1 text-gray-700 tracking-wider mb-8">
            Feel Free to contact us any time. We will get back to you as soon as
            we can!.
          </p>
          <input
            className="text-base px-2 py-1 block mb-2 w-full focus:outline-none focus:border-b-green-900 border-b-2"
            type="text"
            name="name"
            id="name"
            placeholder="Name"
          />
          <input
            className="text-base px-2 py-1 block mb-2 w-full border-b-2 focus:outline-none focus:border-b-green-900"
            type="email"
            name="email"
            id="email"
            placeholder="email"
          />
          <input
            className="text-base px-2 py-1 block mb-2 w-full border-b-2 focus:outline-none focus:border-b-green-900"
            type="tel"
            name=""
            id=""
            placeholder="Phone no"
          />
          <textarea
            className="mb-4 text-base px-2 py-1 block mb-2 w-full border-b-2 focus:outline-none focus:border-b-green-900"
            name="msg"
            id="msg"
            cols="30"
            rows="2"
            placeholder="Message"
          ></textarea>
          <button
            type="submit"
            className="bg-green-600 text-white py-2 px-4 rounded-full"
          >
            Send
          </button>
        </form>
        <div className="bg-gradient-to-r from-green-300 to-orange-100 w-1/5"></div>
      </div>
      <div className=" right-36 bg-black rounded-l-[25px] text-white top-36 h-96 w-96 p-5">
        <h2 className="text-3xl font-semibold tracking wider my-2">Info</h2>
        <a className="block my-2" href="tel:+918447705400">
          <DevicePhoneMobileIcon className="w-8 h-8" />
          +918447705400
        </a>
        <a className="block my-2" href="mailto:">
          <EnvelopeIcon className="w-16 h-16" /> mayank@solarshopsolutions.in
        </a>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14028.440577532183!2d77.0823455!3d28.4762294!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19e512a51995%3A0xd8399df4d2423de8!2ssolar%20shop%20solutions!5e0!3m2!1sen!2sin!4v1708371299775!5m2!1sen!2sin"
          width="340"
          height="220"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
};

export default ContactPage;
