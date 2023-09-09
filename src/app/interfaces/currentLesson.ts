export interface CurrentLesson {
    quarter: {
        id: number,
        name: string,
        totalLessons: number,
        viewedLessons: number,
    },
    lesson: {
        id: number,
        name: string,
        viewed: boolean,
        available: boolean
    }
}