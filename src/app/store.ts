import { combineReducers, configureStore } from '@reduxjs/toolkit'
import userLoggedSlice, { UserLoggedState} from './slices/userLoggedSlice'
import userProfileSlice, {UserProfileState} from './slices/userProfileSlice'
import panelSlice, {PanelState} from './slices/panelSlice'

export type AppState = {
  userLogged: UserLoggedState,
  userProfile:UserProfileState,
  statePanel: PanelState
}

export type RootState = AppState;

export const store = configureStore({
  reducer: combineReducers({
    userLogged: userLoggedSlice,
    userProfile:userProfileSlice,
    statePanel: panelSlice
  }),
})

export type AppDispatch = typeof store.dispatch