// this close button is empty white space where if client hover, navigation will close
import { FC, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from "@store/hooks";
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

const ShopNavigationClose: FC = () => {
  const dispatch = useAppDispatch();
  const timeWhenShopOpened = useAppSelector((state) => state.display.timeWhenNavOpened)

  const eventHandler = () => {
    //preventing auto close
    const timeCheck = Date.now() - timeWhenShopOpened;
    if (timeCheck > 400) {
      // setAnimation('slideUp')
      dispatch(setShopAnimation('slideUp'));
      setTimeout(() => {
        // setDisplay('d-none');
        dispatch(setShopDisplay('d-none'));
      }, 390)
    }
  }

  return (
    <>
      <div
        style={{ height: '100%', width: '100%' }}
        onMouseOver={eventHandler}
      >
      </div>
    </>
  )
}

export default ShopNavigationClose;