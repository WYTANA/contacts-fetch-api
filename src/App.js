import './App.css'
import Contactslist from './components/Contactslist'
import Sidebar from './components/Sidebar'
import { useState, useEffect } from "react"

function App() {

  const [contacts, setContacts] = useState([])
  const [images, setImages] = useState([])

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(json => setContacts(json))

    // fetch(`https://robohash.org/${Math.random()}.png`)
    //   .then(res => res.json())
    //   .then(data => setImages(data))

  }, [])

  return (
    <div className="App">
      <Sidebar contacts={contacts} />
      <Contactslist contacts={contacts} images={images} setImages={setImages} setContacts={setContacts} />
    </div>
  )
}

export default App
