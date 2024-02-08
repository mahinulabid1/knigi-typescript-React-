import { searchSwitch } from "../../data&functions/switch";

const SearchCloseBtn = ( { setDisplay, setAnimation } ) => {
    
    const clickHandler = () => {
        setAnimation('slideUp')
        setTimeout(() => {
            setDisplay('d-none');
        }, 390)
    }

    return(
        <>
        <div 
            className="search-close-btn flex flex-align-center flex-s-a" 
            onClick = {clickHandler}
        >
            <img src="/images/icons/close.png" alt="" height="20" width="20"/>
        </div>
        </>
    )
}

export default SearchCloseBtn;