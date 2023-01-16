// import logo from './logo.svg';
import './App.css';
import {useState} from "react"
import Title from './Components/Title'
import Modal from './Components/Modal'
import EventList from './Components/EventList'
import NewEventForm from './Components/NewEventForm'

function App() {
  const [showModal, setShowModal] = useState(false)
  const [showEvents, setShowEvents] = useState(true)
  const [events, setEvents] = useState([])

  const addEvent = (event) => {
    setEvents((prevEvents) => {
      return [...prevEvents, event]
    })
    setShowModal(false)
  }

  const handleClick = (id) => {
    setEvents((prevEvents) => {
      return prevEvents.filter((event) => {
        return id !== event.id
      })
    })
    // console.log(id)
  }

  const subtitle = "Todos los eventos dentro de la mente de Kaiko"

  return (
    <div className="App">
      <Title title="Eventos en tu área" subtitle={subtitle} />

      {showEvents && (
        <div className="hide-events">
          <button onClick={() => setShowEvents(false)}>Hide events</button>
        </div>
      )}

      {!showEvents && (
        <div className="show-events">
          <button onClick={() => setShowEvents(true)}>Show events</button>
        </div>
      )}

      {showEvents && <EventList events={events} handleClick={handleClick}/>}

      {showModal && <Modal isSalesModal={true}>
        <NewEventForm addEvent={addEvent}/>
      </Modal>}

      <div className="show-modal">
        <button onClick={() => {setShowModal(true)}}>Add new event</button>
      </div>
    </div>
  );
}

export default App;
