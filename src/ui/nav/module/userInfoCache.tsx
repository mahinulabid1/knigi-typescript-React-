/**
 * an empty functional component 
 * it simply fetches userinfo using token
 * then update redux hooks
 */
import {FC, useEffect } from 'react'
import { useAppSelector, useAppDispatch } from "@store/hooks";
import { useCookies } from "react-cookie";
import axios from 'axios'
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

const CacheUser:FC = () => {
  // const [dbData, setDbData] = useState<any>('No Data!');
  const [cookies, setCookie, removeCookie] = useCookies<any>(['token']);

  const dispatch = useAppDispatch();

  const isDataCached = useAppSelector((state) => state.user.isDataCached);
  console.log(isDataCached)
  // const token = cookies.token;
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImpvaG4iLCJpYXQiOjE3MDgzNDQwMjd9.HOQnVO9LWFk-hMTTM0h7BIYQJVRMwlgdiAkpeV-kj9o";

  useEffect(() => {
    axios.get('http://localhost:8000/api/v1/user', {headers:{Authorization: `$bearer ${token}`}}).then((res) =>{
      const data = res.data.data;
      // console.log(data);
      // setDbData(res.data.data);
      dispatch(setBirthdate(data.birthdate));
      dispatch(setEmail(data.email));
      dispatch(setFirstName(data.firstName));
      dispatch(setLastName(data.lastName));
      dispatch(setGender(data.gender));
      dispatch(setUsername(data.username));
      dispatch(setIsDataCached(true));
      dispatch(setImageData(data.imageCollection))
    })
  }, [])

  return(
    <>
    </>
  )
}

export default CacheUser;