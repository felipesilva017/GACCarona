import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  form: {
    // borderWidth: 5,
    // borderColor: "green",
    alignItems: "center",
    height: "100%",
    paddingTop: 20,
  },
  formTitle: {
    alignSelf: "flex-start",
    marginLeft: "5%",
    fontFamily: "Roboto",
    fontWeight: "500",
    fontSize: 30,
    color: "#1D3F72",
    marginBottom: 20,
  },
  formInput: {
    width: "90%",
    borderWidth: 2,
    borderRadius: 8,
    borderColor: "#1D3F72",
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginBottom: 30,
  },
  button: {
    marginTop: 10,
    width: "90%",
    borderRadius: 5,
  },
});
