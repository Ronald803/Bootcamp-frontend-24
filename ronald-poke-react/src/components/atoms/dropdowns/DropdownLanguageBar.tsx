import {useContext, useState} from 'react'
import '../../../styles/dropDownLanguageBar.css'
import { GeneralContext } from '../../../modules/Context/GeneralContext';
import ButtonImage from '../buttons/ButtonImage';
function DropdownLanguageBar({onSelect}) {
  const [isOpen, setIsOpen] = useState(false);
 // const [selectedOption, setSelectedOption] = useState(null);
  const { allLanguages } = useContext(GeneralContext)
  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option) => {
   // setSelectedOption(option);
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <div className="dropdown">
      <button className="dropdown-toggle" onClick={toggleDropdown}>
        ➕ more Languages
      </button>
      {isOpen && (
        <div className="dropdown-menu">
          {allLanguages.map((language,index) => (
            <ButtonImage
              name={language}
              imageUrl={language.flagImg}
              onClick={handleOptionClick}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default DropdownLanguageBar