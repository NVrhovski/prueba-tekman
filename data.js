const data = [
    {
        id: 1,
        name: "3º de infantil",
        currentLesson: {
            quarter: {
                id: 1,
                name: "1º Trimestre",
                totalLessons: 3,
                viewedLessons: 1,
            },
            lesson: {
                id: 1,
                name: "Ordinales, Fracciones, Decimales, Geometría, Num...",
                viewed: true,
                available: true
            }
        },
        quarters: [
            {
                id: 1,
                name: "1º Trimestre",
                totalLessons: 3,
                viewedLessons: 1,
                lessons: [
                    {
                        id: 1,
                        name: "Ordinales, Fracciones, Decimales, Geometría, Num...",
                        viewed: true,
                        available: true
                    },
                    {
                        id: 2,
                        name: "Fracciones, Decimales y Geometría",
                        viewed: false,
                        available: true
                    },
                    {
                        id: 3,
                        name: "Ordinales, Fracciones,  Decimales y Geometría",
                        viewed: false,
                        available: false
                    }
                ]
            },
            {
                id: 2,
                name: "2º Trimestre",
                totalLessons: 3,
                viewedLessons: 3,
                lessons: [
                    {
                        id: 1,
                        name: "Ordinales, Fracciones, Decimales, Geometría, Num...",
                        viewed: true,
                        available: true
                    },
                    {
                        id: 2,
                        name: "Fracciones, Decimales y Geometría",
                        viewed: true,
                        available: true
                    },
                    {
                        id: 3,
                        name: "Ordinales, Fracciones,  Decimales y Geometría",
                        viewed: true,
                        available: true
                    }
                ]
            },
            {
                id: 3,
                name: "3º Trimestre",
                totalLessons: 3,
                viewedLessons: 2,
                lessons: [
                    {
                        id: 1,
                        name: "Ordinales, Fracciones, Decimales, Geometría, Num...",
                        viewed: true,
                        available: true
                    },
                    {
                        id: 2,
                        name: "Fracciones, Decimales y Geometría",
                        viewed: false,
                        available: true
                    },
                    {
                        id: 3,
                        name: "Ordinales, Fracciones,  Decimales y Geometría",
                        viewed: true,
                        available: false
                    }
                ]
            }
        ]
    },
    {
        id: 2,
        name: "4º de infantil",
        currentLesson: {
            quarter: {
                id: 5,
                name: "2º Trimestre",
                totalLessons: 3,
                viewedLessons: 1,
            },
            lesson: {
                id: 2,
                name: "Fracciones, Decimales y Geometría",
                viewed: false,
                available: true
            }
        },
        quarters: [
            {
                id: 4,
                name: "1º Trimestre",
                totalLessons: 3,
                viewedLessons: 0,
                lessons: [
                    {
                        id: 1,
                        name: "Ordinales, Fracciones, Decimales, Geometría, Num...",
                        viewed: false,
                        available: true
                    },
                    {
                        id: 2,
                        name: "Fracciones, Decimales y Geometría",
                        viewed: false,
                        available: false
                    },
                    {
                        id: 3,
                        name: "Ordinales, Fracciones,  Decimales y Geometría",
                        viewed: false,
                        available: false
                    }
                ]
            },
            {
                id: 5,
                name: "2º Trimestre",
                totalLessons: 3,
                viewedLessons: 1,
                lessons: [
                    {
                        id: 1,
                        name: "Ordinales, Fracciones, Decimales, Geometría, Num...",
                        viewed: true,
                        available: true
                    },
                    {
                        id: 2,
                        name: "Fracciones, Decimales y Geometría",
                        viewed: false,
                        available: true
                    },
                    {
                        id: 3,
                        name: "Ordinales, Fracciones,  Decimales y Geometría",
                        viewed: false,
                        available: false
                    }
                ]
            },
            {
                id: 6,
                name: "3º Trimestre",
                totalLessons: 3,
                viewedLessons: 1,
                lessons: [
                    {
                        id: 1,
                        name: "Ordinales, Fracciones, Decimales, Geometría, Num...",
                        viewed: true,
                        available: true
                    },
                    {
                        id: 2,
                        name: "Fracciones, Decimales y Geometría",
                        viewed: false,
                        available: true
                    },
                    {
                        id: 3,
                        name: "Ordinales, Fracciones,  Decimales y Geometría",
                        viewed: false,
                        available: false
                    }
                ]
            }
        ]
    },
    {
        id: 3,
        name: "5º de infantil",
        currentLesson: {
            quarter: {
                id: 9,
                name: "3º Trimestre",
                totalLessons: 3,
                viewedLessons: 3,
            },
            lesson: {
                id: 2,
                name: "Fracciones, Decimales y Geometría",
                viewed: true,
                available: true
            }
        },
        quarters: [
            {
                id: 7,
                name: "1º Trimestre",
                totalLessons: 3,
                viewedLessons: 2,
                lessons: [
                    {
                        id: 1,
                        name: "Ordinales, Fracciones, Decimales, Geometría, Num...",
                        viewed: true,
                        available: true
                    },
                    {
                        id: 2,
                        name: "Fracciones, Decimales y Geometría",
                        viewed: true,
                        available: true
                    },
                    {
                        id: 3,
                        name: "Ordinales, Fracciones,  Decimales y Geometría",
                        viewed: false,
                        available: true
                    }
                ]
            },
            {
                id: 8,
                name: "2º Trimestre",
                totalLessons: 3,
                viewedLessons: 1,
                lessons: [
                    {
                        id: 1,
                        name: "Ordinales, Fracciones, Decimales, Geometría, Num...",
                        viewed: true,
                        available: true
                    },
                    {
                        id: 2,
                        name: "Fracciones, Decimales y Geometría",
                        viewed: false,
                        available: true
                    },
                    {
                        id: 3,
                        name: "Ordinales, Fracciones,  Decimales y Geometría",
                        viewed: false,
                        available: false
                    }
                ]
            },
            {
                id: 9,
                name: "3º Trimestre",
                totalLessons: 3,
                viewedLessons: 3,
                lessons: [
                    {
                        id: 1,
                        name: "Ordinales, Fracciones, Decimales, Geometría, Num...",
                        viewed: true,
                        available: true
                    },
                    {
                        id: 2,
                        name: "Fracciones, Decimales y Geometría",
                        viewed: true,
                        available: true
                    },
                    {
                        id: 3,
                        name: "Ordinales, Fracciones,  Decimales y Geometría",
                        viewed: true,
                        available: true
                    }
                ]
            }
        ]
    }
]