
import './App.css'

import Input from './components/Input/Input'

function App() {

  return (
    <div className="App">
      <h1>Split the nota</h1>
      <Input header='Summa' name='sum' />
      <Input header='Antal vänner' name='friends' />
      <Input header='Dricks' name='tips' />

    </div>
  )
}

export default App
