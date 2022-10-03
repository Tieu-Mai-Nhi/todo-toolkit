//Slice là các reducer nhỏ trong rootReducer lớn
import { createSlice } from '@reduxjs/toolkit'

const todoSlice = createSlice({
    name: 'todoList',
    initialState: [],
    reducers: {
        add: (state, action) => {
            state.push(action.payload);
        },  // => tạo luôn action creator { type: 'todoList/add'}

        remove: (state, action) => {
            return state.filter((todo) => todo.id !== action.payload.id)  // có dấu {}: vì đây là obj, nên phải return func để trở về 1 obj
        },

        edit: (state, action) => {

        },

        toggleStatus: (state, action) => {
            const currentTodo = state.find(todo => todo.id === action.payload);
            currentTodo.completed = !currentTodo.completed;
        }
    }
});



export const todoSliceAction = todoSlice.actions;
export default todoSlice.reducer;

// payload là dữ liệu muốn truyền thì thêm vào đâu??? vd: payload: 10 --> thêm vào creatAction
// cấu hình payload?
// action có type, payload ở đâu?
// taskList render task? taskList lấy dữ liệu ở Task trên kho chung thì ko phải truyền props nữa?

//selector : 1:08 ---> muốn lấy dữ liệu từ đó thì cứ móc ra
