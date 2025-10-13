import Select from "react-select";
import { useState } from "react";
import type { StylesConfig } from "react-select";
import avatar1 from "../assets/avatar1.jpg"
import avatar2 from "../assets/avatar2.jpg"

const roleOptions = [
    { value: "Actor", label: "Actor" },
    { value: "Producer", label: "Producer" },
    { value: "Director", label: "Director" },
    { value: "Director of Audiography", label: "Director of Audiography" },
    { value: "Sound Designer", label: "Sound Designer" },
    { value: "Sound Mixer", label: "Sound Mixer" },
    { value: "Music Director", label: "Music Director" },
    { value: "Dubbing Director", label: "Dubbing Director" },

];
const customStyles: StylesConfig<any, true> = {
    control: (base, state) => ({
        ...base,
        backgroundColor: "#262626", // bg-neutral-800
        borderColor: state.isFocused ? "#00FFA3" : "#737373", // focus border
        boxShadow: state.isFocused ? "0 0 0 1px #00FFA3" : "none",
        "&:hover": { borderColor: "#00FFA3" },
        color: "white",
        borderRadius: "0.5rem",
        padding: "2px",
    }),
    menu: (base) => ({
        ...base,
        backgroundColor: "#171717", // darker dropdown background
        color: "white",
        borderRadius: "0.5rem",
    }),
    option: (base, { isFocused, isSelected }) => ({
        ...base,
        backgroundColor: isSelected
            ? "#00FFA3"
            : isFocused
                ? "#262626"
                : "transparent",
        color: isSelected ? "#000000" : "#ffffff",
        cursor: "pointer",
    }),
    multiValue: (base) => ({
        ...base,
        backgroundColor: "gray",
        color: "#000",
    }),
    multiValueLabel: (base) => ({
        ...base,
        color: "#000",
    }),
    multiValueRemove: (base) => ({
        ...base,
        color: "#000",
        ":hover": { backgroundColor: "red", color: "#000" },
    }),
    placeholder: (base) => ({
        ...base,
        color: "#9CA3AF", // text-gray-400
    }),
    singleValue: (base) => ({
        ...base,
        color: "white",
    }),
};


