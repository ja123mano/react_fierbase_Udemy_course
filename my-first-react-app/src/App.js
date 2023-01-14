// import logo from './logo.svg';
import './App.css';
import React, {useState} from "react"
import Title from './Components/Title'
import Modal from './Components/Modal'

function App() {
  const [showModal, setShowModal] = useState(false)
  const [showEvents, setShowEvents] = useState(true)
  const [events, setEvents] = useState([
    {title: "Practicar js", id:1},
    {title: "Ver videos de Youtube", id:2},
    {title: "Estudiar más programación", id:3}
  ])

  console.log(showModal) 

  const handleClick = (id) => {
    setEvents((prevEvents) => {
      return prevEvents.filter((event) => {
        return id !== event.id
      })
    })
    console.log(id)
  }

  const handleClose = () => {
    setShowModal(false)
  }

  const subtitle = "All the latest events in Kaiko's mind"

  return (
    <div className="App">
      <Title title="Events in your area" subtitle={subtitle} />

      {showEvents && (
        <div>
          <button onClick={() => setShowEvents(false)}>Hide events</button>
        </div>
      )}

      {!showEvents && (
        <div>
          <button onClick={() => setShowEvents(true)}>Show events</button>
        </div>
      )}

      {showEvents && events.map((event) => (
        <React.Fragment key={event.id}>
          <h2>{event.id} - {event.title}</h2>
          <button onClick={() => handleClick(event.id)}>Delete event</button>
        </React.Fragment>
      ))}

      {showModal && <Modal handleClose={handleClose}>
        <h2>10% Off coupon code!</h2>
        <p>Use the code KAIKOSAMA at the checkout.</p>
      </Modal>}

      <div>
        <button onClick={() => {setShowModal(true)}}>Show Modal</button>
      </div>
    </div>
  );
}

export default App;

// TODO: Sección 33 min 1:42