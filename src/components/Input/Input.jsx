import "./Input.css"

function Input({ header, name, handleChange }) {

    return (
        <section className="input-wrapper">
            <h2>{ header }</h2>
            <input onChange={ handleChange } type="number" name={ name } id=""  />

        </section>
    )
}

export default Input