import Logo from '@/components/template/Logo';
import { centerGrow, bgBlack, flex1, mt3, p2, border } from '@/style';
import { ImageBackground, SafeAreaView, ScrollView, View } from 'react-native';
import { gql, useQuery } from '@apollo/client';
import Loading from '@/components/shared/Loading';
import DrinkList from '@/components/drinks/DrinkList';


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

export default function HomeScreen() {
  const { loading, error, data } = useQuery(GET_DRINKS);

  return (
    <SafeAreaView style={[flex1]}>
      <ImageBackground
        source={require("@/assets/images/background.png")}
        resizeMode="cover"
        style={[centerGrow, bgBlack, {paddingTop: 48 }]}
      >
        <Logo />
        <View style={[flex1, centerGrow, mt3, { width: '100%', backgroundColor: "white"}, ]}>
            { loading ? 
              <Loading text='Loading...'/> : 
              <DrinkList drinks={data.drinks} />
            }           
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

