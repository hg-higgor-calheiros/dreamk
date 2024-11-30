import {
    gapY2,
    p2,
    textZinc400,
} from "@/style";
import { Drink } from "core";
import { ScrollView, Text, View } from "react-native";
import DrinkCard from "./DrinkCard";
  
  export interface DrinkListProps {
    drinks: Drink[];
  }
  
  export default function DrinkList({ drinks }: DrinkListProps) {
    return (
        <ScrollView style={[ p2 ]}>
            {
                drinks.length > 0 ? (
                    <View style={gapY2}>
                        { drinks.map((drink) => (<DrinkCard drink={drink} key={drink.id}/>) )}
                    </View>
                ) : (
                    <Text style={[textZinc400]}>Nenhum drink cadastrado...</Text>
                )
            }
      </ScrollView>
    );
  }
  