import React from 'react'
import { useState } from 'react';
import {IoMdAddCircle} from 'react-icons/io';
import { FaSearch } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { addTodo, updateSearchTerm } from '../redux/action';
import FilterButton from './FilterButton';
import TodoList from './TodoList';
const Todo = () => {
  const dispatch=useDispatch();
  const [newTodoText,setNewTodoText]=useState("");
  const [searchTerm,setSearchTerm]=useState("");
    const handleAddToDo=(text)=>{
      dispatch(addTodo(text));
    }
    const handleAddToDoClick=()=>{
      if(newTodoText.trim()!==""){
        handleAddToDo(newTodoText.trim());
        setNewTodoText("");
      }
    }
    const handleSearchChange=(value)=>{
      setSearchTerm(value);
      dispatch(updateSearchTerm(value));
    }
    return (
      <div className='bg-[#ccffff] max-w-4xl mx-auto p-4 mt-8 rounded'>
          <h1 className='mb-2 text-2xl font-bold text-[#6666ff] text-center'>
            TODO APP
          </h1>
          <div className='flex items-center mb-4'>
            <input type='text' name='addToDoInput' id='addToDoInput' placeholder='Add ToDo' 
            className='flex-grow p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500'
            value={newTodoText} onChange={(e)=>{setNewTodoText(e.target.value)}}
            />
            <button className='pl-2'><IoMdAddCircle size={40} color='#6666ff' onClick={handleAddToDoClick}/></button>
          </div>
          <div className='flex items-center justify-between'>
            <FilterButton/>
            <div className='flex items-center mb-4'>
              <input type='text' name='addToDoInput' id='addToDoInput' placeholder='Search' 
              className='flex-grow p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500'
              value={searchTerm} onChange={(e)=>handleSearchChange(e.target.value)}
              />
              <button className='pl-2'><FaSearch size={30}/></button>
            </div>
            
          </div>
              <TodoList/>
      </div>
    );
}

export default Todo