import Spinner from "../animations/Spinner";

const MainSubmitButton = ({ isSubmitting,isDisabled=false,className, children }) => {
    return (
        <button
            type="submit"
            className={`mt-6 w-full py-3 rounded-full ${className} disabled:bg-gray-400 ${isSubmitting ? 'bg-gray-400' : isDisabled ? '' : 'bg-primary'} text-white font-semibold text-base hover:bg-orange-500 transition-colors duration-150`}
            disabled={isSubmitting || isDisabled}
        >
            {isSubmitting ? <Spinner /> : children}
        </button>
    );
};
export default MainSubmitButton;