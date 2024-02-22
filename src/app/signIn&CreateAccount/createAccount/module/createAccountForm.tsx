import {FC} from "react"
import styles from "../../main.module.css";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import {
  setSignInPassword,
  setSignInUsername,
  setSignUpBirthdate,
  setSignUpEmail,
  setSignUpFirstName,
  setSignUpGender,
  setSignUpLastName,
  setSignUpPassword,
  setSignUpUsername
} from "@store/userFormInputSlice";
import validateEmail from "@lib/emailValidationRegex"

const CreateAccountForm: FC = () => {
  const dispatch =useAppDispatch();
  const gender = useAppSelector((state) => state.input.signUpGender)
  const firstName = useAppSelector((state) => state.input.signUpFirstName)
  const lastName = useAppSelector((state)=> state.input.signUpLastName)
  const email = useAppSelector((state) => state.input.signUpEmail)
  const password = useAppSelector((state) => state.input.signUpPassword)
  const birthdate = useAppSelector((state) => state.input.signUpBirthdate)
  const username = useAppSelector((state) => state.input.signUpUsername)
  


  return (
    <>
      <form className={styles.createAccountForm}>
        <input
          type="text"
          key={1} placeholder='First Name'
          name='firstName'
          onChange ={(event) => { dispatch(setSignUpFirstName(event.target.value));}}
        />

        <input
          type="text"
          key={2}
          placeholder='Last Name'
          name='lastName'
          onChange ={(event) => { dispatch(setSignUpLastName(event.target.value)) }}
        />

        <input
          type="email"
          key={3}
          placeholder='Enter email'
          name="email"
          onChange ={(event) => { dispatch(setSignUpEmail(event.target.value)) }}
        />

        {/* <label for="dropdown">Select an option:</label> <br></br> */}
        <select name="gender"
        onChange ={(event) => { dispatch(setSignUpGender(event.target.value)) }}
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>

        <input
          type="text"
          key={5}
          placeholder='username'
          name="username"
          onChange ={(event) => { dispatch(setSignUpUsername(event.target.value)) }}
        />

        <input
          type="text"
          key={6}
          placeholder='birthdate dd-mm-yyyy'
          name="birthdate"
          onChange ={(event) => { dispatch(setSignUpBirthdate(event.target.value)) }}
        />

        {/* <input
          type="email"
          key={6}
          placeholder='Provide your email'
          name="email"
        /> */}

        <input
          type="password"
          key={7}
          placeholder='Enter a strong password'
          name="password"
          onChange ={(event) => { dispatch(setSignUpPassword(event.target.value)) }}
        />
      </form>

      <button className={styles.submit + " transition"}>
        Create new Account
      </button>

      <br/>
      <br/>
      DEV MODE: <br/>
      Gender: --- {gender} <br/>
      FirstName: --- {firstName} <br/>
      LastName: --- {lastName} <br/>
      Email: --- {email} <br/>
      Password: --- {password} <br/>
      Username: --- {username} <br/>
      Birthdate: -- {birthdate} <br/>
    </>
  )
}


export default CreateAccountForm;