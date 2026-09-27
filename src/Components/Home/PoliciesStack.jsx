import Policies from "./Policies"

function PoliciesStack() {
    return (
        <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-3 sm:gap-4">

            <Policies
                Icon="ri-leaf-line"
                head="Eco Friendly"
                Body="Made with sustainable materials"
            />

            <Policies
                Icon="ri-truck-line"
                head="Fast Delivery"
                Body="Quick and reliable delivery"
            />

            <Policies
                Icon="ri-shield-check-line"
                head="Secure Payment"
                Body="100% secure payments"
            />

        </div>
    )
}

export default PoliciesStack