import { useState } from 'react';

import Modal from './../components/Modal';
import Backdrop from './../components/Backdrop';

function Todo(props) {
  const [showModal, setShowModal] = useState(false);
  
  function deleteHandler() {
    setShowModal(true);
  }
  
  function closeModalHandler() {
    setShowModal(false);
  }

  return (
    <div className="card">
      <h2>{ props.text }</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>Delete</button>
      </div>
      {showModal && <Modal onCancel={closeModalHandler}/>}
      {showModal && <Backdrop onClick={closeModalHandler}/>}
    </div>

  )
}

export default Todo;