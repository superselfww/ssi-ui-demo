import Spinner from "../animations/Spinner";

const MainButton = ({ isSubmitting,isDisabled=false,onClick,className, children }) => {
    return (
        <button
            type="button"
            className={` w-full py-3 rounded-full ${className} disabled:bg-gray-400 ${isSubmitting ? 'bg-gray-400' : isDisabled ? '' : 'bg-primary'} text-white font-semibold text-base hover:bg-orange-500 transition-colors duration-150`}
            onClick={onClick}
            disabled={isSubmitting || isDisabled}
        >
            {isSubmitting ? <Spinner /> : children}
        </button>
    );
};
export default MainButton;