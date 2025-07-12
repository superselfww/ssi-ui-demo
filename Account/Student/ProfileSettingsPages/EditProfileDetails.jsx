import { useState } from "react";
import Avatar from '../../../../assets/images/avatar.png';
import MainSubmitButton from "../../../../components/buttons/MainSubmitButton";
import PhoneInput from "react-phone-number-input";
const EditProfileDetails = () => {
    const user = {
        name: "Joy Welch",
        email: "Joy49@gmail.com",
        avatar: Avatar,
        phone: "+94 312 12 34 567",
        gender: "Male",
        birthday: "2001-05-10",
        role: "Cadet",
        superPower: "Cadet",
        superPowers: [
            { label: "Cadet", value: 1 },
            { label: "Wisdom Guru", value: 2 },
            { label: "Titan", value: 3 },
        ],
        superPowerLevel: 1,
    };

    const [form, setForm] = useState({
        name: user.name,
        email: user.email,
        phone: user.phone,
        gender: user.gender,
        birthday: user.birthday,
    });

    const [photo, setPhoto] = useState(user.avatar);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };
    const handlePhotoChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            setPhoto(URL.createObjectURL(e.target.files[0]));
        }
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        // Submit logic here
    };


    return (
        <>
            <div className="flex flex-col items-center mb-6">
                <div className="relative">
                    <img
                        src={photo}
                        alt="avatar"
                        className="w-24 h-24 rounded-full object-cover border-4 border-white shadow"
                    />
                    <label
                        htmlFor="photo-upload"
                        className="absolute bottom-0 right-0 bg-[#EE9737] p-2 rounded-full cursor-pointer border-2 border-white"
                    >
                        <svg
                            width="18"
                            height="18"
                            fill="white"
                            viewBox="0 0 24 24"
                        >
                            <path d="M12 5c-3.859 0-7 3.141-7 7s3.141 7 7 7 7-3.141 7-7-3.141-7-7-7zm0-2c5.065 0 9 3.935 9 9s-3.935 9-9 9-9-3.935-9-9 3.935-9 9-9zm-1 5v2h-2v2h2v2h2v-2h2v-2h-2v-2h-2z" />
                        </svg>
                        <input
                            id="photo-upload"
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={handlePhotoChange}
                        />
                    </label>
                </div>
                <span className="text-xs text-gray-400 mt-2">
                    Tap to add photo
                </span>
            </div>
            <form
                className="w-full  flex flex-col gap-4"
                onSubmit={handleSubmit}
            >
                <div>
                    <label className="text-sm text-gray-500 font-semibold mb-1 block">
                        Name
                    </label>
                    <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm bg-[#f8fafc]"
                    />
                </div>
                <div>
                    <label className="text-sm text-gray-500 font-semibold mb-1 block">
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm bg-[#f8fafc]"
                    />
                </div>
                <div>
                    <label className="text-sm text-gray-500 font-semibold mb-1 block">
                        Phone number
                    </label>
                    <PhoneInput
                        international
                        defaultCountry="US"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm bg-[#f8fafc]"
                        inputClassName="!w-full !rounded-lg !border-none !bg-[#f8fafc] !text-sm"
                        placeholder="Enter phone number"
                    />
                </div>
                <div>
                    <label className="text-sm text-gray-500 font-semibold mb-1 block">
                        Gender
                    </label>
                    <select
                        name="gender"
                        value={form.gender}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm bg-[#f8fafc]"
                    >
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                <div>
                    <label className="text-sm text-gray-500 font-semibold mb-1 block">
                        Birthday
                    </label>
                    <div className="relative">
                        <input
                            type="date"
                            name="birthday"
                            value={form.birthday}
                            onChange={handleChange}
                            className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm bg-[#f8fafc]"
                        />
                    </div>
                </div>
                <div className="flex justify-center max-w-xs w-full mx-auto">
                    <MainSubmitButton>
                        Save Changes
                    </MainSubmitButton>
                </div>
            </form>
        </>
    );
};
export default EditProfileDetails;