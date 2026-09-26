function Policies({ Icon, head, Body }) {
    return (
        <div className="flex h-full w-[30%] items-center justify-center">

            {/* Icon */}
            <div className="flex h-full w-[30%] items-center justify-center">
                <i className={`${Icon} text-3xl`}></i>
            </div>

            {/* Content */}
            <div className="flex h-full w-[70%] flex-col justify-center">
                <h3 className="font-semibold">
                    {head}
                </h3>

                <p className="text-sm">
                    {Body}
                </p>
            </div>

        </div>
    )
}

export default Policies