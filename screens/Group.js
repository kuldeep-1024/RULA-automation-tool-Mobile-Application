import * as React from "react";
import { Image, StyleSheet, View } from "react-native";

const Group = () => {
  return (
    <View style={styles.ellipseParent}>
      <Image
        style={styles.groupChild}
        resizeMode="cover"
        source={require("../assets/ellipse-6.png")}
      />
      <Image
        style={[styles.groupItem, styles.groupChildPosition1]}
        resizeMode="cover"
        source={require("../assets/ellipse-5.png")}
      />
      <Image
        style={[styles.groupInner, styles.groupChildPosition1]}
        resizeMode="cover"
        source={require("../assets/ellipse-5.png")}
      />
      <Image
        style={[styles.ellipseIcon, styles.groupChildPosition1]}
        resizeMode="cover"
        source={require("../assets/ellipse-5.png")}
      />
      <Image
        style={[styles.groupChild1, styles.groupChildPosition]}
        resizeMode="cover"
        source={require("../assets/ellipse-5.png")}
      />
      <Image
        style={[styles.groupChild2, styles.groupChildPosition]}
        resizeMode="cover"
        source={require("../assets/ellipse-5.png")}
      />
      <Image
        style={[styles.groupChild3, styles.groupChildPosition]}
        resizeMode="cover"
        source={require("../assets/ellipse-5.png")}
      />
      <Image
        style={[styles.groupChild4, styles.groupChildPosition]}
        resizeMode="cover"
        source={require("../assets/ellipse-5.png")}
      />
      <Image
        style={[styles.groupChild5, styles.groupChildPosition]}
        resizeMode="cover"
        source={require("../assets/ellipse-5.png")}
      />
      <Image
        style={[styles.groupChild6, styles.groupChildPosition]}
        resizeMode="cover"
        source={require("../assets/ellipse-5.png")}
      />
      <Image
        style={[styles.groupChild7, styles.groupChildPosition]}
        resizeMode="cover"
        source={require("../assets/ellipse-5.png")}
      />
      <Image
        style={[styles.groupChild8, styles.groupChildPosition]}
        resizeMode="cover"
        source={require("../assets/ellipse-5.png")}
      />
      <Image
        style={[styles.groupChild9, styles.groupChildPosition1]}
        resizeMode="cover"
        source={require("../assets/ellipse-5.png")}
      />
      <Image
        style={[styles.groupChild10, styles.groupChildPosition1]}
        resizeMode="cover"
        source={require("../assets/ellipse-5.png")}
      />
      <Image
        style={[styles.groupChild11, styles.groupChildPosition1]}
        resizeMode="cover"
        source={require("../assets/ellipse-5.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildPosition1: {
    width: 12,
    bottom: 4,
    top: 4,
    maxHeight: "100%",
    position: "absolute",
  },
  groupChildPosition: {
    left: "50%",
    width: 12,
    bottom: 4,
    top: 4,
    maxHeight: "100%",
    position: "absolute",
  },
  groupChild: {
    top: 0,
    bottom: 0,
    left: 0,
    width: 20,
    maxHeight: "100%",
    position: "absolute",
  },
  groupItem: {
    left: 4,
  },
  groupInner: {
    left: 26,
  },
  ellipseIcon: {
    left: 48,
  },
  groupChild1: {
    marginLeft: -81,
  },
  groupChild2: {
    marginLeft: -59,
  },
  groupChild3: {
    marginLeft: -37,
  },
  groupChild4: {
    marginLeft: -15,
  },
  groupChild5: {
    marginLeft: 7,
  },
  groupChild6: {
    marginLeft: 29,
  },
  groupChild7: {
    marginLeft: 51,
  },
  groupChild8: {
    marginLeft: 73,
  },
  groupChild9: {
    right: 44,
  },
  groupChild10: {
    right: 22,
  },
  groupChild11: {
    right: 0,
  },
  ellipseParent: {
    flex: 1,
    width: "100%",
    height: 20,
  },
});

export default Group;
