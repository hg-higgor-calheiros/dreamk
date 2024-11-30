interface Drink {
    id: number;
    name: string;
    ingredients: string[];
    instructions: string;
}

declare const drinks: Drink[];

export { type Drink, drinks };
