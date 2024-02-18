import { FC } from 'react'
import { useAppDispatch } from '@store/hooks';
import {
  setSearchAnimation,
  setSearchDisplay,
} from '@store/displaySlice'
import styles from '../nav.module.css'


const SearchButton: FC = () => {
  const dispatch = useAppDispatch();
  return (
    <>
      <div className={styles.searchIcon + " cursorPointer"}>
        <img
          src="/images/icons/search.png"
          onClick={(): void => {
            dispatch(setSearchAnimation('slideDown'))
            dispatch(setSearchDisplay(''))
          }
          }
          alt="search anything"
          height="20"
          width="20"
        />
      </div>
    </>
  )
}

export default SearchButton;