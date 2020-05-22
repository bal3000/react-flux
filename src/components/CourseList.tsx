import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Course } from "../models/course.interface";

interface IProps {
  courses: Course[];
}

function CourseList({ courses }: IProps): JSX.Element {
  const renderRow = (course: any) => {
    return (
      <tr key={course.id}>
        <td>
          <Link to={`/course/${course.slug}`}>{course.title}</Link>
        </td>
        <td>{course.authorId}</td>
        <td>{course.category}</td>
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
};

export default CourseList;
