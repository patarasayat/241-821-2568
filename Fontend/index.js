const submitData = async () => {
    // ดึง Element จาก DOM
    let firstNameDOM = document.querySelector('input[name=firstname]');
    let lastNameDOM = document.querySelector('input[name=lastname]');
    let ageDOM = document.querySelector('input[name=age]');
    let genderDOM = document.querySelector('input[name=gender]:checked');
    
    // แก้ไขตรงนี้: ใช้ querySelectorAll เพื่อดึง checkbox ทุกตัวที่ถูกติ๊ก
    let interestDOMs = document.querySelectorAll('input[name=interests]:checked');
    let descriptionDOM = document.querySelector('textarea[name=description]');

    let messageDOM = document.getElementById('message');

    try {
        // จัดการเรื่องงานอดิเรก (รวมเป็น String คั่นด้วยเครื่องหมายคอมม่า)
        let interest = '';
        for (let i = 0; i < interestDOMs.length; i++) {
            interest += interestDOMs[i].value;
            if (i != interestDOMs.length - 1) {
                interest += ',';
            }
        }

        // เตรียมข้อมูลส่งไป Backend
        let userData = {
            firstName: firstNameDOM.value,
            lastName: lastNameDOM.value, // แก้ชื่อตัวแปรให้ตรงกัน
            age: ageDOM.value,
            gender: genderDOM ? genderDOM.value : '', // ป้องกัน Error ถ้าไม่ได้เลือกเพศ
            description: descriptionDOM.value, // แก้คำสะกดผิด
            interests: interest
        };

        const response = await axios.post('http://localhost:8000/users', userData);
        console.log('response', response.data);
        
        messageDOM.innerText = 'บันทึกข้อมูลสำเร็จ';
        messageDOM.className = 'message success';

    } catch (error) {
        console.error('Error:', error);
        messageDOM.innerText = 'การบันทึกข้อมูลผิดพลาด';
        messageDOM.className = 'message danger';
    }
};