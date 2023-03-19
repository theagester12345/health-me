import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    padding: 20,
  },
  titleText: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#fff', 
    marginBottom: 20, 
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginLeft: 20,
    marginTop :60
  },
  paragraph: {
    marginVertical: 8,
    lineHeight: 20,
  },
  backgroundImage: {
    flex: 1,
    alignItems:"center",
    justifyContent: 'center',
  },
  input: {
    padding: 10,
    color:"#fff",
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    fontSize: 16,
    marginBottom: 10,
    width: '100%',
  },
  buttonContainer: {
    backgroundColor: '#5339c6',
    padding: 10,
    marginTop: 10,
    borderRadius: 8,
    width: 200,
    alignItems: 'center'
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff'
  },
  buttonWrapper:{
    justifyContent:'center',
    alignItems:'center'
  },
   card: {
    margin: 20,
    borderRadius: 20,
    overflow: 'hidden',
    backgroundColor: '#2A2E43',
    position: 'relative', // add relative positioning for the badge
    height: 150,
    width: '90%',
    alignSelf: 'center',
    flexDirection: 'row', // display items in a row
    alignItems: 'center',
  },
  card: {
    margin: 20,
    borderRadius: 20,
    overflow: 'hidden',
    backgroundColor: '#2A2E43',
    position: 'relative', // add relative positioning for the badge
    height: 200,
    width: 350,
  },
  cardImage: {
    height: '80%',
    width: '100%',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginTop: 10,
  },
  badge: {
    position: 'absolute',
    top:10,
    right: 10,
    padding: 5,
    backgroundColor: 'green',
    borderRadius: 20,
  }

});