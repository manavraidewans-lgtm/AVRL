function Policies({ Icon, head, Body }) {
    return (
        <div className="flex w-full items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#d3e2d3] text-[#17382b]">
                <i className={`${Icon} text-xl`} />
            </div>

            <div className="min-w-0">
                <h3 className="text-sm font-semibold text-[#152a23] sm:text-base">
                    {head}
                </h3>

                <p className="text-xs text-[#68766e] sm:text-sm">
                    {Body}
                </p>
            </div>
        </div>
    )
}

export default Policies