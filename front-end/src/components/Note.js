import React, { useState } from "react";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Collapse } from 'reactstrap'

function Note(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);


  function handleClick() {
    props.onBid(props.id);
    toggle();
  }

  return (
    <div className="note text-center">
      <img src={props.imgurl} onClick={toggle} ></img>
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <Collapse isOpen={isOpen}>
      <TextField
          id="outlined-number"
          label="Bidding Price"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
        
        <br/>
      <Button className="mt-2" variant="contained" color="primary" onClick={handleClick} >
        Bid
      </Button>
      </Collapse>
    </div>
  );
}

export default Note;
