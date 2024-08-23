import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A1A1A",
  },
  logoContainer: {
    alignItems: "center",
    paddingTop: 24,
    paddingBottom: 71,
    backgroundColor: "#131016",
  },
  contentContainer: {
    paddingLeft: 24,
    paddingRight: 24,
  },
  textInputContainer: {
    flexDirection: "row",
    gap: 10,
    marginTop: -25,
    marginBottom: 30,
  },
  textInput: {
    flex: 1,
    backgroundColor: "#262626",
    color: "#fff",
    padding: 12,
    tintColor: "#fff",
    fontSize: 16,
  },
  addButton: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: "#31cf67",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },

  statisticsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 20,
  },

  statistic: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },

  statistic_end: {
    justifyContent: "flex-end",
  },

  createdCount: {
    color: "#4EA8DE",
    fontSize: 14,
    fontWeight: "bold",
  },

  finishedCount: {
    color: "#8284FA",
    fontSize: 14,
    fontWeight: "bold",
  },

  countCreated: {
    color: "#D9D9D9",
    backgroundColor: "#333333",
    fontSize: 14,
    paddingVertical: 2,
    paddingHorizontal: 8,
    borderRadius: 100,
    fontWeight: "bold",
  },

  flatListContainer: {},
  emptyListContainer: {
    borderTopColor: "#333333",
    borderTopWidth: 1,
    flex: 1,
    paddingTop: 48,
    alignItems: "center",
    gap: 16,
  },
  listEmptyTitle: {
    fontSize: 14,
    color: "#808080",
    textAlign: "center",
    fontWeight: "bold",
  },
  listEmptyText: {
    fontSize: 14,
    color: "#808080",
    textAlign: "center",
  },
});
