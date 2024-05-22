import { FieldValues, useForm } from "react-hook-form"
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
const schema = z.object({
  email: z.string(
    {required_error:  "Email is required",
     invalid_type_error: "Email must be a String" 

    }
  ).email(
    {message: "Invalid email address"}
  ).min(5),
  password: z.string({required_error:  "Email is required",
  invalid_type_error: "Email must be a String" 
}).length(10 ,{message: "Must be exactly 5 characters long"})
});

type FormData = z.infer<typeof schema>

// After typing this one try to install 
// npm i @hookform/resolvers


const Form = () => {


 
  const {register, handleSubmit, formState : {errors, isValid}} = useForm<FormData>({resolver: zodResolver(schema)});
  // formState : {errors} : Advanced Destructuring in JS

  const onSubmit = (val: FieldValues) => console.log(val);


  return (
    <form onSubmit={handleSubmit( onSubmit )}>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input 
    {...register('email', { required: true, minLength : 3})}
    type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
   {errors.email && <p className="text-danger">{errors.email.message}</p>}
  </div>
  <div className="mb-3">
    <label  htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input  {...register('password')} type="password" className="form-control" id="exampleInputPassword1" />
   {errors.password && <p className="text-danger">{errors.password.message}</p>}

  </div>
  <button disabled = {!isValid} type="submit" className="btn btn-primary">Submit</button>
</form>
  )
}

export default Form