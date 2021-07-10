import React, { useEffect, useState } from 'react';
import './Home.css';
import ListItem from './ListItem/ListItem';

const Home = () => {
   const getTodos =()=>{
      const alltodo = localStorage.getItem('todo');
      if(alltodo){
         return JSON.parse(alltodo);
      }
      else{
         return [];
      }
   }
   const [todoList,setTodoList] = useState(getTodos);
   const [todo,setTodo] = useState('');


   useEffect(()=>{
      localStorage.setItem('todo',JSON.stringify(todoList));
   },[todoList])

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
         <input type="text" value={todo} placeholder='enter your todo here' onChange={handleChange} />
         <button type="submit" className='submit mx-1'>Add</button>
         </form>
         </div>
      <div className="myTodoItems">
      
      { (todoList.length===0) && <h4 className='text-center text-white py-5'>You Have No Saved Todo</h4>}
         {
            todoList.map((item,index)=><ListItem item={item} deleteItem={handleDelete} editItem={handleEdit} index={index} key={index}></ListItem>)
         }
      </div>

      </div>
   );
};

export default Home;