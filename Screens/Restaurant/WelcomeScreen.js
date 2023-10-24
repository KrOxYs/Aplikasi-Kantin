import React from "react";
import colors from "../../config/Restaurant/colors";
import SPACING from "../../config/SPACING";
import { useState,useEffect } from "react";
import { Text, View, StyleSheet, Button,TouchableOpacity } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
// import { useSelector } from "react-redux";
import { ownerChange } from "../../menuReducer";
const WelcomeScreen = ({navigation}) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    };

    getBarCodeScannerPermissions();
    }, []);

    const handleBarCodeScanned = ({ type, data }) => {
      setScanned(true);
      // alert(`Bar code with type ${type} and data ${data} has been scanned!`);
      if(data == "MamaQueen"){
        navigation.push('MenuMamaQueen')
        ownerChange("MamaQueen")
      } else if (data == "MakOyat") {
        navigation.push("Home")
        ownerChange("MakOyat")
      }
    };

    if (hasPermission === null) {
      return <Text>Requesting for camera permission</Text>;
    }
    if (hasPermission === false) {
      return <Text>No access to camera</Text>;
    }
  return (
    // <ImageBackground
    //   style={{ flex: 1 }}
    //   source={require("../../assets/pexels-william-choquette-2641886.jpeg")}
    // >
    //   <View style={{ flex: 1, backgroundColor: colors.black, opacity: 0.2 }} />
    //   <View
    //     style={{
    //       position: "absolute",
    //       height: "100%",
    //       zIndex: 2,
    //       width: "100%",
    //       justifyContent: "flex-end",
    //       paddingHorizontal: SPACING * 2,
    //       paddingBottom: SPACING * 5,
    //     }}
    //   >
    //     <View>
    //       <Text
    //         style={{
    //           color: colors.white,
    //           fontWeight: "800",
    //           fontSize: SPACING * 4.5,
    //           textTransform: "capitalize",
    //         }}
    //       >
    //         Let your favorite food find you
    //       </Text>
    //       <Text
    //         style={{
    //           color: colors.white,
    //           fontWeight: "600",
    //           fontSize: SPACING * 1.7,
    //         }}
    //       >
    //         Dolore reprehenderit id ea eu voluptate deserunt occaecat occaecat.
    //       </Text>
    //       <TouchableOpacity
    //         style={{
    //           padding: SPACING * 2,
    //           backgroundColor: colors.white,
    //           borderRadius: SPACING * 2,
    //           alignItems: "center",
    //           marginTop: SPACING * 3,
    //         }}
    //       >
    //         <Text
    //           style={{
    //             color: colors.black,
    //             fontSize: SPACING * 2,
    //             fontWeight: "700",
    //           }}
    //         >
    //           Explorer Now
    //         </Text>
    //       </TouchableOpacity>
    //     </View>
    //   </View>
    // </ImageBackground>
    <View style={styles.container}>
    <View style={{width:400,height:400}}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
    </View>
    {scanned && (
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
            setScanned(false)
          }}
        >
          <Text
            style={{
              color: colors.white,
              fontSize: SPACING * 2,
              fontWeight: "700",
            }}
          >
            Scan Again 
          </Text>
      </TouchableOpacity>
      </View>
    ) }
  </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
});
