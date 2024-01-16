import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  selectLocation: {
    borderWidth: 2,
    width: "90%",
    height: "12%",
    position: "absolute",
    top: "12%",
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "space-evenly",
  },
  button: {
    flex: 1,
    width: "100%",
    borderRadius: 8,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ccc",
    flexDirection: "row",
    justifyContent: "space-evenly",
    gap: 60,
  },
  buttonText: {
    color: "#1D3F72",
    fontSize: 13,
    fontWeight: "bold",
  },
});
