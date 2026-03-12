const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2/promise');
const app = express();
const port = 8000;
const cors = require('cors');

app.use(bodyParser.json());
app.use(cors());

let users =[]
let counter =1;
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

 //path = GET /users สำหรับ get ข้อมูล user ทั้งหมด
    app.get('/users', async (req, res) => {
     const results = await conn.query('SELECT * FROM users')
     res.json(results[0]);
 });

 const validateData = (userData) => {
    let errors = [];
    if (!userData.firstname) {
        errors.push('กรุณากรอกชื่อ');
    }
    if (!userData.lastname) {
        errors.push('กรุณากรอกนามสกุล');
    }
    if (!userData.age) {
        errors.push('กรุณากรอกอายุ');
    }
    if (!userData.gender) {
        errors.push('กรุณาเลือกเพศ');
    }
    if (!userData.interests) {
        errors.push('กรุณาเลือกความสนใจอย่างน้อย 1 อย่าง');
    }
    if (!userData.description) {
        errors.push('กรุณากรอกคำอธิบายเกี่ยวกับตัวคุณ');
    }
    return errors;
}

// path = POST /users สำหรับเพิ่ม user ใหม่  
app.post('/users', async (req, res) => {
    try{
       let user = req.body;
       const error = validateData(user);
       if (error.length > 0) {
           //ถ้ามี
           throw {
            message: 'กรอกข้อมูลไม่ครบถ้วน',
            error: errors
        }
     }
     const results = await conn.query('INSERT INTO users SET ?', user);
     res.json({
        message: 'User created successfully',
        data: results[0]
    })
} catch(error) {
    const errorMessage = error.message || 'Error crasting user';
    const errors = error.errors || [];
    console.error('Error creating user:',error.message);
    res.status(500).json({
        message: errorMessage,
        errors:errors
    });
   }
});

    //path GET /users/:id สำหรับ get ข้อมูล user ที่มี id ตรงกับที่ส่งมา
    app.get('/users/:id', async (req, res) => {
        try {
            let id = req.params.id;
            const results = await conn.query('SELECT * FROM users WHERE id = ?', [id]);
            if (results[0].length == 0) {
                throw{ statusCode: 404, message: 'User not found' };
            }
            res.json(results[0][0]);
        } 
        catch (error) {
            console.error('Error fetching user:', error.message);
            let statusCode = error.statusCode || 500;
            res.status(statusCode).json({
                message:'Error fetching user',
                error: error.message
            });
        }
    });
//path PUT /users/:id สำหรับ get ข้อมูล user ที่มี id ตรงกับที่ส่งมา
    app.put('/users/:id', async (req, res) => {
        try {
            let id = req.params.id
            let updateUser = req.body;
            const results = await conn.query('UPDATE user SET ? WHERE id = ?', [updateUser, id]);
            if (results[0].affectedRows == 0) {
                throw{ statusCode: 404, message: 'User not found' };
            }
            res.json ({
                message: 'User updated successfully',
                data: updateUser
            });

        } catch (error) {
            console.error('Error updating user:', error.message);
            let statusCode = error.statusCode || 500;
            res.status(statusCode).json({
                message:'Error updating user',
                error: error.message
            });
    }
    })
   //path DELETE /users/:id สำหรับ get ข้อมูล user ที่มี id ตรงกับที่ส่งมา
    app.delete('/users/:id', async (req, res) => {
        try {
            let id = req.params.id
            const results = await conn.query('DELETE FROM users WHERE id = ?', [id]);
            if (results[0].affectedRows == 0) {
                throw { statusCode: 404, message: 'User not found' };
            }
            res.json ({
                message: 'User deleted successfully',
            });

        } catch (error) {
            console.error('Error deleting user:', error.message);
            let statusCode = error.statusCode || 500;
            res.status(statusCode).json({
                message:'Error deleting user',
                error: error.message
            });
        }
    });
    app.listen(port, async () => {
        await initDBConnection();
        console.log('Server is running on port 8000');
    });
