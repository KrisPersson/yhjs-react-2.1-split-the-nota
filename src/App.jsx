
import './App.css'

import Input from './components/Input/Input'

function App() {

  let formData = {
    sum: '',
    friends: '',
    tips: ''
  }

  function handleClick(event) {
    const totalSumIncTips = Number(formData.sum) + (Number(formData.sum) * Number(formData.tips))
    console.log("Varje person ska betala " + (totalSumIncTips / Number(formData.friends)) + "kronor.")

    event.preventDefault()
  }

  function handleChange(event) {
    const target = event.target

    formData = {
      ...formData,
      [target.name]: target.value
    }
  }

  return (
    <div className="App">
      <h1>Split the nota</h1>
      <form action="#">
        <Input header='Summa' name='sum' handleChange={ handleChange }  />
        <Input header='Antal vänner' name='friends' handleChange={ handleChange }  />
        <Input header='Dricks' name='tips' handleChange={ handleChange }  />
        <button onClick={ handleClick }>Räkna</button>
      </form>
    </div>
  )
}

export default App
