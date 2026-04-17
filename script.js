function showInfo(card) {
  const title = card.getAttribute('data-name');
  const description = card.getAttribute('data-description');

  document.getElementById('popup-title').innerText = title;
  document.getElementById('popup-text').innerText = description;

  document.getElementById('popup').style.display = 'block';
}

function closePopup() {
  document.getElementById('popup').style.display = 'none';
}
function closePopup() {
  const popup = document.getElementById("popup");
  const video = document.getElementById("popup-video");
  popup.style.display = "none";
  video.pause();
}
