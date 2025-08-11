const body = document.body;
  const drat = document.getElementById("aler");
  const menu = document.getElementById("menu");
  const theme = document.getElementById("theme");
  const chth = document.getElementById("choosetheme");
  const logo = document.getElementById("logo");
  const elements = document.getElementsByClassName('grid-item');
  const elements2 = document.getElementsByClassName('grid-item2');
  const tit = document.getElementsByClassName('mts');
  const sub = document.getElementsByClassName('title');
  const ba = document.getElementById("chane");
  const bd = document.getElementById("chame");
  const hed = document.getElementById("niss");


function playSound() {
  const sound = document.getElementById("clickSound");
  sound.currentTime = 0;
  sound.play();
}
  function playSound2() {
  const sound = document.getElementById("clickSound2");
  sound.currentTime = 0;
  sound.play();
}
  
  function bounce(button) {
    button.classList.remove('bounce'); // reset animation if already applied
    void button.offsetWidth; // force reflow (trick to restart the animation)
    button.classList.add('bounce');
  }
  
    function toggleVisibility() {
    const box = document.getElementById("aler");
    if (box.style.display === "none") {
      box.style.display = "block"; // show it
    }
  }
    function reverseVisibility() {
    const box = document.getElementById("aler");
    if (box.style.display === "block") {
      box.style.display = "none"; // show it
    }
  }
  
  document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault(); // Stop immediate navigation
      const url = this.href;
      if (url) {
      setTimeout(() => {
        window.location.href = url; // Navigate after 1 second delay
      }, 500);
      }
    });
  });
 const dialog = document.getElementById('loginDialog');
  const form = document.getElementById('loginForm');
  const weelcome = document.getElementById('wilcome');

  function reno() {
    bd.style.display = "block";
    document.getElementById("niss").textContent = "Change your name !"
  }
  function showme() {
    dialog.showModal();
  }

  function showles() {
    dialog.close();
  }

  // Check if username exists
  const savedUsername = localStorage.getItem('username');
  if (!savedUsername) {
    document.getElementById("niss").textContent = "Login please !"
    bd.style.display = "none";
    showme();
  } else {
    weelcome.textContent = savedUsername;
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = form.username.value.trim();
    
    if (username) {
      localStorage.setItem('username', username);
      showles();
      weelcome.textContent = username;
      } else {
      document.getElementById("username").classList.add('shake');
      document.getElementById("username").addEventListener('animationend', () => {
      document.getElementById("username").classList.remove('shake');
      }, { once: true });
    }
  });


function defaulted() {
  body.style.backgroundColor = "#ffffff";
  drat.style.color = "#ff0000";
  drat.style.fontWeight = "500";
  menu.style.backgroundColor = "#fff";
  weelcome.style.backgroundColor = "#ececec";
  weelcome.style.color = "#000000";
  weelcome.style.border = "solid 0.1rem black"
  chth.style.color = "#000000";
  theme.style.backgroundColor = "#eeeeee";
  theme.style.fontWeight = "500";
  theme.style.color = "#000000";
  logo.style.color = "#000000";
  logo.style.textShadow = "2px 2px 0.25vh #aaa";
  for (let el of elements) {
    el.style.border = "none";
    el.style.backgroundColor = "#fff";
    el.style.color ="#000000";
  }
  for (let el of elements2) {
    el.style.border = "none";
    el.style.backgroundColor ="#fff";
    el.style.color ="#000000";
    el.addEventListener("mouseover", function() {
  el.style.boxShadow = "0px 0px 1.5vh #3388ff";
      el.style.border = "solid 1px #000000";
});

el.addEventListener("mouseout", function() {
  el.style.boxShadow = "0px 0px 10px rgba(0, 0, 0, 0.2)";
  el.style.border = "none";
});
  }
  for (let el of tit) {
    el.style.color = "#000000";
  }
  for (let el of sub) {
    el.style.color = "#666";
  }
}

