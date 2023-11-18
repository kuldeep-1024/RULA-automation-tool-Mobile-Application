import * as React from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, Color, FontFamily } from "../GlobalStyles";

const B14 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.b14}>
      <View style={styles.b14Child} />
      <View style={styles.statusBar}>
        <View style={[styles.frame, styles.payChildPosition]} />
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
          <View style={[styles.timeStyle, styles.payChildPosition]}>
            <Text style={styles.time}>9:41</Text>
          </View>
        </View>
      </View>
      <Pressable
        style={styles.wrapper}
        onPress={() => navigation.navigate("B13")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/group-1306.png")}
        />
      </Pressable>
      <Text style={styles.title1}>RULA</Text>
      <Image
        style={styles.b14Item}
        resizeMode="cover"
        source={require("../assets/ellipse-6.png")}
      />
      <Image
        style={[styles.b14Inner, styles.b14InnerLayout]}
        resizeMode="cover"
        source={require("../assets/group-1326.png")}
      />
      <View style={styles.rectangleView} />
      <Text style={styles.title11}>{`Part B. Neck, Trunk & Leg Analysis`}</Text>
      <Text
        style={[styles.title12, styles.titleTypo2]}
      >{`Step 14: Neck, trunk & leg - select the force and load that most reflects the working situation`}</Text>
      <Image
        style={styles.layer8Icon}
        resizeMode="cover"
        source={require("../assets/layer-8.png")}
      />
      <Image
        style={styles.groupIcon}
        resizeMode="cover"
        source={require("../assets/group-1310.png")}
      />
      <Image
        style={styles.b14Child1}
        resizeMode="cover"
        source={require("../assets/group-1315.png")}
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
          style={[styles.groupChild, styles.b14InnerLayout]}
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
          style={[styles.groupChild, styles.b14InnerLayout]}
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
        <Text style={[styles.payWith, styles.payTypo]}>Score 1</Text>
      </View>
      <View style={styles.component1115}>
        <View style={[styles.component1115Child, styles.buttonShapeBorder]} />
        <Image
          style={[styles.iconIonicIosCheckmark, styles.b14InnerLayout]}
          resizeMode="cover"
          source={require("../assets/icon-ionicioscheckmark.png")}
        />
      </View>
      <Text style={[styles.payWith1, styles.payTypo]}>
        Posture is mainly static, e.g. held for longer than 1 minute or repeated
        more than 4 times per minute.
      </Text>
      <Pressable
        style={[styles.component226, styles.componentLayout]}
        onPress={() => navigation.navigate("B13")}
      >
        <View style={[styles.buttonShape, styles.buttonShapeBorder]} />
        <View style={[styles.group1, styles.groupPosition]}>
          <Text style={[styles.payWith2, styles.payTypo]}>Back</Text>
        </View>
      </Pressable>
      <View style={[styles.component227, styles.componentLayout]}>
        <View style={[styles.buttonShape, styles.buttonShapeBorder]} />
        <View style={[styles.group2, styles.groupPosition]}>
          <Text style={[styles.payWith2, styles.payTypo]}>Next</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  payChildPosition: {
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
  b14InnerLayout: {
    overflow: "hidden",
    maxWidth: "100%",
  },
  titleTypo2: {
    fontSize: FontSize.size_base,
    color: Color.colorDimgray,
    alignSelf: "center",
    fontFamily: FontFamily.sFProDisplay,
    fontWeight: "700",
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
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.colorDimgray,
    fontFamily: FontFamily.sFProDisplay,
    fontWeight: "700",
  },
  groupLayout: {
    height: 202,
    width: 139,
  },
  titleTypo: {
    marginTop: -94,
    fontSize: FontSize.size_base,
    color: Color.colorDimgray,
    fontFamily: FontFamily.sFProDisplay,
    fontWeight: "700",
    textAlign: "center",
    top: "50%",
    position: "absolute",
  },
  payTypo: {
    fontSize: FontSize.size_smi,
    color: Color.colorDimgray,
    fontFamily: FontFamily.sFProDisplay,
    fontWeight: "700",
    letterSpacing: 0,
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
    left: "50%",
    marginTop: -10.5,
    height: 17,
    top: "50%",
    position: "absolute",
  },
  b14Child: {
    backgroundColor: Color.colorIndianred_100,
    height: 179,
    alignSelf: "stretch",
  },
  frame: {
    opacity: 0,
    bottom: 0,
    position: "absolute",
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
    position: "absolute",
    top: 0,
    left: 0,
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
  b14Item: {
    width: 20,
    height: 20,
    marginTop: 9,
    marginLeft: 340,
  },
  b14Inner: {
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
    width: "70.77%",
    fontSize: FontSize.size_lg,
    marginTop: -74,
    color: Color.colorDimgray,
    alignSelf: "center",
    fontFamily: FontFamily.sFProDisplay,
    fontWeight: "700",
    textAlign: "center",
  },
  title12: {
    width: "83.33%",
    marginTop: 14,
    textAlign: "left",
  },
  layer8Icon: {
    width: 28,
    height: 28,
    marginTop: -53,
    marginLeft: 379,
  },
  groupIcon: {
    height: 141,
    marginTop: 32,
    marginLeft: 45,
    width: 140,
  },
  b14Child1: {
    height: 109,
    marginTop: -141,
    marginLeft: 230,
    width: 140,
  },
  title13: {
    marginTop: -101,
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
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.colorDimgray,
    fontFamily: FontFamily.sFProDisplay,
    fontWeight: "700",
  },
  kgIntermittentLoad: {
    marginTop: -80,
    marginLeft: 254,
  },
  groupChild: {
    right: -1,
    bottom: 7,
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
    bottom: 0,
    position: "absolute",
  },
  groupParent: {
    marginTop: 70,
    marginLeft: 45,
  },
  title16: {
    left: "35.25%",
  },
  moreThan10: {
    right: 12,
    bottom: 0,
    position: "absolute",
  },
  groupContainer: {
    marginTop: -202,
    marginLeft: 230,
  },
  title17: {
    width: "71.26%",
    marginTop: 30,
    textAlign: "center",
  },
  payWith: {
    textAlign: "left",
    left: 0,
    top: 0,
    position: "absolute",
  },
  group: {
    width: "10.87%",
    marginLeft: 60,
    height: 17,
    marginTop: 20,
  },
  component1115Child: {
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
  component1115: {
    width: 11,
    marginTop: -12,
    marginLeft: 35,
    height: 11,
  },
  payWith1: {
    width: "77.29%",
    height: 30,
    marginTop: 15,
    marginLeft: 60,
    textAlign: "left",
  },
  buttonShape: {
    top: -1,
    left: -1,
  },
  payWith2: {
    textAlign: "center",
    left: 0,
    top: 0,
    position: "absolute",
  },
  group1: {
    marginLeft: -13.5,
    width: 29,
  },
  component226: {
    marginTop: 29,
    marginLeft: 36,
  },
  group2: {
    marginLeft: -15.5,
    width: 30,
  },
  component227: {
    marginLeft: 226,
    marginTop: -74,
  },
  b14: {
    flex: 1,
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default B14;
