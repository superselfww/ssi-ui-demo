import React, { useState } from "react";

const PaymentMethods = () => {
    const [step, setStep] = useState("list"); // list, addCard, verifyCard, connectApple, connectGoogle, success
    const [card, setCard] = useState({ number: "", expiry: "", cvc: "", name: "" });
    const [otp, setOtp] = useState("");
    const [cardConnected, setCardConnected] = useState(true);
    const [appleConnected, setAppleConnected] = useState(false);
    const [googleConnected, setGoogleConnected] = useState(true);

    // Dummy card info for display
    const maskedCard = "**** **** **** 1478";

    // Handlers
    const handleCardInput = (e) => {
        const { name, value } = e.target;
        setCard((prev) => ({ ...prev, [name]: value }));
    };
    const handleAddCard = (e) => {
        e.preventDefault();
        setStep("verifyCard");
    };
    const handleVerifyCard = (e) => {
        e.preventDefault();
        setCardConnected(true);
        setStep("success");
    };
    const handleConnectApple = () => {
        setAppleConnected(true);
        setStep("success");
    };
    const handleConnectGoogle = () => {
        setGoogleConnected(true);
        setStep("success");
    };

    // UI
    return (
        <div className="w-full">
            {step === "list" && (
                <div>
                    <div className="w-full mx-auto  rounded mb-3 hidden md:flex">
                        <h2 className="text-lg font-semibold text-gray-700">Payment Methods</h2>
                    </div>
                    <div className="flex items-center justify-between bg-white rounded-xl shadow p-4 mb-2">
                        <div className="flex items-center gap-3">
                            <img src="https://img.icons8.com/color/48/000000/mastercard-logo.png" alt="mc" className="w-8 h-8" />
                            <div>
                                <div className="font-semibold">Card</div>
                                <div className="text-xs text-gray-400">{maskedCard}</div>
                            </div>
                        </div>
                        {cardConnected ? (
                            <span className="text-green-500 font-medium">Connected</span>
                        ) : (
                            <button className="text-[#EE9737] font-semibold" onClick={() => setStep("addCard")}>Add</button>
                        )}
                    </div>
                    <div className="flex justify-end mb-4">
                        <span className="text-gray-500">Add card</span>
                        <button className="ml-2 text-[#EE9737] font-semibold" onClick={() => setStep("addCard")}>+</button>
                    </div>
                    {/* Google Pay */}
                    <div className="flex items-center justify-between bg-white rounded-xl shadow p-4 mb-2">
                        <div className="flex items-center gap-3">
                            <img src="https://img.icons8.com/color/48/000000/google-logo.png" alt="google" className="w-8 h-8" />
                            <div className="font-semibold">Google pay</div>
                        </div>
                        {googleConnected ? (
                            <span className="text-green-500 font-medium">Connected</span>
                        ) : (
                            <button className="bg-[#EE9737] text-white px-4 py-1 rounded font-semibold" onClick={() => setStep("connectGoogle")}>Connect</button>
                        )}
                    </div>
                    {/* Apple Pay */}
                    <div className="flex items-center justify-between bg-white rounded-xl shadow p-4 mb-2">
                        <div className="flex items-center gap-3">
                            <img src="https://img.icons8.com/ios-filled/50/000000/mac-os.png" alt="apple" className="w-8 h-8" />
                            <div className="font-semibold">Apple Pay</div>
                        </div>
                        {appleConnected ? (
                            <span className="text-green-500 font-medium">Connected</span>
                        ) : (
                            <button className="bg-[#EE9737] text-white px-4 py-1 rounded font-semibold" onClick={() => setStep("connectApple")}>Connect</button>
                        )}
                    </div>
                    {/* Add new card button */}
                    {!cardConnected && (
                        <button className="w-full mt-4 py-3 bg-[#EE9737] hover:bg-orange-400 text-white font-semibold rounded-full transition text-lg" onClick={() => setStep("addCard")}>Add New Card</button>
                    )}
                </div>
            )}
            {step === "addCard" && (
                <form className="bg-white" onSubmit={handleAddCard}>
                    <div className="font-bold text-lg mb-2">Add Card</div>
                    <div className="flex items-center gap-2 mb-2">
                        <img src="https://img.icons8.com/color/48/000000/mastercard-logo.png" alt="mc" className="w-8 h-8" />
                        <img src="https://img.icons8.com/color/48/000000/visa.png" alt="visa" className="w-8 h-8" />
                        <img src="https://img.icons8.com/color/48/000000/amex.png" alt="amex" className="w-8 h-8" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Card Number</label>
                        <input type="text" name="number" value={card.number} onChange={handleCardInput} className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm bg-[#f8fafc]" placeholder="1234 5678 9012 3456" required maxLength={19} />
                    </div>
                    <div className="flex gap-2">
                        <div className="flex-1">
                            <label className="block text-sm font-medium mb-1">Expiry</label>
                            <input type="text" name="expiry" value={card.expiry} onChange={handleCardInput} className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm bg-[#f8fafc]" placeholder="MM/YY" required maxLength={5} />
                        </div>
                        <div className="flex-1">
                            <label className="block text-sm font-medium mb-1">CVC</label>
                            <input type="text" name="cvc" value={card.cvc} onChange={handleCardInput} className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm bg-[#f8fafc]" placeholder="123" required maxLength={4} />
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Name on Card</label>
                        <input type="text" name="name" value={card.name} onChange={handleCardInput} className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm bg-[#f8fafc]" placeholder="Cardholder Name" required />
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                        <input type="checkbox" id="saveCard" className="accent-[#EE9737]" />
                        <label htmlFor="saveCard" className="text-sm text-gray-600">Save this card for future payments</label>
                    </div>
                    <button type="submit" className="w-full mt-4 py-3 bg-primary text-white font-semibold rounded-full transition text-lg">Continue</button>
                    <button type="button" className="w-full mt-2 py-2 text-gray-500 font-semibold rounded-full transition text-base" onClick={() => setStep("list")}>Cancel</button>
                </form>
            )}
            {step === "verifyCard" && (
                <form className="bg-white rounded-xl shadow p-6 space-y-4" onSubmit={handleVerifyCard}>
                    <div className="font-bold text-lg mb-2">Verify Card</div>
                    <div className="text-gray-500 text-sm mb-2">Enter the OTP sent to your phone to verify your card.</div>
                    <input type="text" value={otp} onChange={e => setOtp(e.target.value)} className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm bg-[#f8fafc]" placeholder="Enter OTP" required maxLength={6} />
                    <button type="submit" className="w-full mt-4 py-3 bg-[#EE9737] hover:bg-orange-400 text-white font-semibold rounded-full transition text-lg">Verify</button>
                    <button type="button" className="w-full mt-2 py-2 text-gray-500 font-semibold rounded-full transition text-base" onClick={() => setStep("list")}>Cancel</button>
                </form>
            )}
            {step === "connectApple" && (
                <div className="bg-white rounded-xl shadow p-6 space-y-4">
                    <div className="font-bold text-lg mb-2">Connect Apple Pay</div>
                    <div className="text-gray-500 text-sm mb-2">You will be redirected to Apple Pay to complete the connection.</div>
                    <button className="w-full mt-4 py-3 bg-[#EE9737] hover:bg-orange-400 text-white font-semibold rounded-full transition text-lg" onClick={handleConnectApple}>Connect</button>
                    <button type="button" className="w-full mt-2 py-2 text-gray-500 font-semibold rounded-full transition text-base" onClick={() => setStep("list")}>Cancel</button>
                </div>
            )}
            {step === "connectGoogle" && (
                <div className="bg-white rounded-xl shadow p-6 space-y-4">
                    <div className="font-bold text-lg mb-2">Connect Google Pay</div>
                    <div className="text-gray-500 text-sm mb-2">You will be redirected to Google Pay to complete the connection.</div>
                    <button className="w-full mt-4 py-3 bg-[#EE9737] hover:bg-orange-400 text-white font-semibold rounded-full transition text-lg" onClick={handleConnectGoogle}>Connect</button>
                    <button type="button" className="w-full mt-2 py-2 text-gray-500 font-semibold rounded-full transition text-base" onClick={() => setStep("list")}>Cancel</button>
                </div>
            )}
            {step === "success" && (
                <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
                    <div className="text-green-500 text-3xl mb-2">✓</div>
                    <div className="font-bold text-lg mb-2">Success!</div>
                    <div className="text-gray-500 text-sm mb-4">Your payment method has been updated.</div>
                    <button className="w-full py-3 bg-[#EE9737] hover:bg-orange-400 text-white font-semibold rounded-full transition text-lg" onClick={() => setStep("list")}>Back to Payment Methods</button>
                </div>
            )}
        </div>
    );
};

export default PaymentMethods;