const Personaldetails = () => {
    const [selectedRoles, setSelectedRoles] = useState([]);
    const [image, setImage] = useState<string | null>(null);
    const [selectedAvatar, setSelectedAvatar] = useState<number | null>(null);

    const avatars = [
        avatar1,
        avatar2,
        avatar1,
        avatar2,
        avatar1,
        avatar2,
        avatar1,
        avatar2,
        avatar1,
    ];

    // Handle image upload
    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        if (file.size > 5 * 1024 * 1024) {
            alert("Max size is 5 MB!");
            return;
        }

        const reader = new FileReader();
        reader.onloadend = () => {
            setImage(reader.result as string);
            setSelectedAvatar(null);
        };
        reader.readAsDataURL(file);
    };

    // Handle remove photo
    const handleRemove = () => {
        setImage(null);
        setSelectedAvatar(null);
    };

    // Handle avatar selection
    const handleAvatarSelect = (index: number) => {
        setSelectedAvatar(index);
        setImage(avatars[index]);
    };
    return (
        <>
            <div className="h-screen pl-96 pt-5 bg-neutral-800">
                <div className="bg-black flex-1 text-white h-fit w-fit border-1 border-neutral-700 rounded-xl p-3">
                    <div className="flex justify-between items-center mb-8">
                        <h1 className="text-3xl font-semibold">Complete Your Profile</h1>
                    </div>
                    <div className="grid grid-cols-3 gap-20">
                        <div className="flex flex-col col-span-2 gap-2 ">
                            <div className="grid grid-cols-2 gap-6">
                                {/* Left column */}
                                <div className="flex flex-col gap-6">
                                    <div>
                                        <label className="block mb-2 text-m font-medium">Display Name *</label>
                                        <input
                                            type="text"
                                            name="displayName"
                                            // value={formData.displayName}
                                            // onChange={handleChange}
                                            placeholder="Enter your display name"
                                            className="w-full rounded-lg bg-neutral-800 border border-neutral-500 px-4 py-2 focus:outline-none focus:border-[#00FFA3]"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block mb-2 text-m font-medium">Legal Name *</label>
                                        <input
                                            type="text"
                                            name="legalName"
                                            // value={formData.legalName}
                                            // onChange={handleChange}
                                            placeholder="Enter your legal name"
                                            className="w-full rounded-lg bg-neutral-800 border border-neutral-500 px-4 py-2 focus:outline-none focus:border-[#00FFA3]"
                                        />
                                    </div>
                                    <div>
                                        <label className="block mb-2 text-m font-medium">Role *</label>
                                        <Select
                                            isMulti
                                            name="role"
                                            options={roleOptions}
                                            value={selectedRoles}
                                            onChange={setSelectedRoles}
                                            placeholder="Select roles..."
                                            styles={customStyles}
                                            required
                                        />
                                    </div>
                                </div>

                                {/* Right column */}
                                <div className="flex flex-col gap-6">
                                    <div>
                                        <label className="block mb-2 text-m font-medium">Affiliation</label>
                                        <input
                                            type="text"
                                            name="affiliation"
                                            // value={formData.affiliation}
                                            // onChange={handleChange}
                                            placeholder="Company or organization affiliation"
                                            className="w-full rounded-lg bg-neutral-800 border border-neutral-500 px-4 py-2 focus:outline-none focus:border-[#00FFA3]"
                                        />
                                    </div>
                                    <div>
                                        <label className="block mb-2 text-m font-medium">Industry</label>
                                        <input
                                            type="text"
                                            name="industry"
                                            // value={formData.industry}
                                            // onChange={handleChange}
                                            placeholder="e.g. Mollywood, Hollywood"
                                            className="w-full rounded-lg bg-neutral-800 border border-neutral-500 px-4 py-2 focus:outline-none focus:border-[#00FFA3]"
                                        />
                                    </div>
                                    <div>
                                        <label className="block mb-2 text-m font-medium">Location</label>
                                        <input
                                            type="text"
                                            name="location"
                                            // value={formData.location}
                                            // onChange={handleChange}
                                            placeholder="City, State/Country"
                                            className="w-full rounded-lg bg-neutral-800 border border-neutral-500 px-4 py-2 focus:outline-none focus:border-[#00FFA3]"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Bio */}
                            <div className="mt-6">
                                <label className="block mb-2 text-m font-medium">Bio</label>
                                <textarea
                                    name="bio"
                                    // value={formData.bio}
                                    // onChange={handleChange}
                                    placeholder="Maximum 500 characters"
                                    maxLength={500}
                                    className="w-full h-28 rounded-lg bg-neutral-800 border border-neutral-500 px-4 py-2 focus:outline-none focus:border-[#00FFA3]"
                                />
                            </div><br />
                            {/* Social Media */}

                            <div className="flex justify-between items-center mb-8">
                                <h1 className="text-2xl font-semibold">Social Media Links</h1>
                            </div>

                            <div className="grid grid-cols-2 gap-6">
                                {/* Left column */}
                                <div className="flex flex-col gap-6">
                                    <div>
                                        <label className="block mb-2 text-m font-medium">Facebook</label>
                                        <input
                                            type="text"
                                            name="facebook"
                                            // value={formData.displayName}
                                            // onChange={handleChange}
                                            placeholder="https://facebook.com/username"
                                            className="w-full rounded-lg bg-neutral-800 border border-neutral-500 px-4 py-2 focus:outline-none focus:border-[#00FFA3]"
                                        />
                                    </div>
                                    <div>
                                        <label className="block mb-2 text-m font-medium">Instagram</label>
                                        <input
                                            type="text"
                                            name="twitter"
                                            // value={formData.legalName}
                                            // onChange={handleChange}
                                            placeholder="https://instagram.com/username"
                                            className="w-full rounded-lg bg-neutral-800 border border-neutral-500 px-4 py-2 focus:outline-none focus:border-[#00FFA3]"
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-col gap-6">
                                    <div>
                                        <label className="block mb-2 text-m font-medium">Twitter</label>
                                        <input
                                            type="text"
                                            name="twitter"
                                            // value={formData.affiliation}
                                            // onChange={handleChange}
                                            placeholder="https://twitter.com/username"
                                            className="w-full rounded-lg bg-neutral-800 border border-neutral-500 px-4 py-2 focus:outline-none focus:border-[#00FFA3]"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col col-span-1 gap-6">
                            <div className="p-6 w-full max-w-sm">
                                <div className="flex flex-col gap-4">
                                    <div className="h-28 w-28 rounded-full bg-neutral-800 border border-neutral-500 overflow-hidden flex items-center justify-center">
                                        {image ? (
                                            <img src={image} alt="Profile" className="w-full h-full object-cover" />
                                        ) : (
                                            <div className="text-neutral-500 text-sm text-center">No Image</div>
                                        )}
                                    </div>

                                    <label className="w-30 py-2 bg-neutral-800 text-[#59fbf0] font-medium rounded-lg border border-[#59fbf0] text-center cursor-pointer transition hover:bg-[#59fbf0] hover:text-black">
                                        Upload Image
                                        <input
                                            type="file"
                                            accept="image/png, image/jpeg"
                                            className="hidden"
                                            onChange={handleImageUpload}
                                        />
                                    </label>

                                    <p className="text-m text-neutral-400 mb-6">
                                        Max size 5 MB JPG or PNG Format
                                    </p>
                                </div>

                                <div className="flex space-x-4">
                                    <button
                                        onClick={handleRemove}
                                        className="w-full rounded-lg text-neutral-400 bg-neutral-800 border border-neutral-500 px-4 py-1 hover:bg-neutral-700 transition"
                                    >
                                        Remove Photo
                                    </button>
                                    <label className="w-full rounded-lg text-neutral-400 bg-neutral-800 border border-neutral-500 px-4 py-1 text-center cursor-pointer hover:bg-neutral-700 transition">
                                        Change Photo
                                        <input
                                            type="file"
                                            accept="image/png, image/jpeg"
                                            className="hidden"
                                            onChange={handleImageUpload}
                                        />
                                    </label>
                                </div>

                                <div className="mt-8">
                                    <h2 className="block mb-2 text-white text-xl font-medium">
                                        Or Choose an Avatar
                                    </h2>
                                    <div className="p-4">
                                        <div className="grid grid-cols-3 gap-4 max-w-xs mx-auto">
                                            {avatars.map((avatar, index) => (
                                                <div
                                                    key={index}
                                                    onClick={() => handleAvatarSelect(index)}
                                                    className={`aspect-square flex items-center justify-center rounded-full p-1 cursor-pointer transition ${selectedAvatar === index
                                                            ? "ring-2 ring-neutral-500"
                                                            : "hover:ring-1 hover:ring-neutral-500"
                                                        }`}
                                                >
                                                    <img
                                                        src={avatar}
                                                        alt={`Avatar ${index + 1}`}
                                                        className="w-full h-full object-cover rounded-full"
                                                    />
                                                </div>
                                            ))}
                                        </div>

                                        <div className="flex gap-5 mt-8">
                                            <button className="px-6 py-2 bg-neutral-800 text-[#00e695] font-medium w-35 border border-[#00e695] rounded-lg hover:bg-[#00e695] hover:text-black transition">
                                                Cancel
                                            </button>
                                            <button className="px-6 py-2 bg-[#00FFA3] text-black font-medium w-35 rounded-lg hover:bg-[#00e695] transition">
                                                Save
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="flex justify-end gap-5 mb-8">
                    <button
                        // onClick={handleSave}
                        className="px-6 py-2 bg-neutral-800 text-[#00e695] font-Read w-35 border-1 border-[#00e695] rounded-lg hover:bg-[#00e695] hover:text-black transition"
                    >
                        Cancel
                    </button>
                    <a href="/addmembers">
                        <button
                            // onClick={handleSave}
                            className="px-6 py-2 bg-[#00FFA3] text-black font-Read w-35 rounded-lg hover:bg-[#00e695] transition"
                        >
                            Save
                        </button>
                    </a>
                </div> */}
                </div>
            </div>
        </>
    )
}

