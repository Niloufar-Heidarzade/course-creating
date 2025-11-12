import React, { useState } from "react";
import {useForm} from "react-hook-form";
import { Col, Container, Row, Button, Form, Image } from "react-bootstrap";

function About() {
  const [isAgree , setIsAgree] = useState(false)
  const {
    register,
    handleSubmit,
    formState : {errors},
    restet
  } = useForm(
    {
      defaultValues : {
        firstname: "",
        lastname: "",
        email: "",
        message: ""
      }
    }
  )
  const submitHandler = (data) => {
    alert(`dear ${data.firstname} your message submitted successfully`);
    restet();
  }
  return (
    <Container className="my-5">
      <Row>
        <Col>
          <div className="mx-4">
            <h1>About Us</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              voluptatum iusto, porro ullam vitae minima expedita, nostrum, fuga
              dignissimos quo corporis at aspernatur quam alias et maxime est
              harum? Quasi recusandae nostrum hic deserunt consectetur
              asperiores repellat. Accusamus cum, molestiae tenetur iure nihil
              eligendi rerum aliquam non repellat debitis ratione nulla numquam
              magnam culpa voluptatum, accusantium consequuntur magni nisi.
              Magnam, dolorum! Labore mollitia aliquid quaerat nulla dignissimos
              iste voluptates repellendus ratione laboriosam, dolores obcaecati
              vero alias optio sunt? Voluptatem aliquid reiciendis accusamus ab
              sapiente ex, iusto amet perspiciatis nostrum suscipit excepturi
              repellat molestias impedit earum sunt odit in aperiam atque!
            </p>
          </div>
        </Col>
      </Row>
      <Row className="mt-10 d-flex align-items-center justify-content-center">
        <Col>
          <Form onSubmit={handleSubmit(submitHandler)}>
            <Row>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label htmlFor="firstname">First name</Form.Label>
                  <Form.Control
                    id="firstname"
                    type="text"
                    placeholder="First name"
                    {...register("firstname" , {
                      required : "first name is required",
                      minLength : {
                        value : 3,
                        message : "your name should be atleast 3 characters "
                      },
                      maxLength : {
                        value : 30,
                        message : "your name can't be more than 30 characters"
                      }
                    })}

                  />
                   {errors.firstname && <Form.Text className="text-danger">{errors.firstname.message}</Form.Text>}
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label htmlFor="lastname">Last name</Form.Label>
                  <Form.Control
                    id="lastname"
                    type="text"
                    placeholder="Last name"
                    {...register("lastname" , {
                      required : false,
                       minLength : {
                        value : 3,
                        message : "your last name should be atleast 3 characters "
                      },
                      maxLength : {
                        value : 30,
                        message : "your last name can't be more than 30 characters"
                      }
                    })}
                  />
                  {errors.lastname && <Form.Text className="text-danger">{errors.lastname.message}</Form.Text>}
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label htmlFor="email">Email address</Form.Label>
                  <Form.Control
                    id="email"
                    type="text"
                    placeholder="Email address"
                    {...register("email" , {
                      required : "email is required",
                      pattern : {
                        value : /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/ ,
                        message : "please enter a valid email"
                      }
                    })}
                  />
                  {errors.email && <Form.Text className="text-danger">{errors.email.message}</Form.Text>}
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label htmlFor="message">Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    id="message"
                    placeholder="Enter your message"
                    style={{ height: "100px" }}
                    {...register("message" , {
                      required : "please enter your message",
                      minLength : {
                        value : 10,
                        message : "your message can't be less than 10 characters"
                      },
                      maxLength : {
                        value : 200,
                        message : "your message can't be more than 200 characters"
                      }
                    })}
                  />
                  {errors.message && <Form.Text className="text-danger">{errors.message.message}</Form.Text>}
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group className="mb-3" id="Agreement">
                  <Form.Check type="checkbox" label="Agree to send this message" value={isAgree} onChange={() => setIsAgree((prevState) => !prevState)} />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Button variant="primary" type="submit" disabled={!isAgree}>
                  Submit
                </Button>
              </Col>
            </Row>
          </Form>
        </Col>
        <Col>
          <Image alt="contact us image" src="/Contact-us.svg" />
        </Col>
      </Row>
    </Container>
  );
}

export default About;
