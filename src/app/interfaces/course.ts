import { CurrentLesson } from "./currentLesson";
import { Quarter } from "./quarter";

export interface Course {
    id: number,
    name: string,
    quarters: Quarter[],
    currentLesson: CurrentLesson
}