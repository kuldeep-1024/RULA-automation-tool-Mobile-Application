import * as React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const Result = () => {
  return (
    <View style={styles.result}>
      <View style={styles.resultChild} />
      <View style={styles.statusBar}>
        <View style={[styles.frame, styles.buttonPosition]} />
        <View style={[styles.statusBar1, styles.groupPosition]}>
          <View style={[styles.battery, styles.groupPosition]}>
            <Image
              style={[styles.capIcon, styles.groupPosition]}
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
          <View style={[styles.timeStyle, styles.buttonPosition]}>
            <Text style={[styles.time, styles.timeFlexBox]}>9:41</Text>
          </View>
        </View>
      </View>
      <Image
        style={styles.resultItem}
        resizeMode="cover"
        source={require("../assets/group-1306.png")}
      />
      <Text style={[styles.title1, styles.partATypo]}>RULA</Text>
      <Text style={styles.title11}>
        If you are familiar with the manual version of RULA, Table A and Table B
        values are indicated below.
      </Text>
      <View style={[styles.title1Parent, styles.title1SpaceBlock]}>
        <Text style={[styles.title12, styles.titlePosition]}>
          <Text style={[styles.partA, styles.partATypo]}>{`Part A:
`}</Text>
          <Text style={styles.upperArmRight}>{`1. Upper Arm (Right): 3
2. Lower Arm (Right): 2
3. Wrist (Right): 3
4. Wrist Twist (Right): 2
5. Muscle Use + Force/Load (Right): 0
6. Upper Arm (Left): 4
7. Lower Arm (Left): 2
8. Wrist (Left): 3
9. Wrist Twist (Left): 2
10. Muscle Use + Force/Load (Left): 3
Posture Score - Right (Table A): 4
Posture Score - Left (Table A): 5`}</Text>
        </Text>
        <Text
          style={[styles.title13, styles.titleTypo]}
        >{`Final Arm & Wrist Score - Right: 4
Final Arm & Wrist Score - Left: 8`}</Text>
      </View>
      <View style={[styles.title1Group, styles.title1SpaceBlock]}>
        <Text style={[styles.title14, styles.titlePosition]}>
          <Text style={[styles.partA, styles.partATypo]}>{`Part B:
`}</Text>
          <Text style={styles.upperArmRight}>{`11. Neck: 2
12. Trunk: 2
13. Leg: 1
14. Muscle Use + Force/Load: 1
Posture Score (Table B): 2`}</Text>
        </Text>
        <Text
          style={[styles.title15, styles.titleTypo]}
        >{`Final Neck, Trunk & Leg Score: 3`}</Text>
      </View>
      <View style={styles.btnPrimary}>
        <View style={[styles.buttonBackground, styles.buttonPosition]}>
          <View
            style={[styles.buttonBackgroundBackground, styles.buttonPosition]}
          />
          <View style={[styles.buttonShape, styles.buttonPosition]} />
        </View>
        <View style={[styles.group, styles.groupPosition]}>
          <Text style={[styles.payWith, styles.partATypo]}>Save to PDF</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonPosition: {
    left: 0,
    bottom: 0,
    top: 0,
    position: "absolute",
  },
  groupPosition: {
    top: "50%",
    position: "absolute",
  },
  iconPosition: {
    maxHeight: "100%",
    bottom: 4,
    position: "absolute",
  },
  timeFlexBox: {
    textAlign: "center",
    color: Color.colorWhite,
  },
  partATypo: {
    fontFamily: FontFamily.sFProDisplay,
    fontWeight: "700",
  },
  title1SpaceBlock: {
    marginLeft: 47,
    width: "80.19%",
  },
  titlePosition: {
    textAlign: "left",
    left: "0%",
    width: "96.99%",
    color: Color.colorDimgray,
    top: "50%",
    position: "absolute",
  },
  titleTypo: {
    width: "100.3%",
    textAlign: "left",
    left: "0%",
    color: Color.colorDimgray,
    fontFamily: FontFamily.sFProDisplay,
    fontWeight: "700",
    fontSize: FontSize.size_mini,
    top: "50%",
    position: "absolute",
  },
  resultChild: {
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
    right: 0,
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
    borderStyle: "solid",
    borderColor: Color.colorWhite,
    borderWidth: 1,
    width: 24,
    height: 11,
    right: 0,
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
    fontWeight: "600",
    fontFamily: FontFamily.sFProText,
    width: 55,
    letterSpacing: 0,
    textAlign: "center",
    color: Color.colorWhite,
    left: 0,
    top: 0,
    position: "absolute",
    fontSize: FontSize.size_mini,
    height: 18,
  },
  timeStyle: {
    width: 54,
  },
  statusBar1: {
    marginTop: -9,
    right: 14,
    left: 21,
    height: 18,
  },
  statusBar: {
    marginTop: -179,
    height: 44,
    alignSelf: "stretch",
  },
  resultItem: {
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
    textAlign: "center",
    color: Color.colorWhite,
  },
  title11: {
    width: "83.33%",
    fontSize: FontSize.size_smi,
    marginTop: 76,
    color: Color.colorDimgray,
    alignSelf: "center",
    fontFamily: FontFamily.sFProDisplay,
    fontWeight: "700",
    textAlign: "center",
  },
  partA: {
    fontSize: FontSize.size_lg,
  },
  upperArmRight: {
    fontFamily: FontFamily.sourceSansPro,
    fontSize: FontSize.size_mini,
  },
  title12: {
    marginTop: -162.5,
  },
  title13: {
    marginTop: 122.5,
  },
  title1Parent: {
    height: 325,
    marginTop: 17,
  },
  title14: {
    marginTop: -79,
  },
  title15: {
    marginTop: 59,
  },
  title1Group: {
    height: 158,
    marginTop: 15,
  },
  buttonBackgroundBackground: {
    backgroundColor: Color.colorGray_500,
    right: 0,
  },
  buttonShape: {
    backgroundColor: Color.colorGray_100,
    right: 0,
  },
  buttonBackground: {
    right: 0,
  },
  payWith: {
    fontSize: FontSize.size_mid,
    textAlign: "center",
    color: Color.colorWhite,
    letterSpacing: 0,
    left: 0,
    top: 0,
    position: "absolute",
  },
  group: {
    marginTop: -10.77,
    marginLeft: -48,
    left: "50%",
    width: 96,
    height: 22,
  },
  btnPrimary: {
    width: "82.61%",
    height: 74,
    marginTop: 30,
    alignSelf: "center",
  },
  result: {
    flex: 1,
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default Result;
