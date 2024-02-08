import {useState, useEffect} from 'react';
import Navigation from "../../ui/Nav"
import Footer from "../../ui/footer"
import styles from "./SignIn.module.css"

// const [formState, setFormState] = useState('signin');

// sign in form component
const SignInForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <>
        <form>
            <input type = "text" key = { 1 } placeholder = 'Enter your Username' onChange ={(event) => { setUsername ( event.target.value ) } }></input>
            <input type = "password" key = { 2 } placeholder = 'Enter the password' onChange ={(event) => { setPassword ( event.target.value ) } }></input>
        </form>

        <button className={styles.submit + " transition"}>Sign In</button>
        
        </>
    )
}

// create new account form component
const CreateNewAccountForm = ( ) =>{ 
    const [formInfo, setFormInfo] = useState({

    })
    
    return (
        <>
        <form>
            <input type = "text" key = { 1 } placeholder = 'Your Full Name' onChange ={(event) => { setUsername ( event.target.value ) } }></input>
            <input type = "text" key = { 1 } placeholder = 'Enter your Username' onChange ={(event) => { setUsername ( event.target.value ) } }></input>
            <input type = "password" key = { 2 } placeholder = 'Enter Password' onChange ={(event) => { setPassword ( event.target.value ) } }></input>
        </form>

        <button className={styles.submit + " transition"}>Create new Account</button>
        
        
        </>
    )

}

// MAIN mother component
const FormComponent = () => {
    // text data depending on which senction I'm in. eg: SignIn section
    const textObject = {
        signIn : {
            heading: "Sign In",
            formSwitchingButton : "Create new account",
        },
        createAccount : {
            heading: "Create Account",
            formSwitchingButton : "Already have an account?"
        }
    }

    // data/information to change between signIn and Create new account data 
    const formMetaData = {
        signIn : {
            component : <SignInForm />,
            type: 'signInForm'
        },
        createNewAccount : {
            component : <CreateNewAccountForm />,
            type : 'createAccountForm'
        }
    }

    const [formType, setFormType] = useState(formMetaData.signIn);
    const [ formText, setFormText ] = useState( textObject.signIn );

    // change form component on button click
    const changeForm = () =>{
        if ( formType.type ==="signInForm" ) {
            setFormType ( formMetaData.createNewAccount );
            setFormText( textObject.createAccount )
        }
        else {
            setFormType(formMetaData.signIn)
            setFormText(textObject.signIn)
        }
    }

    return(
        <>
        <Navigation/>

        <h1 className ={ styles.heading + ' text-center' }> {formText.heading} </h1>

        {/* Login Form */}
        <div  className = { styles.formContainer }>
            
            { formType.component }{/* combining Component with State */}

            <div className={ styles.formExtraLink + ' flex flex-s-b' }>
                <button onClick={()=>{changeForm()}}>
                     { formText.formSwitchingButton } {/* changing form using onClick */}
                </button> 
                <a href="/forgotpass">Forgot Password</a>
            </div>

        </div>
        

        <div className={styles.whiteSpaces}></div>

        <Footer/>
        </>
    )
}


export default FormComponent;