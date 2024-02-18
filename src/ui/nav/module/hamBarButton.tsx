import { FC } from 'react'
import { useAppDispatch } from '@store/hooks'
import {
  setHamAnimation,
  setHamDisplay,
} from '@store/displaySlice'
import styles from '../nav.module.css';

const HamBarButton: FC = () => {
  const dispatch = useAppDispatch();
  return (
    <>
      <img
        src="/images/hambar.png"
        alt="" height="30"
        width="30"
        className={`cursorPointer ${styles.ham_button}`}
        onClick={() => {
          dispatch(setHamAnimation('slideDown'))
          dispatch(setHamDisplay(''))
        }}
      />
    </>
  )
}

export default HamBarButton;