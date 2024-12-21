import express from 'express';
import fs from 'fs';
import layerPage from '../models/layerPage.js';
import { __dirname } from '../../config.js';

const router = express.Router();

router.get(/^\/.*/, (req, res) => {
    if (req.path.split('.').length !== 1) return
    if (req.path == '/') return res.render('layer.hbs', layerPage);

    res.render(
        'layer.hbs',
        Object.assign(
            { ...layerPage },
            {
                title: req.path.slice(1),
                bodyContent: fs.readFileSync(
                    __dirname + '/public/components/views' + req.path + '.hbs',
                    { encoding: 'utf-8' },
                ),
            },
        ),
    );
});

export default router;
