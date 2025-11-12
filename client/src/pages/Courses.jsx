import React from 'react'
import { Button, Container } from 'react-bootstrap'
import CourseList from '../components/CourseList'
import { useNavigate } from 'react-router-dom';

function Courses() {
  const navigate = useNavigate();
  const courseData = [
    {
      id: 1,
      title: "APS class 1 html course",
      slug: "html",
      authorId: 1,
      category: "JavaScript",
    },
    {
      id: 2,
      title: "APS class 1 css course",
      slug: "css",
      authorId: 2341,
      category: "JavaScript",
    },
    {
      id: 3,
      title: "APS class 1 bootstrap course",
      slug: "bootstrap",
      authorId: 23441,
      category: "JavaScript",
    },
    {
      id: 4,
      title: "APS class 1 vanilla js module 1 course",
      slug: "APS-1-js-1",
      authorId: 234241,
      category: "JavaScript",
    },
    {
      id: 5,
      title: "APS class 1 vanilla js module 2 course",
      slug: "APS-1-js-2",
      authorId: 1234234,
      category: "JavaScript",
    },
    {
      id: 6,
      title: "APS class 1 vanilla js module 3 course",
      slug: "APS-1-js-3",
      authorId: 1132123,
      category: "JavaScript",
    },
    {
      id: 7,
      title: "APS class 1 Node js course",
      slug: "node-js",
      authorId: 136536,
      category: "Software Practices",
    },
    {
      id: 8,
      title: "APS class 1 express js course",
      slug: "express-js",
      authorId: 5671,
      category: "Software Architecture",
    },
    {
      id: 9,
      title: "APS class 1 Mongo DB course",
      slug: "mongo-db",
      authorId: 2345231,
      category: "Career",
    },
    {
      id: 10,
      title: "APS class 1 Mongoose course",
      slug: "mongoose",
      authorId: 1234234,
      category: "HTML5",
    },
  ];
  return (
    <Container>
      <Button className='mt-3 w-25' onClick={() => navigate("/manageCourse")}>create course</Button>
      <CourseList courseData={courseData}/>
    </Container>
  )
}

export default Courses