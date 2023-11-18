import * as React from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize } from "../GlobalStyles";

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.homeScreen}>
      <View style={styles.homeScreenChild} />
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
      <View style={styles.title1Parent}>
        <Text style={[styles.title1, styles.titleTypo]}>RULA</Text>
        <Text style={[styles.title11, styles.titleTypo]}>
          RAPID UPPER LIMB ASSESSMENT
        </Text>
      </View>
      <Text style={[styles.title12, styles.title12Typo]}>Choose an option</Text>
      <View style={[styles.component21, styles.componentLayout]}>
        <View style={[styles.buttonShape, styles.batteryBorder]} />
        <View style={[styles.group, styles.groupPosition]}>
          <Text style={[styles.payWith, styles.title12Typo]}>
            Previous Stats
          </Text>
        </View>
      </View>
      <Pressable
        style={[styles.component11, styles.componentLayout]}
        onPress={() => navigation.navigate("A1")}
      >
        <View style={[styles.buttonShape, styles.batteryBorder]} />
        <View style={[styles.group1, styles.groupPosition]}>
          <Text style={[styles.payWith, styles.title12Typo]}>
            Begin Assessment
          </Text>
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
  titleTypo: {
    fontFamily: FontFamily.sFProDisplay,
    fontWeight: "700",
    textAlign: "center",
    color: Color.colorWhite,
    top: "50%",
    position: "absolute",
  },
  title12Typo: {
    color: Color.colorDimgray,
    fontFamily: FontFamily.sFProDisplay,
    fontWeight: "700",
    textAlign: "center",
  },
  componentLayout: {
    height: 74,
    width: 154,
  },
  groupPosition: {
    height: 17,
    marginTop: -6.77,
    top: "50%",
    position: "absolute",
  },
  homeScreenChild: {
    backgroundColor: Color.colorIndianred_100,
    height: 411,
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
    height: 44,
    marginTop: -411,
    alignSelf: "stretch",
  },
  title1: {
    marginTop: -38.5,
    left: "31.69%",
    fontSize: FontSize.size_21xl,
  },
  title11: {
    marginTop: 14.5,
    left: "0%",
    fontSize: FontSize.size_lg,
    opacity: 0.6,
  },
  title1Parent: {
    width: "68.6%",
    height: 77,
    marginTop: 118,
  },
  title12: {
    width: "67.87%",
    fontSize: FontSize.size_15xl,
    marginTop: 223,
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
    marginLeft: -43.13,
    left: "50%",
    width: 86,
  },
  component21: {
    marginTop: 54,
    marginLeft: 190,
  },
  group1: {
    right: 22,
    left: 22,
  },
  component11: {
    marginTop: -74,
    marginRight: 190,
  },
  homeScreen: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    backgroundColor: Color.colorWhite,
  },
});

export default HomeScreen;
