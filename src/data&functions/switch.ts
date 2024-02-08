const toggleFunc = (displayArg, animationArg) =>{
    // destructing state operation
    const [ displayState, setDisplay ] = displayArg;
    const [ animationState, setAnimation ] = animationArg;

    if(displayState === 'd-none') {
        setDisplay('')
        setAnimation('slideDown')
    } else {
        // slider animation duration : 400ms
        setAnimation('slideUp')
        setTimeout(() => {
            setDisplay('d-none');
        }, 390)
    }
}

const navigationSwitch = ( display, animation )  => {
    // each argument is an array, take state & functions as arguments
    toggleFunc(display, animation);
}


const searchSwitch = ( display, animation ) => {
    toggleFunc(display, animation);
}


const shopNavigationSwitch =  ( display, animation ) => {
    toggleFunc(display, animation);
}

const cartSwitch =  ( display ) => {
    const [ displayState, setDisplay ] = display;
    displayState === 'd-none' ? setDisplay('') : setDisplay('d-none');
}

export {
    navigationSwitch,
    searchSwitch,
    shopNavigationSwitch,
    cartSwitch
};