import { Feather, FontAwesome } from '@expo/vector-icons';
import React, { useEffect } from 'react';
import { FlatList, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import todoApi from '../axios/todoApi';
import { todoSliceAction } from '../redux/Todo/todoSlice';

const TodoList = ({ navigation }) => {
    useEffect(() => {
        const fetchTodos = async () => {
            const todoList = await todoApi.getAll();
            console.log(todoList);
        }

        fetchTodos();
    }, []);


    const dispatch = useDispatch()
    const taskList = useSelector((state) => state.todoList)


    const renderItem = ({ item, index }) => {
        const number = index + 1;
        const numberText = number < 10 ? `0${number}` : number;
        const itemBg = number % 2 === 0 ? styles.even : styles.odd;

        const handleDeleteTask = (id) => {
            console.log(id); // id ở đây: item.id
            dispatch(todoSliceAction.remove({ id: id })) //remove obj có id là item.id
        }

        const handleEditTask = () => {

        }


        return (
            <View style={styles.item}>
                <View style={[styles.square, itemBg]}>
                    {/* css nhiều cho vào 1 mảng */}
                    <Text style={styles.number}>{numberText}</Text>
                </View>
                <Text style={styles.content}>{item.title}</Text>

                <TouchableOpacity>
                    <Pressable
                        style={styles.button}
                        onPress={() => handleDeleteTask(item.id)}
                    >
                        <Feather name="trash-2" size={24} color="white" />
                    </Pressable>
                </TouchableOpacity>

                <Pressable
                    style={styles.button}
                    onPress={() => navigation.navigate('Edit')}>
                    <FontAwesome name="edit" size={24} color="white" />
                </Pressable>
            </View >
        )
    };


    return (
        <View>
            {/* <Navigation /> */}
            <FlatList
                data={taskList}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </View>
    )
}

export default TodoList

const styles = StyleSheet.create({
    item: {
        width: '100%',
        top: 30,
        flexDirection: "row",
        backgroundColor: "#fff",
        marginBottom: 15,
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 8,
        alignItems: "center",
        // justifyContent: "space-between",
    },
    square: {
        width: 48,
        height: 36,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
    },
    number: {
        fontSize: 16,
        color: "#fff",
    },
    content: {
        width: "50%",
        fontSize: 16,
        marginLeft: 6,
    },
    even: {
        backgroundColor: 'green',
        color: "#000"
    },
    odd: {
        backgroundColor: 'orange',
        color: "#000"

    },
    button: {
        height: 40,
        width: 50,
        borderRadius: 10,
        backgroundColor: "deeppink",
        alignItems: "center",
        justifyContent: "center",
        marginLeft: 4,
        // paddingHorizontal: 
    }
});
