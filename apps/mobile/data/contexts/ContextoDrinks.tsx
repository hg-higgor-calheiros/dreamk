import { Drink } from "core"
import { createContext, useEffect, useState } from "react";
import { gql, useQuery } from '@apollo/client';

const GET_DRINKS = gql`
    query drinks{
        drinks {
            id
            name
            ingredients
            instructions
        }
    }
`;

interface ContextoDrinksProps {
    drinks: Drink[];
}

const ContextoDrinks = createContext<ContextoDrinksProps>({} as any);

export function ProvedorDrinks(props: any) {
    const [drinks, setDrinks] = useState<Drink[]>([])
    
    async function fetchDrinks() {
        const { loading, error, data } = useQuery(GET_DRINKS);

        if (!loading && !error) {
            setDrinks(data.drinks)
        }
    }

    useEffect(() => {
        fetchDrinks();
    }, []);

    return (
        <ContextoDrinks.Provider value={{ drinks }}>
            {props.children}
        </ContextoDrinks.Provider>
    )

}

export default ContextoDrinks;