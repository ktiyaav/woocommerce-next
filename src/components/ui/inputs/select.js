import FeatherIcon from "feather-icons-react";

const SelectInput = ({name, label, placeholder, onchange, icon, value, defaultOption}) => {
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        onchange({[name]:value});
    }
    return (
        <>
        <div>
            <label htmlFor={name} className={`block text-sm text-gray-500 dark:text-gray-300 mt-3 mb-2 ${label ? '' : 'hidden'}`}>{label}</label>
            <div className="relative flex items-center">
                <span className="absolute dark:text-white p-4">
                    <FeatherIcon icon={icon} size="18"/>
                </span>
                <select type="select" defaultValue={`${defaultOption ? defaultOption : 'null'}`} name={name} placeholder={placeholder} onChange={handleChange} className="block w-full py-2.5 text-gray-700 placeholder-gray-400/70 bg-white border border-gray-200 rounded-lg  pl-11 pr-5 rtl:pr-11 rtl:pl-5 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 cursor-pointer">
                    <option disabled value='null'>--select any option--</option>
                    {value.map((option, index) => (
                        typeof option == 'object' ? (
                            <option key={index} value={option.id}>{option.value}</option>
                        ) : (
                            <option key={index} value={option}>{option}</option>
                        )
                    ))}
                </select>
            </div>
        </div>
        </>
    );
}
export default SelectInput;