import * as React from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color } from "../GlobalStyles";

const Login = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.login}>
      <View style={styles.loginChild} />
      <View style={styles.statusBar}>
        <View style={[styles.frame, styles.buttonPosition]} />
        <View style={styles.statusBar1}>
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
            <Text style={[styles.time, styles.timeTypo]}>9:41</Text>
          </View>
        </View>
      </View>
      <View style={styles.title1Parent}>
        <Text style={[styles.title1, styles.titleTypo]}>RULA</Text>
        <Text style={styles.title11}>RAPID UPPER LIMB ASSESSMENT</Text>
      </View>
      <Text style={[styles.title12, styles.titleTypo]}>Log In</Text>
      <Pressable
        style={styles.title13}
        onPress={() => navigation.navigate("SignUp")}
      >
        <Text style={styles.signUp}>SIGN UP</Text>
      </Pressable>
      <View style={styles.groupParent}>
        <View style={styles.groupContainer}>
          <View style={styles.rowDefaultParent}>
            <View style={styles.rowLayout}>
              <View style={styles.separatorPosition}>
                <View style={[styles.frame, styles.buttonPosition]} />
                <View style={[styles.separator1, styles.separatorPosition]} />
              </View>
              <View style={[styles.leftAccessory, styles.title2Position]}>
                <View style={[styles.title, styles.buttonPosition]}>
                  <Text style={[styles.label, styles.labelPosition]}>
                    saksham@nomail.com
                  </Text>
                  <Text style={[styles.label1, styles.labelPosition]}>
                    Email
                  </Text>
                </View>
              </View>
              <View style={[styles.disclosure, styles.disclosurePosition]}>
                <Text style={[styles.symbol, styles.symbolTypo]}>􀁢</Text>
              </View>
            </View>
            <View style={[styles.rowDefault1, styles.rowLayout]}>
              <View style={[styles.separator2, styles.separatorPosition]}>
                <View style={[styles.separator1, styles.separatorPosition]} />
              </View>
              <View style={[styles.leftAccessory1, styles.buttonPosition]}>
                <View style={[styles.title2, styles.title2Position]}>
                  <Text style={[styles.label, styles.labelPosition]}>
                    *****************
                  </Text>
                  <Text style={[styles.label1, styles.labelPosition]}>
                    Password
                  </Text>
                </View>
              </View>
              <View style={[styles.disclosure1, styles.disclosurePosition]}>
                <Text style={[styles.symbol1, styles.symbolTypo]}>􀋭</Text>
              </View>
            </View>
          </View>
          <Pressable
            style={styles.btnPrimary}
            onPress={() => navigation.navigate("HomeScreen")}
          >
            <View style={[styles.buttonBackground, styles.buttonPosition]}>
              <View
                style={[
                  styles.buttonBackgroundBackground,
                  styles.buttonPosition,
                ]}
              />
              <View style={[styles.buttonShape, styles.buttonPosition]} />
            </View>
            <View style={[styles.group, styles.groupPosition]}>
              <Text style={[styles.payWith, styles.titleTypo]}>Continue</Text>
            </View>
          </Pressable>
        </View>
        <Text style={[styles.caption1, styles.timeTypo]}>NEED HELP?</Text>
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
  timeTypo: {
    textAlign: "center",
    fontFamily: FontFamily.sFProText,
    fontSize: FontSize.size_mini,
  },
  titleTypo: {
    fontFamily: FontFamily.sFProDisplay,
    fontWeight: "700",
    textAlign: "center",
    color: Color.colorWhite,
  },
  separatorPosition: {
    height: 1,
    left: 0,
    bottom: 0,
    right: 0,
    position: "absolute",
  },
  title2Position: {
    left: 3,
    bottom: 0,
    top: 0,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  labelPosition: {
    textAlign: "left",
    fontFamily: FontFamily.sFProText,
    letterSpacing: 0,
    top: "50%",
    left: 0,
    position: "absolute",
  },
  disclosurePosition: {
    bottom: 1,
    top: 1,
    position: "absolute",
  },
  symbolTypo: {
    lineHeight: 17,
    fontSize: FontSize.size_sm,
    top: "46.88%",
    textAlign: "right",
    fontFamily: FontFamily.sFProText,
    fontWeight: "600",
    position: "absolute",
  },
  rowLayout: {
    height: 66,
    width: 342,
  },
  loginChild: {
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
    width: 55,
    color: Color.colorWhite,
    fontWeight: "600",
    textAlign: "center",
    fontFamily: FontFamily.sFProText,
    letterSpacing: 0,
    fontSize: FontSize.size_mini,
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
    top: "50%",
    position: "absolute",
  },
  title11: {
    marginTop: 14.5,
    left: "0%",
    opacity: 0.6,
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.sFProDisplay,
    fontWeight: "700",
    textAlign: "center",
    color: Color.colorWhite,
    top: "50%",
    position: "absolute",
  },
  title1Parent: {
    width: "68.6%",
    height: 77,
    marginTop: 118,
    alignSelf: "center",
  },
  title12: {
    width: "24.4%",
    fontSize: FontSize.size_15xl,
    marginTop: 97,
    marginRight: 281,
  },
  signUp: {
    width: "17.63%",
    textAlign: "right",
    opacity: 0.6,
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.sFProDisplay,
    fontWeight: "700",
    color: Color.colorWhite,
  },
  title13: {
    marginTop: -24,
    marginRight: 37,
  },
  separator1: {
    backgroundColor: Color.colorDarkslategray,
  },
  label: {
    marginTop: -1,
    lineHeight: 22,
    color: Color.colorBlack,
    fontSize: FontSize.size_mid,
  },
  label1: {
    marginTop: -33,
    fontSize: FontSize.size_smi,
    color: Color.colorGray_300,
  },
  title: {
    right: 0,
    backgroundColor: Color.colorWhite,
  },
  leftAccessory: {
    width: 161,
  },
  symbol: {
    left: "77.27%",
    color: Color.colorMediumaquamarine,
  },
  disclosure: {
    right: 10,
    width: 44,
  },
  separator2: {
    backgroundColor: Color.colorWhite,
  },
  title2: {
    right: 12,
  },
  leftAccessory1: {
    width: 159,
    backgroundColor: Color.colorWhite,
  },
  symbol1: {
    left: "81.25%",
    color: Color.colorGray_400,
  },
  disclosure1: {
    right: 6,
    width: 48,
  },
  rowDefault1: {
    marginTop: 32,
  },
  rowDefaultParent: {
    height: 163,
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
    letterSpacing: 0,
    fontFamily: FontFamily.sFProDisplay,
    fontWeight: "700",
    left: 0,
    top: 0,
    position: "absolute",
  },
  group: {
    marginTop: -10.77,
    marginLeft: -36,
    left: "50%",
    width: 72,
    height: 22,
  },
  btnPrimary: {
    height: 74,
    marginTop: 24,
    width: 342,
  },
  groupContainer: {
    height: 261,
  },
  caption1: {
    lineHeight: 20,
    fontWeight: "500",
    color: "rgba(0, 0, 0, 0.65)",
    width: 343,
    height: 20,
    marginTop: 44,
    textAlign: "center",
    fontFamily: FontFamily.sFProText,
    fontSize: FontSize.size_mini,
  },
  groupParent: {
    width: "82.61%",
    height: 325,
    marginTop: 82,
    alignSelf: "center",
  },
  login: {
    flex: 1,
    width: "100%",
    alignItems: "flex-end",
    backgroundColor: Color.colorWhite,
  },
});

export default Login;
