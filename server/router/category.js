const express = require('express')
const Category = require('../schema/Category');
const Expense = require('../schema/Expense')

const router = express.Router()

const dotenv = require("dotenv")
dotenv.config({ path: "../config.env" })

router.get('/', async (req, res) => {
    await Category.find().then(async category => {
        res.status(201).json(category)
    }).catch(err => { return res.status(400).json({ msg: `Don't get category` }) })
})

router.get('/all', async (req, res) => {
    Category.find().then(async (category) => {
        console.log(category)
        await Expense.find({ id_Category: category._id }).then(async (expense) => {
            console.log(expense)
            await Category.updateOne({ _id: category._id }, {
                $push: { expenses: expense }
            }).then(data => res.status(200).json(expense))
                .catch(() => { return res.status(400).json({ msg: `Update failed` }) })
        }).catch(() => { return res.status(400).json({ msg: `Error to get Expenses` }) })
    }).catch(() => { return res.status(400).json({ msg: `Error to get Categories` }) })
})

router.post("/", async (req, res) => {
    const { name, icon, color } = req.body;
    if (!name) {
        return res.status(400).json({ msg: `Don't have enough properties` })
    }
    await Category.findOne({ name: name }).then(async category => {
        if (category) return res.status(400).json({ msg: 'Category Exist' })
        const newCategory = new Category({
            name, color, icon
        })
        await newCategory.save()
        res.status(201).json(newCategory)

    }).catch(err => { return res.status(400).json({ msg: 'Category not found' }) })
})

module.exports = router;
