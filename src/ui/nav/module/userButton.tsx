import { FC } from 'react'
import { useAppDispatch } from '@store/hooks';
import { setUserNavDisplay } from '@store/displaySlice'
import styles from '../nav.module.css'


const UserButton: FC = () => {
  const dispatch = useAppDispatch();
  return (
    <>
      <div className={styles.userBtn}>

        <div 
          className={`cursorPointer ${styles.userImage}`} 
          onClick={(): void => { 
            dispatch(setUserNavDisplay('')) 
          }} >

          <img src="./images/userIcon.png" style={{ height: '40px' }} />

        </div>
      </div>

    </>
  )
}

export default UserButton;




