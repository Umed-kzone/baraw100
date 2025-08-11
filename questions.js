        // Example Firebase config (replace with your own later)
const body = document.body;
const menu = document.getElementById("menu");
const back = document.getElementById("back");
const container = document.getElementById("commentForm");
const nami = document.getElementById("name");
const messi = document.getElementById("message");
const smit = document.getElementById("submit");


const strt = localStorage.getItem("started");
if (!strt) {
    alert("تێبینی: لێرەدا ناوەکەت بەشوازی گشتیی دەبێت و بەکارهێنەرانیتر دەتوانن ناوەکە ببینن");
}

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
    function playsound() {
    const sound = document.getElementById("clickSound");
    sound.currentTime = 0;
    sound.play();
}

        const firebaseConfig = {
            apiKey: "AIzaSyBjJ3R9j48sbZiy5QtnMktyuRQlaV8Wrz0",
            authDomain: "baraw100.firebaseapp.com",
            databaseURL: "https://baraw100-default-rtdb.firebaseio.com",
            projectId: "baraw100",
            storageBucket: "baraw100.firebasestorage.app",
            messagingSenderId: "1072257021315",
            appId: "1:1072257021315:web:faac23d9a740ca4c97f2b6"
        };

        // Initialize Firebase
        firebase.initializeApp(firebaseConfig);
        const db = firebase.database();

        // Submit a comment
        function submitComment() {
            const name = document.getElementById('name').value.trim();
            const message = document.getElementById('message').value.trim();
            const now = new Date();
           const savedId = localStorage.getItem('id');
            const savedUsername = localStorage.getItem('username');


            if (name && message) {
                db.ref("comments").push({
                    name: name,
                    message: message,
                    timestamp: now.toLocaleString(),
                    ID: savedId,
                    pName: savedUsername
                });

                document.getElementById('name').value = "";
                document.getElementById('message').value = "";
            } else {
                if (!name) {
                    document.getElementById("name").classList.add('shake');
                    document.getElementById("name").addEventListener('animationend', () => {
                    document.getElementById("name").classList.remove('shake');
                    }, { once: true });
                }
                    if (!message) {
                    document.getElementById("message").classList.add('shake');
                    document.getElementById("message").addEventListener('animationend', () => {
                    document.getElementById("message").classList.remove('shake');
                    }, { once: true });
                    }
            }
        }

        // Listen for comments
        db.ref("comments").on("child_added", function(snapshot) {
            const data = snapshot.val();
            const commentList = document.getElementById('commentList');

            const div = document.createElement('div');
            const nmm = document.createElement('p');
            const mss = document.createElement('p');
            const tmm = document.createElement('p');
            div.className = 'comment';
            nmm.className = 'nm';
            mss.className = 'ms';
            tmm.className = 'tm';
            nmm.innerHTML = `<strong>${data.name}</strong>`;
            mss.innerHTML = `<p>${data.message}</p>`;
            tmm.innerHTML = `<p>${data.timestamp}</p>`;
            
            
            commentList.prepend(div);
            div.prepend(tmm);
            div.prepend(mss);
            div.prepend(nmm);
            

                        if (savedtheme === "rose") {
            div.style.backgroundColor = "#ff889f";
            nmm.style.backgroundColor = "#ff5974";
            nmm.style.color = "#ffd8de";                
            nmm.style.fontWeight = "600";                
            mss.style.color = "#ff193b";                  
            mss.style.fontWeight = "500"; 
            tmm.style.color = "#ff4c6a";  
            tmm.style.fontWeight = "600";
            }            
                        if (savedtheme === "charcoal") {
                        div.style.backgroundColor = "#1e1e1e";
            nmm.style.backgroundColor = "#000000";
            nmm.style.color = "#ffbb00";                
            nmm.style.fontWeight = "250";                
            mss.style.color = "#ffffff";                  
            mss.style.fontWeight = "500"; 
            tmm.style.color = "#aaa";  
            tmm.style.fontWeight = "400";
            }
        });

        function defaulted() {

        }

        function pinkened() {
  body.style.backgroundColor = "#ffaab8";
  body.style.color = "#ff4c6a";
    menu.style.backgroundColor = "#ff778e";
    back.style.backgroundColor = "#ffd8de";
    back.style.color = "#ff4c6a";
    back.style.borderColor = "#ff3f5f";
    back.style.border = "solid 0.4vh #ff4c6a";
    container.style.backgroundColor = "#ff889f";
    smit.style.backgroundColor = "#ff193b";
    smit.style.color = "#ffd8de";
    smit.style.fontWeight = "600";
    nami.style.backgroundColor = "#ffaab8";
    nami.style.color = "#ff193b";
    nami.style.border = "solid 0.35vh #ff4c6a";
    nami.style.borderRadius = "0.9rem";
    nami.style.fontWeight = "600";
    messi.style.backgroundColor = "#ffaab8";
    messi.style.color = "#ff193b";
    messi.style.border = "solid 0.35vh #ff4c6a";
    messi.style.borderRadius = "0.9rem";
    messi.style.fontWeight = "600";
       nami.addEventListener("mouseover", function() {
      nami.style.border = "solid 0.36vh #ff0044";     
  });
    nami.addEventListener("mouseout", function() {
  nami.style.border = "solid 0.36vh #ff4c6a";     
});
       messi.addEventListener("mouseover", function() {
      messi.style.border = "solid 0.36vh #ff0044";     
  });
    messi.addEventListener("mouseout", function() {
  messi.style.border = "solid 0.36vh #ff4c6a";     
});
    const style = document.createElement('style');
style.innerHTML = `
  #message::placeholder {
    color: #ff4c6a;
  }
      #name::placeholder {
    color: #ff4c6a;
  }
`;
document.head.appendChild(style);
}


        function coaled() {
  body.style.backgroundColor = "#2d2d2d";
  body.style.color = "#ffffff";
    menu.style.backgroundColor = "#1e1e1e";
    back.style.backgroundColor = "#000000";
    back.style.color = "#ffffff";
    back.style.borderColor = "#ffffff";
    container.style.backgroundColor = "#3c3c3c";
    smit.style.backgroundColor = "#191919";
    smit.style.color = "#ffffff";
    smit.style.fontWeight = "600";
    nami.style.backgroundColor = "#1e1e1e";
    nami.style.color = "#ffbb00";
    nami.style.border = "solid 0.2vh #aaa";
    nami.style.borderRadius = "0.8rem";
    nami.style.fontWeight = "300";
    messi.style.backgroundColor = "#1e1e1e";
    messi.style.color = "#ffffff";
    messi.style.border = "solid 0.2vh #aaa";
    messi.style.borderRadius = "0.8rem";
    messi.style.fontWeight = "600";
       nami.addEventListener("mouseover", function() {
      nami.style.border = "solid 0.4vh #ffffff";     
  });
    nami.addEventListener("mouseout", function() {
  nami.style.border = "solid 0.2vh #aaa";     
});
       messi.addEventListener("mouseover", function() {
      messi.style.border = "solid 0.4vh #ffffff";     
  });
    messi.addEventListener("mouseout", function() {
  messi.style.border = "solid 0.2vh #aaa";     
});
    const style = document.createElement('style');
style.innerHTML = `
  #message::placeholder {
    color: #aaa;
  }
      #name::placeholder {
    color: #aaa;
  }
`;
document.head.appendChild(style);
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
