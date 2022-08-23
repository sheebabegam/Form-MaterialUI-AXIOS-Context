import './modal.css';
import { UserContext } from './UserContext';
import { useContext } from 'react';

const Modals = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  const {  finalSubmit } = useContext(UserContext);
  


  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {children}
        <button type="button" onClick={finalSubmit}>
          Ok
        </button>
        <button type="button" onClick={handleClose}>
          Close
        </button>
      </section>
    </div>
  );
};

export default  Modals;