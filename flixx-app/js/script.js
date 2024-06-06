const nowPlayingText = document.getElementById('now-playingu');

nowPlayingText.addEventListener('mouseover', () => {
  nowPlayingText.style.color = 'red';
  console.log('mouse Is Over Now Playing');
});
