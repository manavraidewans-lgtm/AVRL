const Policies = ({ Icon, Tittle, Description }) => {
    return (
        <div className="flex h-24 w-full items-center gap-4 px-4 lg:w-[23%]">

            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#dcebd7] text-[#17382b]">
                <i className={`${Icon} text-xl`} />
            </div>

            <div className="min-w-0">
                <h3 className="text-sm font-semibold text-[#152a23]">
                    {Tittle}
                </h3>

                <p className="text-xs text-[#68766e]">
                    {Description}
                </p>
            </div>

        </div>
    )
}

export default Policies