import React from "react";
import { getCourses } from "../api/courseApi";

interface IProps {}

interface IState {
  courses: any[];
}

class CoursesPage extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      courses: [],
    };
  }

  componentDidMount() {
    getCourses().then((courses) => this.setState({ courses }));
  }

  renderRow(course: any) {
    return (
      <tr key={course.id}>
        <td>{course.title}</td>
        <td>{course.authorId}</td>
        <td>{course.category}</td>
      </tr>
    );
  }

  render() {
    return (
      <React.Fragment>
        <h2>Courses</h2>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Author ID</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>{this.state.courses.map(this.renderRow)}</tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default CoursesPage;
