import './App.css'
import Contactslist from './components/Contactslist'
import Sidebar from './components/Sidebar'
import { useState, useEffect } from "react"

function App() {

  const [contacts, setContacts] = useState([])
  const [photos, setPhotos] = useState([])

  let URL = "https://jsonplaceholder.typicode.com/users"
  let photoURL = "https://jsonplaceholder.typicode.com/photos/?_limit=10"

  useEffect(() => {
    fetch(URL)
      .then(res => res.json())
      // .then(json => setContacts(json))
      .then(json => setContacts(json))

    fetch(photoURL)
      .then(res => res.json())
      // .then(data => setPhotos(data))
      .then(data => setPhotos(data))

  }, [URL, photoURL])

  return (
    <div className="App">
      <Sidebar />
      <Contactslist contacts={contacts} photos={photos} />
    </div>
  )
}

export default App
