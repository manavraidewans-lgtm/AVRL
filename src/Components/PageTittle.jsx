import { useEffect } from "react"
import { useLocation } from "react-router-dom"

function PageTitle() {

    const location = useLocation()

    useEffect(() => {

        const titles = {

            "/":
                "EverOP India: Premium Clothing for Men, Women and Kids.",

            "/about":
                "EverOP: Get to Know More About Us.",

            "/products":
                "EverOP Products: Find Clothes Made for You.",

            "/contact":
                "EverOP: We Are Here to Help You 24/7.",

            "/cart":
                "EverOP: Your Cart Items Are Waiting for You.",

            "/favourites":
                "EverOP: Your Favourites Are Our Valuables.",

            "/profile":
                "EverOP: Your Profile Section.",

            "/orders":
                "EverOP: Your Orders Are Getting Ready to Be Delivered.",

            "/auth":
                "EverOP: Login or Create Your Account.",

        }

        document.title =
            titles[location.pathname] || "EverOP"

    }, [location.pathname])

    return null
}

export default PageTitle