import {
    centerGrow,
    flex1,
    textLg,
    textZinc400,
  } from "@/style";
  import { Text, View } from "react-native";

  interface LoadingProps {
    text: string
  }
    
  export default function Loading({ text }: LoadingProps) {
    return (
      <View style={[flex1, centerGrow]}>
        <Text style={[textLg, textZinc400]}>{text}</Text>
      </View>
    );
  }
  