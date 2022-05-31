import { useEffect, useRef, useState } from 'react'

export const useFetch = (url) => {

    const [state, setstate] = useState({ data: null, loading: true, error: null })
    const isMounted = useRef(true)

    useEffect(() => {

        return () => {
            isMounted.current = false
        }
    }, [])


    useEffect(() => {
        setstate({ data: null, loading: true, error: null })
        fetch(url)
            .then(resp => resp.json())
            .then(data => {

                setTimeout(() => {
                    if (isMounted) {
                        setstate({
                            loading: false,
                            error: null,
                            data
                        })
                    } else{
                        console.log('No se llamo a setState')
                    }
                }, 4000)

            })
    }, [url])

    return state
}
