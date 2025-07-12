import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { setPageMeta } from "../utils/setPageMeta";

const MainTitle = ({ title, buttons = [] }) => {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1);
    }

    useEffect(() => {
        setPageMeta({ title });
        window.scrollTo(0, 0);
    }, [title]);
    return (
        <div className="w-full mx-auto mb-0 lg:mb-3">
            <div className="  px-3 py-2 flex justify-between">
                <h1 className="text-lg md:text-2xl font-bold mb-0">{title}</h1>
                <div>
                    {buttons.map((button, index) => (
                        <button
                            key={index}
                            onClick={button.onClick || handleBack}
                            className={`text-sm md:text-base ${button.className} px-4 py-2 rounded-lg transition duration-200`}
                        >
                            {button.icon && <span className="mr-2">{button.icon}</span>}
                            {!button.icon && <span className="mr-2"><FontAwesomeIcon icon={faChevronLeft} /></span>}
                            {button.label}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}
export default MainTitle;