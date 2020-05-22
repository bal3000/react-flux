import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Course } from "../models/course.interface";

interface IProps {
  courses: Course[];
  onDelete: (courseId: number) => void;
}

function CourseList({ courses, onDelete }: IProps): JSX.Element {
  const renderRow = (course: any) => {
    return (
      <tr key={course.id}>
        <td>
          <Link to={`/course/${course.slug}`}>{course.title}</Link>
        </td>
        <td>{course.authorId}</td>
        <td>{course.category}</td>
        <td>
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => onDelete(course.id)}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  };

  return (
    <React.Fragment>
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Author ID</th>
            <th>Category</th>
            <th></th>
          </tr>
        </thead>
        <tbody>{courses.map(renderRow)}</tbody>
      </table>
    </React.Fragment>
  );
}

CourseList.propTypes = {
  courses: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      authorId: PropTypes.number.isRequired,
      category: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default CourseList;
