import { RootState } from "@/redux/store";
import { ITask } from "@/types";
import { createSlice, PayloadAction, nanoid } from "@reduxjs/toolkit";
import { removeUser } from "../user/userSlice";

interface InitialState {
    tasks: ITask[];
    filter: string;
}

const initialState: InitialState = {
    tasks: [
        {
            id: "asdfasdfadf",
            title: "Initalize frontend",
            description: "Create Home page, and routing",
            dueDate: "2025-11",
            isCompleted: true,
            priority: "High",
            assignedTo: null,
        },
        {
            id: "asdfasdfadffdasd",
            title: "Create github repo",
            description: "Create Home page, and routing",
            dueDate: "2025-11",
            isCompleted: false,
            priority: "Medium",
            assignedTo: null,
        },
    ],
    filter: "all",
}

type DraftTask = Pick<ITask, "title" | "description" | "dueDate" | "priority" | "assignedTo">

const createTask = (taskData: DraftTask): ITask => {
    return {
        ...taskData ,
        id: nanoid(),
        isCompleted: false,
        assignedTo: taskData.assignedTo ? taskData.assignedTo : null,
    }
}

const taskSlice = createSlice({
    name: "task",
    initialState,
    reducers: {
        addTask: (state, action: PayloadAction<ITask>) => {
            const taskData = createTask(action.payload)
            state.tasks.push(taskData)
        },
        toggleCompleteState: (state, action: PayloadAction<string>) => {
            state.tasks.forEach((task) =>
                action.payload === task.id ?
                    task.isCompleted = !task.isCompleted : task)
        },
        deleteTask: (state, action: PayloadAction<string>) => {
            state.tasks = state.tasks.filter(task => task.id !== action.payload)
        },
        updateTask: (state, action: PayloadAction<ITask>) => {
            const payload = action.payload;
            state.tasks.forEach(task =>
                task.id === payload.id ?
                    {
                        ...task,
                        title: payload.title,
                        description: payload.description,
                        dueDate: payload.dueDate,
                        priority: payload.priority,
                    }
                    : task
            )
        },
        updateFilter: (state, action: PayloadAction<"All" | "Low" | "Medium" | "High">) => {
            state.filter = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(removeUser, (state, action) => {
            state.tasks.forEach(task => task.assignedTo === action.payload ? (task.assignedTo = null) : task)
        })
    }
})


export const { addTask, toggleCompleteState, deleteTask, updateFilter } = taskSlice.actions;

export const selectTasks = (state: RootState) => {
    const filter = state.todo.filter;

    if (filter === "Low") {
        return state.todo.tasks.filter(task => task.priority === "Low")
    }
    else if (filter === "Medium") {
        return state.todo.tasks.filter(task => task.priority === "Medium")
    }
    else if (filter === "High") {
        return state.todo.tasks.filter(task => task.priority === "High")
    }
    else {
        return state.todo.tasks;
    }
}

export default taskSlice.reducer;