import * as React from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, Color, FontFamily } from "../GlobalStyles";

const A6 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.a6}>
      <View style={styles.a6Child} />
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
            style={[styles.wifiIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/wifi.png")}
          />
          <Image
            style={[styles.cellularConnectionIcon, styles.iconLayout]}
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
        onPress={() => navigation.navigate("A5")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/group-13061.png")}
        />
      </Pressable>
      <Text style={styles.title1}>RULA</Text>
      <Image
        style={[styles.a6Item, styles.leftIconLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-6.png")}
      />
      <Image
        style={[styles.a6Inner, styles.leftIconLayout]}
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
        Step 6 : Locate Upper Arm Position (Left)
      </Text>
      <View style={[styles.groupView, styles.groupViewLayout]} />
      <View style={styles.a6Inner1}>
        <View style={styles.groupChildPosition} />
      </View>
      <Image
        style={[styles.component42, styles.componentSpaceBlock1]}
        resizeMode="cover"
        source={require("../assets/component-4--7.png")}
      />
      <Image
        style={[styles.component52, styles.componentSpaceBlock]}
        resizeMode="cover"
        source={require("../assets/component-4--7.png")}
      />
      <Image
        style={[styles.upperarm1LeftIcon, styles.leftIconLayout]}
        resizeMode="cover"
        source={require("../assets/upperarm1-left.png")}
      />
      <Image
        style={styles.upperarm2LeftIcon}
        resizeMode="cover"
        source={require("../assets/upperarm2-left.png")}
      />
      <View style={[styles.buttonShape, styles.groupViewLayout]} />
      <View style={styles.a6Child1} />
      <Image
        style={[styles.component82, styles.componentLayout2]}
        resizeMode="cover"
        source={require("../assets/component-4--7.png")}
      />
      <Image
        style={[styles.component72, styles.componentSpaceBlock]}
        resizeMode="cover"
        source={require("../assets/component-4--7.png")}
      />
      <Image
        style={[styles.upperarm3LeftIcon, styles.leftIconLayout]}
        resizeMode="cover"
        source={require("../assets/upperarm3-left.png")}
      />
      <Image
        style={styles.upperarm4LeftIcon}
        resizeMode="cover"
        source={require("../assets/upperarm4-left.png")}
      />
      <View style={[styles.groupView, styles.groupViewLayout]} />
      <Image
        style={[styles.component42, styles.componentSpaceBlock1]}
        resizeMode="cover"
        source={require("../assets/component-4--7.png")}
      />
      <Image
        style={styles.upperarm5LeftIcon}
        resizeMode="cover"
        source={require("../assets/upperarm5-left.png")}
      />
      <Text style={[styles.title13, styles.titleTypo]}>
        Tick the following options if applicable
      </Text>
      <View style={[styles.group, styles.groupLayout]}>
        <Text style={[styles.payWith, styles.payTypo]}>Shoulder is raised</Text>
      </View>
      <View style={[styles.component116, styles.componentLayout1]}>
        <View style={styles.component116Child} />
        <Image
          style={[styles.iconIonicIosCheckmark, styles.leftIconLayout]}
          resizeMode="cover"
          source={require("../assets/icon-ionicioscheckmark.png")}
        />
      </View>
      <Text
        style={[styles.payWith1, styles.payTypo]}
      >{`Upper Arm is abducted(away from the side of the 
body)`}</Text>
      <View style={[styles.component114, styles.componentLayout1]}>
        <View style={styles.component116Child} />
        <Image
          style={[styles.iconIonicIosCheckmark, styles.leftIconLayout]}
          resizeMode="cover"
          source={require("../assets/icon-ionicioscheckmark.png")}
        />
      </View>
      <View style={[styles.group1, styles.groupLayout]}>
        <Text style={[styles.payWith, styles.payTypo]}>
          Leaning or supporting the weight of the arm
        </Text>
      </View>
      <View style={[styles.component116, styles.componentLayout1]}>
        <View style={styles.component116Child} />
        <Image
          style={[styles.iconIonicIosCheckmark, styles.leftIconLayout]}
          resizeMode="cover"
          source={require("../assets/icon-ionicioscheckmark.png")}
        />
      </View>
      <Pressable
        style={[styles.component212, styles.componentLayout]}
        onPress={() => navigation.navigate("A5")}
      >
        <View style={[styles.buttonShape2, styles.groupChildPosition]} />
        <View style={[styles.group2, styles.groupPosition]}>
          <Text style={styles.payWith3}>Back</Text>
        </View>
      </Pressable>
      <Pressable
        style={[styles.component213, styles.componentLayout]}
        onPress={() => navigation.navigate("A7")}
      >
        <View style={[styles.buttonShape2, styles.groupChildPosition]} />
        <View style={[styles.group3, styles.groupPosition]}>
          <Text style={styles.payWith3}>Next</Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  framePosition: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  capacityPosition: {
    bottom: 2,
    top: 2,
  },
  iconLayout: {
    maxHeight: "100%",
    position: "absolute",
  },
  leftIconLayout: {
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
  componentSpaceBlock1: {
    marginLeft: 54,
    width: 19,
  },
  componentSpaceBlock: {
    marginTop: -19,
    height: 19,
  },
  componentLayout2: {
    width: "4.59%",
    marginLeft: 239,
    overflow: "hidden",
    maxWidth: "100%",
  },
  groupLayout: {
    height: 17,
    marginLeft: 60,
  },
  payTypo: {
    textAlign: "left",
    fontSize: FontSize.size_smi,
    color: Color.colorDimgray,
    fontFamily: FontFamily.sFProDisplay,
    fontWeight: "700",
    letterSpacing: 0,
  },
  componentLayout1: {
    marginLeft: 35,
    width: 11,
    height: 11,
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
    left: "50%",
    marginTop: -10.5,
    height: 17,
    top: "50%",
    position: "absolute",
  },
  a6Child: {
    backgroundColor: Color.colorIndianred_100,
    height: 179,
    alignSelf: "stretch",
  },
  frame: {
    opacity: 0,
    bottom: 0,
    left: 0,
    top: 0,
    right: 0,
    backgroundColor: Color.colorWhite,
  },
  capIcon: {
    width: 1,
    height: 4,
    opacity: 0.4,
    marginTop: -2,
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
    bottom: 0,
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
    marginLeft: 14,
    marginTop: 35,
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
  a6Item: {
    width: "4.83%",
    height: 20,
    marginTop: 9,
    marginLeft: 164,
  },
  a6Inner: {
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
    width: "64.01%",
    fontSize: FontSize.size_lg,
    marginTop: -74,
    color: Color.colorDimgray,
    alignSelf: "center",
    fontFamily: FontFamily.sFProDisplay,
    fontWeight: "700",
    textAlign: "center",
  },
  layer8Icon: {
    width: 28,
    height: 28,
    marginTop: 6,
    marginLeft: 373,
  },
  title12: {
    width: "74.64%",
    marginTop: -25,
  },
  groupView: {
    marginTop: 33,
  },
  a6Inner1: {
    width: 139,
    height: 194,
    marginTop: -194,
    marginLeft: 230,
  },
  component42: {
    marginTop: -185,
    height: 19,
  },
  component52: {
    marginLeft: 239,
    width: "4.59%",
    overflow: "hidden",
    maxWidth: "100%",
  },
  upperarm1LeftIcon: {
    width: "20.29%",
    height: 157,
    marginLeft: 90,
    marginTop: -2,
  },
  upperarm2LeftIcon: {
    width: 122,
    height: 153,
    marginTop: -154,
    marginLeft: 239,
  },
  buttonShape: {
    marginTop: 26,
  },
  a6Child1: {
    marginTop: -195,
    marginLeft: 229,
    height: 195,
    width: 140,
    borderColor: Color.colorDimgray,
    borderWidth: 1,
    borderStyle: "solid",
  },
  component82: {
    marginLeft: 239,
    marginTop: -185,
    height: 19,
  },
  component72: {
    marginLeft: 54,
    width: 19,
  },
  upperarm3LeftIcon: {
    width: "23.19%",
    height: 152,
    marginLeft: 73,
  },
  upperarm4LeftIcon: {
    width: 117,
    height: 143,
    marginTop: -148,
    marginLeft: 244,
  },
  upperarm5LeftIcon: {
    width: 129,
    height: 122,
    marginTop: 13,
    marginLeft: 50,
  },
  title13: {
    width: "71.26%",
    marginTop: 70,
  },
  payWith: {
    left: 0,
    top: 0,
    position: "absolute",
    textAlign: "left",
  },
  group: {
    width: "26.33%",
    marginTop: 12,
    marginLeft: 60,
  },
  component116Child: {
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
  component116: {
    marginTop: -12,
  },
  payWith1: {
    width: "83.33%",
    height: 30,
    marginTop: 14,
    marginLeft: 60,
  },
  component114: {
    marginTop: -20,
  },
  group1: {
    width: "66.18%",
    marginTop: 18,
    marginLeft: 60,
  },
  buttonShape2: {
    backgroundColor: Color.colorWhite,
  },
  payWith3: {
    fontSize: FontSize.size_smi,
    color: Color.colorDimgray,
    fontFamily: FontFamily.sFProDisplay,
    fontWeight: "700",
    textAlign: "center",
    letterSpacing: 0,
    left: 0,
    top: 0,
    position: "absolute",
  },
  group2: {
    marginLeft: -14.5,
    width: 29,
  },
  component212: {
    marginLeft: 36,
    marginTop: 35,
  },
  group3: {
    marginLeft: -15.5,
    width: 30,
  },
  component213: {
    marginLeft: 226,
    marginTop: -74,
  },
  a6: {
    flex: 1,
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default A6;
