import { StyleSheet } from "react-native";

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  backGroundImageStyle: {
    flex: 1,
    justifyContent: "space-between",
  },
  welcomeTextView: {
    marginTop: "20%",
    marginLeft: "10%",
  },
  welcomeText: {
    textAlign: "left",
    color: "#000",
    fontSize: 40,
    fontWeight: "bold",
  },
  getStartView: {
    justifyContent: "center",
    alignItems: "center",
    bottom: 30,
    margin: 20,
    paddingHorizontal: 30,
    paddingVertical: 20,
    borderRadius: 20,
    backgroundColor: "#f5ad00",
  },
  getStartButtonText: {
    fontWeight: "bold",
  },
  alreadyAccountViewContainer: {
    flexDirection: "row",
    justifyContent: "center",
    bottom: 30,
  },
  alreadyAccountViewContainerText: {
    fontWeight: "bold",
  },
  loginButtonText: {
    color: "#0069f3",
  },
});
export default style;
