import * as React from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, Color, FontFamily } from "../GlobalStyles";

const A8 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.a8}>
      <View style={styles.a8Child} />
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
        style={styles.a8Item}
        resizeMode="cover"
        source={require("../assets/group-1306.png")}
      />
      <Text style={styles.title1}>RULA</Text>
      <Image
        style={[styles.a8Inner, styles.iconLayout]}
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
        Step 8: Locate Wrist Position (Left)
      </Text>
      <View style={[styles.groupView, styles.groupViewLayout]} />
      <View style={styles.a8Inner1}>
        <View style={styles.groupChildPosition} />
      </View>
      <Image
        style={[styles.component44, styles.componentLayout2]}
        resizeMode="cover"
        source={require("../assets/component-4--7.png")}
      />
      <Image
        style={[styles.component54, styles.componentLayout1]}
        resizeMode="cover"
        source={require("../assets/component-4--7.png")}
      />
      <Image
        style={styles.wrist11Icon}
        resizeMode="cover"
        source={require("../assets/wrist1-1.png")}
      />
      <Image
        style={styles.wrist21Icon}
        resizeMode="cover"
        source={require("../assets/wrist2-1.png")}
      />
      <View style={[styles.buttonShape, styles.groupViewLayout]} />
      <View style={styles.a8Child1} />
      <Image
        style={[styles.component83, styles.componentLayout1]}
        resizeMode="cover"
        source={require("../assets/component-4--7.png")}
      />
      <Image
        style={[styles.component74, styles.componentLayout2]}
        resizeMode="cover"
        source={require("../assets/component-4--7.png")}
      />
      <Image
        style={styles.wrist41Icon}
        resizeMode="cover"
        source={require("../assets/wrist4-1.png")}
      />
      <Image
        style={styles.wrist31Icon}
        resizeMode="cover"
        source={require("../assets/wrist3-1.png")}
      />
      <Text style={[styles.title13, styles.titleTypo]}>
        Tick the following box if applicable
      </Text>
      <Image
        style={[styles.wrist51Icon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/wrist5-1.png")}
      />
      <View style={styles.group}>
        <Text style={[styles.payWith, styles.payTypo]}>
          Is wrist bent away from the midline?
        </Text>
      </View>
      <View style={styles.component1111}>
        <View style={styles.component1111Child} />
        <Image
          style={[styles.iconIonicIosCheckmark, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/icon-ionicioscheckmark.png")}
        />
      </View>
      <Pressable
        style={[styles.component216, styles.componentLayout]}
        onPress={() => navigation.navigate("A7")}
      >
        <View style={[styles.buttonShape1, styles.groupChildPosition]} />
        <View style={[styles.group1, styles.groupPosition]}>
          <Text style={[styles.payWith1, styles.payTypo]}>Back</Text>
        </View>
      </Pressable>
      <Pressable
        style={[styles.component217, styles.componentLayout]}
        onPress={() => navigation.navigate("A9")}
      >
        <View style={[styles.buttonShape1, styles.groupChildPosition]} />
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
    bottom: 0,
    top: 0,
    position: "absolute",
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
    alignSelf: "center",
    fontFamily: FontFamily.sFProDisplay,
    fontWeight: "700",
    textAlign: "center",
  },
  groupViewLayout: {
    marginLeft: 44,
    height: 195,
    width: 140,
    borderColor: Color.colorDimgray,
    borderWidth: 1,
    borderStyle: "solid",
  },
  componentLayout2: {
    height: 19,
    width: 19,
    marginLeft: 54,
  },
  componentLayout1: {
    marginLeft: 239,
    width: "4.59%",
    height: 19,
    overflow: "hidden",
    maxWidth: "100%",
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
  groupChildPosition: {
    left: -1,
    top: -1,
    borderColor: Color.colorDimgray,
    borderWidth: 1,
    borderStyle: "solid",
    bottom: 0,
    right: 0,
    position: "absolute",
  },
  groupPosition: {
    height: 17,
    left: "50%",
    marginTop: -10.5,
    top: "50%",
    position: "absolute",
  },
  a8Child: {
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
  a8Item: {
    width: 43,
    marginTop: 35,
    marginLeft: 14,
    height: 44,
  },
  title1: {
    width: "27.29%",
    fontSize: FontSize.size_21xl,
    marginTop: -42,
    alignSelf: "center",
    fontFamily: FontFamily.sFProDisplay,
    fontWeight: "700",
    textAlign: "center",
    color: Color.colorWhite,
  },
  a8Inner: {
    width: "4.83%",
    height: 20,
    marginTop: 9,
    marginLeft: 208,
  },
  groupIcon: {
    width: "71.98%",
    height: 12,
    marginTop: -16,
    alignSelf: "center",
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
    alignSelf: "center",
    fontFamily: FontFamily.sFProDisplay,
    fontWeight: "700",
    textAlign: "center",
  },
  layer8Icon: {
    width: 28,
    height: 28,
    marginTop: 6,
    marginLeft: 349,
  },
  title12: {
    width: "63.04%",
    marginTop: -25,
  },
  groupView: {
    marginTop: 33,
  },
  a8Inner1: {
    width: 139,
    height: 194,
    marginTop: -194,
    marginLeft: 230,
  },
  component44: {
    marginLeft: 54,
    marginTop: -185,
  },
  component54: {
    marginTop: -19,
  },
  wrist11Icon: {
    width: 125,
    marginTop: 30,
    height: 95,
    marginLeft: 54,
  },
  wrist21Icon: {
    width: 131,
    marginTop: -85,
    marginLeft: 234,
    height: 95,
  },
  buttonShape: {
    marginTop: 45,
  },
  a8Child1: {
    marginTop: -195,
    marginLeft: 229,
    height: 195,
    width: 140,
    borderColor: Color.colorDimgray,
    borderWidth: 1,
    borderStyle: "solid",
  },
  component83: {
    marginTop: -185,
  },
  component74: {
    marginTop: -19,
    marginLeft: 54,
  },
  wrist41Icon: {
    width: 134,
    height: 101,
    marginTop: 13,
    marginLeft: 235,
  },
  wrist31Icon: {
    width: 121,
    height: 88,
    marginTop: -90,
    marginLeft: 54,
  },
  title13: {
    marginTop: 92,
    width: "64.01%",
    fontSize: FontSize.size_base,
  },
  wrist51Icon: {
    width: "29.23%",
    height: 109,
    marginTop: 21,
    marginLeft: 147,
  },
  payWith: {
    marginTop: -19.5,
    textAlign: "left",
    width: 373,
    height: 39,
    top: "50%",
  },
  group: {
    width: "89.86%",
    marginTop: 17,
    marginLeft: 60,
    height: 39,
  },
  component1111Child: {
    borderColor: Color.colorDimgray,
    borderWidth: 1,
    borderStyle: "solid",
    left: 0,
    bottom: 0,
    right: 0,
    top: 0,
    position: "absolute",
    backgroundColor: Color.colorWhite,
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
  component1111: {
    width: 11,
    marginTop: -38,
    marginLeft: 35,
    height: 11,
  },
  buttonShape1: {
    backgroundColor: Color.colorWhite,
  },
  payWith1: {
    textAlign: "center",
    top: 0,
  },
  group1: {
    marginLeft: -14.5,
    width: 29,
  },
  component216: {
    marginTop: 36,
    marginLeft: 36,
  },
  group2: {
    marginLeft: -15.5,
    width: 30,
  },
  component217: {
    marginLeft: 226,
    marginTop: -74,
  },
  a8: {
    flex: 1,
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default A8;
