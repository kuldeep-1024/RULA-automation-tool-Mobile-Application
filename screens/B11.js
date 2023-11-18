import * as React from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const B11 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.b11}>
      <View style={styles.b11Child} />
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
            <Text style={styles.time}>9:41</Text>
          </View>
        </View>
      </View>
      <Pressable
        style={styles.wrapper}
        onPress={() => navigation.navigate("A10")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/group-1306.png")}
        />
      </Pressable>
      <Text style={styles.title1}>RULA</Text>
      <Image
        style={[styles.b11Item, styles.b11IconLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-6.png")}
      />
      <Image
        style={[styles.b11Inner, styles.b11IconLayout]}
        resizeMode="cover"
        source={require("../assets/group-1326.png")}
      />
      <View style={styles.rectangleView} />
      <Text
        style={[styles.title11, styles.title11Typo]}
      >{`Part B. Neck, Trunk & Leg Analysis`}</Text>
      <Image
        style={styles.layer8Icon}
        resizeMode="cover"
        source={require("../assets/layer-8.png")}
      />
      <Text style={[styles.title12, styles.titleTypo]}>
        Step 11: Locate Neck Position
      </Text>
      <View style={[styles.groupView, styles.groupViewLayout]} />
      <View style={styles.b11Inner1}>
        <View style={styles.groupChildPosition} />
      </View>
      <Image
        style={[styles.component47, styles.componentLayout2]}
        resizeMode="cover"
        source={require("../assets/component-4--7.png")}
      />
      <Image
        style={[styles.component57, styles.componentLayout1]}
        resizeMode="cover"
        source={require("../assets/component-4--7.png")}
      />
      <Image
        style={[styles.neck1Icon, styles.b11IconLayout]}
        resizeMode="cover"
        source={require("../assets/neck1.png")}
      />
      <Image
        style={styles.neck2Icon}
        resizeMode="cover"
        source={require("../assets/neck2.png")}
      />
      <View style={[styles.buttonShape, styles.groupViewLayout]} />
      <View style={styles.b11Child1} />
      <Image
        style={[styles.component85, styles.componentLayout1]}
        resizeMode="cover"
        source={require("../assets/component-4--7.png")}
      />
      <Image
        style={[styles.component76, styles.componentLayout2]}
        resizeMode="cover"
        source={require("../assets/component-4--7.png")}
      />
      <Image
        style={[styles.neck3Icon, styles.b11IconLayout]}
        resizeMode="cover"
        source={require("../assets/neck3.png")}
      />
      <Image
        style={styles.neck4Icon}
        resizeMode="cover"
        source={require("../assets/neck4.png")}
      />
      <Text style={[styles.title13, styles.titleTypo]}>
        Tick the following box if applicable
      </Text>
      <View style={styles.component1113}>
        <View style={styles.component1113Child} />
        <Image
          style={[styles.iconIonicIosCheckmark, styles.b11IconLayout]}
          resizeMode="cover"
          source={require("../assets/icon-ionicioscheckmark.png")}
        />
      </View>
      <View style={styles.component1114}>
        <View style={styles.component1113Child} />
        <Image
          style={[styles.iconIonicIosCheckmark, styles.b11IconLayout]}
          resizeMode="cover"
          source={require("../assets/icon-ionicioscheckmark.png")}
        />
      </View>
      <Image
        style={[styles.neck5Icon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/neck5.png")}
      />
      <Image
        style={[styles.neck6Icon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/neck6.png")}
      />
      <Pressable
        style={[styles.component222, styles.componentLayout]}
        onPress={() => navigation.navigate("A10")}
      >
        <View style={[styles.buttonShape1, styles.groupChildPosition]} />
        <View style={[styles.group, styles.groupPosition]}>
          <Text style={[styles.payWith, styles.title11Typo]}>Back</Text>
        </View>
      </Pressable>
      <Pressable
        style={[styles.component223, styles.componentLayout]}
        onPress={() => navigation.navigate("B12")}
      >
        <View style={[styles.buttonShape1, styles.groupChildPosition]} />
        <View style={[styles.group1, styles.groupPosition]}>
          <Text style={[styles.payWith, styles.title11Typo]}>Next</Text>
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
  b11IconLayout: {
    overflow: "hidden",
    maxWidth: "100%",
  },
  title11Typo: {
    color: Color.colorDimgray,
    fontFamily: FontFamily.sFProDisplay,
    fontWeight: "700",
    textAlign: "center",
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
    marginLeft: 54,
    height: 19,
    width: 19,
  },
  componentLayout1: {
    marginLeft: 239,
    width: "4.59%",
    height: 19,
    overflow: "hidden",
    maxWidth: "100%",
  },
  iconLayout: {
    height: 100,
    width: 133,
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
    marginLeft: -14.5,
    marginTop: -10.5,
    top: "50%",
    position: "absolute",
  },
  b11Child: {
    backgroundColor: Color.colorIndianred_100,
    height: 179,
    alignSelf: "stretch",
  },
  frame: {
    opacity: 0,
    right: 0,
    left: 0,
    bottom: 0,
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
    left: 0,
    bottom: 0,
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
  b11Item: {
    width: "4.83%",
    height: 20,
    marginTop: 9,
    marginLeft: 274,
  },
  b11Inner: {
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
    alignSelf: "center",
  },
  layer8Icon: {
    width: 28,
    height: 28,
    marginTop: 6,
    marginLeft: 329,
  },
  title12: {
    width: "53.86%",
    marginTop: -25,
  },
  groupView: {
    marginTop: 33,
  },
  b11Inner1: {
    width: 139,
    height: 194,
    marginTop: -194,
    marginLeft: 230,
  },
  component47: {
    marginTop: -185,
  },
  component57: {
    marginTop: -19,
  },
  neck1Icon: {
    width: "19.81%",
    height: 164,
    marginTop: -4,
    marginLeft: 84,
  },
  neck2Icon: {
    width: 94,
    height: 161,
    marginTop: -161,
    marginLeft: 262,
  },
  buttonShape: {
    marginTop: 20,
  },
  b11Child1: {
    marginTop: -195,
    marginLeft: 229,
    height: 195,
    width: 140,
    borderColor: Color.colorDimgray,
    borderWidth: 1,
    borderStyle: "solid",
  },
  component85: {
    marginTop: -185,
  },
  component76: {
    marginTop: -19,
  },
  neck3Icon: {
    width: "27.54%",
    height: 142,
    marginTop: -1,
    marginLeft: 64,
  },
  neck4Icon: {
    width: 113,
    height: 137,
    marginTop: -126,
    marginLeft: 249,
  },
  title13: {
    width: "64.01%",
    marginTop: 52,
  },
  component1113Child: {
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
  component1113: {
    width: 11,
    marginTop: 16,
    marginLeft: 35,
    height: 11,
  },
  component1114: {
    width: "2.66%",
    marginTop: -11,
    marginLeft: 228,
    height: 11,
  },
  neck5Icon: {
    marginTop: 4,
    marginLeft: 60,
  },
  neck6Icon: {
    marginTop: -100,
    marginLeft: 246,
  },
  buttonShape1: {
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
    width: 29,
  },
  component222: {
    marginTop: 29,
    marginLeft: 36,
  },
  group1: {
    width: 30,
  },
  component223: {
    marginLeft: 226,
    marginTop: -74,
  },
  b11: {
    flex: 1,
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default B11;
