let btnStart= document.getElementById('startbtn');
let btnStop =  document.getElementById('stopbtn');
let timer1;
let startTime, nowTime; 


btnStart.addEventListener('click', function(){
  var re = document.getElementById('result');
  re.innerHTML = '経過秒数: 0秒';
  startTime = new Date();
  startTimer();
  btnStart.disabled = true;
});

btnStop.addEventListener('click', function(){
  stopTimer();
  btnStart.disabled = false;
});
// タイマー開始
function startTimer(){
  timer1 = setInterval(showSecond, 1000);
}

// タイマー終了
function stopTimer(){ 
  clearInterval(timer1);
}

// 秒数表示
function showSecond(){
  nowTime = new Date();
  var elapsedTime = Math.floor((nowTime - startTime) / 1000);
  var str = '経過秒数: ' + elapsedTime + '秒';
  var re = document.getElementById('result');
  re.innerHTML = str;
}