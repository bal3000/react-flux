import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CourseStore from "../stores/course.store";
import CourseList from "./CourseList";
import { Course } from "../models/course.interface";
import { loadCourses, deleteCourse } from "../actions/course.actions";

function CoursesPage(): JSX.Element {
  const [courses, setCourses] = useState<Course[]>(CourseStore.getCourses());

  useEffect(() => {
    CourseStore.addChangeListener(onChange);
    if (CourseStore.getCourses().length === 0) loadCourses();
    return () => CourseStore.removeChangeListener(onChange);
  }, []);

  const onChange = () => setCourses(CourseStore.getCourses());

  return (
    <React.Fragment>
      <h2>Courses</h2>
      <Link className="btn btn-primary" to="/course">
        Add Course
      </Link>
      <CourseList courses={courses} onDelete={deleteCourse} />
    </React.Fragment>
  );
}

export default CoursesPage;
