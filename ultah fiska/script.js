function showGreeting() {
    const greeting = document.getElementById("greeting");
    greeting.classList.remove("hidden");
    greeting.classList.add("visible");
  }
  
  // Fungsi untuk membuat hati mengambang
  function createHeart() {
    const heart = document.createElement("span");
    heart.classList.add("heart");
  
    // Posisi acak
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 2 + 3 + "s";
  
    // Tambah hati ke container
    document.getElementById("hearts").appendChild(heart);
  
    // Hapus hati setelah animasi selesai
    setTimeout(() => {
      heart.remove();
    }, 5000);
  }
  
  // Tambah hati baru setiap 500ms
  setInterval(createHeart, 500);
  