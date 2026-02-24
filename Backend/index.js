const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2/promise');
const app = express();
const port = 8000
app.use(bodyParser.json());
let users = []
let counter = 1;

app.use(bodyParser.json());
let use = [];

let conn = null
const initDBConnection = async () => {
    conn = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'webdb',
        port: 8821
    })
}
//path = GET / users สำหรับ get ข้อมูล user ทั้งหมด
app.get('/users', async (req, res) => {
    const results = await conn.query('SELECT * FROM users');
    res.json(results[0]);
})

//path = GET /user
app.get('/user', (req, res) => {
    res.json(users);
    });

//path = POST /users สำหรับเพิ่ม user ใหม่
app.post('/users', async (req, res) => {
    let user = req.body;
    const results = await conn.query('INSERT INTO users SET ?', user);
    console.log('result:',results);
    res.json({
        message: 'User created successfully',
        data: results[0]
    });
})




//  //path = POST /user
// app.post('/user', (req, res) => {
//     let user = req.body;
//     user.id = counter
//     counter += 1;
//     users.push(user);
//     res.json({
//         message: 'User added successfully',
//         users: user });
// })

// path = PUT /user/:id 
// app.put('/user/:id', (req, res) => {
//     let id = req.params.id;
//     let updatedUser = req.body;
// // หา user จาก id  ที่ส่งมา
//     let selectUser = users.findIndex(user => user.id == id);

//     // อัพเดทข้อมูล user
// if(updatedUser.name){
//     users[selectIndex].name = updatedUser.name;


// }
// if(updatedUser.email){
//     users[selectIndex].email = updatedUser.email;   
// }

//     //เอาข้อมูลที่ update ส่งกลับไป
//     res.json({
//         message: 'User updated successfully',
//         data: {
//             user: updatedUser,
//             indexUpdated: selectIndex
//         }
//     });
// })

// path = DELETE /user/:id
// app.delete('/user/:id', (req, res) => {
//     let id = req.params.id;
//     // หา index ของ user ที่ต้องการลบจาก id ที่ส่งมา
//     let selectIndex = users.findIndex(user => user.id == id);
//    // ลบ user ออกจาก array โดยใช้ delete
//    users.splice(selectIndex, 1);

//     res.json({
//         message: 'User deleted successfully',
//             indexDeleted: selectIndex
//     });
// })  


app.listen(port, async () => {
    await initDBConnection();
    console.log(`Server is running on port ${port}`);
    });




