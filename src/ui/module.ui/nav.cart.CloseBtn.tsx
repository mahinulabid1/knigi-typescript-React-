import { cartSwitch } from "../../data&functions/switch";

const CartCloseBtn = ( {setDisplay} ) => {
    return (
        <>
            <img onClick={ ()=>{ setDisplay('d-none') } } src="/images/icons/close.png" alt="" height="20" width="20" />
        </>
    )
} 

export default CartCloseBtn;