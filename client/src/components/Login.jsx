import React from "react";
import { Form, Button, Container } from "react-bootstrap";
import { useForm } from "react-hook-form";

function Login() {
  const {
    register,
    handleSubmit,
    formState : {errors},
    reset
  } = useForm({
    defaultValues : {
      email : "",
      password : ""
    }
  })
  const submitHandler = (data) => {
    console.log(data);
  }
  return (
    <Container>
      <Form onSubmit={handleSubmit(submitHandler)}>
        <Form.Group className="mb-3" >
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="For example 'admin@admin.com'"
            {...register("email" , {
              required : "please enter your email",
              pattern : {
                value : /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/,
                message : "please enter a valid email"
              }
            })}
          />
          {errors.email && <Form.Text className="text-danger">{errors.email.message}</Form.Text>}
        </Form.Group>

        <Form.Group className="mb-3" >
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="For example '1234@1234'" {
            ...register("password" , {
              required : "please enter your password",
              pattern : {
                value : /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
                message : "please eneter a valid password"
              }
            })
          }/>
          {errors.password && <Form.Text className="text-danger">{errors.password.message}</Form.Text>}
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
    </Container>
  );
}

export default Login;
