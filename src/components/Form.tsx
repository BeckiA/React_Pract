import {FormEvent, useState } from "react"

const Form = () => {

  const[ cridentials, setCridentials ]= useState(
    {
      username: '',
      password: ''
    }
    
  )
  const handleSubmit = (e : FormEvent)=>{
    e.preventDefault();
    console.log(cridentials)

  } 

  return (
    <form onSubmit={handleSubmit}>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input value={cridentials.username} onChange={(e) => setCridentials({...cridentials, username  : e.currentTarget.value})} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
  </div>
  <div className="mb-3">
    <label  htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input value={cridentials.password} onChange = {(e) => setCridentials({...cridentials, password : e.currentTarget.value} )} type="password" className="form-control" id="exampleInputPassword1" />
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
  )
}

export default Form