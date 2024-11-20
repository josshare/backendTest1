const express = require('express');
const router = express.Router();
const ModelTruck = require('../models/truckModel');



import { Request, Response } from 'express';

router.get('/', async (req: Request, res: Response) => {
    const trucks = await ModelTruck.find();
    res.json(trucks);
    console.log(trucks);
});
router.get('/:id', async (req: Request, res: Response) => {
    const id = req.params.id;
    const truck = await ModelTruck.findById(id);
    res.json(truck);
});
router.post('/', async (req: Request, res: Response) => {
    const body = req.body;
    const response = await ModelTruck.create(body);
    res.send(response);
});
router.put('/:id', async (req: Request, res: Response) => {
    const id = req.params.id;
    const body = req.body;
    const response = await ModelTruck.findByIdAndUpdate(id, body);
    res.send(response);
});
router.delete('/:id', async (req: Request, res: Response) => {
    const id = req.params.id;
    const response = await ModelTruck.findByIdAndDelete(id);
    res.send(response);
});

module.exports = router;
