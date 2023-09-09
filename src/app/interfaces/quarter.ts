import { Lesson } from "./lesson";

export interface Quarter {
    id: number,
    name: string,
    totalLessons: number,
    viewedLessons: number,
    lessons: Lesson[]
}