export default Personaldetails

// import React, { useState } from "react";

// interface FormData {
//     displayName: string;
//     legalName: string;
//     role: string;
//     association: string;
//     affiliation: string;
//     industry: string;
//     location: string;
//     bio: string;
//     facebook: string;
//     instagram: string;
//     twitter: string;
// }

// const Personaldetails: React.FC = () => {
//     const [formData, setFormData] = useState<FormData>({
//         displayName: "",
//         legalName: "",
//         role: "",
//         association: "",
//         affiliation: "",
//         industry: "",
//         location: "",
//         bio: "",
//         facebook: "",
//         instagram: "",
//         twitter: "",
//     });

//     const [profileImage, setProfileImage] = useState<string | null>(null);

//     // ✅ Handles input changes
//     const handleChange = (
//         e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//     ) => {
//         const { name, value } = e.target;
//         setFormData((prev) => ({
//             ...prev,
//             [name]: value,
//         }));
//     };

//     // ✅ Handles form submission
//     const handleSubmit = (e: React.FormEvent) => {
//         e.preventDefault();
//         console.log("Form Data Submitted:", formData);
//         alert("Profile saved successfully!");
//     };
//     const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         const file = e.target.files?.[0];
//         if (!file) return;

//         // Validate file type
//         if (!["image/jpeg", "image/png"].includes(file.type)) {
//             alert("Only JPG or PNG files are allowed!");
//             return;
//         }

