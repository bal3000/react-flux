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
          <tbody>
            {this.state.courses.map((course) => (
              <tr>
                <td>{course.title}</td>
                <td>{course.authorId}</td>
                <td>{course.category}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default CoursesPage;
