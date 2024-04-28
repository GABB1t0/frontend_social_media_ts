import { combineReducers, configureStore } from '@reduxjs/toolkit'
import userLoggedSlice, { UserLoggedState} from './slices/userLoggedSlice'
import userProfileSlice, {UserProfileState} from './slices/userProfileSlice'

type AppState = {
  user: UserLoggedState,
  userProfile:UserProfileState
}

export type RootState = AppState;

export const store = configureStore({
  reducer: combineReducers({
    userLogged: userLoggedSlice,
    userProfile:userProfileSlice,
  }),
})

export type AppDispatch = typeof store.dispatch