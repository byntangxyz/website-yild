document.querySelectorAll(".sosmed i").forEach((sosmed) => {
    sosmed.addEventListener("mouseenter" , () => {
        sosmed.classList.remove("ph");
        sosmed.classList.add("ph-fill");
    });
    sosmed.addEventListener("mouseleave" , () => {
        sosmed.classList.add("ph");
        sosmed.classList.remove("ph-fill")
    })
})



function openModal(src) {
    var modal = document.getElementById('modal');
    var modalImg = document.getElementById('modal-img');
    modal.style.display = "block";
    modalImg.src = src;
}

// Fungsi untuk menutup modal
function closeModal() {
    var modal = document.getElementById('modal');
    modal.style.display = "none";
}