function pinkened() {
  body.style.backgroundColor = "#ffaab8";
  drat.style.color = "#000000";
  drat.style.fontWeight = "600";
  menu.style.backgroundColor = "#ff778e";
  weelcome.style.backgroundColor = "#ffaab8";
  weelcome.style.color = "#ff4c6a";
  weelcome.style.border = "solid 0.2rem #ff4c6a"
  chth.style.color = "#ffd8de";
  theme.style.backgroundColor = "#ffaab8";
  theme.style.fontWeight = "600";
  theme.style.color = "#ff5974";
  logo.style.color = "#ff193b";
  logo.style.textShadow = "0px 0px 1vh #ffd8de";
  for (let el of elements) {
    el.style.border = "solid";
    el.style.borderWidth = "0.32vh";
    el.style.borderColor = "#ff193b";
    el.style.backgroundColor = "#fffafd";
    el.style.color ="#000000";
  }
  for (let el of elements2) {
    el.style.border = "solid";
      el.style.borderWidth = "0.36vh";
    el.style.borderColor = "#ff193b";
    el.style.backgroundColor ="#fffafd";
    el.style.color ="#000000";
    el.addEventListener("mouseover", function() {
  el.style.boxShadow = "0px 0px 2vh rgba(255, 0, 60, 1)";
      el.style.border = "solid 0.36vh #ff0044";
      
});

el.addEventListener("mouseout", function() {
  el.style.boxShadow = "0px 0px 10px rgba(0,0,0,0.2)";
  el.style.border = "solid 0.36vh #ff193b";
});
  }
  for (let el of tit) {
    el.style.color = "#ff193b";
  }
  for (let el of sub) {
    el.style.color = "#ff193b";
  }
}

function coaled() {
  body.style.backgroundColor = "#2d2d2d";
  drat.style.color = "#00ccff";
  drat.style.fontWeight = "500";
  menu.style.backgroundColor = "#000000";
  weelcome.style.backgroundColor = "#3b3b3b";
  weelcome.style.color = "#ffffff";
  weelcome.style.border = "solid 0.1rem #aaa"
  chth.style.color = "#bbbbbb";
  theme.style.backgroundColor = "#2d2d2d";
  theme.style.fontWeight = "400";
  theme.style.color = "#ffbb00";
  logo.style.color = "#ffbb00";
  logo.style.textShadow = "0px 0px 1vh #ff8b00";
  for (let el of elements) {
    el.style.border = "none";
    el.style.borderWidth = "0.32vh";
    el.style.borderColor = "#ffaa00";
    el.style.backgroundColor = "#1e1e1e";
    el.style.color ="#ffffff";
  }
  for (let el of elements2) {
    el.style.border = "solid";
    el.style.borderWidth = "0.2vh";
    el.style.borderColor = "#999999";
    el.style.backgroundColor ="#1e1e1e";
    el.style.color ="#ffffff";
    el.addEventListener("mouseover", function() {
  el.style.boxShadow = "0px 0px 10px #ff8b00";
     el.style.border = "solid 1px #ffee44"; 
});

el.addEventListener("mouseout", function() {
  el.style.boxShadow = "0px 0px 10px rgba(0,0,0,0.2)";
  el.style.border = "solid 0.2vh #999999";
});
  }
  for (let el of tit) {
    el.style.color = "#ffffff";
  }
  for (let el of sub) {
    el.style.color = "#ffaa00";
  }
}

  const savedtheme = localStorage.getItem('themename');
  if (!savedtheme) {
    document.getElementById("theme").value = "default";
    const themename = savedtheme;
      localStorage.setItem('themename', themename);
    const selectedtheme = themename;
  } else {
    document.getElementById("theme").value = savedtheme;
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


  const savedId = localStorage.getItem('id');
  if (!savedId) {
    let randomInt = Math.floor((Math.random() * 9000) + 1000);
    const id = randomInt;
      localStorage.setItem('id', id);
  }


document.getElementById("theme").addEventListener("change", function() {
  const selectedtheme = this.value;
  localStorage.setItem('themename', selectedtheme);
  if (selectedtheme === "rose") {
    pinkened();
    }
  if (selectedtheme === "charcoal") {
    coaled();
    }
  if (selectedtheme === "default") {
      defaulted();
    }
});
  

