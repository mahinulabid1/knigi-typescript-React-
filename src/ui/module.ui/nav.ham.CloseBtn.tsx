import { navigationSwitch } from "../../data&functions/switch";

const HamNavCloseBtn = ( {setDisplay, setAnimation} ) => {
    
    const clickHander = () =>{
        setAnimation('slideUp')
        //animation duration is 400ms for slideUp
        setTimeout(() => {
            setDisplay('d-none');
        }, 390);
    }

    return (
        <>
        <div 
        onClick={clickHander}>     
            <img src = "/images/icons/close.png" alt = "" height = "20" width = "20" />
        </div>
        </>
    )
}

export default HamNavCloseBtn;