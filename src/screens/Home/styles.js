import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  button: {
    marginTop: 10,
    width: "70%",
    borderRadius: 8,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ccc",
  },
  buttonText: {
    color: "#1D3F72",
  },

  buttonIcon: {
    position: "absolute",
    top: "20%",
    left: "15%",
  },
  title: {
    color: "#1D3F72",
    fontWeight: "900",
    fontSize: 30,
    textShadowColor: "rgba(0, 0, 0, 0.20)",
    textShadowOffset: { width: 1, height: 4 },
    textShadowRadius: 1,
  },
  typeUser: {
    color: "#1D3F72",
    fontWeight: "500",
    fontSize: 20,
  },
});
