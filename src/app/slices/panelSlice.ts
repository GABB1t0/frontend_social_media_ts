import { createSlice } from '@reduxjs/toolkit'


export type PanelState = {
  statePostModal: boolean,
  stateProfileModal: boolean
}

const initialState: PanelState = {
    statePostModal: false
    , stateProfileModal: false
}
const panelSlice = createSlice({ 
    name: 'statePanel',
    initialState,
    reducers: {
      setModalPost: (state) => {
        state.statePostModal = !state.statePostModal;
      },
      toggleModalProfile: (state) => {
        state.stateProfileModal = !state.stateProfileModal;
      }
        

    }

})    


export default panelSlice.reducer;
export const { setModalPost, toggleModalProfile } = panelSlice.actions;