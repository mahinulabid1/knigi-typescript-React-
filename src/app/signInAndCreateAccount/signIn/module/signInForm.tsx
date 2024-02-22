import { FC, useState } from 'react';
import styles from "../../main.module.css"
import { useAppDispatch, useAppSelector } from '@store/hooks';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie'
import {
  setSignInPassword,
  setSignInUsername,
} from "@store/userFormInputSlice";
import axios from "axios"

// sign in form component
const Form: FC = () => {
  const navigate = useNavigate();
  const [cookies, setCookies, removeCookies] = useCookies(['token']);
  const dispatch = useAppDispatch()
  const username = useAppSelector((state) => state.input.signInUsername);
  const password = useAppSelector((state) => state.input.signInPassword);


  // Error display state
  const [usernameErrDisplay, setUsernameErrDisplay] = useState<string>('d-none');
  const [passErrDisplay, setPassErrDisplay] = useState<string>('d-none');
  const [wrongCredErrDisplay, setWrongCredErrDisplay] = useState<string>('d-none');

  const formValidation = (): boolean => {
    const trimUsername = username.trim();
    const trimPassword = password.trim();
    trimUsername === '' ? setUsernameErrDisplay('') : setUsernameErrDisplay('d-none')
    trimPassword === '' ? setPassErrDisplay('') : setPassErrDisplay('d-none');
    if (trimPassword === '' || trimUsername === '') {
      return false; // false on not valid
    }
    else {
      return true;
    }
  }

  const submitHandler = () => {
    console.log('button clicked')
    axios.post(
      'http://localhost:8000/api/v1/login',
      {
        username: username,
        password: password
      }
    ).then((res) => {
      console.log(res.data.token);
      console.log(res)
      setCookies('token', res.data.token);
      navigate('/')
      
    }).catch((err) => {
      console.log(err)
      setWrongCredErrDisplay('');
    })
  }

  return (
    <>
      <form>
        <input
          type="text"
          key={1}
          placeholder='Enter your Username'
          onChange={(event): void => {
            dispatch(setSignInUsername(event.target.value))
          }}
        />
        <p className={`${styles.errorMessage} ${usernameErrDisplay}`}>Username is missing! 👆</p>

        <input
          type="password"
          key={2}
          placeholder='Enter the password'
          onChange={(event): void => {
            dispatch(setSignInPassword(event.target.value))
          }}
        />
        <p className={`${styles.errorMessage} ${passErrDisplay}`}>Can't login without password 😔</p>
        <p className={`${styles.errorMessage} ${wrongCredErrDisplay}`}>Username or password is wrong!😔 Try again</p>

      </form>

      <button
        className={styles.submit + " transition"}
        onClick={() => {
          formValidation();
          submitHandler();
        }}
      >
        Sign In
      </button>

    </>
  )
}


export default Form;