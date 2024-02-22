import {FC, useState} from "react"
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
  

  // Error display state
  const [firstNameErr, setFirstNameErr] = useState<string>('d-none');
  const [lastNameErr, setLastNameErr] = useState<string>('d-none');
  const [emailErr, setEmailErr] = useState<string>('d-none');
  const [passwordErr, setPasswordErr] = useState<string>('d-none');
  const [birthdateErr, setBirthdateErr] = useState<string>('d-none');
  const [usernameErr, setUsernameErr] = useState<string>('d-none');
  const [genderErr, setGenderErr] = useState<string>('d-none');

  const trimInput = () =>{
    const trimFirstName:string = firstName.trim();
    const trimLastName:string = lastName.trim();
    const trimUserName:string = username.trim();
    let trimEmail:string = email.trim().toLowerCase();
    return {trimFirstName, trimLastName, trimEmail, trimUserName};
  }


  const validationHandler = ():void => {
    const {trimFirstName, trimLastName, trimEmail, trimUserName} = trimInput();
    trimFirstName === '' ? setFirstNameErr('') : setFirstNameErr('d-none');
    trimEmail === '' ? setEmailErr(''): setEmailErr('d-none');
    trimLastName === '' ? setLastNameErr('') : setLastNameErr('d-none');
    trimUserName === ''? setUsernameErr('') : setUsernameErr('d-none');
    password === '' ? setPasswordErr('') : setPasswordErr('d-none');
    birthdate === '' ? setBirthdateErr(''): setBirthdateErr('d-none');
    gender === '' || gender === 'selectOne' ? setGenderErr('') :  setGenderErr('d-none');
    validateEmail(trimEmail) === false ? setEmailErr(''): setEmailErr('d-none');
  }

  return (
    <>
      <form className={styles.createAccountForm}>
        <input
          type="text"
          key={1} placeholder='First Name'
          name='firstName'
          onChange ={(event) => { dispatch(setSignUpFirstName(event.target.value));}}
        />
        <p className={`${styles.errorMessage} ${firstNameErr}`}>Enter First Name</p>

        <input
          type="text"
          key={2}
          placeholder='Last Name'
          name='lastName'
          onChange ={(event) => { dispatch(setSignUpLastName(event.target.value)) }}
        />
        <p className={`${styles.errorMessage} ${lastNameErr}`}>Enter Last Name</p>

        <input
          type="email"
          key={3}
          placeholder='Enter email'
          name="email"
          onChange ={(event) => { dispatch(setSignUpEmail(event.target.value)) }}
        />
        <p className={`${styles.errorMessage} ${emailErr}`}>Enter Your Email Address</p>

        {/* <label for="dropdown">Select an option:</label> <br></br> */}
        <select name="gender"
        onChange ={(event) => { dispatch(setSignUpGender(event.target.value)) }}
        >
          <option value="selectOne">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        <p className={`${styles.errorMessage} ${genderErr}`}>Select a gender</p>

        <input
          type="text"
          key={5}
          placeholder='username'
          name="username"
          onChange ={(event) => { dispatch(setSignUpUsername(event.target.value)) }}
        />
        <p className={`${styles.errorMessage} ${usernameErr}`}>Username is missing 😔</p>

        <input
          type="text"
          key={6}
          placeholder='birthdate dd-mm-yyyy'
          name="birthdate"
          onChange ={(event) => { dispatch(setSignUpBirthdate(event.target.value)) }}
        />
        <p className={`${styles.errorMessage} ${birthdateErr}`}>Enter your birthdate</p>

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
        <p className={`${styles.errorMessage} ${passwordErr}`}>Can't create account without password 😔</p>
      </form>

      <button
        className={styles.submit + " transition"}
        onClick = {validationHandler}
      >
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