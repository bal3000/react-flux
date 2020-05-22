import { Course } from "../models/course.interface";

export interface ICourseAction {
  actionType: string;
  course?: Course;
  courses?: Course[];
  courseId?: number;
}
