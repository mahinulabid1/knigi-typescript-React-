import { FC } from 'react'
import { cartSwitch } from "../../data&functions/switch";
import {
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
} from '@store/displaySlice'
import { useAppDispatch } from '@store/hooks';

const CartCloseBtn: FC = () => {
  const dispatch = useAppDispatch();
  return (
    <>
      <img 
      onClick={() => { 
        // setDisplay('d-none')
        dispatch(setCartDisplay('d-none'));
      }} 
      src="/images/icons/close.png" 
      alt="" 
      height="20" 
      width="20" />
    </>
  )
}

export default CartCloseBtn;