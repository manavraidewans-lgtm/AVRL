import React, { useRef, useState } from "react"
import Default from "../../Assets/Logo_1.png"

const First = () => {

    const [edit, setEdit] = useState(false)
    const [saving, setSaving] = useState(false)
    const [updated, setUpdated] = useState(false)

    const [name, setName] = useState("Manav")
    const [email, setEmail] = useState("manav@everop.com")
    const [location, setLocation] = useState("Dehradun, India")
    const [tagline, setTagline] = useState("Adventure Awaits")
    const [photo, setPhoto] = useState(Default)

    const [newName, setNewName] = useState(name)
    const [newEmail, setNewEmail] = useState(email)
    const [newLocation, setNewLocation] = useState(location)
    const [newTagline, setNewTagline] = useState(tagline)
    const [newPhoto, setNewPhoto] = useState(photo)

    const file = useRef()

    const openEdit = () => {
        setNewName(name)
        setNewEmail(email)
        setNewLocation(location)
        setNewTagline(tagline)
        setNewPhoto(photo)
        setEdit(true)
    }

    const changePhoto = (e) => {
        if (e.target.files[0]) {
            setNewPhoto(URL.createObjectURL(e.target.files[0]))
        }
    }

    const save = () => {
        setSaving(true)

        setTimeout(() => {

            setName(newName)
            setEmail(newEmail)
            setLocation(newLocation)
            setTagline(newTagline)
            setPhoto(newPhoto)

            setSaving(false)
            setUpdated(true)

            setTimeout(() => {
                setUpdated(false)
                setEdit(false)
            }, 1000)

        }, 2000)
    }

    return (
        <>
            <div className="min-h-[30vh] w-full flex items-center justify-center p-3 sm:p-4 gap-4 md:h-[35vh] lg:h-[45vh]">

                {/* Profile */}
                <div className="h-[90%] w-full md:w-[48%] lg:w-[45%] flex items-center justify-center gap-4 sm:gap-6">

                    <img
                        src={photo}
                        alt="Profile"
                        className="w-24 sm:w-28 md:w-32 lg:w-36 aspect-square rounded-full object-cover"
                    />

                    <div className="flex flex-col gap-1 sm:gap-2">

                        <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#153b2f]">
                            Hello, {name}
                        </h1>

                        <p className="text-xs sm:text-sm text-gray-500">
                            {email}
                        </p>

                        <p className="flex items-center gap-1 text-xs sm:text-sm text-gray-500">
                            <i className="ri-map-pin-line"></i>
                            {location}
                        </p>

                        <p className="w-fit px-2 sm:px-3 py-1 rounded-full bg-green-100 text-xs text-[#153b2f]">
                            🌿 {tagline}
                        </p>

                    </div>

                </div>


                {/* Edit */}
                <div className="hidden md:flex h-[90%] w-[48%] lg:w-[45%] items-center justify-center">

                    <button
                        onClick={openEdit}
                        className="px-5 py-2 rounded-full border border-[#153b2f] text-[#153b2f] cursor-pointer"
                    >
                        <i className="ri-settings-3-line mr-2"></i>
                        Edit Profile
                    </button>

                </div>

            </div>


            {/* Modal */}
            {edit && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/20 backdrop-blur-md">

                    <div className="w-full max-w-md bg-[#f5f4ef] rounded-3xl p-5">

                        <div className="flex justify-between items-center mb-5">

                            <h2 className="text-xl font-semibold text-[#153b2f]">
                                Edit Profile
                            </h2>

                            <button
                                onClick={() => setEdit(false)}
                                className="text-2xl"
                            >
                                <i className="ri-close-line"></i>
                            </button>

                        </div>


                        {/* Photo */}
                        <div className="flex flex-col items-center mb-5">

                            <img
                                src={newPhoto}
                                className="w-24 h-24 rounded-full object-cover"
                            />

                            <input
                                ref={file}
                                type="file"
                                accept="image/*"
                                onChange={changePhoto}
                                className="hidden"
                            />

                            <button
                                onClick={() => file.current.click()}
                                className="mt-2 text-sm text-[#153b2f]"
                            >
                                <i className="ri-camera-line mr-1"></i>
                                Change Photo
                            </button>

                        </div>


                        {/* Name */}
                        <input
                            value={newName}
                            onChange={(e) => setNewName(e.target.value)}
                            placeholder="Name"
                            className="w-full p-3 mb-3 rounded-xl border border-gray-300 outline-none"
                        />


                        {/* Email */}
                        <input
                            value={newEmail}
                            onChange={(e) => setNewEmail(e.target.value)}
                            placeholder="Email"
                            className="w-full p-3 mb-3 rounded-xl border border-gray-300 outline-none"
                        />


                        {/* Location */}
                        <input
                            value={newLocation}
                            onChange={(e) => setNewLocation(e.target.value)}
                            placeholder="Location"
                            className="w-full p-3 mb-3 rounded-xl border border-gray-300 outline-none"
                        />


                        {/* Tagline */}
                        <input
                            value={newTagline}
                            onChange={(e) => setNewTagline(e.target.value)}
                            placeholder="Bio / Tagline"
                            className="w-full p-3 rounded-xl border border-gray-300 outline-none"
                        />


                        {/* Buttons */}
                        <div className="flex gap-3 mt-5">

                            <button
                                onClick={() => setEdit(false)}
                                className="w-1/2 py-3 rounded-xl border border-gray-300"
                            >
                                Cancel
                            </button>

                            <button
                                onClick={save}
                                disabled={saving}
                                className="w-1/2 py-3 rounded-xl bg-[#153b2f] text-white"
                            >
                                {saving ? "Saving..." : "Save Changes"}
                            </button>

                        </div>

                    </div>

                </div>
            )}


            {/* Updated */}
            {updated && (
                <div className="fixed inset-0 z-100 flex items-center justify-center bg-black/20">

                    <div className="bg-[#f5f4ef] p-6 rounded-3xl text-center">

                        <i className="ri-checkbox-circle-line text-4xl text-green-700"></i>

                        <p className="mt-2 font-semibold">
                            Profile Updated
                        </p>

                    </div>

                </div>
            )}

        </>
    )
}

export default First