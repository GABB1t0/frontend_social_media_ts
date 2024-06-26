import { createSlice } from '@reduxjs/toolkit'
import { UserSchema } from '../../types/SearchUserLoggedApiResponse'
import { statusRequestApiTypes } from '../../types';
import { z } from 'zod';

export type UserLoggedState =  {
    entities: z.infer<typeof UserSchema> | undefined;
    loading: statusRequestApiTypes
}

const initialState: UserLoggedState = {
    entities : undefined,
    loading:'idle'
}

const userLoggedSlice = createSlice({ 
    name: 'userLogged',
    initialState,
    reducers: {
        addUser: (state, action ) => {
            state.entities = action.payload
            state.loading = 'succeeded';
        },
        removeUser:(state) => {
            state.entities = undefined
            state.loading = 'idle'
        }
    }
})    

export default userLoggedSlice.reducer;
export const { addUser, removeUser } = userLoggedSlice.actions;