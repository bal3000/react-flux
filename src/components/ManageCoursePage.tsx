import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { match } from "react-router-dom";
import { History, LocationState } from "history";
import CourseStore from "../stores/course.store";
import * as courseActions from "../actions/course.actions";
import CourseForm from "./CourseForm";
import { IFormErrors } from "../models/form-errors.interface";

interface IProps {
  match: match<{ slug: string }>;
  history: History<LocationState>;
}

function ManageCoursePage({ match, history }: IProps): JSX.Element {
  const [errors, setErrors] = useState({});
  const [courses, setCourses] = useState(CourseStore.getCourses());
  const [course, setCourse] = useState({
    id: 0,
    slug: "",
    title: "",
    authorId: 0,
    category: "",
  });

  useEffect(() => {
    CourseStore.addChangeListener(onChange);
    const slug = match.params.slug;
    if (courses.length === 0) {
      courseActions.loadCourses();
    } else if (slug) {
      const _course = CourseStore.getCourseBySlug(slug);
      if (_course) {
        setCourse(_course);
      }
    }
    return () => CourseStore.removeChangeListener(onChange);
  }, [courses.length, match.params.slug]);

  const onChange = () => {
    setCourses(CourseStore.getCourses());
  };

  const handleChange = ({
    target,
  }: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setCourse({ ...course, [target.name]: target.value });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!formIsValid()) return;
    courseActions.saveCourse(course).then(() => {
      history.push("/courses");
      toast.success("Course saved.");
    });
  };

  const formIsValid = (): boolean => {
    const _errors: IFormErrors = {};
    if (!course.title) _errors.title = "Title is required";
    if (course.authorId === 0) _errors.authorId = "Author ID is required";
    if (!course.category) _errors.category = "Category is required";

    setErrors(_errors);
    return Object.keys(_errors).length === 0;
  };

  return (
    <React.Fragment>
      <h2>Manage Course</h2>
      <CourseForm
        course={course}
        errors={errors}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </React.Fragment>
  );
}

export default ManageCoursePage;
