import { icons, COLORS } from './src/constants/'
const pendingStatus = "P"
const confirmStatus = "C"

export default [
    {
        id: 1,
        name: 'Nutrition',
        color: COLORS.darkgreen,
        icon: icons.foods,
        expenses: [
            {
                id: 1,
                title: 'Vitamins',
                description: 'Vitamins',
                location: "Pharmacy",
                total: 25,
                status: confirmStatus,
            },
            {
                id: 2,
                title: 'Protein powder',
                description: 'Protein',
                location: "Pharmacy",
                total: 50,
                status: pendingStatus
            },

        ]
    },
    {
        id: 2,
        name: 'Clothing',
        color: COLORS.red,
        icon: icons.clothing,
        expenses: [
            {
                id: 3,
                title: 'T-shirt',
                description: '50% count off',
                location: "ByProgrammers Clothing",
                total: 25.55,
                status: confirmStatus
            },
            {
                id: 4,
                title: 'Jeans',
                description: 'Black-White',
                location: "ByProgrammers Clothing",
                total: 30.00,
                status: confirmStatus
            },
        ]
    },
    {
        id: 3,
        name: 'Education',
        color: COLORS.peach,
        icon: icons.education,
        expenses: [
            {
                id: 5,
                title: 'Gym Membership',
                description: 'Monthly Fee',
                location: "ByProgrammers Gym",
                total: 45,
                status: confirmStatus
            },
            {
                id: 6,
                title: 'Gloves',
                description: 'Gym Equipment',
                location: "ByProgrammers Gym",
                total: 20,
                status: pendingStatus
            },
        ]
    },
    {
        id: 4,
        name: 'Sports',
        color: COLORS.yellow,
        icon: icons.sports,
        expenses: [
            {
                id: 7,
                title: 'Gym Membership',
                description: 'Monthly Fee',
                location: "ByProgrammers Gym",
                total: 28,
                status: pendingStatus
            },
            {
                id: 8,
                title: 'Gloves',
                description: 'Gym Equipment',
                location: "ByProgrammers Gym",
                total: 20,
                status: pendingStatus
            },
        ]
    },
    {
        id: 5,
        name: 'Child',
        color: COLORS.blue,
        icon: icons.stroller,
        expenses: [
            {
                id: 9,
                title: 'Stroller',
                description: '20% Sale Off',
                location: "ByProgrammers Baby",
                total: 50,
                status: confirmStatus
            },
            {
                id: 10,
                title: 'Milk',
                description: 'Weekly',
                location: "ByProgrammers Baby",
                total: 15.4,
                status: pendingStatus
            },
        ]
    },
    {
        id: 6,
        name: 'Foods',
        color: COLORS.yellow,
        icon: icons.sports,
        expenses: [
            {
                id: 11,
                title: 'Hamburger',
                description: 'Lunch',
                location: "ByProgrammers FastFood",
                total: 15.20,
                status: confirmStatus
            },
            {
                id: 12,
                title: 'Sandwich',
                description: 'Evening',
                location: "ByProgrammers FastFood",
                total: 10.3,
                status: confirmStatus
            },
        ]
    },

]