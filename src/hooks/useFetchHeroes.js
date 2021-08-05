import { useEffect, useState } from "react";
import { getHeroes } from "../helpers/getHeroes"

export const useFetchHeroes = () => {
    const [state, setState] = useState({
        data: [],
        loading: true,
    })

    useEffect(() => {
        getHeroes().then((heros) => {
            setState({
                data: heros,
                loading: false,
            });
        });
    }, []);

    return state
}