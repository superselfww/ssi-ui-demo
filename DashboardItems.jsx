import { Link } from "react-router-dom";
import ICONS from "../../assets/Icons";
import DashboardLinks from "../../models/DashboardLinks.json";
import RenderIconUsingId from "./RenderIconUsingId";

const DashboardItems = () => {
    return (
        <>
            {DashboardLinks.map(section => (
                <div key={section.section} className="mb-8">
                    <div className="text-base lg:text-lg font-semibold text-gray-700 mb-4">{section.section}</div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-3 lg:gap-6">
                        {section.items.map(item => (
                            <a
                                key={item.label}
                                href={item.href}
                                className="rounded-2xl bg-white shadow p-4 lg:p-6 flex flex-col items-center justify-center hover:shadow-lg transition group"
                            >
                                <span className={`text-2xl lg:text-3xl mb-1 lg:mb-2 group-hover:scale-110 transition-transform`}>
                                    <img src={RenderIconUsingId(item.icon)} alt={item.label} className="w-16 h-16 lg:w-16 lg:h-16" />
                                </span>
                                <span className="text-xs lg:text-base font-medium text-gray-800 text-center group-hover:text-orange-500 transition-colors">
                                    {item.label}
                                </span>
                            </a>
                        ))}
                    </div>
                </div>
            ))}
        </>
    );
};

export default DashboardItems;