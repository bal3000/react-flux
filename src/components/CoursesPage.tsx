import React, { useState, useEffect } from "react";
import { getCourses } from "../api/courseApi";
import CourseList from "./CourseList";

function CoursesPage(): JSX.Element {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    getCourses().then((c) => setCourses(c));
  }, []);

  return (
    <React.Fragment>
      <h2>Courses</h2>
      <CourseList courses={courses} />
    </React.Fragment>
  );
}

export default CoursesPage;
