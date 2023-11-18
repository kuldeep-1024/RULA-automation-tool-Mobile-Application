import * as React from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";

const PDF = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.pdf}>
      <View style={styles.pdfChild} />
      <View style={styles.statusBar}>
        <View style={[styles.frame, styles.buttonPosition]} />
        <View style={styles.statusBar1}>
          <View style={[styles.battery, styles.backgroundBorder]}>
            <Image
              style={styles.capIcon}
              resizeMode="cover"
              source={require("../assets/cap.png")}
            />
            <View style={styles.capacity} />
          </View>
          <Image
            style={[styles.wifiIcon, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/wifi.png")}
          />
          <Image
            style={[styles.cellularConnectionIcon, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/cellular-connection.png")}
          />
          <View style={[styles.timeStyle, styles.buttonPosition]}>
            <Text style={[styles.time, styles.timeFlexBox]}>9:41</Text>
          </View>
        </View>
      </View>
      <Image
        style={styles.pdfItem}
        resizeMode="cover"
        source={require("../assets/group-1306.png")}
      />
      <Text style={[styles.title1, styles.titleTypo]}>RULA</Text>
      <Text
        style={[styles.title11, styles.titleTypo]}
      >{`Rapid Upper Limb Assessment (Right & Left Sides)`}</Text>
      <Image
        style={styles.iconMaterialError}
        resizeMode="cover"
        source={require("../assets/icon-materialerror.png")}
      />
      <View style={styles.groupParent}>
        <View style={[styles.rulaScoreRight7Parent, styles.rulaParentPosition]}>
          <Text style={[styles.rulaScoreRight, styles.title12FlexBox]}>
            RULA Score (Right): 7
          </Text>
          <Text style={[styles.title12, styles.title12FlexBox]}>
            Action Level 3: Further investigation and changes are required
            immediately.
          </Text>
        </View>
        <View style={[styles.rulaScoreLeft5Parent, styles.rulaParentPosition]}>
          <Text style={[styles.rulaScoreLeft, styles.rulaTypo]}>
            RULA Score (Left): 5
          </Text>
          <Text style={[styles.title12, styles.title12FlexBox]}>
            Action Level 3: Further investigation and changes are required soon.
          </Text>
        </View>
      </View>
      <Pressable
        style={[styles.buttonBackgroundParent, styles.buttonLayout]}
        onPress={() => navigation.navigate("PDF1")}
      >
        <View style={[styles.buttonBackground, styles.buttonPosition]}>
          <View
            style={[styles.buttonBackgroundBackground, styles.buttonPosition]}
          />
          <View style={[styles.buttonShape, styles.buttonPosition]} />
        </View>
        <View style={[styles.group, styles.groupPosition]}>
          <Text style={[styles.payWith, styles.payTypo]}>See Details</Text>
        </View>
      </Pressable>
      <Pressable
        style={[styles.buttonBackgroundGroup, styles.buttonLayout]}
        onPress={() => navigation.navigate("HomeScreen")}
      >
        <View style={[styles.buttonBackground, styles.buttonPosition]}>
          <View
            style={[
              styles.buttonBackgroundBackground1,
              styles.backgroundBorder,
            ]}
          />
          <View
            style={[
              styles.buttonBackgroundBackground1,
              styles.backgroundBorder,
            ]}
          />
        </View>
        <View style={[styles.group1, styles.groupPosition]}>
          <Text style={[styles.payWith1, styles.payTypo]}>
            Return to Home Screen
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonPosition: {
    left: 0,
    bottom: 0,
    top: 0,
    position: "absolute",
  },
  backgroundBorder: {
    borderWidth: 1,
    borderStyle: "solid",
    right: 0,
    position: "absolute",
  },
  iconPosition: {
    maxHeight: "100%",
    bottom: 4,
    position: "absolute",
  },
  timeFlexBox: {
    textAlign: "center",
    color: Color.colorWhite,
    position: "absolute",
  },
  titleTypo: {
    fontFamily: FontFamily.sFProDisplay,
    fontWeight: "700",
    textAlign: "center",
  },
  rulaParentPosition: {
    height: 107,
    borderRadius: Border.br_8xs,
    left: 0,
    right: 0,
    position: "absolute",
  },
  title12FlexBox: {
    textAlign: "left",
    color: Color.colorWhite,
    position: "absolute",
  },
  rulaTypo: {
    fontSize: FontSize.size_7xl,
    left: 10,
    fontFamily: FontFamily.sFProDisplay,
    fontWeight: "700",
    letterSpacing: 0,
  },
  buttonLayout: {
    height: 74,
    width: "82.61%",
  },
  groupPosition: {
    height: 22,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  payTypo: {
    fontSize: FontSize.size_mid,
    fontFamily: FontFamily.sFProDisplay,
    fontWeight: "700",
    textAlign: "center",
    letterSpacing: 0,
    left: 0,
    top: 0,
    position: "absolute",
  },
  pdfChild: {
    backgroundColor: Color.colorIndianred_100,
    height: 179,
    alignSelf: "stretch",
  },
  frame: {
    opacity: 0,
    right: 0,
    backgroundColor: Color.colorWhite,
  },
  capIcon: {
    marginTop: -2,
    width: 1,
    height: 4,
    opacity: 0.4,
    top: "50%",
    right: 0,
    position: "absolute",
  },
  capacity: {
    top: 2,
    bottom: 2,
    left: 2,
    borderRadius: 1,
    width: 18,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  battery: {
    marginTop: -5.67,
    borderRadius: 3,
    borderColor: Color.colorWhite,
    width: 24,
    height: 11,
    top: "50%",
  },
  wifiIcon: {
    top: 3,
    right: 29,
    width: 15,
  },
  cellularConnectionIcon: {
    top: 4,
    right: 50,
    width: 17,
  },
  time: {
    fontWeight: "600",
    fontFamily: FontFamily.sFProText,
    width: 55,
    letterSpacing: 0,
    textAlign: "center",
    fontSize: FontSize.size_mini,
    height: 18,
    left: 0,
    top: 0,
  },
  timeStyle: {
    width: 54,
  },
  statusBar1: {
    marginTop: -9,
    right: 14,
    left: 21,
    height: 18,
    top: "50%",
    position: "absolute",
  },
  statusBar: {
    marginTop: -179,
    height: 44,
    alignSelf: "stretch",
  },
  pdfItem: {
    width: 43,
    marginTop: 35,
    marginRight: 343,
    height: 44,
  },
  title1: {
    width: "27.29%",
    fontSize: FontSize.size_21xl,
    marginTop: -42,
    color: Color.colorWhite,
  },
  title11: {
    width: "83.33%",
    fontSize: FontSize.size_base,
    color: Color.colorDimgray,
    marginTop: 76,
  },
  iconMaterialError: {
    width: "21.03%",
    maxWidth: "100%",
    overflow: "hidden",
    height: 87,
    marginTop: 21,
    marginRight: 1,
  },
  rulaScoreRight: {
    top: 5,
    fontSize: FontSize.size_7xl,
    left: 10,
    fontFamily: FontFamily.sFProDisplay,
    fontWeight: "700",
    letterSpacing: 0,
  },
  title12: {
    marginTop: -4.5,
    width: "89.83%",
    left: "2.91%",
    fontFamily: FontFamily.poppinsMedium,
    fontSize: FontSize.size_mini,
    textAlign: "left",
    top: "50%",
  },
  rulaScoreRight7Parent: {
    backgroundColor: "#cb444a",
    top: 0,
    borderRadius: Border.br_8xs,
  },
  rulaScoreLeft: {
    top: 13,
    width: 257,
    textAlign: "center",
    color: Color.colorWhite,
    position: "absolute",
  },
  rulaScoreLeft5Parent: {
    backgroundColor: "#f6c344",
    bottom: 0,
  },
  groupParent: {
    width: "83.09%",
    height: 253,
    marginTop: 29,
  },
  buttonBackgroundBackground: {
    backgroundColor: Color.colorGray_500,
    right: 0,
  },
  buttonShape: {
    backgroundColor: Color.colorGray_100,
    right: 0,
  },
  buttonBackground: {
    right: 0,
  },
  payWith: {
    color: Color.colorWhite,
  },
  group: {
    marginTop: -10.77,
    marginLeft: -44,
    width: 88,
  },
  buttonBackgroundParent: {
    marginTop: 64,
  },
  buttonBackgroundBackground1: {
    top: -1,
    left: -1,
    backgroundColor: Color.colorGray_200,
    borderColor: Color.colorDimgray,
    bottom: 0,
  },
  payWith1: {
    color: Color.colorBlack,
  },
  group1: {
    marginTop: -13.5,
    marginLeft: -93,
    width: 186,
  },
  buttonBackgroundGroup: {
    marginTop: 12,
  },
  pdf: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    backgroundColor: Color.colorWhite,
  },
});

export default PDF;
