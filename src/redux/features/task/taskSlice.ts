import { RootState } from "@/redux/store";
import { ITask } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
    tasks: ITask[];
}

const initialState: InitialState = {
    tasks: [
        {
            id: "asdfasdfadf",
            title: "Initalize frontend",
            description: "Create Home page, and routing",
            duDate: "2025-11",
            isCompleted: false,
            priority: "High",
        },
        {
            id: "asdfasdfadf",
            title: "Create github repo",
            description: "Create Home page, and routing",
            duDate: "2025-11",
            isCompleted: false,
            priority: "High",
        },
    ]
}

const taskSlice = createSlice({
    name: "task",
    initialState,
    reducers: {},
})


export const selectTasks = (state: RootState) => {
    return state.todo.tasks;
}

export default taskSlice.reducer;