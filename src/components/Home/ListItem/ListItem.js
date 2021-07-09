import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons'


const ListItem = (props) => {
   console.log("props: ",props);
   const {item,deleteItem,index,editItem} = props;
   return (
      <div style={{padding:'1px 17px',margin:'2px 3px',border:'1px solid black'}}>
         <h3 style={{display:'inline',marginRight:'50px'}}>{item}</h3>
         <FontAwesomeIcon className="cart text-success" icon={faEdit} onClick={()=>editItem(item,index)} />
         <FontAwesomeIcon className="cart text-success" icon={faTrash} onClick={()=>deleteItem(index)} />
      </div>
   );
};

export default ListItem;