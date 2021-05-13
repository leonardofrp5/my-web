import imgProfile from './assets/Images/imgProfile.png'
import './App.css'

function App () {
  return (
    <>
      <div className='container'>
        <img className='imgProfile' src={imgProfile} alt='img_leonardo' />
        <h3 className='title'>Leonardo Romero Perez</h3>
      </div>
    </>
  )
}

export default App
