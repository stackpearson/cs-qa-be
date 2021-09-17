const router = require('express').Router();
const Cans = require('./sheets-model.js');
const restricted = require('../utils/restricted-endpoint.js');
const { whereNotExists } = require('../database/db-config.js');
const { json } = require('express');

router.get('/all-cans', restricted, (req, res) => {
    Cans.allCans()
        .then(allCans => {
            res.status(200).json(allCans)
        })
})

router.get('/:id', restricted, (req, res) => {
    const { id } = req.params;
    
    Cans.findCanById(id)
        .then(can => {
            res.status(200).json(can)
        })
        .catch(err => res.send(err))
})

router.get('/user-cans/:id', restricted, (req, res) => {
    const { id } = req.params;

    Cans.findUserCans(id)
        .then(userCans => {
            res.status(200).json(userCans)
        })
        .catch(err => res.send(err))
})


router.post('/new-can/:id', restricted, (req, res) => {
    let user_id = req.params.id;
    let can_name = req.body.can_name;
    let can_text = req.body.can_text;
 

    let can_details = {
        'user_id': user_id,
        'can_name': can_name,
        'can_text': can_text
    }

    Cans.addCans(can_details)
        .then(newCan => {
            res.status(201).json(newCan)
        })
        .catch(err => res.send(err))
})


router.delete('/delete-can/:id', (req, res) => {
    let id = req.params.id;

    Cans.removeCan(id)
        .then((del) => {
            res.status(200).json({message: 'can deleted'})
        })
        .catch((err) => {
            console.log(err)
            res.status(500).json({message: 'server error', ...err})
        })

})

router.put('/update-can/:id', (req, res) => {
    let id = req.params.id;
    let can_name = req.body.can_name;
    let can_text = req.body.can_text;
    
    let can = {
        'id': id,
        'can_name': can_name,
        'can_text': can_text
    }

    Cans.updateCan(can)
        .then((newCan) => {
            res.status(200).json(newCan)
        })
        .catch((err) => {
            console.log(err)
            res.status(500).json({message: 'server error', ...err})
        })
})

module.exports = router;