import { FormEvent, useRef } from "react"

const Form = () => {
    
   const emailRef= useRef<HTMLInputElement>(null);
   const passRef = useRef<HTMLInputElement>(null);

  const credentials = {
    email: '',
    password: ''
  }
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        if(emailRef.current !== null)
            credentials.email = emailRef.current.value
        if(passRef.current !== null)
             credentials.password = passRef.current.value
        console.log(credentials)
      }
  return (
    <form onSubmit={handleSubmit}>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input ref={emailRef} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input ref={passRef} type="password" className="form-control" id="exampleInputPassword1" />
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
  )
}

export default Form