import React from "react";
import { Form, Container, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues : {
      name : "",
      email : "",
      password : ""
    }
  });
  const submitHandler = (data) => {
    console.log(data);
  }
  return (
    <Container>
      <Form onSubmit={handleSubmit(submitHandler)}>
        <Form.Group className="mb-3" >
          <Form.Label>Name:</Form.Label>
          <Form.Control type="text" placeholder="Enter your Name" {...register("name" , {
            required : "this feild is required" ,
            maxLength : {
              value : 30 ,
              message : "your name is too long it shouldn't be more than 30 chars"
            },
            minLength : {
              value : 3 ,
              message : "your name is too short it shouldn't be less than 3 chars"
            }
          })}/>
          {errors.name && <Form.Text className="text-danger">{errors.name.message}</Form.Text>}
        </Form.Group>

        <Form.Group className="mb-3" >
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter your Email Address" {...register("email" , {
            required : "plaese eneter your email", 
            pattern : {
              value : /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/,
              message : "your email is not valid"
            }
          })}/>
          {errors.email && <Form.Text className="text-danger">{errors.email.message}</Form.Text>}
        </Form.Group>

        <Form.Group className="mb-3" >
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Enter your Password" {...register("password" , {
            required : "please enter your password",
            pattern : {
              value : /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
              message :"your password is not valid"
            }
          })}/>
          {errors.password && <Form.Text className="text-danger">{errors.password.message}</Form.Text>}
        </Form.Group>
        <Button variant="primary" type="submit">
          Sign Up
        </Button>
      </Form>
    </Container>
  );
}

export default Signup;
