import * as React from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize } from "../GlobalStyles";

const SignUp = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.signUp}>
      <View style={styles.signUpChild} />
      <View style={styles.statusBar}>
        <View style={[styles.frame, styles.titlePosition]} />
        <View style={styles.statusBar1}>
          <View style={styles.battery}>
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
          <View style={[styles.timeStyle, styles.titlePosition]}>
            <Text style={[styles.time, styles.titleFlexBox]}>9:41</Text>
          </View>
        </View>
      </View>
      <View style={styles.title1Parent}>
        <Text style={[styles.title1, styles.titleTypo]}>RULA</Text>
        <Text style={[styles.title11, styles.logInTypo]}>
          RAPID UPPER LIMB ASSESSMENT
        </Text>
      </View>
      <Text style={[styles.title12, styles.titleTypo]}>Sign Up</Text>
      <Pressable
        style={styles.title13}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={[styles.logIn, styles.logInTypo]}>LOG IN</Text>
      </Pressable>
      <View style={styles.groupParent}>
        <View style={styles.rowDefaultParent}>
          <View style={styles.rowLayout}>
            <View style={styles.separatorPosition}>
              <View style={[styles.frame, styles.titlePosition]} />
              <View style={[styles.separator1, styles.separatorPosition]} />
            </View>
            <View style={[styles.leftAccessory, styles.leftPosition]}>
              <View style={[styles.title, styles.titlePosition]}>
                <Text style={[styles.label, styles.labelPosition]}>
                  Kumar Saksham
                </Text>
                <Text style={[styles.label1, styles.labelPosition]}>
                  Your Name
                </Text>
              </View>
            </View>
            <View style={[styles.disclosure, styles.disclosurePosition]}>
              <Text style={[styles.symbol, styles.symbolTypo]}>􀁢</Text>
            </View>
          </View>
          <View style={[styles.rowDefault1, styles.rowLayout]}>
            <View style={styles.separatorPosition}>
              <View style={[styles.frame, styles.titlePosition]} />
              <View style={[styles.separator1, styles.separatorPosition]} />
            </View>
            <View style={[styles.leftAccessory1, styles.titlePosition]}>
              <View style={[styles.title2, styles.titlePosition]}>
                <Text style={[styles.label, styles.labelPosition]}>
                  saksham@nomail.com
                </Text>
                <Text style={[styles.label1, styles.labelPosition]}>Email</Text>
              </View>
            </View>
            <View style={[styles.disclosure, styles.disclosurePosition]}>
              <Text style={[styles.symbol, styles.symbolTypo]}>􀁢</Text>
            </View>
          </View>
          <View style={[styles.rowDefault1, styles.rowLayout]}>
            <View style={[styles.separator4, styles.separatorPosition]}>
              <View style={[styles.separator1, styles.separatorPosition]} />
            </View>
            <View style={[styles.leftAccessory2, styles.leftPosition]}>
              <View style={[styles.title3, styles.titlePosition]}>
                <Text style={[styles.label, styles.labelPosition]}>
                  *****************
                </Text>
                <Text style={[styles.label1, styles.labelPosition]}>
                  Password
                </Text>
              </View>
            </View>
            <View style={[styles.disclosure2, styles.disclosurePosition]}>
              <Text style={[styles.symbol2, styles.symbolTypo]}>􀋭</Text>
            </View>
          </View>
        </View>
        <View style={styles.btnPrimary}>
          <Pressable
            style={[styles.buttonBackground, styles.titlePosition]}
            onPress={() => navigation.navigate("HomeScreen")}
          >
            <View
              style={[styles.buttonBackgroundBackground, styles.titlePosition]}
            />
            <View style={[styles.buttonShape, styles.titlePosition]} />
          </Pressable>
          <View style={styles.group}>
            <Text style={[styles.payWith, styles.titleTypo]}>Get Started</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  titlePosition: {
    bottom: 0,
    top: 0,
    position: "absolute",
  },
  iconPosition: {
    maxHeight: "100%",
    bottom: 4,
    position: "absolute",
  },
  titleFlexBox: {
    textAlign: "center",
    position: "absolute",
  },
  titleTypo: {
    fontFamily: FontFamily.sFProDisplay,
    fontWeight: "700",
    color: Color.colorWhite,
  },
  logInTypo: {
    opacity: 0.6,
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.sFProDisplay,
    fontWeight: "700",
    color: Color.colorWhite,
  },
  separatorPosition: {
    height: 1,
    left: 0,
    bottom: 0,
    right: 0,
    position: "absolute",
  },
  leftPosition: {
    width: 159,
    bottom: 0,
    top: 0,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  labelPosition: {
    color: Color.colorBlack,
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
    fontFamily: FontFamily.sFProText,
    fontWeight: "600",
    position: "absolute",
  },
  rowLayout: {
    height: 66,
    width: 342,
  },
  signUpChild: {
    backgroundColor: Color.colorIndianred_100,
    height: 411,
    alignSelf: "stretch",
  },
  frame: {
    opacity: 0,
    left: 0,
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
    borderStyle: "solid",
    borderColor: Color.colorWhite,
    borderWidth: 1,
    width: 24,
    height: 11,
    top: "50%",
    right: 0,
    position: "absolute",
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
    width: 55,
    color: Color.colorWhite,
    fontFamily: FontFamily.sFProText,
    fontWeight: "600",
    textAlign: "center",
    letterSpacing: 0,
    height: 18,
    left: 0,
    top: 0,
  },
  timeStyle: {
    width: 54,
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
    height: 44,
    marginTop: -411,
    alignSelf: "stretch",
  },
  title1: {
    marginTop: -38.5,
    left: "31.69%",
    fontSize: FontSize.size_21xl,
    textAlign: "center",
    position: "absolute",
    top: "50%",
  },
  title11: {
    marginTop: 14.5,
    left: "0%",
    textAlign: "center",
    position: "absolute",
    top: "50%",
  },
  title1Parent: {
    width: "68.6%",
    height: 77,
    marginTop: 118,
    alignSelf: "center",
  },
  title12: {
    width: "30.43%",
    fontSize: FontSize.size_15xl,
    marginTop: 97,
    marginLeft: 252,
    textAlign: "right",
  },
  logIn: {
    width: "14.73%",
    textAlign: "left",
  },
  title13: {
    marginTop: -24,
    marginLeft: 36,
  },
  separator1: {
    backgroundColor: Color.colorDarkslategray,
  },
  label: {
    marginTop: -1,
    lineHeight: 22,
    fontSize: FontSize.size_mid,
  },
  label1: {
    marginTop: -33,
    fontSize: FontSize.size_smi,
  },
  title: {
    right: 15,
    left: 0,
    backgroundColor: Color.colorWhite,
  },
  leftAccessory: {
    left: 3,
  },
  symbol: {
    left: "59.09%",
    color: Color.colorMediumaquamarine,
    textAlign: "left",
  },
  disclosure: {
    right: 10,
    width: 44,
  },
  title2: {
    left: 0,
    right: 0,
    backgroundColor: Color.colorWhite,
  },
  leftAccessory1: {
    width: 161,
    left: 3,
    backgroundColor: Color.colorWhite,
  },
  rowDefault1: {
    marginTop: 32,
  },
  separator4: {
    backgroundColor: Color.colorWhite,
  },
  title3: {
    right: 12,
    left: 3,
    backgroundColor: Color.colorWhite,
  },
  leftAccessory2: {
    left: 0,
  },
  symbol2: {
    left: "81.25%",
    color: Color.colorGray_400,
    textAlign: "right",
  },
  disclosure2: {
    right: 6,
    width: 48,
  },
  rowDefaultParent: {
    height: 260,
  },
  buttonBackgroundBackground: {
    backgroundColor: Color.colorGray_500,
    left: 0,
    right: 0,
  },
  buttonShape: {
    backgroundColor: Color.colorGray_100,
    left: 0,
    right: 0,
  },
  buttonBackground: {
    left: 0,
    right: 0,
  },
  payWith: {
    fontSize: FontSize.size_mid,
    textAlign: "center",
    position: "absolute",
    letterSpacing: 0,
    fontFamily: FontFamily.sFProDisplay,
    fontWeight: "700",
    left: 0,
    top: 0,
  },
  group: {
    marginTop: -10.77,
    marginLeft: -46,
    left: "50%",
    width: 92,
    height: 22,
    top: "50%",
    position: "absolute",
  },
  btnPrimary: {
    height: 74,
    marginTop: 24,
    width: 342,
  },
  groupParent: {
    width: "82.61%",
    height: 358,
    marginTop: 81,
    alignSelf: "center",
  },
  signUp: {
    flex: 1,
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default SignUp;
