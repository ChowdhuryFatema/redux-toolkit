import { RootState } from "@/redux/store";
import { IUser } from "@/types";
import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
    users: IUser[];
}

const initialState: InitialState = {
    users: [
        {
            id: 'asdf',
            name: 'fatema'
        },
        {
            id: 'asdfsdf',
            name: 'chowdhury'
        },
    ]
}

type DraftUser = Pick<IUser, "name">;

const createUser = (userData: DraftUser): IUser => {
    return { id: nanoid(), ...userData }
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addUser: (state, action: PayloadAction<IUser>) => {
            state.users.push(createUser(action.payload));
        },
        removeUser: (state, action: PayloadAction<string>) => {
            state.users = state.users.filter(user => user.id !== action.payload)
        }
    },
})

export const { addUser, removeUser } = userSlice.actions;

export const selectUser = (state: RootState) => {
    return state.user.users
}

export default userSlice.reducer;