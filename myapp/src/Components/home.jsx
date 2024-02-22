import React,{useEffect, useState} from 'react'
import Task from './Task';

const Home=()=> {
    const initial=localStorage.getItem("tasks")?JSON.parse(localStorage.getItem("tasks")):[];

    const [tasks,setTask]=useState(initial)
    const [title,setTitle]=useState("")
    const [description,setDescrption]=useState("")


    const submitHandler=(e)=>{
        e.preventDefault();
        setTask([...tasks,{
          title,
          description,
        },]);
        setTitle("");
        setDescrption("");
    };

    const deleteTask=(index)=>{
      const filterdArray=tasks.filter((val,i)=>{
        return i!== index;
      });
      setTask(filterdArray);
    }
    useEffect(() => {
      localStorage.setItem("tasks",JSON.stringify(tasks));
      
    }, [tasks])
    

  return (
    <div className='container'>
        <h1>Daily Goals</h1>
        <form onSubmit={submitHandler} >
            <input type="text" placeholder='Title' value={title} onChange={(e)=>{setTitle(e.target.value)}}/>
            <textarea placeholder='Description' value={description} onChange={(e)=>{setDescrption(e.target.value)}}></textarea>

            <button type='submit'>ADD</button>
        </form>
        {tasks.map((item,index)=>{
          return (<Task key={index} title={item.title} description={item.description} deleteTask={deleteTask} index={index}/>)
        })}
    </div>
  );
}

export default Home