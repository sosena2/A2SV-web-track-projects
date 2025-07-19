import React from 'react';
import {useForm} from 'react-hook-form'
import {DevTool} from '@hookform/devtools'

type FormValues = {
    username: string;
    email: string;
    message: string;
}

export const ContactForm = () => {

    // use form returns form object
    const form = useForm<FormValues>()

    // method of the useform
    const {register, control, handleSubmit, formState, reset} = form;
    const {errors} = formState;
    const onSubmit = (data: FormValues) =>{
        console.log("form submitted", data);
        reset();
    }

    return(
        <div>
            <h1>Contact Form</h1>
        <form onSubmit = {handleSubmit(onSubmit)}>
            <div className='form-control'>
                  <label htmlFor="username">Username</label>
            <input type="text" id="username" {...register("username", {required: "Username is required",}) }/>
            <p className='error'>{errors.username?.message}</p>
            </div>
          
            <div className='form-control'>
            <label htmlFor="email">
                Email
            </label>
            <input type="text" id='email' {...register("email", {pattern:{value:/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
, message: "Invald email format"}, required: "Email is required"})} />
            <p className='error'>{errors.email?.message}</p>
            </div>

            <div className='form-control'>
            <label htmlFor="message">Message</label>
            <textarea id='message' {...register('message', {required: "Message is required"})} /><br />
            <p className='error'>{errors.message?.message}</p>
            </div>

            <button>Submit</button>

        </form>
        {/* <DevTool control = {control}/> */}
        </div>
    )
}
