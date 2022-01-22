import { setSelectionRange } from "@testing-library/user-event/dist/utils";
import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs";


export const useFetchGifs = (category) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    });


    useEffect(() => {

        getGifs(category)
            .then(imgs => {

                setState({
                    data: imgs,
                    loading: false
                })

            })


    }, [])

    return state;
}