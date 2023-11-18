import * as React from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const A4 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.a4}>
      <View style={styles.a4Child} />
      <View style={styles.statusBar}>
        <View style={[styles.frame, styles.framePosition]} />
        <View style={styles.statusBar1}>
          <View style={styles.battery}>
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
          <View style={[styles.timeStyle, styles.framePosition]}>
            <Text style={styles.time}>9:41</Text>
          </View>
        </View>
      </View>
      <Pressable
        style={styles.wrapper}
        onPress={() => navigation.navigate("A3")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/group-1306.png")}
        />
      </Pressable>
      <Text style={styles.title1}>RULA</Text>
      <Image
        style={[styles.a4Item, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-6.png")}
      />
      <Image
        style={[styles.a4Inner, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/group-1326.png")}
      />
      <View style={styles.rectangleView} />
      <Text style={[styles.title11, styles.titleTypo]}>
        Part A : Arm and Wrist Analysis
      </Text>
      <Image
        style={[styles.layer8Icon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/layer-8.png")}
      />
      <Text style={[styles.title12, styles.titleTypo]}>
        Step 4 : Wrist Tight (Right)
      </Text>
      <View style={[styles.groupView, styles.groupLayout]} />
      <Image
        style={styles.component42}
        resizeMode="cover"
        source={require("../assets/component-4--7.png")}
      />
      <Image
        style={[styles.wristTwist1Icon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/wrist-twist1.png")}
      />
      <Image
        style={[styles.groupIcon, styles.groupLayout]}
        resizeMode="cover"
        source={require("../assets/group-1309.png")}
      />
      <Image
        style={[styles.wristTwist2Icon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/wrist-twist21.png")}
      />
      <Pressable
        style={[styles.component28, styles.componentLayout]}
        onPress={() => navigation.navigate("A3")}
      >
        <View style={[styles.buttonShape, styles.groupViewBorder]} />
        <View style={[styles.group, styles.groupPosition]}>
          <Text style={[styles.payWith, styles.titleTypo]}>Back</Text>
        </View>
      </Pressable>
      <Pressable
        style={[styles.component29, styles.componentLayout]}
        onPress={() => navigation.navigate("A5")}
      >
        <View style={[styles.buttonShape, styles.groupViewBorder]} />
        <View style={[styles.group1, styles.groupPosition]}>
          <Text style={[styles.payWith, styles.titleTypo]}>Next</Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  framePosition: {
    left: 0,
    top: 0,
    bottom: 0,
    position: "absolute",
  },
  iconPosition: {
    maxHeight: "100%",
    bottom: 4,
    position: "absolute",
  },
  iconLayout: {
    overflow: "hidden",
    maxWidth: "100%",
  },
  titleTypo: {
    color: Color.colorDimgray,
    fontFamily: FontFamily.sFProDisplay,
    fontWeight: "700",
    textAlign: "center",
  },
  groupLayout: {
    height: 195,
    width: "78.26%",
  },
  componentLayout: {
    height: 74,
    width: 154,
  },
  groupViewBorder: {
    borderColor: Color.colorDimgray,
    borderWidth: 1,
    borderStyle: "solid",
  },
  groupPosition: {
    height: 17,
    left: "50%",
    marginTop: -10.5,
    top: "50%",
    position: "absolute",
  },
  a4Child: {
    backgroundColor: Color.colorIndianred_100,
    height: 179,
    alignSelf: "stretch",
  },
  frame: {
    opacity: 0,
    right: 0,
    left: 0,
    top: 0,
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
  },
  cellularConnectionIcon: {
    top: 4,
    right: 50,
    width: 17,
  },
  time: {
    fontSize: FontSize.size_mini,
    fontWeight: "600",
    fontFamily: FontFamily.sFProText,
    width: 55,
    textAlign: "center",
    color: Color.colorWhite,
    letterSpacing: 0,
    height: 18,
    left: 0,
    top: 0,
    position: "absolute",
  },
  timeStyle: {
    width: 54,
    left: 0,
    top: 0,
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
  icon: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
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
  a4Item: {
    width: "4.83%",
    height: 20,
    marginTop: 9,
    marginRight: 154,
  },
  a4Inner: {
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
    width: "64.01%",
    fontSize: FontSize.size_lg,
    marginTop: -74,
  },
  layer8Icon: {
    width: "6.76%",
    height: 28,
    marginTop: 6,
    marginLeft: 254,
  },
  title12: {
    width: "49.03%",
    fontSize: FontSize.size_base,
    marginTop: -25,
  },
  groupView: {
    marginTop: 33,
    marginRight: 2,
    borderColor: Color.colorDimgray,
    borderWidth: 1,
    borderStyle: "solid",
  },
  component42: {
    width: 19,
    height: 19,
    marginTop: -185,
    marginRight: 287,
  },
  wristTwist1Icon: {
    width: "47.83%",
    height: 177,
    marginTop: -19,
  },
  groupIcon: {
    marginTop: 53,
    overflow: "hidden",
    maxWidth: "100%",
  },
  wristTwist2Icon: {
    width: "48.79%",
    height: 181,
    marginTop: -190,
  },
  buttonShape: {
    top: -1,
    left: -1,
    bottom: 0,
    borderColor: Color.colorDimgray,
    right: 0,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  payWith: {
    fontSize: FontSize.size_smi,
    letterSpacing: 0,
    color: Color.colorDimgray,
    left: 0,
    top: 0,
    position: "absolute",
  },
  group: {
    marginLeft: -14.5,
    width: 29,
  },
  component28: {
    marginTop: 62,
    marginRight: 189,
  },
  group1: {
    marginLeft: -15.5,
    width: 30,
  },
  component29: {
    marginLeft: 191,
    marginTop: -74,
  },
  a4: {
    flex: 1,
    alignItems: "center",
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default A4;
