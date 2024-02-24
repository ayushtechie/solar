const Calculator = () => {
    return (
        <>
            <div className="flex w-10/12 m-auto gap-4">
                <div className="flex-col w-4/12">
                    <h3>Space Type</h3>
                    <div className="">
                        <a href="#" class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Residential</a>
                        <a href="#" class="rounded-md bg-indigo-100 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Commercial</a>
                        <a href="#" class="rounded-md bg-indigo-100 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Industrial</a>
                    </div>
                    <form action="">
                        <label htmlFor="pincode">Pincode*</label>
                        <input type="text" name="pincode" id="pincode" placeholder="Pincode*" className="rounded-lg block w-full" />
                        <label htmlFor="phone">Phone*</label>
                        <input type="tel" name="phone" id="phone" placeholder="Phone No" className="block rounded-lg w-full" />
                        <label htmlFor="sqft">Available Rooftop Space (Sq ft)</label>
                        <input type="number" name="sqft" id="sqft" className="block rounded-lg w-full" />
                        <label htmlFor="tariff">Enter Tariff (Rs/kWh)</label>
                        <input type="number" name="tariff" id="tariff" className="block rounded-lg w-full" />
                        <label htmlFor="consumption">Consumption (kWh/month)</label>
                        <input type="number" name="consumption" id="consumption" className="block rounded-lg w-full" />
                        <label htmlFor="load">Sanctioned Load(kW)*</label>
                        <input type="number" name="load" id="load" className="block rounded-lg w-full" />

                        <input type="submit" value="Recalculate" className="outline" />
                        <input type="submit" value="Submit" className="bg-blue-600 text-white" />
                    </form>
                </div>
                <div className="flex-col w-8/12">
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