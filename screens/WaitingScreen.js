import * as React from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const WaitingScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.waitingScreen}>
      <Pressable
        style={styles.waitingScreenChild}
        onPress={() => navigation.navigate("Login")}
      />
      <View style={styles.title1Parent}>
        <Text style={[styles.title1, styles.titleTypo]}>RULA</Text>
        <Text style={[styles.title11, styles.titleTypo]}>
          RAPID UPPER LIMB ASSESSMENT
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  titleTypo: {
    textAlign: "center",
    color: Color.colorWhite,
    fontFamily: FontFamily.sFProDisplay,
    fontWeight: "700",
    top: "50%",
    position: "absolute",
  },
  waitingScreenChild: {
    alignSelf: "stretch",
    backgroundColor: Color.colorIndianred_100,
    height: 896,
  },
  title1: {
    marginTop: -44,
    left: "27.11%",
    fontSize: FontSize.size_31xl,
  },
  title11: {
    marginTop: 20,
    left: "0%",
    fontSize: FontSize.size_lg,
    opacity: 0.6,
  },
  title1Parent: {
    width: "68.6%",
    height: 88,
    marginTop: -503,
  },
  waitingScreen: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    alignItems: "center",
  },
});

export default WaitingScreen;
