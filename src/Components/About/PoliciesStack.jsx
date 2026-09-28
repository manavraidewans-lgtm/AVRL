import Policies from "./Policies"

const PoliciesStack = () => {
    return (
        <div className="flex w-full items-center justify-center">
            <div className="mt-8 flex w-[90%] flex-col items-center gap-4 rounded-2xl bg-[#f1f1f1] p-4 sm:w-[80%] md:grid md:grid-cols-2 lg:flex lg:flex-row lg:gap-0">

                <Policies
                    Icon="ri-tent-line"
                    Tittle="Built For Adventure"
                    Description="Durable · Comfortable · Ready for wherever you go"
                />

                <span className="hidden h-20 w-px bg-[#d5d5d5] lg:block" />

                <Policies
                    Icon="ri-leaf-line"
                    Tittle="Sustainable Choices"
                    Description="Better materials for a brighter tomorrow"
                />

                <span className="hidden h-20 w-px bg-[#d5d5d5] lg:block" />

                <Policies
                    Icon="ri-shield-check-line"
                    Tittle="Quality You Can Trust"
                    Description="Crafted with care, made to last"
                />

                <span className="hidden h-20 w-px bg-[#d5d5d5] lg:block" />

                <Policies
                    Icon="ri-user-community-line"
                    Tittle="A Community That Explores"
                    Description="Real People · Real Stories · Real Mindset"
                />

            </div>
        </div>
    )
}

export default PoliciesStack