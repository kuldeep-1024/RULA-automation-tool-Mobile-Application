import * as React from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, Color, FontFamily } from "../GlobalStyles";

const A7 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.a7}>
      <View style={styles.a7Child} />
      <View style={styles.statusBar}>
        <View style={[styles.frame, styles.framePosition]} />
        <View style={styles.statusBar1}>
          <View style={styles.battery}>
            <Image
              style={styles.capIcon}
              resizeMode="cover"
              source={require("../assets/cap.png")}
            />
            <View style={[styles.capacity, styles.capacityPosition]} />
          </View>
          <Image
            style={[styles.wifiIcon, styles.iconLayout1]}
            resizeMode="cover"
            source={require("../assets/wifi.png")}
          />
          <Image
            style={[styles.cellularConnectionIcon, styles.iconLayout1]}
            resizeMode="cover"
            source={require("../assets/cellular-connection.png")}
          />
          <View style={[styles.timeStyle, styles.framePosition]}>
            <Text style={[styles.time, styles.timeFlexBox]}>9:41</Text>
          </View>
        </View>
      </View>
      <Image
        style={styles.a7Item}
        resizeMode="cover"
        source={require("../assets/group-1306.png")}
      />
      <Text style={styles.title1}>RULA</Text>
      <Image
        style={[styles.a7Inner, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-6.png")}
      />
      <Image
        style={[styles.groupIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/group-1326.png")}
      />
      <View style={styles.rectangleView} />
      <Text style={styles.title11}>Part A : Arm and Wrist Analysis</Text>
      <Image
        style={styles.layer8Icon}
        resizeMode="cover"
        source={require("../assets/layer-8.png")}
      />
      <Text style={[styles.title12, styles.titleTypo]}>
        Step 7: Locate Lower Arm Position (Left)
      </Text>
      <Image
        style={[styles.a7Child1, styles.childLayout]}
        resizeMode="cover"
        source={require("../assets/group-1301.png")}
      />
      <Image
        style={styles.a7Child2}
        resizeMode="cover"
        source={require("../assets/group-1304.png")}
      />
      <Image
        style={[styles.a7Child3, styles.childLayout]}
        resizeMode="cover"
        source={require("../assets/group-1305.png")}
      />
      <Text style={[styles.title13, styles.titleTypo]}>
        Tick the following box if applicable
      </Text>
      <Image
        style={[styles.lowerarm4Icon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/lowerarm4.png")}
      />
      <View style={styles.component1116Parent}>
        <View style={styles.component1116}>
          <View style={[styles.component1116Child, styles.buttonShapeBorder]} />
          <Image
            style={[styles.iconIonicIosCheckmark, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/icon-ionicioscheckmark.png")}
          />
        </View>
        <View style={styles.group}>
          <Text
            style={[styles.payWith, styles.payTypo]}
          >{`Is either arm working across midline or out to side 
of body?`}</Text>
        </View>
      </View>
      <Pressable
        style={[styles.component228, styles.componentLayout]}
        onPress={() => navigation.navigate("A6")}
      >
        <View style={[styles.buttonShape, styles.buttonShapeBorder]} />
        <View style={[styles.group1, styles.groupPosition]}>
          <Text style={[styles.payWith1, styles.payTypo]}>Back</Text>
        </View>
      </Pressable>
      <Pressable
        style={[styles.component229, styles.componentLayout]}
        onPress={() => navigation.navigate("A8")}
      >
        <View style={[styles.buttonShape, styles.buttonShapeBorder]} />
        <View style={[styles.group2, styles.groupPosition]}>
          <Text style={[styles.payWith1, styles.payTypo]}>Next</Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  framePosition: {
    left: 0,
    top: 0,
  },
  capacityPosition: {
    bottom: 2,
    top: 2,
  },
  iconLayout1: {
    maxHeight: "100%",
    position: "absolute",
  },
  timeFlexBox: {
    textAlign: "center",
    top: 0,
  },
  iconLayout: {
    overflow: "hidden",
    maxWidth: "100%",
  },
  titleTypo: {
    fontSize: FontSize.size_base,
    color: Color.colorDimgray,
    fontFamily: FontFamily.sFProDisplay,
    fontWeight: "700",
    textAlign: "center",
  },
  childLayout: {
    marginRight: 184,
    height: 195,
    width: 140,
  },
  buttonShapeBorder: {
    borderColor: Color.colorDimgray,
    borderWidth: 1,
    borderStyle: "solid",
    bottom: 0,
    right: 0,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  payTypo: {
    fontSize: FontSize.size_smi,
    color: Color.colorDimgray,
    fontFamily: FontFamily.sFProDisplay,
    fontWeight: "700",
    letterSpacing: 0,
    left: 0,
    position: "absolute",
  },
  componentLayout: {
    height: 74,
    width: 154,
  },
  groupPosition: {
    height: 17,
    left: "50%",
    marginTop: -10.5,
    top: "50%",
    position: "absolute",
  },
  a7Child: {
    backgroundColor: Color.colorIndianred_100,
    height: 179,
    alignSelf: "stretch",
  },
  frame: {
    opacity: 0,
    bottom: 0,
    left: 0,
    top: 0,
    position: "absolute",
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
    left: 2,
    borderRadius: 1,
    width: 18,
    position: "absolute",
    bottom: 2,
    top: 2,
    backgroundColor: Color.colorWhite,
  },
  battery: {
    marginTop: -5.67,
    borderRadius: 3,
    borderColor: Color.colorWhite,
    width: 24,
    height: 11,
    borderWidth: 1,
    borderStyle: "solid",
    top: "50%",
    right: 0,
    position: "absolute",
  },
  wifiIcon: {
    top: 3,
    right: 29,
    width: 15,
    bottom: 4,
    maxHeight: "100%",
  },
  cellularConnectionIcon: {
    top: 4,
    right: 50,
    width: 17,
    bottom: 4,
    maxHeight: "100%",
  },
  time: {
    fontSize: FontSize.size_mini,
    fontWeight: "600",
    fontFamily: FontFamily.sFProText,
    width: 55,
    color: Color.colorWhite,
    letterSpacing: 0,
    textAlign: "center",
    height: 18,
    left: 0,
    position: "absolute",
  },
  timeStyle: {
    width: 54,
    bottom: 0,
    left: 0,
    top: 0,
    position: "absolute",
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
  a7Item: {
    width: 43,
    marginTop: 35,
    marginRight: 343,
    height: 44,
  },
  title1: {
    width: "27.29%",
    fontSize: FontSize.size_21xl,
    marginTop: -42,
    fontFamily: FontFamily.sFProDisplay,
    fontWeight: "700",
    textAlign: "center",
    color: Color.colorWhite,
  },
  a7Inner: {
    width: "4.83%",
    height: 20,
    marginTop: 9,
    marginRight: 22,
  },
  groupIcon: {
    width: "71.98%",
    height: 12,
    marginTop: -16,
  },
  rectangleView: {
    height: 96,
    marginTop: 20,
    alignSelf: "stretch",
    backgroundColor: Color.colorWhite,
  },
  title11: {
    fontSize: FontSize.size_lg,
    marginTop: -74,
    color: Color.colorDimgray,
    width: "64.01%",
    fontFamily: FontFamily.sFProDisplay,
    fontWeight: "700",
    textAlign: "center",
  },
  layer8Icon: {
    width: 28,
    height: 28,
    marginTop: 6,
    marginLeft: 354,
  },
  title12: {
    width: "73.19%",
    marginTop: -25,
  },
  a7Child1: {
    marginTop: 34,
  },
  a7Child2: {
    marginTop: -195,
    marginLeft: 186,
    height: 195,
    width: 140,
  },
  a7Child3: {
    marginTop: 14,
  },
  title13: {
    marginTop: 37,
    width: "64.01%",
    fontSize: FontSize.size_base,
  },
  lowerarm4Icon: {
    width: "33.33%",
    height: 104,
    marginTop: 25,
  },
  component1116Child: {
    left: 0,
    top: 0,
    borderColor: Color.colorDimgray,
  },
  iconIonicIosCheckmark: {
    right: 1,
    left: 1,
    maxHeight: "100%",
    position: "absolute",
    bottom: 2,
    top: 2,
    opacity: 0,
  },
  component1116: {
    width: 11,
    marginTop: -10.5,
    height: 11,
    top: "50%",
    left: 0,
    position: "absolute",
  },
  payWith: {
    textAlign: "left",
    width: 373,
    marginTop: -19.5,
    fontSize: FontSize.size_smi,
    height: 39,
    top: "50%",
  },
  group: {
    marginLeft: -173.5,
    width: 372,
    left: "50%",
    marginTop: -19.5,
    height: 39,
    top: "50%",
    position: "absolute",
  },
  component1116Parent: {
    width: "95.89%",
    marginTop: 19,
    marginLeft: 53,
    height: 39,
  },
  buttonShape: {
    top: -1,
    left: -1,
  },
  payWith1: {
    textAlign: "center",
    top: 0,
  },
  group1: {
    marginLeft: -14.5,
    width: 29,
  },
  component228: {
    marginTop: 26,
    marginRight: 189,
  },
  group2: {
    marginLeft: -15.5,
    width: 30,
  },
  component229: {
    marginLeft: 191,
    marginTop: -74,
  },
  a7: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    backgroundColor: Color.colorWhite,
  },
});

export default A7;
