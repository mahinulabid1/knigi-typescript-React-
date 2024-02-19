import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Store } from "@reduxjs/toolkit";
import { userInfo } from "os";


interface TypeUserInfo {
  isDataCached: boolean,
  birthdate: string,
  email: string,
  firstName: string,
  lastName: string,
  gender: string,
  imageData: any,
  username: string
}

const initialState:TypeUserInfo = {
  isDataCached:false,
  birthdate: 'null',
  email:"null",
  firstName: 'null',
  lastName: 'null',
  gender: 'null',
  imageData: 'null',
  username: 'null'
}

export const userCacheInfo = createSlice({
  name:'userCache',
  initialState,
  reducers:{
    setIsDataCached: (state:any, action:PayloadAction<boolean>):void => {
      state.isDataCached = action.payload
    },
    setBirthdate : (state:any, action:PayloadAction<string>):void => {
      state.birthdate = action.payload;
    },

    setEmail : (state:any, action:PayloadAction<string>):void => {
      state.email = action.payload;
    },

    setFirstName : (state:any, action:PayloadAction<string>):void => {
      state.firstName = action.payload;
    },

    setLastName : (state:any, action:PayloadAction<string>):void => {
      state.lastName = action.payload;
    },

    setGender : (state:any, action:PayloadAction<string>):void => {
      state.firstName = action.payload;
    },

    setImageData : (state:any, action:PayloadAction<string>):void => {
      state.imageData = action.payload;
    },

    setUsername : (state:any, action:PayloadAction<string>):void => {
      state.username = action.payload;
    }
  }
})

export const {
  setBirthdate,
  setEmail, 
  setFirstName,
  setLastName,
  setGender,
  setImageData,
  setUsername,
  setIsDataCached
} = userCacheInfo.actions;

export default userCacheInfo.reducer;