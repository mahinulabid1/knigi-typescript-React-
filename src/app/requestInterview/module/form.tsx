import styles from "./form.module.css"

const Form = () => {
    return (
        <>
            < h3 className = "section-flex-h3" > Tell us a bit about yourself </ h3 >
            < form action = "" >
                < input className = { styles.input } type = "text" placeholder="FIRST + LAST NAME" />
                < input className = { styles.input } type = "text" placeholder="LOCATION(CITY + STATE/ COUNTRY)" />
                < input className = { styles.input } type = "text" placeholder="WEBSITE (OPTIONAL)" />
                < input className = { styles.input } type = "email" placeholder="YOUR EMAIL" />
                < textarea className = { styles.textHolder } placeholder = "DESCRIBE YOURSELF"></textarea>
                < input className = { styles.submitBtn } type = "submit" value = "REQUEST AN INTERVIEW" />
            </ form >
        </>
    )
}

export default Form;