import { createSlice } from '@reduxjs/toolkit'
import { UserSchema } from '../../types/SearchUserLoggedApiResponse'
import { statusRequestApiTypes } from '../../types';
import { ImageSchema } from '../../types/ImagesResponseApi';
 
export type UserProfileState = {
    user?: typeof UserSchema,
    photos?: typeof ImageSchema [],
    loading: statusRequestApiTypes,
    error?:string
}

const initialState: UserProfileState = {
    user:undefined,
    photos:undefined,
    loading:'idle',
    error:undefined
}

const userProfileSlice = createSlice({ 
    name: 'userProfile',
    initialState,
    reducers: {
        addUser: (state, action ) => {
            state.loading = 'succeeded'
            state.user = action.payload
        },
        addPhotos: (state, action ) => {
            state.loading = 'succeeded'
            state.photos = action.payload
        },
        removeUser:(state) => {
            state.user = undefined
            state.photos = undefined
            state.loading = 'idle'
        }
    }

})    

export default userProfileSlice.reducer;
export const { addUser, addPhotos, removeUser } = userProfileSlice.actions;