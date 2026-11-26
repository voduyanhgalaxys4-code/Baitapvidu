const calculatorModel = require('../models/calculatorModel');

exports.showCalculator = (req, res) => {
    res.render('calculator');
};

exports.calculate = (req, res, next) => {
    const { num1, num2, operation } = req.body;

    const result = calculatorModel.calculate(num1, num2, operation);

    if (isNaN(result)) {
        const err = new Error('Invalid input');
        err.status = 400;
        return next(err);
    }

    res.render('calculator', { result });
};