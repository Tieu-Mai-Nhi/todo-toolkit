import { configureStore } from '@reduxjs/toolkit'
import todoSlice from './Todo/todoSlice'

const store = configureStore({
    reducer: {
        todoList: todoSlice,
    }
})

export default store