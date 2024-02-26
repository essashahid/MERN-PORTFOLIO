export interface Experience {
    id: number;
    company: string;
    title: string;
    period: string;
    description: string;
}

export const experiences: Experience[] = [
    {
        id: 1,
        company: "Purdue University",
        title: "Master's Student",
        period: "2022-Present",
        description: "Pursuing a Master's in Engineering Management at Purdue University."
    },
    {
        id: 2,
        company: "Amazon",
        title: "Product Manager Intern",
        period: "2021-Present",
        description: "Interned as a Product Manager at Amazon."
    },
    {
        id: 3,
        company: "Purdue University",
        title: "Teaching Assistant",
        period: "2021-2022",
        description: "Assisted in teaching Engineering Management courses at Purdue University."
    },
    {
        id: 4,
        company: "Purdue University",
        title: "Research Assistant",
        period: "2020-2021",
        description: "Assisted in research on Supply Chain Optimization at Purdue University."
    },
];
