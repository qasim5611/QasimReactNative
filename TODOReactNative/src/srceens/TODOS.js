import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';




// const [todos, setTodos] = useState([]);



export const Todo = ({ navigation }) => {

    const [todo, setTodo] = useState([]);
    const [todoText, setTodoText] = useState([]);

// let arr= [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]

    return (
        <View style={{ flex: 1 }}>



{/* 
///////////////////////////// */}

<View style={{flexDirection:'row'}}>

                <TextInput value={todoText}  placeholder="Please Enter Todos" placeholderTextColor="#ffff"  style={{ color:'white', backgroundColor:'#3d3d3d' , borderWidth:2, flex:1 }}
                
                    onChangeText={(text) => setTodoText(text)}
                 />


                <Button title="ADD ITEM" color="#f84e69" 
            
                onPress={()=>{
                   
                    setTodo([
                        ...todo,
                        todoText

                    ])

                    setTodoText('')
                }}
                 />

</View>







            <ScrollView style={{ flex:1 }}>

               


               {
                    todo.map((data,index)=>(


                       <View style={{ flexDirection: 'row', padding: 14, margin: 7, elevation: 5, borderWidth:0 }}>
                       <View style={{  flex:1 }}>
                           <Text style={{fontSize:18}} > {data} </Text>
                       </View>

                        <Button title="Delete"

                            onPress={()=>{
                                let existingData = [...todo];
                                existingData.splice(index, 1)
                                setTodo(existingData);
                    
                            }}

                            
                        />

              </View>


                   ))
                   
               }



                {todo.length == 0 ? <View >
                    <Text>No todo Added Yet</Text>
                </View> : null}
               
            </ScrollView>




























        </View>

    );
};
