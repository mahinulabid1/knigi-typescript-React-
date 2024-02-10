import { FC } from 'react'
import { useAppDispatch } from '@store/hooks';
import { setCartDisplay } from '@store/displaySlice'
import styles from '../nav.module.css'


const CartButton: FC = () => {
  const dispatch = useAppDispatch();
  return (
    <>
      <div
        className="cursorPointer"
        onClick={(): void => {
          dispatch(setCartDisplay(''))
        }}
        id="cart-open" >

        <img className={styles.cartIcon}
          src="/images/icons/cart.png"
          alt="Shopping Cart"
          height="20"
          width="20" />

      </div>
    </>
  )
}

export default CartButton;