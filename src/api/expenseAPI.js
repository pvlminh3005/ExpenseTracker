import axios from 'axios';
import { MAIN_URL } from '../config'

export const getAllExpenses = () => {
    return new Promise((resolve, reject) => {
        axios({
            method: 'GET',
            url: `${MAIN_URL}/api/expense`,
        })
            .then(response => {
                resolve(response.data)
            })
            .catch(err => {
                return;
            })
    })
}

export const getExpensesById = (id_Expense) => {
    return new Promise((resolve, reject) => {
        axios({
            method: 'GET',
            url: `${MAIN_URL}/api/expense/id`,
            params: { id_Expense: id_Expense }
        })
            .then(response => {
                resolve(response.data)
            })
            .catch(err => {
                return;
            })
    })
}

export const confirmExpense = (id_Expense, status) => {
    return new Promise((resolve, reject) => {
        axios({
            method: 'PATCH',
            url: `${MAIN_URL}/api/expense/update`,
            data: { id_Expense: id_Expense, status: status }
        })
            .then(response => {
                resolve(response.data)
            })
            .catch(err => {
                return;
            })
    })
}

export const createNewExpense = (data) => {
    return new Promise((resolve, reject) => {
        axios({
            method: 'POST',
            url: `${MAIN_URL}/api/expense`,
            data: data
        })
            .then(response => {
                resolve(response.data)
            })
            .catch(err => {
                return;
            })
    })
}