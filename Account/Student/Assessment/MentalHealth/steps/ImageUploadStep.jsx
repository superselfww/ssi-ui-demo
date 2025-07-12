import React, { useRef } from 'react';

const ImageUploadStep = ({ value, onChange, onNext }) => {
    const fileInput = useRef();

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (ev) => {
                onChange(ev.target.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="flex flex-col h-full justify-between">
            <div>
                <h2 className="text-xl font-bold mb-4">Upload your profile image</h2>
                <div className="flex flex-col items-center gap-4">
                    {value ? (
                        <img src={value} alt="Profile preview" className="w-32 h-32 rounded-full object-cover border-4 border-primary" />
                    ) : (
                        <div className="w-32 h-32 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 text-4xl border-2 border-dashed border-gray-300">
                            +
                        </div>
                    )}
                    <button
                        className="bg-primary text-white px-4 py-2 rounded-lg font-semibold"
                        onClick={() => fileInput.current.click()}
                    >
                        {value ? 'Change Image' : 'Upload Image'}
                    </button>
                    <input
                        type="file"
                        accept="image/*"
                        ref={fileInput}
                        className="hidden"
                        onChange={handleFileChange}
                    />
                </div>
            </div>
            <button onClick={onNext} className="mt-8 w-full bg-primary text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2">
                Continue <span className="ml-2">→</span>
            </button>
        </div>
    );
};

export default ImageUploadStep;
