import { FieldValues, useForm } from "react-hook-form"


const Form = () => {

  const {register, handleSubmit} = useForm();

  const onSubmit = (val: FieldValues) => {
    console.log(val)
  };

  return (
    <form onSubmit={handleSubmit( onSubmit )}>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input 
    {...register('Email')}
    
    type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
  </div>
  <div className="mb-3">
    <label  htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input  {...register('Password')} type="password" className="form-control" id="exampleInputPassword1" />
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
  )
}

export default Form