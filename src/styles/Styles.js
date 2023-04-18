import { StyleSheet } from "react-native";

//Global Styles for Entire Project
export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    justifyContent: "center",
    padding: 20,
  },
  titleText: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 20,
  },
  backIcon: {
    position: "absolute",
    top: 30,
    left: 20,
    zIndex: 999,
    padding: 10,
  },
  summaryContainer: {
    backgroundColor: "#333",
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 16,
    marginBottom: 24,
  },
  summaryItem: {
    marginBottom: 8,
  },
  summaryLabel: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  summaryValue: {
    color: "#fff",
    fontSize: 16,
  },

  workOutCatCard: {
    margin: 20,
    borderRadius: 20,
    overflow: "hidden",
    backgroundColor: "#2A2E43",
    position: "relative", // add relative positioning for the badge
    height: 200,
    width: 350,
    alignItems: "center", // Add alignItems to center the text
    justifyContent: "flex-end", // Add justifyContent to align text at the bottom
    elevation: 5, // Raised effect
  },
  workOutCardTitle: {
    fontSize: 24,
    color: "#ffffff",
    marginBottom: 16, // Use marginBottom instead of marginVertical
    textAlign: "center", // Add textAlign to center the text
  },
  instructionPageTitleText: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 250,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginLeft: 20,
    marginTop: 60,
  },
  paragraph: {
    marginVertical: 8,
    lineHeight: 20,
  },
  backgroundImage: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  instructionPageBackgroundImage: {
    flex: 1,
    alignItems: "center",
    marginTop: 20,
    justifyContent: "center",
    height: "60%",
  },
  label: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  value: {
    color: "#fff",
    fontSize: 14,
    marginTop: 5,
  },
  input: {
    padding: 10,
    color: "#fff",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    fontSize: 16,
    marginBottom: 10,
    width: "100%",
  },
  buttonContainer: {
    backgroundColor: "#5339c6",
    padding: 10,
    marginTop: 10,
    borderRadius: 8,
    width: 150,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
  buttonWrapper: {
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: 'blue',
    padding: 20,
    marginTop: 20,
    alignSelf: 'flex-start',
  },
  //  card: {
  //   margin: 20,
  //   borderRadius: 20,
  //   overflow: 'hidden',
  //   backgroundColor: '#2A2E43',
  //   position: 'relative', // add relative positioning for the badge
  //   height: 150,
  //   width: '90%',
  //   alignSelf: 'center',
  //   flexDirection: 'row', // display items in a row
  //   alignItems: 'center',
  // },
  ExerciseCards: {
    margin: 20,
    borderRadius: 20,
    overflow: "hidden",
    backgroundColor: "#2A2E43",
    position: "relative", // add relative positioning for the badge
    height: 200,
    width: 350,
  },
  cardImage: {
    height: "80%",
    width: "100%",
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    marginTop: 10,
  },
  badge: {
    position: "absolute",
    top: 10,
    right: 10,
    padding: 5,
    backgroundColor: "green",
    borderRadius: 20,
  },
});
