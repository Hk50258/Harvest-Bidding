import React from "react";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

function Note(props) {
  function handleClick() {
    props.onBid(props.id);
  }

  return (
    <div className="note text-center">
      <img src={props.imgurl} ></img>
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      
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
    </div>
  );
}

export default Note;
