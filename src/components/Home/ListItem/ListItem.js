import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';



const ListItem = (props) => {

   const {item,deleteItem,index,editItem} = props;
   return (
      
      <div style={{borderRadius:'4px'}} className='d-flex justify-content-between align-items-center m-2 px-2 text-dark bg-light' >
      
      <div>
         <p className='my-2' >{item}</p>
      </div>

         <div>
         <FontAwesomeIcon style={{color:'green'}} icon={faEdit} onClick={()=>editItem(item,index)} />
         <FontAwesomeIcon style={{color:'red'}} icon={faTrash} onClick={()=>deleteItem(index)} />
         </div>
      
      </div>
   );
};

export default ListItem;