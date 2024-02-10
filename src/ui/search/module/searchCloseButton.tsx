import {FC} from 'react';
import { useAppDispatch } from "@store/hooks";
// import { searchSwitch } from "../../../data&functions/switch";
import {
  setSearchAnimation,
  setSearchDisplay,
} from '@store/displaySlice'

const SearchCloseBtn:FC = () => {
  const dispatch = useAppDispatch(); // initializing

  const clickHandler = () => {
    dispatch(setSearchAnimation('slideUp'))
    setTimeout(() => {
      dispatch(setSearchDisplay('d-none'))
    }, 390)
  }

  return (
    <>
      <div
        className="search-close-btn flex flex-align-center flex-s-a"
        onClick={clickHandler}
      >
        <img src="/images/icons/close.png" alt="" height="20" width="20" />
      </div>
    </>
  )
}

export default SearchCloseBtn;