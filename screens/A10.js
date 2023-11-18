import * as React from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const A10 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.a10}>
      <View style={styles.a10Child} />
      <View style={styles.statusBar}>
        <View style={[styles.frame, styles.childPosition]} />
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
          <View style={[styles.timeStyle, styles.childPosition]}>
            <Text style={styles.time}>9:41</Text>
          </View>
        </View>
      </View>
      <Pressable
        style={styles.wrapper}
        onPress={() => navigation.navigate("A9")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/group-1306.png")}
        />
      </Pressable>
      <Text style={styles.title1}>RULA</Text>
      <Image
        style={[styles.a10Item, styles.a10Layout]}
        resizeMode="cover"
        source={require("../assets/ellipse-6.png")}
      />
      <Image
        style={[styles.a10Inner, styles.a10Layout]}
        resizeMode="cover"
        source={require("../assets/group-1326.png")}
      />
      <View style={styles.rectangleView} />
      <Text style={[styles.title11, styles.titleTypo3]}>
        Part A : Arm and Wrist Analysis
      </Text>
      <Text
        style={[styles.title12, styles.title12Typo]}
      >{`Step 10: Arm & wrist - select the force and load that most reflects the working situation`}</Text>
      <Image
        style={styles.layer8Icon}
        resizeMode="cover"
        source={require("../assets/layer-8.png")}
      />
      <Image
        style={[styles.groupIcon, styles.groupIconLayout]}
        resizeMode="cover"
        source={require("../assets/group-1310.png")}
      />
      <Image
        style={[styles.a10Child1, styles.groupIconLayout]}
        resizeMode="cover"
        source={require("../assets/group-1310.png")}
      />
      <Text style={[styles.title13, styles.titleTypo1]}>Score 0</Text>
      <Text style={[styles.title14, styles.titleTypo1]}>Score 1</Text>
      <Text style={styles.noResistanceLess}>{`- No resistance

- Less than 2 kg intermittent load or force`}</Text>
      <Text style={[styles.kgIntermittentLoad, styles.loadTypo]}>
        - 2-10 kg intermittent load or force
      </Text>
      <View style={[styles.groupParent, styles.groupLayout]}>
        <Image
          style={[styles.groupChild, styles.a10Layout]}
          resizeMode="cover"
          source={require("../assets/group-1314.png")}
        />
        <Text style={[styles.title15, styles.titleTypo]}>Score 2</Text>
        <Text
          style={[styles.kgStaticLoad, styles.loadTypo]}
        >{`- 2-10 kg static load

- 2-10 kg repeated load or force

- 10 kg or more, intermittent load or force`}</Text>
      </View>
      <View style={[styles.groupContainer, styles.groupLayout]}>
        <Image
          style={[styles.groupChild, styles.a10Layout]}
          resizeMode="cover"
          source={require("../assets/group-1314.png")}
        />
        <Text style={[styles.title16, styles.titleTypo]}>Score 3</Text>
        <Text
          style={[styles.moreThan10, styles.loadTypo]}
        >{`- More than 10 kg static load

- 10+ kg repeated load or force

- Shock or forces with rapid buildup`}</Text>
      </View>
      <Text style={[styles.title17, styles.titleTypo2]}>
        Tick the following options if applicable
      </Text>
      <View style={styles.group}>
        <Text style={[styles.payWith, styles.title12Typo]}>
          Posture is mainly static, e.g. held for longer than 1 minute or
          repeated more than 4 times per minute.
        </Text>
      </View>
      <View style={styles.component1112}>
        <View style={[styles.component1112Child, styles.buttonShapeBorder]} />
        <Image
          style={[styles.iconIonicIosCheckmark, styles.a10Layout]}
          resizeMode="cover"
          source={require("../assets/icon-ionicioscheckmark.png")}
        />
      </View>
      <Pressable
        style={[styles.component220, styles.componentLayout]}
        onPress={() => navigation.navigate("A9")}
      >
        <View style={[styles.buttonShape, styles.buttonShapeBorder]} />
        <View style={[styles.group1, styles.groupPosition]}>
          <Text style={[styles.payWith1, styles.titleTypo3]}>Back</Text>
        </View>
      </Pressable>
      <Pressable
        style={[styles.component221, styles.componentLayout]}
        onPress={() => navigation.navigate("B11")}
      >
        <View style={[styles.buttonShape, styles.buttonShapeBorder]} />
        <View style={[styles.group2, styles.groupPosition]}>
          <Text style={[styles.payWith1, styles.titleTypo3]}>Next</Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  childPosition: {
    left: 0,
    top: 0,
  },
  capacityPosition: {
    top: 2,
    bottom: 2,
  },
  iconLayout: {
    maxHeight: "100%",
    position: "absolute",
  },
  a10Layout: {
    overflow: "hidden",
    maxWidth: "100%",
  },
  titleTypo3: {
    color: Color.colorDimgray,
    fontFamily: FontFamily.sFProDisplay,
    fontWeight: "700",
    textAlign: "center",
  },
  title12Typo: {
    textAlign: "left",
    color: Color.colorDimgray,
    fontFamily: FontFamily.sFProDisplay,
    fontWeight: "700",
  },
  groupIconLayout: {
    height: 141,
    width: 140,
  },
  titleTypo1: {
    width: "13.77%",
    fontSize: FontSize.size_base,
    color: Color.colorDimgray,
    fontFamily: FontFamily.sFProDisplay,
    fontWeight: "700",
    textAlign: "center",
  },
  loadTypo: {
    width: 99,
    fontSize: FontSize.size_xs_5,
    textAlign: "left",
    color: Color.colorDimgray,
    fontFamily: FontFamily.sFProDisplay,
    fontWeight: "700",
  },
  groupLayout: {
    height: 194,
    width: 139,
  },
  titleTypo: {
    marginTop: -90,
    fontSize: FontSize.size_base,
    color: Color.colorDimgray,
    fontFamily: FontFamily.sFProDisplay,
    fontWeight: "700",
    textAlign: "center",
    top: "50%",
    position: "absolute",
  },
  titleTypo2: {
    fontSize: FontSize.size_base,
    alignSelf: "center",
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
  a10Child: {
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
    bottom: 2,
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
  a10Item: {
    width: "4.83%",
    height: 20,
    marginTop: 9,
    marginLeft: 252,
  },
  a10Inner: {
    width: "71.98%",
    height: 12,
    marginTop: -16,
    alignSelf: "center",
  },
  rectangleView: {
    height: 110,
    marginTop: 20,
    alignSelf: "stretch",
    backgroundColor: Color.colorWhite,
  },
  title11: {
    width: "64.01%",
    fontSize: FontSize.size_lg,
    marginTop: -88,
    alignSelf: "center",
  },
  title12: {
    width: "83.33%",
    marginTop: 14,
    fontSize: FontSize.size_base,
    alignSelf: "center",
  },
  layer8Icon: {
    width: 28,
    height: 28,
    marginTop: -35,
    marginLeft: 379,
  },
  groupIcon: {
    marginLeft: 45,
    marginTop: 35,
  },
  a10Child1: {
    marginTop: -141,
    marginLeft: 230,
  },
  title13: {
    marginTop: -133,
    marginLeft: 89,
  },
  title14: {
    marginTop: -21,
    marginLeft: 279,
  },
  noResistanceLess: {
    width: "23.91%",
    marginTop: 17,
    marginLeft: 68,
    fontSize: FontSize.size_xs_5,
    textAlign: "left",
    color: Color.colorDimgray,
    fontFamily: FontFamily.sFProDisplay,
    fontWeight: "700",
  },
  kgIntermittentLoad: {
    marginTop: -75,
    marginLeft: 254,
  },
  groupChild: {
    right: -1,
    bottom: -1,
    maxHeight: "100%",
    position: "absolute",
    left: 0,
    top: 0,
  },
  title15: {
    left: "31.65%",
  },
  kgStaticLoad: {
    right: 17,
    bottom: 2,
    position: "absolute",
  },
  groupParent: {
    marginTop: 73,
    marginLeft: 45,
  },
  title16: {
    left: "35.25%",
  },
  moreThan10: {
    right: 12,
    bottom: 17,
    position: "absolute",
  },
  groupContainer: {
    marginTop: -194,
    marginLeft: 230,
  },
  title17: {
    width: "71.26%",
    marginTop: 38,
    color: Color.colorDimgray,
    fontFamily: FontFamily.sFProDisplay,
    fontWeight: "700",
    textAlign: "center",
  },
  payWith: {
    fontSize: FontSize.size_smi_5,
    lineHeight: 17,
    letterSpacing: 0,
    left: 0,
    top: 0,
    position: "absolute",
  },
  group: {
    width: "72.46%",
    height: 33,
    marginTop: 21,
    marginLeft: 60,
  },
  component1112Child: {
    left: 0,
    top: 0,
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
  component1112: {
    width: 11,
    marginTop: -23,
    marginLeft: 35,
    height: 11,
  },
  buttonShape: {
    top: -1,
    left: -1,
  },
  payWith1: {
    fontSize: FontSize.size_smi,
    letterSpacing: 0,
    left: 0,
    top: 0,
    position: "absolute",
  },
  group1: {
    marginLeft: -14.5,
    width: 29,
  },
  component220: {
    marginTop: 68,
    marginLeft: 36,
  },
  group2: {
    marginLeft: -15.5,
    width: 30,
  },
  component221: {
    marginTop: -74,
    marginLeft: 226,
  },
  a10: {
    flex: 1,
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default A10;
