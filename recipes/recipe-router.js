const express = require('express');

const Recipes = require('./recipe-model.js');

const router = express.Router();

// GET Request - Users
router.get('/users', (req, res) => {
    Recipes.find()
    .then(users => {
        res.status(200).json(users);
    })
    .catch(error => {
        res.status(500).json({ message: 'Failed to get users' });
    });
});

// GET Request - Recipes
router.get('/', (req, res) => {
    Recipes.getRecipes()
    .then(recipes => {
        res.status(200).json(recipes);
    })
    .catch(error => {
        res.status(500).json({ message: 'Failed to get recipes' });
    });
});

// GET Request - Ingredients 
router.get('/ingredients', (req, res) => {
    Recipes.getShoppingList()
    .then(ingredients => {
        res.status(200).json(ingredients);
    })
    .catch(error => {
        res.status(500).json({ message: 'Failed to get ingredients' });
    });
});

// GET Request - Instructions
router.get('/instructions', (req, res) => {
    Recipes.getInstructions()
    .then(instructions => {
        res.status(200).json(instructions);
    })
    .catch(error => {
        res.status(500).json({ message: 'Failed to get instructions' });
    });
});

module.exports = router;