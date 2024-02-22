import { FC } from 'react'
import { useAppDispatch, useAppSelector } from '@store/hooks';
import { setUserNavDisplay } from '@store/displaySlice'
import styles from '../nav.module.css'


const UserButton: FC = () => {
  const dispatch = useAppDispatch();
  const userImage = useAppSelector((state) => state.user.imageData);
  console.log(`this is user image ${userImage}`);

  return (
    <>
      <div className={styles.userBtn}>

        <div 
          className={`cursorPointer ${styles.userImage}`} 
          onClick={(): void => { 
            dispatch(setUserNavDisplay('')) 
          }} >

          {
            !userImage ?
            <img className={styles.userIcon} src="./images/userIcon.png" style={{ height: '40px' }} /> 
            :
            <img className={styles.userImage} src={userImage.imageLink} style={{ height: '40px' }} />
          }
          {/* <img src="./images/userIcon.png" style={{ height: '40px' }} /> */}

        </div>
      </div>

    </>
  )
}

export default UserButton;




