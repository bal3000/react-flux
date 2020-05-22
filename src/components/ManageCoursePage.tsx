import React from "react";
import { match } from "react-router-dom";

interface IProps {
  match: match<{ slug: string }>;
}

const ManageCoursePage = ({ match }: IProps) => {
  return (
    <React.Fragment>
      <h2>Manage Course</h2>
      {match.params.slug}
    </React.Fragment>
  );
};

export default ManageCoursePage;
