import React, { useState } from 'react';
import './Home.css';
import ListItem from './ListItem/ListItem';
const Home = () => {
   const [todoList,setTodoList] = useState([]);
   const [todo,setTodo] = useState('');

   const handleSubmit=(e)=>{
      e.preventDefault();
      if(todo===null || todo.trim()===''){
         return false;
      }
      else{
      const myTodo = [...todoList,todo];
      setTodoList(myTodo);
      setTodo('');}
   }
   
   const handleChange=(e)=>{
      setTodo(e.target.value);
   }
   const handleDelete=(index)=>{
      let newList = [...todoList];
      newList.splice(index,1); 
      setTodoList(newList);
   }
   const handleEdit=(seletedItem,index)=>{
      setTodo(seletedItem);
      handleDelete(index);
   }
   return (
      
      <div>
         <div className='heading'>
         <h1>Welcome To My Todo</h1>
         </div>
         <div>
         <form onSubmit={handleSubmit}>
         <input type="text" value={todo} onChange={handleChange} />
         <button type="submit">Submit</button>
         </form>
         </div>
      <div className="myTodoItems">
         {
            todoList.map((item,index)=><ListItem item={item} deleteItem={handleDelete} editItem={handleEdit} index={index} key={index}></ListItem>)
         }
      </div>

      </div>
   );
};

export default Home;