 import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function PageTitle() {

    const location = useLocation()

    useEffect(() => {

        const titles = {
            '/': 'Home | EverOP',
            '/about': 'About | EverOP',
            '/products': 'Products | EverOP',
            '/contact': 'Contact Us | EverOP',
            '/cart': 'Cart | EverOP',
            '/favourites': 'Favourites | EverOP',
            '/profile': 'Profile | EverOP',
        }

        document.title =
            titles[location.pathname] || 'EverOP'

    }, [location.pathname])


    return null
}

export default PageTitle