import { Icon } from "../Components/Icon/Index";

export const expensesBreakdowns = [
    {
        id: 1,
        category: "Housing",
        amount: 250,
        percentage: 15,
        icon: <Icon.Housing />,
        arrow: <Icon.ArrowDown />,
    },
    {
        id: 2,
        category: "Food",
        amount: 350,
        percentage: 8,
        icon: <Icon.Food />,
        arrow: <Icon.ArrowUp />,
    },
    {
        id: 3,
        category: "Transportation",
        amount: 50,
        percentage: 12,
        icon: <Icon.Transportation />,
        arrow: <Icon.ArrowUp />,
    },
    {
        id: 4,
        category: "Entertainment",
        amount: 80,
        percentage: 15,
        icon: <Icon.Entertainment />,
        arrow: <Icon.ArrowUp />,
    },
    {
        id: 5,
        category: "Shopping",
        amount: 420,
        percentage: 25,
        icon: <Icon.Shopping />,
        arrow: <Icon.ArrowDown />,
    },
    {
        id: 6,
        category: "Others",
        amount: 650,
        percentage: 23,
        icon: <Icon.Others />,
        arrow: <Icon.ArrowDown />,
    },
];

export const expensesStatistics = [
    {
        id: 1,
        date: "17 Sun",
        amountThisWeek: 250000,
        amountLastWeek: 50000,
    },
    {
        id: 2,
        date: "18 Mon",
        amountThisWeek: 50000,
        amountLastWeek: 10000,
    },
    {
        id: 3,
        date: "19 Tue",
        amountThisWeek: 10000,
        amountLastWeek: 50000,
    },
    {
        id: 4,
        date: "20 Wed",
        amountThisWeek: 50000,
        amountLastWeek: 50000,
    },
    {
        id: 5,
        date: "21 Thu",
        amountThisWeek: 50000,
        amountLastWeek: 10000,
    },
    {
        id: 6,
        date: "22 Fri",
        amountThisWeek: 250000,
        amountLastWeek: 10000,
    },
    {
        id: 7,
        date: "23 Sat",
        amountThisWeek: 50000,
        amountLastWeek: 10000,
    },
];

export default expensesBreakdowns;