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
            {/* Profile Section */}
            <div className="flex min-h-[25vh] w-full items-center justify-center gap-4 p-3 sm:p-4 md:h-[28vh] lg:h-[32vh]">

                {/* Profile */}
                <div className="flex h-full w-full items-center justify-center gap-4 md:w-[48%] md:justify-center sm:gap-6 lg:w-[45%]">

                    <img
                        src={photo}
                        alt="Profile"
                        className="aspect-square w-24 rounded-full object-cover sm:w-28 md:w-32 lg:w-36"
                    />

                    <div className="flex min-w-0 flex-col gap-1 sm:gap-2">

                        <h1 className="text-xl font-semibold text-[#153b2f] sm:text-2xl md:text-3xl">
                            Hello, {name}
                        </h1>

                        <p className="truncate text-xs text-gray-500 sm:text-sm">
                            {email}
                        </p>

                        <p className="flex items-center gap-1 text-xs text-gray-500 sm:text-sm">
                            <i className="ri-map-pin-line"></i>
                            {location}
                        </p>

                        <p className="w-fit rounded-full bg-green-100 px-2 py-1 text-xs text-[#153b2f] sm:px-3">
                            🌿 {tagline}
                        </p>

                    </div>

                </div>


                {/* Edit Profile */}
                <div className="hidden h-full w-[48%] items-center justify-center md:flex lg:w-[45%]">

                    <button
                        onClick={openEdit}
                        className="cursor-pointer rounded-full border border-[#153b2f] px-5 py-2 text-[#153b2f] transition duration-300 hover:bg-[#153b2f] hover:text-white"
                    >
                        <i className="ri-settings-3-line mr-2"></i>
                        Edit Profile
                    </button>

                </div>

            </div>


            {/* Edit Profile Modal */}
            {edit && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 p-4 backdrop-blur-md">

                    <div className="w-full max-w-md rounded-3xl bg-[#f5f4ef] p-5 shadow-xl sm:p-6">

                        {/* Modal Header */}
                        <div className="mb-5 flex items-center justify-between">

                            <h2 className="text-xl font-semibold text-[#153b2f]">
                                Edit Profile
                            </h2>

                            <button
                                onClick={() => setEdit(false)}
                                className="flex h-9 w-9 items-center justify-center rounded-full transition hover:bg-black/5"
                            >
                                <i className="ri-close-line text-2xl"></i>
                            </button>

                        </div>


                        {/* Photo */}
                        <div className="mb-5 flex flex-col items-center">

                            <img
                                src={newPhoto}
                                alt="Profile Preview"
                                className="h-24 w-24 rounded-full object-cover"
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
                                className="mt-2 text-sm text-[#153b2f] transition hover:underline"
                            >
                                <i className="ri-camera-line mr-1"></i>
                                Change Photo
                            </button>

                        </div>


                        {/* Name */}
                        <input
                            type="text"
                            value={newName}
                            onChange={(e) => setNewName(e.target.value)}
                            placeholder="Name"
                            className="mb-3 w-full rounded-xl border border-gray-300 bg-transparent p-3 outline-none transition focus:border-[#153b2f]"
                        />


                        {/* Email */}
                        <input
                            type="email"
                            value={newEmail}
                            onChange={(e) => setNewEmail(e.target.value)}
                            placeholder="Email"
                            className="mb-3 w-full rounded-xl border border-gray-300 bg-transparent p-3 outline-none transition focus:border-[#153b2f]"
                        />


                        {/* Location */}
                        <input
                            type="text"
                            value={newLocation}
                            onChange={(e) => setNewLocation(e.target.value)}
                            placeholder="Location"
                            className="mb-3 w-full rounded-xl border border-gray-300 bg-transparent p-3 outline-none transition focus:border-[#153b2f]"
                        />


                        {/* Tagline */}
                        <input
                            type="text"
                            value={newTagline}
                            onChange={(e) => setNewTagline(e.target.value)}
                            placeholder="Bio / Tagline"
                            className="w-full rounded-xl border border-gray-300 bg-transparent p-3 outline-none transition focus:border-[#153b2f]"
                        />


                        {/* Buttons */}
                        <div className="mt-5 flex gap-3">

                            <button
                                onClick={() => setEdit(false)}
                                className="w-1/2 rounded-xl border border-gray-300 py-3 transition hover:bg-gray-100"
                            >
                                Cancel
                            </button>

                            <button
                                onClick={save}
                                disabled={saving}
                                className="w-1/2 rounded-xl bg-[#153b2f] py-3 text-white transition hover:bg-[#102a20] disabled:cursor-not-allowed disabled:opacity-70"
                            >
                                {saving ? "Saving..." : "Save Changes"}
                            </button>

                        </div>

                    </div>

                </div>
            )}


            {/* Profile Updated */}
            {updated && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/20 backdrop-blur-sm">

                    <div className="rounded-3xl bg-[#f5f4ef] p-6 text-center shadow-xl">

                        <i className="ri-checkbox-circle-line text-4xl text-green-700"></i>

                        <p className="mt-2 font-semibold text-[#153b2f]">
                            Profile Updated
                        </p>

                    </div>

                </div>
            )}

        </>
    )
}

export default First