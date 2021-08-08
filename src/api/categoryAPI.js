import axios from 'axios';
import { MAIN_URL } from '../config'

export const getAllCategories = () => {
    return new Promise((resolve, reject) => {
        axios({
            method: 'GET',
            url: `${MAIN_URL}/api/category`,
        })
            .then(response => {
                resolve(response.data)
            })
            .catch(err => {
                return;
            })
    })
}

export const createCategory = (data) => {
    return new Promise((resolve, reject) => {
        axios({
            method: 'POST',
            url: `${MAIN_URL}/api/category`,
            data: data
        })
            .then(response => {
                resolve(response.data)
            })
            .catch(err => { return })
    })
}