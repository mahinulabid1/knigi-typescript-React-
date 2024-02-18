import { FC } from 'react'
import { useAppDispatch } from '@store/hooks';
import {
  setShopAnimation,
  setShopDisplay,
  setTimeWhenNavOpened
} from '@store/displaySlice'
import styles from '../nav.module.css'

const ShopButton: FC = () => {
  const dispatch = useAppDispatch();
  return (
    <>
      <div onClick={
        (): void => {
          dispatch(setShopAnimation('slideDown'))
          dispatch(setShopDisplay(''))
          dispatch(setTimeWhenNavOpened(Date.now()))
        }}
        className="shop-btn flex cursorPointer"
      >

        <span>SHOP</span>
        <img
          className={styles.shop_btn_image}
          src="/images/icons/arrowdown.png"
          alt=""
          height="20"
          width="20"
        />

      </div>
    </>
  )
}

export default ShopButton;