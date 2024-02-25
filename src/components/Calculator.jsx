import { useState } from "react"

const Calculator = () => {

    const [showDiv, setShowDiv] = useState(false);

    const handleRadioChange = (event) => {
        console.log(event.target.value);
        setShowDiv(event.target.value === 'residential')
    }

    return (
        <>
            <div className="flex w-11/12 m-auto gap-4 mt-4">
                <div className="flex-col px-2 pb-3 w-4/12 shadow-2xl rounded-lg">
                    <form action="" >
                        <fieldset className="divide-y">
                            <legend className="mt-2 leading-8 font-semibold">Space Type</legend>
                            <div className="mt-2 flex justify-evenly">


                                <input type="radio" name="type" id="commercial" value="commercial" className="hidden peer/commercial" onChange={handleRadioChange} />
                                <label htmlFor="commercial" className="px-2 py-1 rounded-lg capitalize font-semibold mt-2 peer-checked/commercial:text-white peer-checked/commercial:bg-green-700 hover:bg-green-600 hover:text-white">Commercial</label>
                                <input type="radio" name="type" id="residential" value="residential" className="hidden peer/residential" onChange={handleRadioChange} />
                                <label htmlFor="residential" className="px-2 py-1 rounded-lg capitalize font-semibold mt-2 peer-checked/residential:text-white peer-checked/residential:bg-green-700 hover:bg-green-600 hover:text-white">residential</label>


                            </div>
                        </fieldset>

                        <div className="px-1 h-96 overflow-y-auto">
                            <label htmlFor="pincode" className="mt-2block text-sm font-medium leading-6 text-gray-600">Pincode*</label>
                            <input type="text" name="pincode" id="pincode" placeholder="201301" className="mt-2 rounded-lg block w-full" />
                            <label htmlFor="phone" className="mt-2 block text-sm font-medium leading-6 text-gray-600">Phone*</label>
                            <input type="tel" name="phone" id="phone" placeholder="9134567890" className="mt-2 block rounded-lg w-full" />
                            <label htmlFor="sqft" className="mt-2 block text-sm font-medium leading-6 text-gray-600">Available Rooftop Space (Sq ft)</label>
                            <input type="number" name="sqft" id="sqft" placeholder="1000" className="mt-2 block rounded-lg w-full" />
                            <label htmlFor="tariff" className="mt-2 block text-sm font-medium leading-6 text-gray-600">Enter Tariff (Rs/kWh)</label>
                            <input type="number" name="tariff" id="tariff" placeholder="10" className="mt-2 block rounded-lg w-full" />
                            <label htmlFor="consumption" className="mt-2 block text-sm font-medium leading-6 text-gray-600">Consumption (kWh/month)</label>
                            <input type="number" name="consumption" id="consumption" placeholder="1500" className="mt-2 block rounded-lg w-full" />
                            <label htmlFor="load" className="mt-2 block text-sm font-medium leading-6 text-gray-600">Sanctioned Load(kW)*</label>
                            <input type="number" name="load" id="load" placeholder="3" className="my-2 block rounded-lg w-full" />
                        </div>
                        <div className="mt-2 flex justify-evenly">
                            <input type="submit" value="Recalculate" className="px-2 py-1 rounded-lg outline outline-offset-0" />
                            <input type="submit" value="Submit" className="px-2 py-1 rounded-lg bg-green-600 text-white" />
                        </div>
                    </form>
                </div>
                <div className="flex-col w-8/12 rounded-lg shadow-2xl">
                    <div className="flex-col bg-[#41ba6d] text-white px-1 py-2 divide-y divide-slate-200" >
                        <div className="flex justify-between w-11/12 m-auto pb-4">
                            <div>
                                <p>0</p>
                                <p className="text-xs">Plant Capicity (kW)</p>
                            </div>
                            <div>
                                <p>0</p>
                                <p className="text-xs">Plant Cost (INR)</p>
                            </div>
                            <div>
                                <p>0</p>
                                <p className="text-xs">Pay Back Period (Years)</p>
                            </div>
                        </div>
                        <div className="flex justify-between w-11/12 m-auto pt-4">
                            <div>
                                <p>0</p>
                                <p className="text-xs">Total Savings (kW)</p>
                            </div>
                            <div>
                                <p>0</p>
                                <p className="text-xs">Area Aquired (Sq ft.)</p>
                            </div>
                            <div>
                                <p>0</p>
                                <p className="text-xs">CO2 Saved (Tonnes)</p>
                            </div>
                        </div>

                    </div>

                    {showDiv && <table className="table-auto w-full mt-10">
                        <thead className="bg-[#4cdb82] text-[#e4fcfc]">
                            <tr>
                                <th className="font-semibold py-2 text-sm">Capicity</th>
                                <th className="font-semibold py-2 text-sm">Center Subsidy</th>
                                <th className="font-semibold py-2 text-sm">State Subsidy</th>
                                <th className="font-semibold py-2 text-sm">Total Benifit</th>
                            </tr>
                        </thead>
                        <tbody className=" bg-[#e4ffeec2] text-center text-gray-400 divide-y">
                            <tr>
                                <td classname="text-xs py-2">1kw</td>
                                <td classname="text-xs py-2">&#8377; 30,000.00</td>
                                <td classname="text-xs py-2">&#8377; 15,000.00</td>
                                <td classname="text-xs py-2">&#8377; 45,000.00</td>
                            </tr>
                            <tr>
                                <td classname="text-xs py-2">2kw</td>
                                <td classname="text-xs py-2">&#8377; 60,000.00</td>
                                <td classname="text-xs py-2">&#8377; 30,000.00</td>
                                <td classname="text-xs py-2">&#8377; 90,000.00</td>
                            </tr>
                            <tr>
                                <td classname="text-xs py-2">3kw</td>
                                <td classname="text-xs py-2">&#8377; 78,000.00</td>
                                <td classname="text-xs py-2">&#8377; 30,000.00</td>
                                <td classname="text-xs py-2">&#8377; 1,08,000.00</td>
                            </tr>
                            <tr>
                                <td classname="text-xs py-2">4kw</td>
                                <td classname="text-xs py-2">&#8377; 78,000.00</td>
                                <td classname="text-xs py-2">&#8377; 30,000.00</td>
                                <td classname="text-xs py-2">&#8377; 1,08,000.00</td>
                            </tr>
                            <tr>
                                <td classname="text-xs py-2">5kw</td>
                                <td classname="text-xs py-2">&#8377; 78,000.00</td>
                                <td classname="text-xs py-2">&#8377; 30,000.00</td>
                                <td classname="text-xs py-2">&#8377; 1,08,000.00</td>
                            </tr>
                            <tr>
                                <td classname="text-xs py-2">6kw</td>
                                <td classname="text-xs py-2">&#8377; 78,000.00</td>
                                <td classname="text-xs py-2">&#8377; 30,000.00</td>
                                <td classname="text-xs py-2">&#8377; 1,08,000.00</td>
                            </tr>

                        </tbody>
                    </table>}



                </div>
            </div>



            {showDiv && <div className="text-white  px-40  py-4 shadow-lg bg-cover bg-center bg-[url('https://res.cloudinary.com/dtyhpa19d/image/upload/v1708361078/SolarShopSolutions/industry-factory-area-solar-cells-electric-green-energy-solar-panels-line-view_44353-1405_yca3qe.jpg')]  ">
                <div className="backdrop-blur-sm">

                    <p className="text-white">The Honorable Prime Minister introduced the Pradhan Mantri Suryoday Yojana on 22 January 2024, commemorating the Ram Mandir opening in Ayodhya. About 1 crore households will benefit from this project by the Suryoday Yojana</p>
                    <p>Reduced power prices for the nation’s poor and middle-class citizens is PM Modi’s motivation for initiating this yojana. The country’s poor and middle-class citizens had more than 1 crore rooftop solar panels installed in the PM Suryodaya Yojana. </p>
                    <p>Under this program, consumers may install rooftop solar and save money or avoid paying power bills. Thus helping the middle class and lower class, PM Modi’s plan becomes independent of the energy department.</p>
                </div>
            </div> }

            

        </>
    )
}

export default Calculator