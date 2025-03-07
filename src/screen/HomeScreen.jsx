import { StyleSheet, Text, TextInput, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Header from "../components/Header";
import Feather from "react-native-vector-icons/Feather";

const HomeScreen = () => {
  return (
    <LinearGradient colors={["#FDF0F3", "#FFFBFC"]} style={styles.container}>
      <Header />
      <Text style={styles.headingText}>Match Your Style</Text>
      <View style={styles.inputContainer}>
        <Feather color={"#C0C0C0"} name="search" size={24} />
        <TextInput
          style={styles.input}
          placeholderTextColor={"#B6B6B6"}
          placeholder="Search"
        />
      </View>
    </LinearGradient>
  );
};
export default HomeScreen;
const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
    padding: 20,
  },
  headingText: {
    fontSize: 28,
    color: "black",
    fontWeight: 400,
    marginTop: 32,
    marginBottom: 5,
  },
  inputContainer: {
    paddingHorizontal: 10,
    height: 48,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 12,
  },
  input: {
    flex: 1,
    color: "black",
    fontSize: 18,
  },
});
