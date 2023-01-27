import "./Input.css"

function Input({ header, name }) {

    return (
        <section>
            <h2>{ header }</h2>
            <input type="text" name={ name } id="" value="0" />

        </section>
    )
}

export default Input