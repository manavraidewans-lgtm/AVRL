 import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function PageTitle() {

    const location = useLocation()

    useEffect(() => {

        const titles = {
            '/': 'EverOp India: Premium Clothinig for Men, Women and Kids. ',
            '/about': 'EverOP: Get to know more about us.',
            '/products': 'EverOP Products: Find Clothes Made For you.',
            '/contact': 'EverOp: We are here to help you 24/7 .',
            '/cart': 'EverOP: Your carts items are waiting for you.',
            '/favourites': 'EverOp: Your Favourites are our valueables.',
            '/profile': 'EverOP: Your Proile Section.',
            '/orders': 'EverOP: Your orders are getting ready to be delivered.',
        }

        document.title =
            titles[location.pathname] || 'EverOP'

    }, [location.pathname])


    return null
}

export default PageTitle