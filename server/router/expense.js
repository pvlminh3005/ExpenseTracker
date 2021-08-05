const express = require('express')
const Expense = require('../schema/Expense');
const Category = require('../schema/Category');
const router = express.Router()

const dotenv = require("dotenv")
dotenv.config({ path: "../config.env" })

router.get('/', async (req, res) => { //get all expenses in categories
    await Expense.find().sort({ "registration_data": -1 }).then(expense => {
        if (!expense) return res.status(400).json({ msg: `Don't have expenses` })
        res.status(201).json(expense)
    })
        .catch(() => { return res.status(400).json({ msg: `Error to get expenses` }) })
})


router.get('/id', async (req, res) => {
    const { id_Expense } = req.query
    await Expense.findOne({ _id: id_Expense }).then(async (expense) => {
        if (!expense) return res.status(400).json({ msg: `Expense not found` })
        res.status(201).json(expense)
    }).catch(err => { return res.status(400).json({ msg: `Error to get expense` }) })
})

router.post("/", async (req, res) => {
    const { id_Category, title, description, location, total, status } = req.body;
    if (!title || !status) {
        return res.status(400).json({ msg: `Don't have enough properties` })
    }

    await Category.findOne({ _id: id_Category }).then(async category => {
        if (!category) return res.status(400).json({ msg: `Don't found category` })

        const newExpense = new Expense(req.body)
        await newExpense.save().then(async (data) => {
            await Category.updateOne({ _id: id_Category }, {
                $push: { expenses: data }
            }).then(() => {
                return res.status(201).json(data)
            }).catch(() => {
                return res.status(400).json({ msg: 'Update expense failed' })
            })
        })

    }).catch(err => { return res.status(400).json({ msg: 'Category not found' }) })
})

router.patch('/update', async (req, res) => {
    const { id_Expense, status } = req.body
    await Expense.findOne({ _id: id_Expense }).then(async (expense) => {
        if (!expense) return res.status(400).json({ msg: `Expense not found` })
        await Expense.updateOne({ _id: id_Expense }, {
            $set: {
                status: status,
            }
        }).catch(() => { return res.status(400).json({ msg: `Expense update failed` }) })
        await Category.findOne({ _id: expense.id_Category }).then(async (category) => {
            const query = { _id: expense.id_Category, "expenses._id": expense._id }
            const updateDocument = {
                $set: {
                    "expenses.$.status": status
                }
            }
            await Category.updateOne(query, updateDocument).then(() => {
                res.status(200).json({ msg: `Update Expense in Category success` })
            })
                .catch(err => res.status(400).json({ msg: `Error to update Expense in Category` }))
        })
    })
        .catch(err => { return res.status(400).json({ msg: `Error to update Expense` }) })
})

module.exports = router;

