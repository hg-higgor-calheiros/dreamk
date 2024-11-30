import {
  border,
  borderZinc800,
  mb3,
  p2,
  px4,
  py2,
  roundedMd,
  textBold,
  textLg,
  textSm,
  textXl,
  textZinc400,
} from "@/style";
import { Drink } from "core";
import { Text, View } from "react-native";

export interface DrinkCardProps {
  drink: Drink;
}

export default function DrinkCard({ drink }: DrinkCardProps) {
  return (
    <View
      style={[border, borderZinc800, roundedMd, px4, py2]}
    >
      <Text style={[textXl, textBold]}>{drink.name}</Text>
      <View style={[p2]}>
        <Text style={[textZinc400, textSm, mb3]}>Ingredientes: </Text>
        {drink.ingredients.map((ingredient, idx) => <Text style={[px4]} key={idx}>● {ingredient}</Text>)}
      </View>
      <Text style={[textZinc400, textSm]}>Modo de preparo: </Text>
      <Text style={[textSm, px4, py2]}>{drink.instructions}</Text>
    </View>
  );
}
