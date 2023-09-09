import { Course } from "./course";

export interface CourseResponse {
    status: string,
    payload: Course[]
}