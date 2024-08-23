import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  toDoItemContainer: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",

    backgroundColor: "#262626",
    padding: 20,
    borderRadius: 10,
    marginBottom: 10,
  },
  toDoItemCheck: {
    backgroundColor: "transparent",
    borderColor: "#4EA8DE",
    borderWidth: 1.5,
    width: 20,
    height: 20,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  toDoItemChecked: {
    backgroundColor: "#5E60CE",
    borderColor: "#5E60CE",
    borderWidth: 1.5,
    width: 20,
    height: 20,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  toDoImgCheck: {
    display: "none",
  },
  toDoImgChecked: {
    objectFit: "contain",
    width: 13,
  },

  toDoText: {
    color: "#FFF",
    fontSize: 16,
    flex: 1,
    width: 100,
  },
  toDoBtns: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  toDoBtn: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    padding: 5,
  },
  iconBtn: {
    width: 12,
    height: 14,
  },
});
