import React, { useState } from "react";
import { match } from "react-router-dom";
import CourseForm from "./CourseForm";

interface IProps {
  match: match<{ slug: string }>;
}

const ManageCoursePage = ({ match }: IProps) => {
  const [course, setCourse] = useState({
    id: 0,
    slug: "",
    title: "",
    authorId: 0,
    category: "",
  });

  const handleChange = ({
    target,
  }: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setCourse({ ...course, [target.name]: target.value });
  };

  return (
    <React.Fragment>
      <h2>Manage Course</h2>
      <CourseForm course={course} onChange={handleChange} />
    </React.Fragment>
  );
};

export default ManageCoursePage;
