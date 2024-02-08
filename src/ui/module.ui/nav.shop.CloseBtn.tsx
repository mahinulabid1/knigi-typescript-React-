const ShopNavigationClose = ( {setDisplay, setAnimation, closeValidation} ) => {

    const eventHandler = () => {
        //preventing auto close
        const timeCheck = Date.now() - closeValidation;
        if(timeCheck > 400 ) {
            setAnimation('slideUp')
            setTimeout(() => {
                setDisplay('d-none');
            }, 390)
        }
    }

    return (
        <>
            <div
                style = {{ height: '100%', width: '100%' }}
                onMouseOver = {eventHandler}
            >
            </div>
        </>
    )
}

export default ShopNavigationClose;