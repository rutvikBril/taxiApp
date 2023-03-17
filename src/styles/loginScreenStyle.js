import { StyleSheet } from "react-native";

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },

  logInTextView: {
    marginTop: 50,
    marginLeft: 20,
  },
  LoginText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#00000",
  },
  formView: {
    margin: 20,
  },
  labelTextStyle: {
    marginTop: 20,
    fontSize: 15,
  },
  textInputStyle: {
    paddingVertical: 10,
    marginRight: 30,
    borderBottomWidth: 2,
    borderBottomColor: "#f5ad00",
  },
  logInButton: {
    alignItems: "center",
    marginTop: "20%",
    margin: 20,
    marginRight: 35,
    paddingHorizontal: 30,
    paddingVertical: 20,
    borderRadius: 20,
    backgroundColor: "#f5ad00",
  },
  alreadyAccountViewContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
  },
  alreadyAccountViewContainerText: {
    fontWeight: "bold",
  },
});
export default style;
