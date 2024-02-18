import { useAppDispatch, useAppSelector } from "@store/hooks";
import {
  setHamAnimation,
  setHamDisplay,
} from '@store/displaySlice'

const HamNavCloseBtn = () => {
  const dispatch = useAppDispatch();

  const clickHander = () => {
    dispatch(setHamAnimation('slideUp'))
    //animation duration is 400ms for slideUp
    setTimeout(() => {
      dispatch(setHamDisplay('d-none'))
    }, 390);
  }

  return (
    <>
      <div
        onClick={clickHander}>
        <img src="/images/icons/close.png" alt="" height="20" width="20" />
      </div>
    </>
  )
}

export default HamNavCloseBtn;