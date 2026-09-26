import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function PageTitle() {
    const location = useLocation()

    useEffect(() => {
        const titles = {
            '/': "Home",
            '/about': 'About | EverOP',
            '/products': 'Products | EverOP',
            '/contact': 'Contact Us | EverOP',
            '/cart': 'Cart | EverOP',
            '/favourites': 'Favourites | EverOP',
            '/auth': 'Auth | EverOP',
        }

        document.title = titles[location.pathname]
    }, [location.pathname])

    return null
}

export default PageTitle