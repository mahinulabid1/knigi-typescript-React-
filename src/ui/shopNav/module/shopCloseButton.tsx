// this close button is empty white space where if client hover, navigation will close
import { FC } from 'react';
import { useAppDispatch, useAppSelector } from "@store/hooks";
import {
  setShopAnimation,
  setShopDisplay,
} from '@store/displaySlice'

const ShopNavigationClose: FC = () => {
  const dispatch = useAppDispatch();
  const timeWhenShopOpened = useAppSelector((state) => state.display.timeWhenNavOpened)

  const eventHandler = () => {
    //preventing auto close
    const timeCheck = Date.now() - timeWhenShopOpened;
    if (timeCheck > 400) {
      dispatch(setShopAnimation('slideUp'));
      setTimeout(() => {
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