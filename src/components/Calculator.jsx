const Calculator = () => {
    return (
        <>
            <div className="flex w-10/12 m-auto gap-4 mt-4">
                <div className="flex-col px-2 pb-3 w-4/12 shadow-2xl rounded-lg">
                    <form action="" >
                        <fieldset className="divide-y">
                            <legend className="mt-2 leading-8 font-semibold">Space Type</legend>
                            <div className="mt-2 flex justify-between">


                                <input type="radio" name="type" id="commercial" value="commercial" className="hidden peer/commercial" />
                                <label htmlFor="commercial" className="px-2 py-1 rounded-lg capitalize font-semibold mt-2 peer-checked/commercial:text-white peer-checked/commercial:bg-green-700 hover:bg-green-600 hover:text-white">Commercial</label>
                                <input type="radio" name="type" id="residential" value="residential" className="hidden peer/residential" />
                                <label htmlFor="residential" className="px-2 py-1 rounded-lg capitalize font-semibold mt-2 peer-checked/residential:text-white peer-checked/residential:bg-green-700 hover:bg-green-600 hover:text-white">residential</label>
                                <input type="radio" name="type" id="industrial" value="industrial" className="hidden peer/industrial" />
                                <label htmlFor="industrial" className="px-2 py-1 rounded-lg capitalize font-semibold mt-2 peer-checked/industrial:text-white peer-checked/industrial:bg-green-700 hover:bg-green-600 hover:text-white">industrial</label>

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
                    <table className="table-auto w-full">
                        <thead>
                            <tr>
                                <th>Year</th>
                                <th>Tariff</th>
                                <th>Generation</th>
                                <th>Savings</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Calculator