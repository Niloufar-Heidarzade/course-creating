import React, { useState } from "react";
import { Container, Button, Form, Row, Col, Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import FormSubmitModal from "../components/FormSubmitModal";
import { useLocation } from "react-router-dom";

function ManageCourse() {
  const [show , setShow] = useState(false);
  const location = useLocation();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues:
    {
      title: location.state?.title || "",
      slug: location.state?.slug || "",
      authorId: location.state?.authorId ||  "",
      category: location.state?.category || "",
    },
  });
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };
  return (
    <Container className="px-5 mt-5">
      <Form>
        <Row>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Course Title:</Form.Label>
              <Form.Control
                type="text"
                placeholder="For example 'OOP'"
                {...register("title", {
                  required : "Please enter a title",
                  minLength : {
                    value : 5,
                    message : "Title should have atleast 5 characters"
                  },
                  maxLength : {
                    value : 30,
                    message : "Title can not have more than 30 characters"
                  }
                })}
              />
              {errors.title && <Form.Text className="text-danger">{errors.title.message}</Form.Text>}
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Slug:</Form.Label>
              <Form.Control
                type="text"
                placeholder="For example 'JavaScript'"
                {...register("slug" , {
                  required : "Please enter an slug",
                   minLength : {
                    value : 5,
                    message : "Slug should have atleast 5 characters"
                  },
                  maxLength : {
                    value : 30,
                    message : "Slug can not have more than 30 characters"
                  }
                })}
              />
              {errors.slug && <Form.Text className="text-danger">{errors.slug.message}</Form.Text>}
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Author ID:</Form.Label>
              <Form.Control type="text" placeholder="For example 'APS1080'" 
              {...register("authorId" , {
                  required : "Please enter an slug",
                   minLength : {
                    value : 5,
                    message : "Slug should have atleast 5 characters"
                  },
                  maxLength : {
                    value : 30,
                    message : "Slug can not have more than 30 characters"
                  }
                })}
              />
              {errors.authorId && <Form.Text className="text-danger">{errors.authorId.message}</Form.Text>}
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Category</Form.Label>
              <Form.Control
                type="text"
                placeholder="For example 'Basic To Intermediate Bootcamp"
                 {...register("category" , {
                  required : "Please enter an slug",
                   minLength : {
                    value : 5,
                    message : "Slug should have atleast 5 characters"
                  },
                  maxLength : {
                    value : 30,
                    message : "Slug can not have more than 30 characters"
                  }
                })}
              />
              {errors.category && <Form.Text className="text-danger">{errors.category.message}</Form.Text>}
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button type="button" onClick={() => setShow(true)}>Create Course</Button>
          </Col>
        </Row>
      </Form>
        <FormSubmitModal
        showState={show}
        handleClose={() => setShow(false)}
        title={location.state ? "Edit Course" : "Create Course"}
        body={location.state ? "Are you sure about Editing this course?" : "Are you sure about creating this course?"}
        positiveBtn={"Yes"}
        negativeBtn={"No"}
        handleSubmit={() => {
          setShow(false);
          handleSubmit(onSubmit)();
        }}
      />
    </Container>
  );
}

export default ManageCourse;
