import { StyleSheet } from "react-native";

const style = StyleSheet.create({
  container: {
    flex: 1,
  },

  singUpTextView: {
    marginTop: 50,
    marginLeft: 20,
  },
  singUpText: {
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
    color: "#000000",
  },
  textInputStyle: {
    paddingVertical: 10,
    marginRight: 30,
    color: "#000000",
    borderBottomWidth: 2,
    borderBottomColor: "#f5ad00",
  },
  singUpButton: {
    alignItems: "center",
    marginTop: "20%",
    margin: 20,
    paddingHorizontal: 30,
    paddingVertical: 20,
    borderRadius: 20,
    backgroundColor: "#f5ad00",
  },
});
export default style;
