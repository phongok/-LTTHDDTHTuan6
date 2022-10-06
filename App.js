
import { StyleSheet, Text, View, FlatList, Button, TextInput  } from 'react-native';
const data = [  {
  stt :"1",
  name: "Java",
},
{
  stt :"2",
  name: "C#",
}
];


const Item = ({ stt, name }) => (
  <View style={{flexDirection:'row', marginLeft:10, marginTop:10}}>
    <View style={{flexDirection:'row', width:'70%'}}>
      <Text style={{fontSize:20}}>{stt}</Text>
      <Text style={{fontSize:20, marginLeft:30}}>{name}</Text>
    </View>
    <View >
      <Button title=' Remove ' color='#F31111'></Button>
    </View>
  </View>
)
export default function App() {

  const renderItem = ({ item }) => (
    <Item stt={item.stt} name={item.name}></Item>
  )

  return (
    <View style={styles.container}>
      <View style={styles.content1}>
        <TextInput
          style={styles.inputText}
          
        />

        <Button
          title='  +  '
          onPress={() => {
             

          }}
        />
      </View>

      <View style={styles.content2}>
           <FlatList data={data} renderItem={renderItem} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  content1: {
    flex: 1,
    marginTop:40,
    alignItems: 'center',
    flexDirection: 'row',
    marginTop:30
  },
  inputText: {
    height: 40,
    margin: 12,
    width: 300,
    borderWidth: 1,
    padding: 10,
  },
  content2: {
    flex: 5
  },


});
