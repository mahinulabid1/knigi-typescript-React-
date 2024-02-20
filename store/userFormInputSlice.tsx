import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface UserInput {
  signInUsername : string
  signInPassword : string
  signUpFirstName :string
  signUpUsername:string
  signUpLastName: string
  signUpEmail: string
  signUpGender: string
  signUpPassword: string
  signUpBirthdate : string
}

const initialState:UserInput = {
  signInUsername: '',
  signInPassword: '',
  signUpFirstName: '',
  signUpLastName: '',
  signUpEmail: '',
  signUpGender: '',
  signUpPassword: '',
  signUpUsername: '',
  signUpBirthdate: ''
}

const formInputSlice = createSlice({
  name: 'formInputSlice',
  initialState,
  reducers: {
    setSignInUsername : (state:any, action:PayloadAction<string>) => {
      state.signInUsername = action.payload
    },
    setSignInPassword : (state:any, action:PayloadAction<string>) => {
      state.signInPassword = action.payload;
    },
    setSignUpFirstName : (state:any, action:PayloadAction<any>) => {
      state.signUpFirstName = action.payload;
    },
    setSignUpLastName : (state:any, action:PayloadAction<string>) => {
      state.signUpLastName = action.payload;
    },
    setSignUpEmail : (state:any, action:PayloadAction<string>) => {
      state.signUpEmail = action.payload;
    },
    setSignUpGender : (state:any, action:PayloadAction<string>) => {
      state.signUpGender = action.payload;
    },
    setSignUpUsername : (state:any, action:PayloadAction<string>) => {
      state.signUpUsername = action.payload;
    },
    setSignUpBirthdate : (state:any, action:PayloadAction<string>) => {
      state.signUpBirthdate = action.payload;
    },
    setSignUpPassword : (state:any, action:PayloadAction<string>) => {
      state.signUpPassword = action.payload;
    },
  }
})


export const {
  setSignInPassword,
  setSignInUsername,
  setSignUpBirthdate,
  setSignUpEmail,
  setSignUpFirstName,
  setSignUpGender,
  setSignUpLastName,
  setSignUpPassword,
  setSignUpUsername
} = formInputSlice.actions;

export default formInputSlice.reducer;