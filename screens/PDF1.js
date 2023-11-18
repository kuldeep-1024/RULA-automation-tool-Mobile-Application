import * as React from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize } from "../GlobalStyles";

const PDF1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.pdf1}>
      <View style={styles.pdf1Child} />
      <View style={styles.statusBar}>
        <View style={[styles.frame, styles.framePosition]} />
        <View style={styles.statusBar1}>
          <View style={[styles.battery, styles.backgroundBorder]}>
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
            <Text style={[styles.time, styles.timePosition]}>9:41</Text>
          </View>
        </View>
      </View>
      <Image
        style={styles.pdf1Item}
        resizeMode="cover"
        source={require("../assets/group-1306.png")}
      />
      <Text style={[styles.title1, styles.title1Typo]}>RULA</Text>
      <View style={styles.pdf1Inner} />
      <Text style={[styles.title11, styles.titleTypo]}>
        Few Suggestions to reduce the ergonomics risk factor in your workspace.
      </Text>
      <Text style={[styles.title12, styles.titleTypo]}>
        <Text style={styles.partAUpper}>{`Part A (Upper Body):

1. Upper Arm (Right - Score: 3):

- Adjust the height of the workstation or chair to ensure a comfortable position for the right upper arm.
- Consider using armrests for additional support.

2. Lower Arm (Right - Score: 2):

- Ensure that the right lower arm is well-supported by the workstation.
- Consider using a padded armrest to reduce pressure.

3. Wrist (Right - Score: 3):

- Provide wrist support, such as a cushioned pad or ergonomic keyboard/mouse.
- Adjust the desk height to promote a neutral wrist position.

4. Wrist Twist (Right - Score: 2):

- Use an ergonomic mouse and keyboard to minimize wrist twisting.
- Ensure that the right hand is in a natural position when using input devices.

5. Muscle Use + Force/Load (Right - Score: 0):

- Ensure that the workload is distributed evenly.
- Consider using tools or equipment that reduce the need for excessive force.

6. Upper Arm (Left - Score: 4):

- Adjust the height of the workstation or chair to ensure a comfortable position for the left upper arm.
- Consider using armrests for additional support.

7. Lower Arm (Left - Score: 2):

- Ensure that the left lower arm is well-supported by the workstation.
- Consider using a padded armrest to reduce pressure.

8. Wrist (Left - Score: 3):

- Provide wrist support, such as a cushioned pad or ergonomic keyboard/mouse.
- Adjust the desk height to promote a neutral wrist position.

9. Wrist Twist (Left - Score: 2):

- Use an ergonomic mouse and keyboard to minimize wrist twisting.
- Ensure that the left hand is in a natural position when using input devices.

10. Muscle Use + Force/Load (Left - Score: 3):

- Ensure that the workload is distributed evenly.
- Consider using tools or equipment that reduce the need for excessive force.

11. Posture Score - Right (Table A - Score: 4):

- Provide a chair with proper lumbar support to encourage a neutral spine position.
- Adjust the chair height to promote a comfortable sitting posture.

12. Posture Score - Left (Table A - Score: 5):

- Provide a chair with proper lumbar support to encourage a neutral spine position.
- Adjust the chair height to promote a comfortable sitting posture.

13. Final Arm & Wrist Score - Right (Score: 4):

- Encourage short breaks and stretches to relieve tension in the right arm and wrist.
- Consider implementing job rotation to reduce prolonged exposure to specific tasks.

14. Final Arm & Wrist Score - Left (Score: 8):

Evaluate and modify the workstation setup to reduce strain on the left arm and wrist.
Consider ergonomic training to promote awareness of proper posture and movements.

Part B (Whole Body):

1. Neck (Score: 2):

- Ensure that the monitor is at eye level to reduce strain on the neck.
- Encourage regular breaks to stretch and change neck positions.

2. Trunk (Score: 2):

- Provide a chair with good lumbar support to maintain a neutral spine.
- Encourage proper sitting posture and provide training if necessary.

3. Leg (Score: 1):

- Adjust chair height to ensure feet are flat on the floor.
- Encourage periodic standing or stretching to reduce leg fatigue.

4. Muscle Use + Force/Load (Score: 1):

- Provide tools or equipment that reduce the need for excessive force.
- Implement training on proper lifting techniques and encourage team lifting for heavy objects.

5. Posture Score (Table B - Score: 2):

- Implement a sit-stand desk to allow variation in posture throughout the day.
- Provide training on proper sitting and standing postures.

6. Final Neck, Trunk & Leg Score (Score: 3):

- Conduct ergonomic workshops to raise awareness about the importance of good posture.
- Consider implementing a rotation schedule to reduce prolonged sitting or standing.

`}</Text>
        <Text style={styles.theseSuggestionsAre}>
          These suggestions are general in nature, and it's recommended to
          involve an ergonomic professional or health and safety expert for a
          more detailed and customized assessment.
        </Text>
      </Text>
      <Pressable
        style={styles.buttonBackgroundParent}
        onPress={() => navigation.navigate("HomeScreen")}
      >
        <View style={[styles.buttonBackground, styles.framePosition]}>
          <View
            style={[styles.buttonBackgroundBackground, styles.backgroundBorder]}
          />
          <View
            style={[styles.buttonBackgroundBackground, styles.backgroundBorder]}
          />
        </View>
        <View style={styles.group}>
          <Text style={[styles.payWith, styles.title1Typo]}>
            Return to Home Screen
          </Text>
        </View>
      </Pressable>
      <View style={styles.rectangleView} />
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
  backgroundBorder: {
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
  timePosition: {
    letterSpacing: 0,
    left: 0,
    top: 0,
    position: "absolute",
  },
  title1Typo: {
    fontFamily: FontFamily.sFProDisplay,
    fontWeight: "700",
    textAlign: "center",
  },
  titleTypo: {
    color: Color.colorDimgray,
    width: "83.33%",
    alignSelf: "center",
    fontFamily: FontFamily.sFProDisplay,
    fontWeight: "700",
  },
  pdf1Child: {
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
    top: "50%",
    position: "absolute",
  },
  statusBar: {
    marginTop: -179,
    height: 44,
    alignSelf: "stretch",
  },
  pdf1Item: {
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
    color: Color.colorWhite,
  },
  pdf1Inner: {
    height: 80,
    marginTop: 45,
    alignSelf: "stretch",
    backgroundColor: Color.colorWhite,
  },
  title11: {
    marginTop: -49,
    fontSize: FontSize.size_base,
    textAlign: "center",
  },
  partAUpper: {
    fontSize: FontSize.size_base,
  },
  theseSuggestionsAre: {
    fontSize: FontSize.size_sm,
  },
  title12: {
    textAlign: "left",
    marginTop: 28,
  },
  buttonBackgroundBackground: {
    top: -1,
    left: -1,
    borderColor: Color.colorDimgray,
    bottom: 0,
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: Color.colorWhite,
  },
  buttonBackground: {
    right: 0,
  },
  payWith: {
    fontSize: FontSize.size_mid,
    color: Color.colorBlack,
    letterSpacing: 0,
    left: 0,
    top: 0,
    position: "absolute",
  },
  group: {
    marginTop: -13.5,
    marginLeft: -93,
    left: "50%",
    width: 186,
    height: 22,
    top: "50%",
    position: "absolute",
  },
  buttonBackgroundParent: {
    width: "82.61%",
    height: 74,
    marginTop: -2714,
    alignSelf: "center",
  },
  rectangleView: {
    width: "93.24%",
    marginTop: -14,
    alignSelf: "center",
    height: 44,
    backgroundColor: Color.colorWhite,
  },
  pdf1: {
    flex: 1,
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default PDF1;
