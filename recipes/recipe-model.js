const db = require('../data/db-config.js');

module.exports = {
    find,
    getRecipes,
    getShoppingList,
    getInstructions
}

function find() {
    return db('users')
}

function getRecipes() {
    return db('recipes')
}

function getShoppingList() {
    return db('ingredients')
}

function getInstructions() {
    return db('instructions')
}
