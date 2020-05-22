import { Dispatcher } from "flux";
import { ICourseAction } from "./actions/course-action.interface";

const dispatcher = new Dispatcher<ICourseAction>();

export default dispatcher;
