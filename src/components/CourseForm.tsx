import React from "react";
import PropTypes from "prop-types";
import { Course } from "../models/course.interface";
import TextInput from "./common/TextInput";
import SelectInput from "./common/SelectInput";
import { IFormErrors } from "../models/form-errors.interface";

interface IProps {
  course: Course;
  errors: IFormErrors;
  onChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  onSubmit: (event: React.FormEvent) => void;
}

function CourseForm({ course, errors, onChange, onSubmit }: IProps) {
  const options = ["Cory House", "Scott Allen"];

  return (
    <form onSubmit={onSubmit}>
      <TextInput
        id="title"
        label="Title"
        name="title"
        value={course.title}
        onChange={onChange}
        error={errors.title}
      />
      <SelectInput
        id="author"
        name="authorId"
        label="Author"
        options={options}
        value={course.authorId.toString() || ""}
        onChange={onChange}
        error={errors.authorId}
      />
      <TextInput
        id="category"
        label="Category"
        name="category"
        value={course.category}
        onChange={onChange}
        error={errors.category}
      />

      <input type="submit" value="Save" className="btn btn-primary" />
    </form>
  );
}

CourseForm.propTypes = {
  course: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};

export default CourseForm;
