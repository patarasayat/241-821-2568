const exprees = require('express');
const bodyParser = require('body-parser');
const app = exprees();
const port = 8000
let users = []
let counter = 1;
 
app.use(bodyParser.json());
let use = [];

//path = GET /user
app.get('/user', (req, res) => {
    res.json(users);
        
});

 //path = POST /user
app.post('/user', (req, res) => {
    let user = req.body;
    user.id = counter
    counter += 1;
    users.push(user);
    res.json({
        message: 'User added successfully',
        users: user });
})

// path = PUT /user/:id
app.put('/user/:id', (req, res) => {
    let id = req.params.id;
    let updatedUser = req.body;
// หา user จาก id  ที่ส่งมา
    let selectUser = users.findIndex(user => user.id == id);

    // อัพเดทข้อมูล user
if(updatedUser.name){
    users[selectIndex].name = updatedUser.name;


}
if(updatedUser.email){
    users[selectIndex].email = updatedUser.email;
}

    //เอาข้อมูลที่ update ส่งกลับไป
    res.json({
        message: 'User updated successfully',
        data: {
            user: updatedUser,
            indexUpdated: selectIndex
        }
    });
})

// path = DELETE /user/:id
app.delete('/user/:id', (req, res) => {
    let id = req.params.id;
    // หา index ของ user ที่ต้องการลบจาก id ที่ส่งมา
    let selectIndex = users.findIndex(user => user.id == id);
   // ลบ user ออกจาก array โดยใช้ delete
   users.splice(selectIndex, 1);

    res.json({
        message: 'User deleted successfully',
            indexDeleted: selectIndex
    });
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
    










