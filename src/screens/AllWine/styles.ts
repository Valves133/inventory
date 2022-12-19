import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.75)',
  },
  listContent: {
    flex: 1,
    paddingTop: 24,
    marginTop: 8,
    flexDirection: 'row',
    flexWrap: "wrap",
    alignContent:'space-around',
    justifyContent: 'space-between'
  },
  content: {
    width: '100%',
    padding: 16,
  },
  button: {
    marginBottom: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#9fa3a9',
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    maxWidth:32,
    height: 32,
  },
  name: {
    color: '#393d42',
    fontSize: 16,
    fontWeight: '700'
  },
});