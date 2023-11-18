import * as React from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const B13 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.b13}>
      <View style={styles.b13Child} />
      <View style={styles.statusBar}>
        <View style={[styles.frame, styles.framePosition]} />
        <View style={styles.statusBar1}>
          <View style={[styles.battery, styles.batteryBorder]}>
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
        onPress={() => navigation.navigate("B12")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/group-1306.png")}
        />
      </Pressable>
      <Text style={styles.title1}>RULA</Text>
      <Image
        style={[styles.b13Item, styles.b13Layout]}
        resizeMode="cover"
        source={require("../assets/ellipse-6.png")}
      />
      <Image
        style={[styles.b13Inner, styles.b13Layout]}
        resizeMode="cover"
        source={require("../assets/group-1326.png")}
      />
      <View style={styles.rectangleView} />
      <Text
        style={[styles.title11, styles.titleTypo1]}
      >{`Part B. Neck, Trunk & Leg Analysis`}</Text>
      <Image
        style={[styles.layer8Icon, styles.b13Layout]}
        resizeMode="cover"
        source={require("../assets/layer-8.png")}
      />
      <Text style={[styles.title12, styles.titleTypo1]}>Step 13: Legs</Text>
      <Text
        style={[styles.title13, styles.titleTypo]}
      >{`Legs and feet are well supported and in an evenly balanced position `}</Text>
      <Image
        style={styles.groupIcon}
        resizeMode="cover"
        source={require("../assets/group-1320.png")}
      />
      <Text style={[styles.title14, styles.titleTypo]}>
        Legs are NOT evenly balanced and supported
      </Text>
      <Image
        style={styles.b13Child1}
        resizeMode="cover"
        source={require("../assets/group-1321.png")}
      />
      <Pressable
        style={[styles.component224, styles.componentLayout]}
        onPress={() => navigation.navigate("B12")}
      >
        <View style={[styles.buttonShape, styles.batteryBorder]} />
        <View style={[styles.group, styles.groupPosition]}>
          <Text style={[styles.payWith, styles.titleTypo1]}>Back</Text>
        </View>
      </Pressable>
      <Pressable
        style={[styles.component225, styles.componentLayout]}
        onPress={() => navigation.navigate("B14")}
      >
        <View style={[styles.buttonShape, styles.batteryBorder]} />
        <View style={[styles.group1, styles.groupPosition]}>
          <Text style={[styles.payWith, styles.titleTypo1]}>Next</Text>
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
  batteryBorder: {
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
  b13Layout: {
    overflow: "hidden",
    maxWidth: "100%",
  },
  titleTypo1: {
    color: Color.colorDimgray,
    fontFamily: FontFamily.sFProDisplay,
    fontWeight: "700",
    textAlign: "center",
  },
  titleTypo: {
    marginRight: 33,
    textAlign: "left",
    fontSize: FontSize.size_xs,
    width: "70.05%",
    color: Color.colorDimgray,
    fontFamily: FontFamily.sFProDisplay,
    fontWeight: "700",
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
  b13Child: {
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
    marginRight: 343,
    marginTop: 35,
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
  b13Item: {
    width: "4.83%",
    height: 20,
    marginTop: 9,
    marginLeft: 242,
  },
  b13Inner: {
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
    width: "70.77%",
    fontSize: FontSize.size_lg,
    marginTop: -74,
  },
  layer8Icon: {
    width: "6.76%",
    height: 28,
    marginTop: 6,
    marginLeft: 154,
  },
  title12: {
    width: "23.91%",
    fontSize: FontSize.size_base,
    marginTop: -25,
  },
  title13: {
    marginTop: 22,
  },
  groupIcon: {
    width: 246,
    height: 240,
    marginTop: -1,
    marginRight: 99,
  },
  title14: {
    marginTop: 34,
  },
  b13Child1: {
    width: 208,
    height: 272,
    marginTop: 1,
    marginRight: 114,
  },
  buttonShape: {
    top: -1,
    left: -1,
    borderColor: Color.colorDimgray,
    bottom: 0,
    borderWidth: 1,
    borderStyle: "solid",
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
    marginLeft: -13.5,
    width: 29,
  },
  component224: {
    marginRight: 189,
    marginTop: 35,
  },
  group1: {
    marginLeft: -14.5,
    width: 30,
  },
  component225: {
    marginLeft: 191,
    marginTop: -74,
  },
  b13: {
    flex: 1,
    alignItems: "center",
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default B13;
