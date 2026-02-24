function switchRound(round, event) {
    const imgElement = document.getElementById('display-img');

    // 1. เส้นทางรูปภาพ (ตรวจสอบให้ตรงกับโฟลเดอร์ assets ของคุณ)
    const images = {
        'portfolio': 'assets/Admission1.png',
        'quota': 'assets/Admission2.png',
        'admission': 'assets/Admission4.png'
    };

    // 2. เปลี่ยนรูปภาพพร้อม Effect จางเข้า-ออก
    imgElement.style.opacity = 0;
    setTimeout(() => {
        imgElement.src = images[round];
        imgElement.style.opacity = 1;
    }, 200);

    // 3. จัดการ Class 'active' ให้ปุ่มหลัก
    const buttons = document.querySelectorAll('.main-round-btn');
    buttons.forEach(btn => btn.classList.remove('active'));

    if (event) {
        event.currentTarget.classList.add('active');
    }

    // 4. จัดการการแสดงผลเมนูย่อย (Sub-projects)
    document.querySelectorAll('.sub-projects').forEach(el => el.classList.remove('show'));
    const targetSub = document.getElementById('sub-' + round);
    if (targetSub) {
        targetSub.classList.add('show');
    }
}

function toggleDetail(detailId) {
    const detail = document.getElementById(detailId);
    // ตรวจสอบสถานะการแสดงผลแบบ Toggle
    if (detail.style.display === "none" || detail.style.display === "") {
        detail.style.display = "block";
    } else {
        detail.style.display = "none";
    }
}