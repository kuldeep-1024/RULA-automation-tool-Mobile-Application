import * as React from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const A5 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.a5}>
      <View style={styles.a5Child} />
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
        onPress={() => navigation.navigate("A4")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/group-13061.png")}
        />
      </Pressable>
      <Text style={styles.title1}>RULA</Text>
      <Image
        style={[styles.a5Item, styles.a5ItemLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-6.png")}
      />
      <Image
        style={[styles.a5Inner, styles.a5ItemLayout]}
        resizeMode="cover"
        source={require("../assets/group-1326.png")}
      />
      <View style={styles.rectangleView} />
      <Text style={[styles.title11, styles.titleTypo3]}>
        Part A : Arm and Wrist Analysis
      </Text>
      <Text
        style={[styles.title12, styles.title12Typo]}
      >{`Step 5: Arm & wrist - select the force and load that most reflects the working situation (Right)`}</Text>
      <Image
        style={styles.layer8Icon}
        resizeMode="cover"
        source={require("../assets/layer-8.png")}
      />
      <View style={[styles.groupParent, styles.groupSpaceBlock1]}>
        <Image
          style={[styles.groupChild, styles.groupPosition1]}
          resizeMode="cover"
          source={require("../assets/group-1310.png")}
        />
        <Text style={[styles.title13, styles.titleTypo1]}>Score 0</Text>
      </View>
      <View style={[styles.groupContainer, styles.groupSpaceBlock]}>
        <Image
          style={[styles.groupChild, styles.groupPosition1]}
          resizeMode="cover"
          source={require("../assets/group-1310.png")}
        />
        <Text style={[styles.title14, styles.titleTypo]}>Score 1</Text>
      </View>
      <Text style={styles.noResistanceLess}>{`- No resistance

- Less than 2 kg intermittent load or force`}</Text>
      <Text style={[styles.kgIntermittentLoad, styles.loadTypo]}>
        - 2-10 kg intermittent load or force
      </Text>
      <View style={[styles.groupView, styles.groupSpaceBlock1]}>
        <Image
          style={[styles.groupInner, styles.groupPosition1]}
          resizeMode="cover"
          source={require("../assets/group-1314.png")}
        />
        <Text style={[styles.title15, styles.titleTypo1]}>Score 2</Text>
        <Text
          style={[styles.kgStaticLoad, styles.loadTypo]}
        >{`- 2-10 kg static load

- 2-10 kg repeated load or force

- 10 kg or more, intermittent load or force`}</Text>
      </View>
      <View style={[styles.groupParent1, styles.groupSpaceBlock]}>
        <Image
          style={[styles.groupChild, styles.groupPosition1]}
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
        Tick the following option if applicable
      </Text>
      <View style={styles.group}>
        <Text style={[styles.payWith, styles.title12Typo]}>
          Posture is mainly static, e.g. held for longer than 1 minute or
          repeated more than 4 times per minute.
        </Text>
      </View>
      <View style={styles.component116}>
        <View style={[styles.component116Child, styles.buttonShapeBorder]} />
        <Image
          style={[styles.iconIonicIosCheckmark, styles.a5ItemLayout]}
          resizeMode="cover"
          source={require("../assets/icon-ionicioscheckmark.png")}
        />
      </View>
      <Pressable
        style={[styles.component210, styles.componentLayout]}
        onPress={() => navigation.navigate("A4")}
      >
        <View style={[styles.buttonShape, styles.buttonShapeBorder]} />
        <View style={[styles.group1, styles.groupPosition]}>
          <Text style={[styles.payWith1, styles.titleTypo3]}>Back</Text>
        </View>
      </Pressable>
      <Pressable
        style={[styles.component211, styles.componentLayout]}
        onPress={() => navigation.navigate("A6")}
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
  framePosition: {
    left: 0,
    top: 0,
  },
  capacityPosition: {
    bottom: 2,
    top: 2,
  },
  iconLayout: {
    maxHeight: "100%",
    position: "absolute",
  },
  a5ItemLayout: {
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
  groupSpaceBlock1: {
    marginLeft: 45,
    width: 139,
  },
  groupPosition1: {
    right: -1,
    overflow: "hidden",
    maxWidth: "100%",
    maxHeight: "100%",
    left: 0,
    top: 0,
    position: "absolute",
  },
  titleTypo1: {
    left: "31.65%",
    fontSize: FontSize.size_base,
    color: Color.colorDimgray,
    fontFamily: FontFamily.sFProDisplay,
    fontWeight: "700",
    textAlign: "center",
    top: "50%",
    position: "absolute",
  },
  groupSpaceBlock: {
    marginLeft: 230,
    width: 139,
  },
  titleTypo: {
    left: "35.25%",
    fontSize: FontSize.size_base,
    color: Color.colorDimgray,
    fontFamily: FontFamily.sFProDisplay,
    fontWeight: "700",
    textAlign: "center",
    top: "50%",
    position: "absolute",
  },
  loadTypo: {
    width: 99,
    fontSize: FontSize.size_xs_5,
    textAlign: "left",
    color: Color.colorDimgray,
    fontFamily: FontFamily.sFProDisplay,
    fontWeight: "700",
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
  a5Child: {
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
  a5Item: {
    width: "4.83%",
    height: 20,
    marginTop: 9,
    marginLeft: 142,
  },
  a5Inner: {
    width: "71.98%",
    height: 12,
    marginTop: -16,
    alignSelf: "center",
  },
  rectangleView: {
    height: 133,
    marginTop: 20,
    alignSelf: "stretch",
    backgroundColor: Color.colorWhite,
  },
  title11: {
    width: "64.01%",
    fontSize: FontSize.size_lg,
    marginTop: -111,
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
    marginTop: -56,
    marginLeft: 379,
  },
  groupChild: {
    bottom: -1,
  },
  title13: {
    marginTop: -62,
  },
  groupParent: {
    marginTop: 88,
    height: 140,
  },
  title14: {
    marginTop: -59,
  },
  groupContainer: {
    marginTop: -140,
    height: 140,
  },
  noResistanceLess: {
    width: "23.91%",
    marginTop: -94,
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
  groupInner: {
    bottom: 9,
  },
  title15: {
    marginTop: -95,
  },
  kgStaticLoad: {
    top: 42,
    left: 23,
    height: 162,
    position: "absolute",
  },
  groupView: {
    height: 204,
    marginTop: 73,
  },
  title16: {
    marginTop: -90,
  },
  moreThan10: {
    right: 12,
    bottom: 17,
    position: "absolute",
  },
  groupParent1: {
    height: 194,
    marginTop: -204,
  },
  title17: {
    width: "69.32%",
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
    width: "72.71%",
    height: 33,
    marginTop: 21,
    marginLeft: 60,
  },
  component116Child: {
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
  component116: {
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
  component210: {
    marginTop: 68,
    marginLeft: 36,
  },
  group2: {
    marginLeft: -15.5,
    width: 30,
  },
  component211: {
    marginTop: -74,
    marginLeft: 226,
  },
  a5: {
    flex: 1,
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default A5;
