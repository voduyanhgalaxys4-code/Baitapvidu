const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const calculatorController = require('./controllers/calculatorController');

const app = express();
const port = 3000;

// Middleware xử lý dữ liệu form
app.use(bodyParser.urlencoded({ extended: true }));

// Cấu hình thư mục static
app.use(express.static(path.join(__dirname, 'public')));

// Thiết lập template engine Pug
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Định tuyến máy tính
app.get('/calculator', calculatorController.showCalculator);
app.post('/calculator/calculate', calculatorController.calculate);

// Trang chủ
app.get('/', (req, res) => {
    res.redirect('/calculator');
});

// Middleware xử lý lỗi
app.use((err, req, res, next) => {
    res.status(err.status || 500).send(err.message || 'Internal Server Error');
});

// Khởi động server
app.listen(port, () => {
    console.log(`Server đang chạy tại http://localhost:${port}`);
});