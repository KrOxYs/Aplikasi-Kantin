import { View, Text,TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import QRCode from 'react-native-qrcode-svg'
import { useSelector,useDispatch } from 'react-redux'
import colors from "../../config/Restaurant/colors";
import SPACING from "../../config/SPACING";
import { clearData } from '../../CartReducer'

export default function QrcodePage({navigation}) {
    const product = useSelector(state => state.cart.cart)
    const dispatch = useDispatch()
    const productData = JSON.stringify(product)
  return (
    <>
      <SafeAreaView>
       <View style={{marginTop:50}}>
        <View style={{alignItems:"center",marginTop:20}}>
          {product.length > 0 && <QRCode value={productData} size={300}/>}
        </View>
          {product.length > 0 && (
            <View style={{padding: SPACING * 2}}>
            <TouchableOpacity
                style={{
                  width:"100%",
                  padding: SPACING * 2,
                  backgroundColor: colors.black,
                  borderRadius: SPACING * 2,
                  alignItems: "center",
                  marginTop: SPACING * 3,
                }}
                onPress={() => {
                  dispatch(clearData())
                  navigation.push('Welcome')
                }}
              >
                <Text
                  style={{
                    color: colors.white,
                    fontSize: SPACING * 2,
                    fontWeight: "700",
                  }}
                >
                  Back Home 
                </Text>
            </TouchableOpacity>
            </View>
          )}
       </View>
      </SafeAreaView>
    </>
  )
}