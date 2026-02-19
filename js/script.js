function switchRound(round) {
    const imgElement = document.getElementById('display-img');
    
    // กำหนดเส้นทางรูปภาพตามที่ระบุใน Figma
    // (เปลี่ยนชื่อไฟล์รูปภาพให้ตรงกับที่คุณเซฟไว้ในโฟลเดอร์ assets)
    const images = {
        'portfolio': 'assets/image-portfolio.jpg',
        'quota': 'assets/image-quota.jpg',
        'admission': 'assets/image-admission.jpg'
    };

    // 1. เปลี่ยนรูปภาพพร้อมใส่ Effect เล็กน้อย (Optional)
    imgElement.style.opacity = 0; // ค่อยๆ จางออก
    
    setTimeout(() => {
        imgElement.src = images[round];
        imgElement.style.opacity = 1; // ค่อยๆ แสดงขึ้นมา
    }, 200);

    // 2. จัดการเรื่อง Class 'active' เพื่อให้ปุ่มที่กดค้างอยู่มีสีที่ต่างออกไป
    const buttons = document.querySelectorAll('.round-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    
    // ค้นหาปุ่มที่ตรงกับรอบที่เลือกและเติม class active
    event.currentTarget.classList.add('active');
}