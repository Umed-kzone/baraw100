const body = document.body;
const container = document.getElementsByClassName('list-item');
const play = document.getElementsByClassName('btn view');
const read = document.getElementsByClassName('btn edit');
const name = document.getElementsByClassName('item-name');
const title = document.getElementById('title');
const sound = document.getElementById("clickSound");
const menu = document.getElementById("menu");
const back = document.getElementById("back");
const weelcome = document.getElementById('wilcome');

function bounce(button) {
    button.classList.remove('bounce'); // reset animation if already applied
    void button.offsetWidth; // force reflow (trick to restart the animation)
    button.classList.add('bounce');
  }
    function goBack() {
  sound.currentTime = 0;
  sound.play();
      setTimeout(() => {
        window.history.back();
      }, 500);
    }
  for (let el of play) {
el.addEventListener("click", function() {
    sound.currentTime = 0;
    sound.play();
    el.classList.remove('bounce'); // reset animation if already applied
    void el.offsetWidth; // force reflow (trick to restart the animation)
    el.classList.add('bounce');
});
  }
for (let el of read) {
el.addEventListener("click", function() {
    sound.currentTime = 0;
    sound.play();
    el.classList.remove('bounce'); // reset animation if already applied
    void el.offsetWidth; // force reflow (trick to restart the animation)
    el.classList.add('bounce');
});
  }

function defaulted() {

}


  function pinkened() {
  body.style.backgroundColor = "#ffaab8";
  body.style.color = "#ffffff";
    menu.style.backgroundColor = "#ff778e";
    back.style.backgroundColor = "#ffd8de";
    back.style.color = "#ff4c6a";
    back.style.borderColor = "#ff3f5f";
    back.style.border = "solid 0.4vh #ff4c6a";
  title.style.textShadow = "0px 0px 1vh #ff193b";
  for (let el of container) {
  el.style.backgroundColor = "#ffd8de";
  el.style.border = "solid 0.6vh #ff193b";
  }
  for (let el of name) {
  el.style.color = "#ff193b";
  el.style.fontWeight = "500";
  }
  for (let el of play) {
  el.style.color = "#ff193b";
  el.style.backgroundColor = "#fffafd";
  el.style.border = "solid 0.5vh #ffaab8";
  el.style.fontWeight = "600";
    el.addEventListener("mouseover", function() {
      el.style.border = "solid 0.36vh #ff0044";
      
});
    el.addEventListener("mouseout", function() {
  el.style.border = "solid 0.36vh #ffaab8";
});
  }
  for (let el of read) {
  el.style.color = "#ff193b";
  el.style.backgroundColor = "#fffafd";
  el.style.border = "solid 0.5vh #ffaab8";
  el.style.fontWeight = "600";
    el.addEventListener("mouseover", function() {
      el.style.border = "solid 0.36vh #ff0044";     
  });
    el.addEventListener("mouseout", function() {
  el.style.border = "solid 0.36vh #ffaab8";     
});
  }
 }


 function coaled() {
  body.style.backgroundColor = "#2d2d2d";
  body.style.color = "#ffffff";
   menu.style.backgroundColor = "#2d2d2d";
   back.style.backgroundColor = "#000000";
    back.style.color = "#ffffff";
    back.style.borderColor = "#ffffff"
   title.style.textShadow = "0px 0px 1vh #ffaa00";
  for (let el of container) {
  el.style.backgroundColor = "#1e1e1e";
  el.style.border = "none 0.6vh #ffaa00";
  }
  for (let el of name) {
  el.style.color = "#ffbb00";
  el.style.fontWeight = "500";
  }
  for (let el of play) {
  el.style.color = "#ffbb00";
  el.style.backgroundColor = "#101010";
  el.style.border = "solid 0.2vh #999999";
  el.style.fontWeight = "400";
   el.addEventListener("mouseover", function() {
     el.style.border = "solid 1px #ffaa00"; 
});
   el.addEventListener("mouseout", function() {
  el.style.border = "solid 0.2vh #999999";
});
  }
  for (let el of read) {
  el.style.color = "#ffbb00";
  el.style.backgroundColor = "#101010";
  el.style.border = "solid 0.2vh #999999";
  el.style.fontWeight = "400";
   el.addEventListener("mouseover", function() {
     el.style.border = "solid 1px #ffaa00"; 
});
   el.addEventListener("mouseout", function() {
  el.style.border = "solid 0.2vh #999999";
});
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
