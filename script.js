// Hàm để chuyển đổi màn hình
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(el => el.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

// Nút bắt đầu
document.getElementById('start-btn').addEventListener('click', () => {
  showScreen('blank-screen');
});

// Nút đỏ "Đừng bấm vào đây!"
document.getElementById('dont-click-btn').addEventListener('click', () => {
  showScreen('confirm-screen');
});

// Nút hướng dẫn
document.getElementById('guide-btn').addEventListener('click', () => {
  showScreen('guide-screen');
});

// Chuyển hướng
function goToLink() {
  window.location.href = "https://yip.su/truongGiabaoHomework";
}

// Quay lại màn hình chính
function goBack() {
  showScreen('main-screen');
}

// Khởi động với màn hình chính
window.onload = () => {
  showScreen('main-screen');
};


// Mở ảnh khi bấm
document.querySelectorAll('.images img').forEach(img => {
  img.addEventListener('click', () => {
    const popup = document.getElementById('image-popup');
    const popupImg = document.getElementById('popup-img');
    popupImg.src = img.src;
    popup.classList.remove('hidden');
  });
});

// Đóng popup khi bấm nền đen
document.getElementById('image-popup').addEventListener('click', () => {
  document.getElementById('image-popup').classList.add('hidden');
});
