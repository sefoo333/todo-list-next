import { createSlice } from "@reduxjs/toolkit"


export const todoSlice = createSlice({
    name: "todoSlice",
    initialState: [],
    reducers: {
        add: (state, action) => {
            if (action.payload !== "") {
                const todo = { id: Date.now(), name: action.payload, check: false };
                state.push(todo)
                console.log(todo)
            }
            return state
        },
        ischecked: (state, action) => {
            state.map((e) => {
                if (action.payload == e.id) {
                    !e.check ? e.check = true : e.check = false
                    console.log(e.check)
                }
            })
        }
        ,
        clear: (state, action) => {
            return []
        },
        remove: (state, action) => {
            return state.filter((e) => e.id != action.payload)
        }
    }
})





export const { add, ischecked, clear, remove } = todoSlice.actions
export default todoSlice.reducer