//         // Validate file size (max 5MB)
//         if (file.size > 5 * 1024 * 1024) {
//             alert("File size cannot exceed 5MB");
//             return;
//         }

//         // Preview the image
//         const reader = new FileReader();
//         reader.onloadend = () => {
//             setProfileImage(reader.result as string);
//         };
//         reader.readAsDataURL(file);
//     };

//     const handleRemoveImage = () => setProfileImage(null);

//     return (
//         <>
//             <div className="flex-1 p-5 text-white h-screen ">
//                 <form onSubmit={handleSubmit}>
//                     <div className="flex justify-between items-center mb-8">
//                         <h1 className="text-2xl font-semibold">Complete Your Profile</h1>
//                         <button
//                             type="submit"
//                             className="px-6 py-2 bg-[#00FFA3] text-black font-Read rounded-lg hover:bg-[#00e695] transition"
//                         >
//                             Save
//                         </button>
//                     </div>

//                     <div className="grid grid-cols-3 gap-6">
//                         {/* Left Section */}
//                         <div className="flex flex-col col-span-2 gap-6">
//                             <div className="grid grid-cols-2 gap-6">
//                                 {/* Left column */}
//                                 <div className="flex flex-col gap-6">
//                                     <InputField
//                                         label="Display Name"
//                                         name="displayName"
//                                         value={formData.displayName}
//                                         onChange={handleChange}
//                                         placeholder="Enter your display name"
//                                     />
//                                     <InputField
//                                         label="Legal Name"
//                                         name="legalName"
//                                         value={formData.legalName}
//                                         onChange={handleChange}
//                                         placeholder="Enter your legal name"
//                                     />
//                                     <InputField
//                                         label="Role"
//                                         name="role"
//                                         value={formData.role}
//                                         onChange={handleChange}
//                                         placeholder="e.g. Actor, Producer"
//                                     />
//                                     <InputField
//                                         label="Association"
//                                         name="association"
//                                         value={formData.association}
//                                         onChange={handleChange}
//                                         placeholder="Professional association or union"
//                                     />
//                                 </div>

//                                 {/* Right column */}
//                                 <div className="flex flex-col gap-6">
//                                     <InputField
//                                         label="Affiliation"
//                                         name="affiliation"
//                                         value={formData.affiliation}
//                                         onChange={handleChange}
//                                         placeholder="Company or organization affiliation"
//                                     />
//                                     <InputField
//                                         label="Industry"
//                                         name="industry"
//                                         value={formData.industry}
//                                         onChange={handleChange}
//                                         placeholder="e.g. Mollywood, Hollywood"
//                                     />
//                                     <InputField
//                                         label="Location"
//                                         name="location"
//                                         value={formData.location}
//                                         onChange={handleChange}
//                                         placeholder="City, State/Country"
//                                     />
//                                 </div>
//                             </div>

//                             {/* Bio */}
//                             <div className="mt-6">
//                                 <label className="block mb-2 text-m font-medium">Bio</label>
//                                 <textarea
//                                     name="bio"
//                                     value={formData.bio}
//                                     onChange={handleChange}
//                                     placeholder="Maximum 500 characters"
//                                     maxLength={500}
//                                     className="w-full h-28 rounded-lg bg-neutral-800 border border-neutral-500 px-4 py-2 focus:outline-none focus:border-[#00FFA3]"
//                                 />
//                             </div>

//                             {/* Social Media */}
//                             <div className="flex justify-between items-center mb-8 mt-6">
//                                 <h1 className="text-2xl font-semibold">Social Media Links</h1>
//                             </div>

