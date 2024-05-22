import { FieldValues, useForm } from "react-hook-form"


const Form = () => {


  interface Props{  
    email: String,
    password: String
  }
  const {register, handleSubmit, formState : {errors}} = useForm<Props>();
  // formState : {errors} : Advanced Destructuring in JS

  const onSubmit = (val: FieldValues) => console.log(val);


  return (
    <form onSubmit={handleSubmit( onSubmit )}>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input 
    {...register('email', { required: true, minLength : 3})}
    type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
   {errors.email?.type === 'required' && <p className="text-danger">The Email Field Is Required</p>}
{   errors.email?.type === "minLength" && <p className="text-danger">The Email Field Must be atlease 3 Character</p>}
  </div>
  <div className="mb-3">
    <label  htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input  {...register('password')} type="password" className="form-control" id="exampleInputPassword1" />
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
  )
}

export default Form