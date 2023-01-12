import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: "#262b2f",
  },
  welcome: {
    fontSize: 34,
    color: "#b4b4b4",
    textAlign: "center",
  },
  container: {
    height: Dimensions.get("window").height,
    backgroundColor: "#262b2f",
  },
  topContent: {
    padding: 10,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  bottomContent: {
    display: "flex",
    flex: 1,
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  mainText: {
    fontSize: 54,
    color: "white",
  },
});

export default styles;