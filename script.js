function confirmDownload() {
  const progressContainer = document.getElementById('progressContainer');
  const progressBar = document.getElementById('progressBar');
  const progressText = document.getElementById('progressText');
  const popup = document.getElementById('popup');

  progressContainer.style.display = 'block';
  let countdown = 10;

  const timer = setInterval(() => {
    countdown--;
    const percent = ((10 - countdown) / 10) * 100;
    progressBar.value = percent;
    progressText.textContent = `Download starts in: ${countdown} sec`;

    if (countdown <= 0) {
      clearInterval(timer);
      progressBar.value = 100;
      progressText.textContent = "Starting download...";
      window.location.href = "https://madhyabindu-my.sharepoint.com/personal/dinesh_ranamagar_madhyabindu_edu_np/_layouts/15/download.aspx?share=ETai2FIdVi9Nkq9jwKl-i_0BGVNOwROkPjywzwzxQE_B-A";
      popup.classList.add('show');
      setTimeout(() => popup.classList.remove('show'), 12000);
    }
  }, 1000);
}

// Image switch every 5 sec
const imageEl = document.getElementById('appImage');
const images = ['1.jpg', '2.jpg'];
let current = 0;

setInterval(() => {
  current = (current + 1) % images.length;
  imageEl.style.opacity = 0;
  setTimeout(() => {
    imageEl.src = images[current];
    imageEl.style.opacity = 1;
  }, 400);
}, 5000);
