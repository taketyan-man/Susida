// function pageSwitch(obj){
//   const elements = document.getElementsByClassName('header-nav-active');
//   for (let step = 0; step < elements.length; step ++){
//     elements[step].classList.remove('header-nav-active');
//   }
//   obj.classList.add('header-nav-active');
//   jgSwitch(obj);
// }

// function jgSwitch(obj){
//   const elements = document.getElementsByClassName('active');
//   for (let step = 0; step < elements.length; step ++){
//     elements[step].classList.remove('active');
//   }
//   if(obj.innerHTML == "ゲーム"){
//     window.location.reload();
//     const el = document.getElementsByClassName('game-box')[0];
//     el.classList.add('active'); 
//   }else if(obj.innerHTML == 'ログイン'){
//     const el = document.getElementsByClassName('login-box')[0];
//     el.classList.add('active');
//   }else if(obj.innerHTML == '新規登録'){
//     const el = document.getElementsByClassName('new-box')[0];
//     el.classList.add('active');
//   };
// };

function gameModeSelect(obj){
  const element = document.getElementsByClassName('game-title-active')[0];
  element.classList.remove('game-title-active');
  obj.classList.add('game-title-active');
}
