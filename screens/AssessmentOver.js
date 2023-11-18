import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const AssessmentOver = () => {
  return (
    <View style={styles.assessmentOver}>
      <View style={styles.assessmentOverChild} />
      <View style={styles.title1Parent}>
        <Text style={[styles.title1, styles.title1Typo]}>RULA</Text>
        <Text style={[styles.title11, styles.titleTypo]}>
          RAPID UPPER LIMB ASSESSMENT
        </Text>
      </View>
      <Text style={[styles.title12, styles.titleTypo]}>
        Your assessment is now done!
      </Text>
      <View style={styles.btnPrimary}>
        <View style={[styles.buttonBackground, styles.payWithPosition]}>
          <View
            style={[styles.buttonBackgroundBackground, styles.buttonPosition]}
          />
          <View
            style={[styles.buttonBackgroundBackground, styles.buttonPosition]}
          />
        </View>
        <View style={[styles.group, styles.titlePosition]}>
          <Text style={[styles.payWith, styles.payWithPosition]}>
            See Results
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title1Typo: {
    textAlign: "center",
    color: Color.colorWhite,
    fontFamily: FontFamily.sFProDisplay,
    fontWeight: "700",
  },
  titleTypo: {
    fontSize: FontSize.size_lg,
    textAlign: "center",
    color: Color.colorWhite,
    fontFamily: FontFamily.sFProDisplay,
    fontWeight: "700",
  },
  payWithPosition: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  buttonPosition: {
    bottom: 0,
    right: 0,
  },
  titlePosition: {
    top: "50%",
    position: "absolute",
  },
  assessmentOverChild: {
    alignSelf: "stretch",
    backgroundColor: Color.colorIndianred_100,
    height: 896,
  },
  title1: {
    marginTop: -44,
    left: "27.11%",
    fontSize: FontSize.size_31xl,
    top: "50%",
    position: "absolute",
  },
  title11: {
    marginTop: 20,
    left: "0%",
    opacity: 0.6,
    top: "50%",
    position: "absolute",
  },
  title1Parent: {
    width: "68.6%",
    height: 88,
    marginTop: -705,
  },
  title12: {
    width: "61.11%",
    marginTop: 155,
    marginRight: 10,
  },
  buttonBackgroundBackground: {
    top: -1,
    left: -1,
    borderStyle: "solid",
    borderColor: Color.colorWhite,
    borderWidth: 1,
    position: "absolute",
    bottom: 0,
    right: 0,
  },
  buttonBackground: {
    bottom: 0,
    right: 0,
  },
  payWith: {
    fontSize: FontSize.size_mid,
    letterSpacing: 0,
    textAlign: "center",
    color: Color.colorWhite,
    fontFamily: FontFamily.sFProDisplay,
    fontWeight: "700",
  },
  group: {
    marginTop: -10.77,
    marginLeft: -45,
    left: "50%",
    width: 90,
    height: 22,
  },
  btnPrimary: {
    width: "82.61%",
    height: 74,
    marginTop: 283,
  },
  assessmentOver: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    alignItems: "center",
  },
});

export default AssessmentOver;
