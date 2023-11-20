function pageSwitch(obj){
  const element = document.getElementsByClassName('header-nav-active')[0];
  element.classList.remove('header-nav-active');
  obj.classList.add('header-nav-active');
  jgSwitch(obj);
}

function jgSwitch(obj){
  const element = document.getElementsByClassName('active')[0];
  element.classList.remove('active');
  if(obj.innerHTML == "ゲーム"){
    const el = document.getElementsByClassName('game-box')[0];
    el.classList.add('active'); 
  }else if(obj.innerHTML == 'ログイン'){
    const el = document.getElementsByClassName('login-box')[0];
    el.classList.add('active');
  }else if(obj.innerHTML == '新規登録'){
    const el = document.getElementsByClassName('new-box')[0];
    el.classList.add('active');
  };
};