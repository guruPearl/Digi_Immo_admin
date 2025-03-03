import React from "react";
import IncomeTrackerChart from "./dashboard/IncomeTrackerChart ";
import Expense from "./dashboard/Expense";
const Dashboard = () => {
    return (
        <>
        {/* first phase */}
            <div className="md:flex flex-row items-center gap-16 mt-16 md:block hidden">
                <div className="flex items-center gap-2 flex-row bg-white w-[467px] p-4">
                    <div>
                        <img src="public/dashboard/sms (1) 1.png" alt="/" className="h-12 bg-gray-200 rounded-full p-2" />
                    </div>
                    <div className="flex flex-row items-center gap-58">
                        <div><h3>SMS</h3>
                            <p className="text-[#038C7C]">sms to members</p></div>
                        <div>
                            <img src="public/dashboard/Arrow 15.png" alt="/" className="h-6" />
                        </div>
                    </div>
                </div>

                <div className="flex items-center gap-2 flex-row bg-white p-4 w-[467px]">
                    <div>
                        <img src="public/dashboard/mail (1) 1.png" alt="/" className="h-12 bg-gray-200 rounded-full p-2" />
                    </div>
                    <div className="flex flex-row items-center gap-32">
                        <div>
                            <h3>Instant Notification</h3>
                            <p className="text-[#038C7C] text-nowrap">Send Instance App Notification</p>
                        </div>
                        <div>
                            <img src="public/dashboard/Arrow 15.png" alt="/" className="h-6" />
                        </div>
                    </div>
                </div>

            </div>


                {/* second phase */}
            <div className="md:flex flex-row items-center gap-16 mt-10 md:block hidden">

                <div className="flex  gap-12 flex-row bg-white  w-[467px] h-[298px] p-4 rounded-lg">

                    <div className="border-r-2 border-gray-300 pr-10">
                        <span><h3 className="text-[#1F87B4] text-2xl border-b-4 border-dotted border-[#1F87B4] ">Units & Users</h3></span>
                        <br />
                        <div className="flex flex-row items-center gap-4">
                            <span className="font-bold ">Total Users </span>
                            <img src="public/dashboard/user 1.png" alt="/" className="h-6" />
                        </div>
                        <br />
                        <span className="font-bold">120</span>
                        <p ><span className="font-bold pr-1">3</span>Unapproved Users</p>
                        <p><span className="font-bold pr-1">20</span> Admins</p>
                        <p><span className="font-bold pr-1">12</span> Never Logged in</p>
                    </div>
                    <div >
                        <div className="flex flex-row items-center gap-4 pt-8">
                            <span>Total Units</span>
                            <img src="public/dashboard/home-icon-silhouette 1.png" alt="/" className="h-6" />
                        </div>

                        <span className="font-bold">260</span>
                    </div>
                </div>

                <div className="bg-white w-[467px] h-[298px] p-4 rounded-lg ">
                    <h3 className="text-[#1F87B4] text-2xl border-b-4 border-dotted border-[#1F87B4] mb-4 inline-block">
                        HelpDesk Tracker
                    </h3>
                    <br />
                    <span >Open Ticket</span>
                    <br />
                    <div className="flex items-center gap-42 flex-row  p-4 pl-12">

                        <div>
                            <img src="public/dashboard/chat 1.png" alt="/" className="h-12 pl-1" />
                            <h2>Personal</h2>
                            <span className="flex justify-center font-bold">210</span>
                        </div>
                        <div>
                            <img src="public/dashboard/chat (1) 1.png" alt="/" className="h-12 pl-4" />
                            <h2>Community</h2>
                            <span className="flex justify-center font-bold">52</span>
                        </div>

                    </div>
                    <button className="bg-blue-300 w-full p-1 rounded-sm text-white" type="button">Lodge New Ticket</button>
                    <br />
                    <button type="button" className="bg-gray-300 w-full mt-2 p-1 rounded-sm text-white ">25 My Ticket</button>
                </div>
            </div>

{/* Charts */}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <IncomeTrackerChart />
                <Expense/>
            </div>

        </>
    );
};

export default Dashboard;
