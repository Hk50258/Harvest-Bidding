import React, {useState} from 'react';
import Note from "../../components/Note";
import {Data} from "./Products"
function ProductPage(props) {

    const [notes, setNotes] = useState(Data);

    const bidFun = () => {
      alert("Bidded")
    }


    return (
        <div className="container">
          <div className='row  mt-1'>
            {notes.map((noteItem, index) => {
              return (
                <Note
                  key={index}
                  id={index}
                  title={noteItem.title}
                  content={noteItem.component}
                  onBid={bidFun}
                />
              );
            })}
          </div>
        </div>
    );
}

export default ProductPage;