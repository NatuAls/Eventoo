import React, { useState } from "react";
import { useEffect } from "react";
import style from "./ButtonGroup.module.css";

const ButtonGroup = ({ buttons, handleGroup, input }) => {
  
  const [clickedId, setClickedId] = useState(0);
  const secondButton = buttons[1];

  const handleClick = (e, id) => {
    setClickedId(id);
    handleGroup(e);
  };

  useEffect(() => {
    if(input) {
      if(secondButton === 'Virtual') {
        if(input.modality && input.modality === 'Virtual') {
          setClickedId(1)
        }
      } else if(secondButton === 'Private') {
        if(input.isPublic === false) {
          setClickedId(1)
        }
      } else if(secondButton === 'Free') {
        if(input.isPaid === false) {
          setClickedId(1)
        }
      }
    }
  }, [input, secondButton])
 
  return (
    <div className={style.groupcont}>
      {buttons.map((buttonLabel, i) => (
        <button
            type="button"
          key={i}
          name={buttonLabel}
          onClick={(e) => handleClick(e, i)}
          className={i === clickedId ? style.active : style.customButton}
        >
          {buttonLabel}
        </button>
      ))}
    </div>
  );
};

export default ButtonGroup;