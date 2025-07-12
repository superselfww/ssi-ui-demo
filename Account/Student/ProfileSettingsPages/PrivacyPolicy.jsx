import React from "react";

const PrivacyPolicy = () => (
    <div className="w-full text-gray-800 text-sm leading-relaxed">
        <div className="mb-4">
            <span className="text-xs text-gray-500">Privacy Policy for </span>
            <a href="#" className="text-[#2d6cdf] underline font-medium">Super Self Institute</a>
            <span className="text-xs text-gray-500"> Mobile Application</span>
        </div>
        <div className="mb-4">
            <p>This Privacy Policy describes how <a href="#" className="text-[#2d6cdf] underline font-medium">Super Self Institute</a> collects, uses, shares, and protects the personal information you provide when using our mobile application. By using the GoFactoryPrice.com mobile application, you agree to the collection and use of information in accordance with this policy.</p>
        </div>
        <div className="mb-2 font-semibold">Information Collection and Use</div>
        <div className="mb-4">
            <p>We may collect various types of information for different purposes to provide and improve our services to you:</p>
            <p className="mt-2"><span className="font-semibold">Personal Information:</span> When you register an account, make a purchase, or use our services, we may collect personally identifiable information, such as your name, email address, phone number, shipping address, and payment information.</p>
            <p className="mt-2"><span className="font-semibold">Usage Data:</span> We collect information on how the application is accessed and used ("Usage Data"). This may include information such as your device's Internet Protocol address (IP address), device type, operating system version, unique device identifiers, and other diagnostic data.</p>
            <p className="mt-2"><span className="font-semibold">Cookies and Tracking Technologies:</span> We may use cookies and similar tracking technologies to track activity on our application and store certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.</p>
        </div>
        <div className="mb-2 font-semibold">Use of Information</div>
        <div className="mb-4">
            <p>We use the collected information for various purposes:</p>
            <ul className="list-disc ml-6 mt-2">
                <li>To provide and maintain our service</li>
                <li>To notify you about changes to our service</li>
                {/* Add more items as needed */}
            </ul>
        </div>
        {/* Add more sections as needed */}
    </div>
);

export default PrivacyPolicy;
