import { FC } from 'react';
import { useAppSelector } from '@store/hooks';
import { useCookies } from 'react-cookie';
import { useAppDispatch } from "@store/hooks";
import { useNavigate } from 'react-router-dom';

import {
  setBirthdate,
  setEmail, 
  setFirstName,
  setLastName,
  setGender,
  setImageData,
  setUsername,
  setIsDataCached
} from '@store/userCacheSlice'


const UserData:FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate(); 
  const username = useAppSelector((state)=> state.user.username);
  const firstName = useAppSelector((state) => state.user.firstName)
  const lastName = useAppSelector((state)=> state.user.lastName);
  const gender = useAppSelector((state) => state.user.gender)

  const [cookies, setCookie, removeCookies] = useCookies(['token']);

  const removeCookieHandler = () => {
    removeCookies('token');
    dispatch(setBirthdate(''));
    dispatch(setEmail(''));
    dispatch(setFirstName(''));
    dispatch(setLastName(''));
    dispatch(setGender(''));
    dispatch(setUsername(''));
    dispatch(setIsDataCached(false));
    dispatch(setImageData(''))
    navigate("/");
  }

  return (
    <>
      <h4 className="Username">{username}</h4>
      <p>{`${firstName} ${lastName}`}</p>
      <p>Gender: {`${gender}`}</p>
      <button>View Profile</button>
      <button onClick={removeCookieHandler}>Logout</button>
    </>
  )
}

export default UserData;