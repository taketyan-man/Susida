let Q = [
  //cmd + key
  ['ファイルを開く', 'Cmd + O', 0, "KeyO"], 
  //['新しいファイルを開く', 'Cmd + N', 0, "KeyN"], 
  ['ファイルの保存', 'Cmd + S', 0, "KeyS"], 
  ['クイックオープンウィンドウ', 'Cmd + P', 0, "KeyP"], 
  ['サイドバーの開閉', 'Cmd + B', 0, 'KeyB'], 
  ['カーソルの下に行を挿入', 'Cmd + Enter', 0, "Enter"],
  ['選択行をコメント化', 'Cmd + /', 0, 'Slash'],
  ['文字の検索', 'Cmd + F', 0, 'KeyF'],
  ['ファイルの最初へジャンプ', 'Cmd + 上矢印', 0, "ArrowUp"],
  ['ファイルの最後へジャンプ', 'Cmd + 下矢印', 0, "ArrowDown"],
  ['同じ文字列を複数選択', 'Cmd + D', 0, 'KeyD'],

  //ctrl + key
  // ['タブの移動', 'Ctrl + tab', 1],
  ['行を指定してジャンプ', 'Ctrl + G', 1, "KeyG"],
  //option + key
  ['選択行を上に移動', 'Option + 上矢印キー', 2, 'ArrowUp'],
  ['選択行を下に移動', 'Option + 下矢印キー', 2, 'ArrowDown'],
  ['文字の先頭へジャンプ', 'Option + 左矢印キー', 2, 'ArrowLeft'],
  ['文字の最後へジャンプ', 'Option + 右矢印キー', 2, 'ArrowRight'],
  //shift + cmd + key
  ['エクスプローラーを開く', 'Shift + Cmd + E', 3, 'KeyE'],
  ['名前を付けてファイルを保存', 'Shift + Cmd + S', 3, 'KeyS'],
  ['カーソルの上に行を挿入', 'Shift + Cmd + Enter', 3, 'Enter'],
  ['選択行の削除', 'Shift + Cmd + K', 3, 'KeyK'],
  
  ['ワークスペース全体を検索', 'Shift + Cmd + F', 3, 'KeyF'],
  // option + cmd + key
  ['文字の置き換え', 'Option + Cmd + F', 4, 'KeyF'],
  //shift + option + key
  ['選択行を上にコピー', 'Option + Shift + 上矢印キー', 5, 'ArrowUp'],
  ['選択行を下にコピー', 'Option + Shift + 下矢印キー', 5, 'ArrowDown']
  ];

let Q_No;
let Qs = [];
let qnum = 0;
let Question = 0;
let qs = document.getElementsByClassName('qs');
let qsCmd = document.getElementsByClassName("qs-cmd");

const controller = {};

document.addEventListener('keydown', (event) => {
  event.preventDefault();
  console.log(`keydown:${event.code}`);
  controller[event.code] = true;
  push_Keydown(event, controller);
});

document.addEventListener('keyup', (event) => {
  event.stopPropagation();
  console.log(`keyup:${event.code}`);
  controller[event.code] = false;
});

function question_select10(){
  for (let step = 0; step < 10; step ++){
    Q_No = Math.floor( Math.random() * Q.length);
    Qs[step] = Q.splice(Q_No, 1);
    //スコア時のスコア時の問題の表示
    qs[step].innerHTML = Qs[step][0][0];
    qsCmd[step].innerHTML = Qs[step][0][1];
  };
}

function question_present(){
  questionStart = new Date;
  document.getElementById('count').innerHTML = "問題数: " + (qnum + 1) + "/10";
  document.getElementById('hint').style.display = "none";
  Question = Qs[qnum][0];
  document.getElementById('question').innerHTML = Question[0];
}

function jg_Key(){
  if(controller[Question[3]]){
    Q_No = Math.floor( Math.random() * Q.length);
    qnum += 1;
    if(qnum < 10){
      question_present();
    }else if(qnum == 10){
      stopBtn();
      gameFinish();
    }
  };
};

function gameFinish(){
  document.getElementById('game-start').style.display = 'none';
  document.getElementById('result').innerHTML = "";
  document.getElementById('score').
  document.getElementById('game-finish').style.display = 'block';
}

function push_Keydown(event, controller){
  let keyCode = event.key;
  if(Question[2] == 0){
    if(controller["MetaLeft"]){
      jg_Key();
    }else if(controller["MeteRight"]){
      jg_Key();
    };
  }else if(Question[2] == 1){  
    if(controller["ControlLeft"]){
      jg_Key();
    };
  }else if(Question[2] == 2){
    if(controller["AltLeft"]){
      jg_Key();
    };
  }else if(Question[2] == 3){
    if(controller["ShiftRight"]){
      if(controller["MetaLeft"]){
        jg_Key();
      }else if(controller["MetaRight"]){
        jg_Key();
      };
    }else if(controller["ShiftLeft"]){
      if(controller["MetaLeft"]){
        jg_Key();
      }else if(controller["MetaRight"]){
        jg_Key();
      };
    };
  }else if(Question[2] == 4){
    if(controller["AltLeft"]){
      if(controller["MetaLeft"]){
        jg_Key();
      }else if(controller["MetaRight"]){
        jg_Key();
      };
    };
  }else if(Question[2] == 5){
    if(controller["AltLeft"]){
      if(controller["ShiftRight"]){
        jg_Key();
      }else if(controller["ShiftLeft"]){
        jg_Key();
      };
    };
  };
};

question_select10()
function qsBox(obj){
  var el = document.getElementsByClassName('qs-box-switch');
  var qs = document.getElementsByClassName('qs-opened-box')[0];
  if(obj == el[0]){
    el[0].classList.remove('switch-active');
    qs.classList.add('switch-active');
    el[1].classList.add('switch-active');
  }else if(obj == el[1]){
    el[0].classList.add('switch-active');
    qs.classList.remove('switch-active');
    el[1].classList.remove('switch-active');
  }
}

function reloadBtn(){
  window.location.reload();
}