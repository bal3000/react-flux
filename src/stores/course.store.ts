import { EventEmitter } from "events";
import Dispatcher from "../app-dispatcher";
import actionTypes from "../actions/action-types.constants";
import { Course } from "../models/course.interface";
import { ICourseAction } from "../actions/course-action.interface";

let _courses: Course[] = [];

class CourseStore extends EventEmitter {
  private readonly changeEvent = "change";

  addChangeListener(callback: any) {
    this.on(this.changeEvent, callback);
  }

  removeChangeListener(callback: any) {
    this.removeListener(this.changeEvent, callback);
  }

  emitChange() {
    this.emit(this.changeEvent);
  }

  getCourses(): Course[] {
    return _courses;
  }

  getCourseBySlug(slug: string): Course | undefined {
    return _courses.find((c) => c.slug === slug);
  }
}

const store = new CourseStore();

Dispatcher.register((action: ICourseAction) => {
  switch (action.actionType) {
    case actionTypes.CREATE_COURSE:
      if (action.course) {
        _courses.push(action.course);
        store.emitChange();
      }
      break;
    case actionTypes.UPDATE_COURSE:
      _courses = _courses.map((c) =>
        action.course && c.id === action.course.id ? action.course : c
      );
      store.emitChange();
      break;
    case actionTypes.DELETE_COURSE:
      _courses = _courses.filter(
        (c) => action.courseId && c.id !== action.courseId
      );
      store.emitChange();
      break;
    case actionTypes.LOAD_COURSES:
      if (action.courses && action.courses.length > 0) {
        _courses = action.courses;
        store.emitChange();
      }
      break;
    default:
      break;
  }
});

export default store;
