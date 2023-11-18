import * as React from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, Color, FontFamily } from "../GlobalStyles";

const A1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.a1}>
      <View style={styles.a1Child} />
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
        onPress={() => navigation.navigate("HomeScreen")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/group-1306.png")}
        />
      </Pressable>
      <Text style={styles.title1}>RULA</Text>
      <Image
        style={styles.a1Item}
        resizeMode="cover"
        source={require("../assets/group-1324.png")}
      />
      <View style={styles.a1Inner} />
      <Text style={styles.title11}>Part A : Arm and Wrist Analysis</Text>
      <Image
        style={styles.layer8Icon}
        resizeMode="cover"
        source={require("../assets/layer-8.png")}
      />
      <Text style={[styles.title12, styles.titleTypo]}>
        Step 1 : Locate Upper Arm Position (Right)
      </Text>
      <View style={[styles.groupView, styles.groupViewLayout]} />
      <View style={styles.a1Inner1}>
        <View style={styles.groupChildPosition} />
      </View>
      <Image
        style={[styles.component41, styles.componentLayout3]}
        resizeMode="cover"
        source={require("../assets/component-4--7.png")}
      />
      <Image
        style={[styles.component51, styles.componentLayout2]}
        resizeMode="cover"
        source={require("../assets/component-4--7.png")}
      />
      <Image
        style={[styles.upperarm1Icon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/upperarm1.png")}
      />
      <Image
        style={[styles.upperarm2Icon, styles.upperarm2IconLayout]}
        resizeMode="cover"
        source={require("../assets/upperarm2.png")}
      />
      <Image
        style={[styles.upperarm2Icon1, styles.upperarm2IconLayout]}
        resizeMode="cover"
        source={require("../assets/upperarm2.png")}
      />
      <View style={[styles.buttonShape, styles.groupViewLayout]} />
      <View style={styles.a1Child1} />
      <Image
        style={[styles.component81, styles.componentLayout2]}
        resizeMode="cover"
        source={require("../assets/component-4--7.png")}
      />
      <Image
        style={[styles.component71, styles.componentLayout3]}
        resizeMode="cover"
        source={require("../assets/component-4--7.png")}
      />
      <Image
        style={[styles.upperarm3Icon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/upperarm3.png")}
      />
      <Image
        style={styles.upperarm4Icon}
        resizeMode="cover"
        source={require("../assets/upperarm4.png")}
      />
      <View style={[styles.groupView, styles.groupViewLayout]} />
      <Image
        style={[styles.component41, styles.componentLayout3]}
        resizeMode="cover"
        source={require("../assets/component-4--7.png")}
      />
      <Image
        style={styles.upperarm5Icon}
        resizeMode="cover"
        source={require("../assets/upperarm5.png")}
      />
      <View style={styles.component112Parent}>
        <View style={[styles.component112, styles.componentLayout1]}>
          <View style={styles.component112Child} />
          <Image
            style={[styles.iconIonicIosCheckmark, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/icon-ionicioscheckmark.png")}
          />
        </View>
        <View style={[styles.component113, styles.componentLayout1]}>
          <View style={styles.component112Child} />
          <Image
            style={[styles.iconIonicIosCheckmark, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/icon-ionicioscheckmark.png")}
          />
        </View>
        <Text style={[styles.title13, styles.titleTypo]}>
          Tick the following options if applicable
        </Text>
        <View style={[styles.group, styles.groupPosition1]}>
          <Text style={[styles.payWith, styles.payTypo]}>
            Shoulder is raised
          </Text>
        </View>
        <Text
          style={[styles.payWith1, styles.payTypo]}
        >{`Upper Arm is abducted(away from the side of the 
body)`}</Text>
        <View style={[styles.group1, styles.groupPosition1]}>
          <Text style={[styles.payWith, styles.payTypo]}>
            Leaning or supporting the weight of the arm
          </Text>
        </View>
        <View style={[styles.component111, styles.componentLayout1]}>
          <View style={styles.component112Child} />
          <Image
            style={[styles.iconIonicIosCheckmark, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/icon-ionicioscheckmark.png")}
          />
        </View>
      </View>
      <Pressable
        style={[styles.component25, styles.componentLayout]}
        onPress={() => navigation.navigate("A2")}
      >
        <View style={[styles.buttonShape2, styles.groupChildPosition]} />
        <View style={[styles.group2, styles.groupPosition]}>
          <Text style={styles.payWith3}>Next</Text>
        </View>
      </Pressable>
      <Pressable
        style={[styles.component24, styles.componentLayout]}
        onPress={() => navigation.navigate("HomeScreen")}
      >
        <View style={[styles.buttonShape2, styles.groupChildPosition]} />
        <View style={[styles.group3, styles.groupPosition]}>
          <Text style={styles.payWith3}>Back</Text>
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
  iconLayout1: {
    maxHeight: "100%",
    position: "absolute",
  },
  titleTypo: {
    fontSize: FontSize.size_base,
    color: Color.colorDimgray,
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
  componentLayout3: {
    height: 19,
    width: 19,
    marginLeft: 54,
  },
  componentLayout2: {
    marginLeft: 239,
    width: "4.59%",
    height: 19,
    overflow: "hidden",
    maxWidth: "100%",
  },
  iconLayout: {
    overflow: "hidden",
    maxWidth: "100%",
  },
  upperarm2IconLayout: {
    height: 153,
    width: 122,
    marginLeft: 239,
  },
  componentLayout1: {
    width: 11,
    height: 11,
    left: 0,
    position: "absolute",
  },
  groupPosition1: {
    height: 17,
    left: "50%",
    marginLeft: -159.5,
    top: "50%",
    position: "absolute",
  },
  payTypo: {
    textAlign: "left",
    fontSize: FontSize.size_smi,
    color: Color.colorDimgray,
    fontFamily: FontFamily.sFProDisplay,
    fontWeight: "700",
    letterSpacing: 0,
    position: "absolute",
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
    marginLeft: -14.5,
    marginTop: -10.5,
    height: 17,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  a1Child: {
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
    width: 1,
    height: 4,
    opacity: 0.4,
    marginTop: -2,
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
  a1Item: {
    width: "72.95%",
    height: 20,
    marginTop: 9,
    marginLeft: 54,
    overflow: "hidden",
    maxWidth: "100%",
  },
  a1Inner: {
    height: 96,
    marginTop: 16,
    alignSelf: "stretch",
    backgroundColor: Color.colorWhite,
  },
  title11: {
    width: "64.01%",
    fontSize: FontSize.size_lg,
    marginTop: -74,
    color: Color.colorDimgray,
    alignSelf: "center",
    fontFamily: FontFamily.sFProDisplay,
    fontWeight: "700",
    textAlign: "center",
  },
  layer8Icon: {
    width: 28,
    height: 28,
    marginTop: 6,
    marginLeft: 379,
  },
  title12: {
    width: "77.54%",
    marginTop: -25,
    alignSelf: "center",
  },
  groupView: {
    marginTop: 33,
  },
  a1Inner1: {
    width: 139,
    height: 194,
    marginTop: -194,
    marginLeft: 230,
  },
  component41: {
    marginTop: -185,
  },
  component51: {
    marginTop: -19,
  },
  upperarm1Icon: {
    width: "20.29%",
    height: 157,
    marginLeft: 90,
    marginTop: -2,
  },
  upperarm2Icon: {
    marginTop: -154,
  },
  upperarm2Icon1: {
    marginTop: -153,
  },
  buttonShape: {
    marginTop: 26,
  },
  a1Child1: {
    marginTop: -195,
    marginLeft: 229,
    height: 195,
    width: 140,
    borderColor: Color.colorDimgray,
    borderWidth: 1,
    borderStyle: "solid",
  },
  component81: {
    marginTop: -185,
  },
  component71: {
    marginTop: -19,
  },
  upperarm3Icon: {
    width: "23.19%",
    height: 152,
    marginLeft: 73,
  },
  upperarm4Icon: {
    width: 117,
    height: 143,
    marginTop: -148,
    marginLeft: 244,
  },
  upperarm5Icon: {
    width: 129,
    height: 122,
    marginTop: 13,
    marginLeft: 50,
  },
  component112Child: {
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
  component112: {
    marginTop: 13.5,
    top: "50%",
  },
  component113: {
    bottom: 1,
  },
  title13: {
    marginTop: -59.5,
    left: "6.78%",
    top: "50%",
    position: "absolute",
  },
  payWith: {
    left: 0,
    top: 0,
    textAlign: "left",
  },
  group: {
    marginTop: -26.5,
    width: 109,
  },
  payWith1: {
    marginTop: 3.5,
    left: 25,
    width: 345,
    height: 30,
    top: "50%",
  },
  group1: {
    marginTop: 42.5,
    width: 274,
  },
  component111: {
    marginTop: -21.5,
    top: "50%",
  },
  component112Parent: {
    width: "89.13%",
    height: 119,
    marginTop: 69,
    marginLeft: 35,
  },
  buttonShape2: {
    backgroundColor: Color.colorWhite,
  },
  payWith3: {
    fontSize: FontSize.size_smi,
    color: Color.colorDimgray,
    fontFamily: FontFamily.sFProDisplay,
    fontWeight: "700",
    textAlign: "center",
    letterSpacing: 0,
    left: 0,
    top: 0,
    position: "absolute",
  },
  group2: {
    width: 30,
  },
  component25: {
    marginTop: 34,
    marginLeft: 225,
  },
  group3: {
    width: 29,
  },
  component24: {
    marginTop: -73,
    marginLeft: 36,
  },
  a1: {
    flex: 1,
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default A1;
