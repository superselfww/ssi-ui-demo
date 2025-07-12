import React from "react";

const billingHistory = [
    {
        month: "July 2024",
        dateRange: "05/04/2024 - 04/05/2024",
        method: "Google pay",
        methodIcon: "https://img.icons8.com/color/48/000000/google-logo.png",
        amount: "$9.99",
    },
    {
        month: "July 2024",
        dateRange: "05/04/2024 - 04/05/2024",
        method: "Google pay",
        methodIcon: "https://img.icons8.com/color/48/000000/google-logo.png",
        amount: "$9.99",
    },
    {
        month: "July 2024",
        dateRange: "05/04/2024 - 04/05/2024",
        method: "Google pay",
        methodIcon: "https://img.icons8.com/color/48/000000/google-logo.png",
        amount: "$9.99",
    },
    {
        month: "July 2024",
        dateRange: "05/04/2024 - 04/05/2024",
        method: "Google pay",
        methodIcon: "https://img.icons8.com/color/48/000000/google-logo.png",
        amount: "$9.99",
    },
];

const SubscriptionSection = () => (
    <>
        <div className="w-full mx-auto  rounded mb-3 hidden md:flex">
            <h2 className="text-lg font-semibold text-gray-700">Subscription</h2>
        </div>
        <div className="w-full ">
            <div className="flex items-center justify-between bg-[#f8fafc] rounded-2xl p-4 mb-4">
                <div>
                    <div className="text-xs text-gray-500">Next Month Billing</div>
                    <div className="text-xl font-bold">$9.99</div>
                </div>
                <div>
                    <div className="text-xs text-gray-500">Next Billing Date</div>
                    <div className="text-xl font-bold">05/06/2024</div>
                </div>
            </div>
            <div className="text-sm font-semibold text-gray-700 mb-2">History</div>
            <div className="space-y-3">
                {billingHistory.map((item, idx) => (
                    <div key={idx} className="bg-[#f8fafc] rounded-2xl p-4 flex flex-col mb-1">
                        <div className="font-semibold text-base mb-1">{item.month}</div>
                        <div className="text-xs text-gray-500 mb-2">{item.dateRange}</div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <img src={item.methodIcon} alt={item.method} className="w-6 h-6" />
                                <span className="text-sm font-medium">{item.method}</span>
                            </div>
                            <span className="text-lg font-bold">{item.amount}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </>
);

export default SubscriptionSection;
