import { createSlice } from '@reduxjs/toolkit'
import { UserSchema } from '../../types/SearchUserLoggedApiResponse'
import { statusRequestApiTypes } from '../../types';
 
export type UserProfileState = {
    entities?: typeof UserSchema,
    loading: statusRequestApiTypes,
    error?:string
}

const initialState: UserProfileState = {
    entities : undefined,
    loading:'idle',
    error:undefined
}

const userProfileSlice = createSlice({ 
    name: 'userProfile',
    initialState,
    reducers: {
        addUser: (state, action ) => {
            state.loading = 'succeeded'
            state.entities = action.payload
        },
        removeUser:(state) => {
            state.entities = undefined
            state.loading = 'idle'
        }
    }

})    

export default userProfileSlice.reducer;
export const { addUser, removeUser } = userProfileSlice.actions;