//                             <div className="grid grid-cols-2 gap-6">
//                                 <div className="flex flex-col gap-6">
//                                     <InputField
//                                         label="Facebook"
//                                         name="facebook"
//                                         value={formData.facebook}
//                                         onChange={handleChange}
//                                         placeholder="https://facebook.com/username"
//                                     />
//                                     <InputField
//                                         label="Instagram"
//                                         name="instagram"
//                                         value={formData.instagram}
//                                         onChange={handleChange}
//                                         placeholder="https://instagram.com/username"
//                                     />
//                                 </div>
//                                 <div className="flex flex-col gap-6">
//                                     <InputField
//                                         label="Twitter"
//                                         name="twitter"
//                                         value={formData.twitter}
//                                         onChange={handleChange}
//                                         placeholder="https://twitter.com/username"
//                                     />
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Right Section */}
//                         <div className="flex flex-col col-span-1 gap-6">
//                             <div className="p-6 w-full max-w-sm">
//                                 <div className="flex flex-col gap-4 items-center">
//                                     <div className="h-28 w-28 rounded-full bg-neutral-800 border border-neutral-500 overflow-hidden">
//                                         {profileImage ? (
//                                             <img
//                                                 src={profileImage}
//                                                 alt="Profile"
//                                                 className="w-full h-full object-cover"
//                                             />
//                                         ) : null}
//                                     </div>
//                                     <input
//                                         type="file"
//                                         className="w-30 py-2 bg-neutral-800 text-[#59fbf0] font-medium rounded-lg border-1 border-[#59fbf0] transition"
//                                         accept="image/png, image/jpeg"
//                                         onChange={handleImageChange}
//                                     />



//                                     {/* <div className="flex gap-2 mt-2">
//                                         {profileImage && (
//                                             <button
//                                                 type="button"
//                                                 onClick={handleRemoveImage}
//                                                 className="py-1 px-3 bg-red-600 text-white rounded-lg"
//                                             >
//                                                 Remove
//                                             </button>
//                                         )}
//                                     </div> */}

//                                     <p className="text-m text-neutral-400 mt-2">
//                                         Max size 5 MB, JPG or PNG Format
//                                     </p>
//                                 </div>

//                                 <div className="flex space-x-4">
//                                     <button
//                                         type="button"
//                                         onClick={handleRemoveImage}
//                                         className="w-full rounded-lg text-neutral-400 bg-neutral-800 border border-neutral-500 px-4 py-1"
//                                     >
//                                         Remove Photo
//                                     </button>
//                                     <button
//                                         type="button"
//                                         className="w-full rounded-lg text-neutral-400 bg-neutral-800 border border-neutral-500 px-4 py-1"
//                                     >
//                                         Change Photo
//                                     </button>
//                                 </div>

//                                 {/* Avatars */}
//                                 <div className="mt-8">
//                                     <h2 className="block mb-2 text-white text-xl font-medium">
//                                         Or Choose an Avatar
//                                     </h2>
//                                     <div className="p-4">
//                                         <div className="grid grid-cols-3 gap-4 max-w-xs mx-auto">
//                                             {Array.from({ length: 9 }).map((_, i) => (
//                                                 <div
//                                                     key={i}
//                                                     className="aspect-square flex items-center justify-center rounded-full bg-neutral-700 p-1 hover:ring-2 hover:ring-[#00FFA3] cursor-pointer transition"
//                                                 >
//                                                     <div className="w-full h-full bg-gray-500 rounded-full"></div>
//                                                 </div>
//                                             ))}
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </form>
//             </div>
//         </>
//     );
// };

// interface InputFieldProps {
//     label: string;
//     name: string;
//     value: string;
//     onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
//     placeholder: string;
// }

// const InputField: React.FC<InputFieldProps> = ({
//     label,
//     name,
//     value,
//     onChange,
//     placeholder,
// }) => (
//     <div>
//         <label className="block mb-2 text-m font-medium">{label}</label>
//         <input
//             type="text"
//             name={name}
//             value={value}
//             onChange={onChange}
//             placeholder={placeholder}
//             className="w-full rounded-lg bg-neutral-800 border border-neutral-500 px-4 py-2 focus:outline-none focus:border-[#00FFA3]"
//         />
//     </div>
// );

// export default Personaldetails;
