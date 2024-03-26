

function gameModeSelect(obj){
  const element = document.getElementsByClassName('game-title-active')[0];
  element.classList.remove('game-title-active');
  obj.classList.add('game-title-active');
}
