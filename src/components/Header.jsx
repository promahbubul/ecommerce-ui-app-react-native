import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import appsIcon from "../assets/appIcon.png";
import dp from "../assets/dp.png";
const Header = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.appIconContainer}>
        <Image source={appsIcon} style={styles.appIcon} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image source={dp} style={styles.dp} />
      </TouchableOpacity>
    </View>
  );
};
export default Header;
const styles = StyleSheet.create({
    container: {
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row"
    },
  appIconContainer: {
    height: 44,
    width: 44,
    backgroundColor: "white",
    borderRadius: 22,
    justifyContent: "center",
    alignItems: "center"
  },
  appIcon: {
    height: 28,
    width: 28,
  },
  dp: {
    width: 44,
    height: 44
  }
});
