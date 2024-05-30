import '../../styles/popup.css';
import ButtonRed from '../atoms/buttons/ButtonRed';

const Popup = ({ message, onAccept,buttonText }) => {
  return (
    <div className="popup">
      <div className="popup-inner">
        <p>{message}</p>
        <ButtonRed
            buttonText={buttonText}
            onClick={onAccept}
        />
      </div>
    </div>
  );
};

export default Popup;