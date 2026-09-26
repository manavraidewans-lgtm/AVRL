import Policies from './Policies'

function PoliciesStack() {
    return (
        <div className="flex h-[15%] w-[95%] items-center justify-evenly">

            <Policies
                Icon="ri-leaf-line"
                head="Eco Friendly"
                Body="Made with sustainable materials"
            />

            <div className="h-[50%] w-px bg-gray-300"></div>

            <Policies
                Icon="ri-truck-line"
                head="Fast Delivery"
                Body="Quick and reliable delivery"
            />

            <div className="h-[50%] w-px bg-gray-300"></div>

            <Policies
                Icon="ri-shield-check-line"
                head="Secure Payment"
                Body="100% secure payments"
            />

        </div>
    )
}

export default PoliciesStack