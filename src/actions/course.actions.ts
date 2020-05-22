import dispatcher from "../app-dispatcher";
import * as courseApi from "../api/courseApi";
import actionTypes from "./action-types.constants";
import { Course } from "../models/course.interface";

export function saveCourse(course: Course): Promise<void> {
  return courseApi.saveCourse(course).then((savedCourse) => {
    dispatcher.dispatch({
      actionType: course.id
        ? actionTypes.UPDATE_COURSE
        : actionTypes.CREATE_COURSE,
      course: savedCourse,
    });
  });
}

export function deleteCourse(courseId: number): Promise<void> {
  return courseApi.deleteCourse(courseId).then(() => {
    dispatcher.dispatch({
      actionType: actionTypes.DELETE_COURSE,
      courseId,
    });
  });
}

export function loadCourses(): Promise<void> {
  return courseApi.getCourses().then((courses) => {
    dispatcher.dispatch({
      actionType: actionTypes.LOAD_COURSES,
      courses,
    });
  });
}
