import { View, Text, ImageBackground,Dimensions,TouchableOpacity,TextInput, ScrollView} from 'react-native'
import { AntDesign } from "@expo/vector-icons";
import { useSelector,useDispatch } from 'react-redux'
import { SafeAreaView } from 'react-native-safe-area-context'
import SPACING from "../../config/SPACING";
import colors from "../../config/Restaurant/colors";
import { decrementQuantity, incrementQuantity } from '../../CartReducer';
const { height } = Dimensions.get("window");

export default function CartPage({route,navigation}) {
const cartsItem = useSelector(state => state.cart.cart)
console.log(cartsItem);
const rupiah = (number)=>{
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR"
  }).format(number);
}
const sumAllTotal = () => {
  let total = 0
  for(let i = 0; i < cartsItem.length; i++) {
    total += cartsItem[i].price * cartsItem[i].quantity
  }
  return rupiah(total);
}




const dispatch = useDispatch()
// const [count, setCount] = React.useState(0);
  return (
    <>
    <View>
      <SafeAreaView>
      <Text style={{fontSize:20,alignSelf:"center",marginTop:10,marginBottom:10,fontSize: SPACING * 3,
                    color: colors.black,
                    fontWeight: "700"}}>Checkout</Text>
      </SafeAreaView>
      <ScrollView style={{height:"65%"}}>
      <View style={{marginTop:10,marginLeft:10}} >
        {cartsItem.map((cartItem) => (
          <View key={cartItem.id} style={{flexDirection:"row",marginBottom:10}}>
              <View>
              <ImageBackground source={{uri:cartItem.image}} style={{
                  padding: SPACING * 2,
                  height: height / 10,
                  padding: SPACING * 2,
                  paddingTop: SPACING * 4,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width:110
                }}/>
              </View>
              <View>
              <Text style={{fontSize: SPACING * 1.7,
                    fontWeight: "700",
                    color: colors.black, marginLeft:10}}>
                    {cartItem.name}
              </Text>
              <View style={{flexDirection:"row",marginTop:19}}>
              <TouchableOpacity
                style={{
                  height: SPACING * 4.5,
                  width: SPACING * 4.5,
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onPress={() => dispatch(incrementQuantity(cartItem))}
              >
                <AntDesign name="plussquareo" size={SPACING * 2} color={colors.black} />         
              </TouchableOpacity>
              <TextInput style={{fontSize:20,
                    fontWeight: "700",
                    color: colors.black, marginLeft:10}} readOnly >{cartItem.quantity}</TextInput>
              <TouchableOpacity
                style={{
                  height: SPACING * 4.5,
                  width: SPACING * 4.5,
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onPress={() => dispatch(decrementQuantity(cartItem))}
              >
                <AntDesign name="minussquareo" size={SPACING * 2} color={colors.black} />         
              </TouchableOpacity>
              <View style={{marginTop:10,}}>
                <Text style={{fontSize:20,
                    fontWeight: "700",
                    color: colors.black}}>{rupiah(cartItem.price * cartItem.quantity)}</Text>
              </View>
              </View>
              </View>
            </View>
        ))}
      </View>
      </ScrollView>
     {cartsItem.length > 0 && (
      <SafeAreaView>
      <View style={{flexDirection:"row",justifyContent:"space-between",width:"90%",}}>
        <Text style={{fontSize:20,
                    fontWeight: "700",
                    color: colors.black,marginLeft:30}}>TOTAL</Text>
        <Text style={{fontSize:20,
                    fontWeight: "700",
                    color: colors.black}}>{sumAllTotal()}</Text>
      </View>
      <View style={{ padding: SPACING * 2 }}>
           <TouchableOpacity
             style={{
               width: "100%",
               padding: SPACING * 2,
               backgroundColor: colors.black,
               flexDirection: "row",
               alignItems: "center",
               justifyContent: "center",
               borderRadius: SPACING * 2,
             }}
             onPress={() => navigation.navigate("QrcodePage")}
           >
             <Text
               style={{
                 fontSize: SPACING * 2,
                 color: colors.white,
                 fontWeight: "700",
               }}
             >
               BUY NOW
             </Text>
             <Text
               style={{
                 fontSize: SPACING * 2,
                 color: colors.yellow,
                 fontWeight: "700",
                 marginLeft: SPACING / 2,
               }}
             >
               
             </Text>
           </TouchableOpacity>
         </View>
      </SafeAreaView>
     )}
    </View>
    </>
  )
}