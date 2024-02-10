import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import type {RootState} from './store'

interface DisplayState {
  hamDisplay: string,
  hamAnimation: string,
  searchDisplay: string,
  searchAnimation: string,
  cartDisplay: string,
  shopDisplay: string,
  shopAnimation:string,
  shopCloseValidation:number,
  userNavDisplay: string,
  timeWhenNavOpened: number
}

const initialState:DisplayState = {
  hamDisplay : "d-none",
  hamAnimation: 'slideUp',
  searchDisplay: 'd-none',
  searchAnimation: 'slideUp',
  cartDisplay: 'd-none',
  shopDisplay: 'd-none',
  shopAnimation: 'slideUp',
  shopCloseValidation: 0,
  userNavDisplay: 'd-none',
  timeWhenNavOpened:0
}

export const displaySlice = createSlice({
  name: 'displayState',
  initialState,
  reducers: {
    setHamDisplay : (state:any, action:PayloadAction<string>):void => {
      state.hamDisplay = action.payload;
    },

    setHamAnimation : (state:any, action:PayloadAction<string>):void => {
      state.hamAnimation = action.payload;
    },

    setSearchDisplay : (state:any, action:PayloadAction<string>):void => {
      state.searchDisplay = action.payload;
    },

    setSearchAnimation : (state:any, action:PayloadAction<string>):void => {
      state.searchAnimation = action.payload;
    },

    setCartDisplay : (state:any, action:PayloadAction<string>):void => {
      state.cartDisplay = action.payload;
    },

    setShopDisplay : (state:any, action:PayloadAction<string>):void => {
      state.shopDisplay = action.payload;
    },

    setShopAnimation : (state:any, action:PayloadAction<string>):void => {
      state.shopAnimation = action.payload;
    },

    setShopCloseValidation : (state:any, action:PayloadAction<number>):void => {
      state.shopCloseValidation = action.payload;
    },

    setUserNavDisplay : (state:any, action:PayloadAction<string>):void => {
      state.userNavDisplay = action.payload;
    },
    setTimeWhenNavOpened : (state:any, action:PayloadAction<number>):void => {
      state.timeWhenNavOpened = action.payload;
    }
  }
})


export const {
  setCartDisplay,
  setHamAnimation,
  setHamDisplay,
  setSearchAnimation,
  setSearchDisplay,
  setShopAnimation,
  setShopCloseValidation,
  setShopDisplay,
  setUserNavDisplay,
  setTimeWhenNavOpened
} = displaySlice.actions

export const selectDis = (state: RootState) => state.counter.value

export default displaySlice.reducer;