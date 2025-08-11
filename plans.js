const body = document.body;
const title = document.getElementsByClassName('bog');
const list = document.li;
const card = document.getElementsByClassName('card');
const menu = document.getElementById("menu");
const back = document.getElementById("back");
const cnt1 = document.getElementById("cnt1");
const cnt2 = document.getElementById("cnt2");
const bbe = document.getElementById("bbe");
const nabe = document.getElementById("nabe");
const input = document.getElementById("codeInput");
const status = document.getElementById("status");
const dback = document.getElementById("activationDialog");
const h3 = document.getElementById("brk");

function bounce(button) {
    button.classList.remove('bounce'); // reset animation if already applied
    void button.offsetWidth; // force reflow (trick to restart the animation)
    button.classList.add('bounce');
  }
    function goBack() {
   const sound = document.getElementById("clickSound");     
  sound.currentTime = 0;
  sound.play();
      setTimeout(() => {
        window.history.back();
      }, 500);
    }
    function activated() {
        const sound = document.getElementById("clickSound2");
  sound.currentTime = 0;
  sound.play();
    }
function playsound() {
    const sound = document.getElementById("clickSound");
    sound.currentTime = 0;
    sound.play();
}

function defaulted() {

}




function pinkened() {
  body.style.backgroundColor = "#ffaab8";
  body.style.color = "#ff778e";
    menu.style.backgroundColor = "#ff778e";
    back.style.backgroundColor = "#ffd8de";
    back.style.color = "#ff4c6a";
    back.style.borderColor = "#ff3f5f";
    back.style.border = "solid 0.4vh #ff4c6a";
  dback.style.backgroundColor = "#ffaab8";
  dback.style.borderRadius = "2rem";
  dback.style.border = "solid 0.3rem #ff778e";
  brk.style.color = "#ffffff";
    brk.style.fontWeight = "700";
  input.style.backgroundColor = "#ffdde3";
  input.style.color = "#ff4c6a";
  bbe.style.backgroundColor = "#ff778e";
        bbe.style.color = "#ffffff";
    bbe.style.fontWeight = "700";
    nabe.style.fontWeight = "700";
  nabe.style.backgroundColor = "#fff8fe";
  nabe.style.color = "#ff778e";
  nabe.style.border = "solid 0.2rem #ff778e";
const style = document.createElement('style');
style.innerHTML = `
  #codeInput::placeholder {
    color: #ff778e;
  }
`;
document.head.appendChild(style);
  input.style.border = "solid 0.2rem #ff778e";
  input.style.borderRadius = "0.8rem";
    input.style.fontWeight = "700";
    
    for (let el of card) {
    el.style.backgroundColor = "#fff8fe";
    }
    
      for (let el of title) {
    el.style.color = "#ff4c6a";
  }
}




function coaled() {
  body.style.backgroundColor = "#2d2d2d";
  body.style.color = "#ffffff";
  menu.style.backgroundColor = "#1e1e1e";
   back.style.backgroundColor = "#000000";
    back.style.color = "#ffffff";
    back.style.borderColor = "#ffffff";
    dback.style.backgroundColor = "#2d2d2d";
  dback.style.borderRadius = "2rem";
  brk.style.color = "#ffffff";
    brk.style.fontWeight = "700";
  input.style.backgroundColor = "#1e1e1e";
  input.style.color = "#00ffdd";
  bbe.style.backgroundColor = "#1e1e1e";
    bbe.style.color = "#ffbb00";
    bbe.style.fontWeight = "500";
    nabe.style.fontWeight = "500";
  nabe.style.backgroundColor = "#2d2d2d";
  nabe.style.color = "#dddddd";
  nabe.style.border = "solid 0.25rem #1e1e1e";
const style = document.createElement('style');
style.innerHTML = `
  #codeInput::placeholder {
    color: #aaaaaa;
  }
`;
document.head.appendChild(style);
  input.style.border = "solid 0.1rem #aaaaaa";
  input.style.borderRadius = "0.6rem";
    input.style.fontWeight = "400";
    
    for (let el of card) {
    el.style.backgroundColor = "#3c3c3c";
    }
    
      for (let el of title) {
    el.style.color = "#ffbb00";
  }
}


 const savedtheme = localStorage.getItem('themename');
  if (!savedtheme) {
    savedtheme = "default";
    const selectedtheme = savedtheme;
  } else {
    if (savedtheme === "rose") {
      pinkened();
    }
    if (savedtheme === "charcoal") {
      coaled();
    }
    if (savedtheme === "default") {
      defaulted();
    }
  }

 const activation = localStorage.getItem('activation');
  if (!activation) {
      cnt1.style.display = "none";
    cnt2.style.display = "block";
  } else {
      cnt1.style.display = "grid";
      cnt2.style.display = "none";
  }

const correctCode = "brw100"; // Set your desired activation code here

  function checkCode() {
    const input = document.getElementById("codeInput").value.trim();

    if (input === correctCode) {
        if (savedtheme === "default") {
      status.textContent = "✅ چاڵاککردن سەرکەوتوو بوو";
      status.style.color = "green";
        }
        if (savedtheme === "rose") {
      status.textContent = "✅ چاڵاککردن سەرکەوتوو بوو";
      status.style.color = "#00bb00";
        }
        if (savedtheme === "charcoal") {
      status.textContent = "✅ چاڵاککردن سەرکەوتوو بوو";
      status.style.color = "#00ff00";
        document.getElementById("codeInput").style.textShadow = "0px 0px 0.4rem #00ffdd";
        document.getElementById("codeInput").style.color = "#bbfff0"
        }
        activated();
      setTimeout(() => {
        document.getElementById("activationDialog").style.display = "none";
        document.getElementById("overlay").style.display = "none";
          cnt1.style.display = "grid";
          cnt2.style.display = "none";
          localStorage.setItem('activation', 'activated');
      }, 2000);
    } else {
        if (input === "") {
      status.textContent = "تکایە کۆدێک بنووسە ";
      status.style.color = "red";
      document.getElementById("codeInput").classList.add('shake');

    // Remove class after animation ends so it can be triggered again
    document.getElementById("codeInput").addEventListener('animationend', () => {
      document.getElementById("codeInput").classList.remove('shake');
    }, { once: true });
        } else {
      status.textContent = "❌ کۆد هەڵەیە بۆیە مافی داخڵ بوونت نیە";
      status.style.color = "#ff0000";
                  document.getElementById("status").classList.add('shake');

    // Remove class after animation ends so it can be triggered again
    document.getElementById("status").addEventListener('animationend', () => {
      document.getElementById("status").classList.remove('shake');
    }, { once: true });
        }
        
    }
  }

