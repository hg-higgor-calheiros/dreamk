import {
  alignCenter,
  flexRow,
  text3Xl,
  textBorder,
  textCenter,
  textViolet500,
  textWhite,
  w4_5,
} from "@/style";
import { useFonts } from "expo-font";
import { Image, Text, View } from "react-native";

export default function Logo() {
  const [carregada] = useFonts({
    Righteous: require("@/assets/fonts/Righteous-Regular.ttf"),
  });

  if (!carregada) return null;

  const fonte = { fontFamily: "Righteous" };

  return (
    <View style={alignCenter}>
      <Image
        source={require("@/assets/images/logo.png")}
        style={{ width: 80, height: 80 }}
      />
      <View style={flexRow}>
        <Text style={[text3Xl, textWhite, fonte, textBorder]}>DREAM</Text>
        <Text style={[text3Xl, textViolet500, fonte]}>K</Text>
      </View>
      <View style={w4_5}>
        <Text style={[textCenter]}>
          Aqui você encontra o drink dos seus sonhos!
        </Text>
      </View>
    </View>
  );
}
