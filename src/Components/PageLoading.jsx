import React, { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"

import HomeSkeleton from "./Skeletons/HomeSkeleton"
import AboutSkeleton from "./Skeletons/AboutSkeleton"
import ProductsSkeleton from "./Skeletons/ProductsSkeleton"
import ContactSkeleton from "./Skeletons/ContactSkeleton"
import CartSkeleton from "./Skeletons/CartSkeleton"
import FavouritesSkeleton from "./Skeletons/FavouritesSkeleton"
import ProfileSkeleton from "./Skeletons/ProfileSkeleton"
import OrdersSkeleton from "./Skeletons/OrdersSkeleton"


function PageLoading({ children }) {

    const location = useLocation()

    const [loading, setLoading] = useState(false)


    useEffect(() => {

        setLoading(true)

        const timer = setTimeout(() => {
            setLoading(false)
        }, 700)

        return () => clearTimeout(timer)

    }, [location.pathname])


    if (!loading) {
        return children
    }


    switch (location.pathname) {

        case "/":
            return <HomeSkeleton />

        case "/about":
            return <AboutSkeleton />

        case "/products":
            return <ProductsSkeleton />

        case "/contact":
            return <ContactSkeleton />

        case "/cart":
            return <CartSkeleton />

        case "/favourites":
            return <FavouritesSkeleton />

        case "/profile":
            return <ProfileSkeleton />

        case "/orders":
            return <OrdersSkeleton />

        default:
            return <HomeSkeleton />
    }
}


export default PageLoading