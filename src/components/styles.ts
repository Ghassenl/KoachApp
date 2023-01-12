import { StyleSheet } from "react-native";

const CommonStyles = StyleSheet.create({
  socialButton: {
    marginVertical: 6,
    width: "70%",
    maxHeight: 60,
    flexGrow: 1,
    flexBasis: 0,
    flexShrink: 1,
    borderRadius: 4,
    paddingHorizontal: 34,
    paddingVertical: 16,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  socialButtonText: {
    marginHorizontal: 8,
    fontSize: 18,
    fontWeight: "600",
  },
  socialIcon: {
    height: 24,
    width: 24,
  },
});

export { CommonStyles };