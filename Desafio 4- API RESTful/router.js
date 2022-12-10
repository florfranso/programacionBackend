const express = require ("express");


const router= express.Router();

router.get('/', (req, res) =>{
    res.send ("GET RAIZ")
});

router.get('/:id', (req, res) =>{
    res.send ("GET id")
});

router.post('/', (req, res) =>{
    res.send ("post")
});

router.put('/:id', (req, res) =>{
    res.send ("put")
});

router.delete('/:id', (req, res) =>{
    res.send ("delete id")
});


module.exports = router;
