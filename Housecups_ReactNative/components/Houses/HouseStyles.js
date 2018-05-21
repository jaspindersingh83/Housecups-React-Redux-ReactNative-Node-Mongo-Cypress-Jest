import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  addHouseButton: {
    flex: 0,
    width: "50%",
    height: 50,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 25,
    borderRadius: 10
  },
  createHouseButton: {
    flex:0,
    width: '100%',
    height:50,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 25,
    borderRadius: 10,
  },
  buttonText: {
    color: "black",
    fontSize: 18
  },
  h1: {
    flex: 0,
    alignItems: "center",
    justifyContent: "center",
    fontSize: 28,
    color: "white",
    marginBottom: 25
  },
  formwrapper: {
    flex: 0,
    width: "70%"
  },
  body: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(71,53,193,1)"
  },
  addedHousesuccess: {
    fontSize: 18,
    color: "#e50914"
  }
});

export const {
  addHouseButton,
  addedHousesuccess,
  createHouseButton,
  h1,
  buttonText,
  body,
  formwrapper
} = styles;
