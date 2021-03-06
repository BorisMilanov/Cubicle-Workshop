const fs = require('fs/promises');
const uniqid = require('uniqid')

let data = {};

async function init() {
    try {
        data = JSON.parse(await fs.readFile('./models/data.json'))
    } catch (error) {
        console.error("Error reading database");
    }

    return (req, res , next)=>{
        req.storage = {
            getAll,
            getById,
            create
        }
        next();
    }
}

async function getAll() {
    return Object.entries(data).map(([id, v]) => Object.assign({}, { id }, v));
}

async function getById(id) {
    return data[id];
}

async function create(cube) {
    const id = uniqid();
    data[id] = cube;

    try {
        await fs.writeFile('./models/data.json', JSON.stringify(data, null , 2));
    } catch (err) {
        console.error('Error writhing out database');
    }
}

module.exports = {
    init,
    getAll,
    getById,
    create
}