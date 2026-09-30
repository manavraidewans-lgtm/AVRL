import React, { useState } from "react"
import Logo from "../../Assets/Logo_2.png"

const MobileTop = () => {

    const [showSettings, setShowSettings] = useState(false)
    const [showPhoto, setShowPhoto] = useState(false)
    const [photo, setPhoto] = useState("")
    const [saving, setSaving] = useState(false)
    const [updated, setUpdated] = useState(false)

    const changePhoto = (e) => {
        const file = e.target.files[0]

        if (file) {
            setPhoto(URL.createObjectURL(file))
            setShowPhoto(false)
        }
    }

    const saveChanges = () => {
        setSaving(true)

        setTimeout(() => {
            setSaving(false)
            setUpdated(true)

            setTimeout(() => {
                setUpdated(false)
                setShowSettings(false)
            }, 1000)
        }, 2000)
    }

    return (
        <>
            {/* Mobile Top */}

            <div className="h-[7vh] w-full flex justify-between items-center p-1 md:hidden">

                <div className="w-[20%]"></div>

                <div className="w-[50%] flex justify-center">
                    <img src={Logo} className="h-full w-full object-contain" />
                </div>

                <div className="w-[20%] flex justify-center">
                    <button onClick={() => setShowSettings(true)}>
                        <i className="ri-settings-3-line text-2xl text-[#113b2a]"></i>
                    </button>
                </div>

            </div>


            {/* Edit Profile */}

            {showSettings && (

                <div className="fixed inset-0 z-50 bg-black/20 backdrop-blur-md flex items-center justify-center p-4">

                    <div className="relative w-full h-[88%] bg-[#f5f4ef] rounded-3xl overflow-hidden flex flex-col">

                        {/* Header */}

                        <div className="flex justify-between items-center p-5">

                            <div>
                                <h1 className="text-2xl font-semibold text-[#10573d]">
                                    Edit Profile
                                </h1>

                                <p className="text-sm text-[#8f8f8f]">
                                    Update your personal information
                                </p>
                            </div>

                            <button onClick={() => setShowSettings(false)}>
                                <i className="ri-close-line text-3xl text-[#0b3928]"></i>
                            </button>

                        </div>


                        {/* Photo */}

                        <div className="flex items-center gap-5 px-5 py-2">

                            <div className="h-24 w-24 rounded-full overflow-hidden bg-[#d8d8d2]">

                                {photo ? (
                                    <img
                                        src={photo}
                                        className="h-full w-full object-cover"
                                    />
                                ) : (
                                    <div className="h-full flex items-center justify-center">
                                        <i className="ri-user-3-line text-4xl text-[#6c7d74]"></i>
                                    </div>
                                )}

                            </div>

                            <button
                                onClick={() => setShowPhoto(true)}
                                className="border border-[#43645a] rounded-3xl px-5 py-3 flex items-center gap-2"
                            >
                                <i className="ri-camera-line"></i>
                                Change Photo
                            </button>

                        </div>


                        {/* Form */}

                        <div className="flex-1 overflow-y-auto px-5 py-4">

                            {[
                                ["Full Name", "Manav Rai Dewan"],
                                ["Email", "manavdewan@gmail.com"],
                                ["Phone Number", "+91 98765 43210"],
                                ["Location", "Dehradun, India"]
                            ].map(([label, value]) => (

                                <div className="mb-4" key={label}>

                                    <label className="block text-sm font-semibold text-[#173f32] mb-2">
                                        {label}
                                    </label>

                                    <input
                                        defaultValue={value}
                                        className="w-full h-11 rounded-xl border border-[#cdd5d0] bg-transparent px-4 outline-none"
                                    />

                                </div>

                            ))}


                            <label className="block text-sm font-semibold text-[#173f32] mb-2">
                                Bio / Tagline
                            </label>

                            <textarea
                                defaultValue="Adventure Awaits"
                                className="w-full rounded-xl border border-[#cdd5d0] bg-transparent p-3 outline-none resize-none"
                                rows="3"
                            />

                        </div>


                        {/* Buttons */}

                        <div className="border-t border-[#deddd7] p-4 flex gap-3">

                            <button
                                onClick={() => setShowSettings(false)}
                                className="flex-1 h-11 rounded-2xl border border-[#43645a] font-semibold"
                            >
                                Cancel
                            </button>

                            <button
                                onClick={saveChanges}
                                disabled={saving}
                                className="flex-1 h-11 rounded-2xl bg-[#967056] text-white font-semibold"
                            >
                                {saving ? (
                                    <>
                                        <i className="ri-loader-4-line animate-spin mr-2"></i>
                                        Saving...
                                    </>
                                ) : (
                                    "Save Changes"
                                )}
                            </button>

                        </div>


                        {/* Updated */}

                        {updated && (

                            <div className="absolute inset-0 bg-black/10 backdrop-blur-md flex items-center justify-center">

                                <div className="bg-[#f5f4ef] rounded-3xl p-7 text-center">

                                    <i className="ri-checkbox-circle-fill text-5xl text-[#10573d]"></i>

                                    <h2 className="text-xl font-semibold text-[#10573d] mt-3">
                                        Profile Updated
                                    </h2>

                                    <p className="text-sm text-[#8f8f8f] mt-1">
                                        Your changes have been saved.
                                    </p>

                                </div>

                            </div>

                        )}

                    </div>


                    {/* Change Photo */}

                    {showPhoto && (

                        <div className="absolute inset-0 flex items-center justify-center p-5 bg-black/20 backdrop-blur-md">

                            <div className="w-full max-w-sm bg-[#f5f4ef] rounded-3xl p-5">

                                <div className="flex justify-between items-center mb-5">

                                    <div>
                                        <h2 className="text-xl font-semibold text-[#10573d]">
                                            Change Profile Photo
                                        </h2>

                                        <p className="text-sm text-[#8f8f8f]">
                                            Choose a new photo
                                        </p>
                                    </div>

                                    <button onClick={() => setShowPhoto(false)}>
                                        <i className="ri-close-line text-2xl"></i>
                                    </button>

                                </div>


                                <div className="flex justify-center mb-5">

                                    <div className="h-32 w-32 rounded-full overflow-hidden bg-[#dddcd5]">

                                        {photo ? (
                                            <img
                                                src={photo}
                                                className="h-full w-full object-cover"
                                            />
                                        ) : (
                                            <div className="h-full flex items-center justify-center">
                                                <i className="ri-user-3-line text-5xl text-[#718078]"></i>
                                            </div>
                                        )}

                                    </div>

                                </div>


                                <label
                                    htmlFor="photo"
                                    className="h-12 border border-[#43645a] rounded-2xl flex justify-center items-center gap-2 cursor-pointer"
                                >
                                    <i className="ri-image-add-line"></i>
                                    Choose From Device
                                </label>

                                <input
                                    id="photo"
                                    type="file"
                                    accept="image/*"
                                    onChange={changePhoto}
                                    className="hidden"
                                />

                                <p className="text-xs text-center text-[#8f8f8f] mt-3">
                                    JPG, PNG or WEBP • Maximum 5MB
                                </p>

                            </div>

                        </div>

                    )}

                </div>
            )}

        </>
    )
}

export default MobileTop