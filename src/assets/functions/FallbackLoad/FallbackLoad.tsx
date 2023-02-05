/*
    This component is used when fallback: true
    which is set when load times for dynamic routes
    are longer than average. You can use it in your
    page like this:

    function MyPage() {
        const router = useRouter()
        if (router.isFallback) {
            return (
                <FallbackLoad></FallbackLoad>
            )
        }

        return(<h1> Normal Page Contents </h1>)

    }

    export default MyPage()


*/

import styles from './_FallbackLoad.module.scss'
import { CircularProgress } from '@mui/material'


function FallbackLoad() {
    return(
        <>
            <div className={styles['fallbackLoading']}>
                <h1> <CircularProgress /> Loading... </h1> 
            </div>
        </>
    )
}

export default FallbackLoad