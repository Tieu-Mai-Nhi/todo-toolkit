import { nanoid } from 'nanoid';
import React, { useState } from 'react';
import { Keyboard, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { todoSliceAction } from '../../redux/Todo/todoSlice';

const TodoList = () => {
    // const { v4: uuidv4 } = require('uuid');
    const [task, setTask] = useState('')
    const dispatch = useDispatch();

    const handleAddButtonClick = () => {
        if (task.length === 0) {
            alert("Vui lòng nhập công việc!")
            return false;
        }
        dispatch(todoSliceAction.add({
            id: nanoid(),
            title: task,
            // completed: false,
        }))
        setTask("");
        Keyboard.dismiss()
    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.addTask}
            keyboardVerticalOffset={10}
        >
            <TextInput
                value={task}
                placeholder="Add Task"
                style={styles.input}
                onChangeText={(text) => setTask(text)} />
            <TouchableOpacity>
                <View style={styles.iconWrapper}>
                    <Text
                        style={styles.icon}
                        onPress={handleAddButtonClick}
                    >
                        +
                    </Text>
                </View>
            </TouchableOpacity>

        </KeyboardAvoidingView>
    )
}

export default TodoList

const styles = StyleSheet.create({
    addTask: {
        // bottom: 30,
        top: 10,
        paddingHorizontal: 20,
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },

    input: {
        width: "80%",
        height: 44,
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: "#21a3d0",
        borderRadius: 20,
        paddingHorizontal: 16,
        paddingVertical: 10,
    },

    iconWrapper: {
        width: 44,
        height: 44,
        borderRadius: "50%",
        backgroundColor: 'blue',
        alignItems: "center",
        justifyContent: "center",
    },

    icon: {
        fontSize: 24,
        color: "#FFFFFF",
    },
});
