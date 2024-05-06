import { createSlice } from '@reduxjs/toolkit'


export type PanelState = {
  statePostModal: boolean,
  stateProfileModal: boolean,
  stateDropdownMenu: boolean
}

const initialState: PanelState = {
    statePostModal: false, 
    stateProfileModal: false,
    stateDropdownMenu: false
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
      },
      openDropDownMenu: (state) => {
        state.stateDropdownMenu = true
      },
      closeDropDownMenu: (state) => {
        state.stateDropdownMenu = false
      }
        

    }

})    


export default panelSlice.reducer;
export const { setModalPost, toggleModalProfile, openDropDownMenu, closeDropDownMenu } = panelSlice.actions;