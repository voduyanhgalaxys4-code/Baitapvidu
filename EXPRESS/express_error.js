const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Sử dụng body-parser để xử lý dữ liệu form
app.use(bodyParser.urlencoded({ extended: true }));

// Hiển thị form nhập hai số
app.get('/', (req, res) => {
  res.send(`
    <h1>Phép chia hai số</h1>
    <form action="/divide" method="POST">
      <label>Số thứ nhất:</label>
      <input type="text" name="num1" required>
      <br><br>
      <label>Số thứ hai:</label>
      <input type="text" name="num2" required>
      <br><br>
      <button type="submit">Tính</button>
    </form>
  `);
});

// Xử lý phép chia
app.post('/divide', (req, res) => {
  const num1 = parseFloat(req.body.num1);
  const num2 = parseFloat(req.body.num2);

  if (isNaN(num1) || isNaN(num2) || num2 === 0) {
    return res.status(400).send('Invalid input');
  }

  res.send(`Kết quả: ${num1 / num2}`);
});

// Khởi động server
app.listen(3000, () => {
  console.log('Server đang chạy tại cổng 3000');
});