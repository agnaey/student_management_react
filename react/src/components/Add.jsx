import axios from "axios"
import { useState } from "react"

function Add(){
    const [roll_no,setRollno] = useState('')
    const [name,setName] = useState('')
    const [course,setCource] = useState('')
    const [email,setEmail] = useState('')

    const handleSubmit = (e) =>{
        e.preventDefault()
        axios.post('http://127.0.0.1:8000/api/std/',{roll_no,name,email,course}).then(res=>{
            setRollno('')
            setName('')
            setCource('')
            setEmail('')
        }).catch(error=>console.log(error.message)
    )
        }
        return(
            <>
            <form onSubmit={handleSubmit}>
                <input placeholder="roll_no" type="number" name="roll_no" id="roll_no" value={roll_no} onChange={(e)=>setRollno(e.target.value)}/>
                <input placeholder="name" type="text" name="name" id="name" value={name} onChange={(e)=>setName(e.target.value)}/>
                <input placeholder="cource" type="text" name="course" id="course" value={course} onChange={(e)=>setCource(e.target.value)}/>
                <input placeholder="email" type="email" name="email" id="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <input type="submit" value="add" />        
            </form>
            </>
            )   
}
export default Add