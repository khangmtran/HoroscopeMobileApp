import { StyleSheet, Dimensions } from "react-native";

const { height } = Dimensions.get("window");

export const styles = StyleSheet.create({
  whiteNormalText: {
    color: "white",
    fontSize: 16,
  },
  blackNormalText: {
    color: "black",
    fontSize: 16,
  },
  whiteBigText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  blackBigText: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
  },
  hStackSpaceB: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  mainContainer: {
    flex: 1,
  },
  header: {
    alignItems: "center",
    marginTop: 50,
    borderWidth: 1,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 5,
  },
  headerSubtitle: {
    fontSize: 18,
    fontStyle: "italic",
    opacity: 0.8,
  },
  mainContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#8b5cf6",
  },
  widgetPreview: {
    borderWidth: 1,
    borderRadius: 15,
    padding: 10,
    alignItems: "center",
  },
  horoscopeText: {
    fontSize: 16,
  },
  customizeButton: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    position: "absolute",
    bottom: 40,
    left: 20,
  },
  customizeButtonText: {},
  modal: {
    flex: 1,
    justifyContent: "flex-end",
  },
  bottomSheet: {
    backgroundColor: "black",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    padding: 20,
    maxHeight: height * 0.7,
  },
  sheetHandle: {
    width: 50,
    height: 5,
    backgroundColor: "gray",
    alignSelf: "center",
    borderRadius: 5,
  },
  sheetCloseButton: {
    alignSelf: "flex-end",
    padding: 10,
  },
  sheetTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    color: "white",
    alignSelf: "center",
  },
  sheetBgContent: {
    backgroundColor: "rgba(56, 52, 52, 1)",
    borderRadius: 10,
    padding: 10,
  },
  sheetBgSection: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  colorSheet: {
    backgroundColor: "rgba(240, 240, 240, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    padding: 20,
    maxHeight: height * 0.7,
  },
  colorContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 5,
    gap: 5,
    marginBottom: 20,
  },
  colorItem: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderRadius: 5,
  },
});
