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
    backgroundColor: '#A7C3D0',
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
  }

});