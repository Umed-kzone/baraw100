  const body = document.body;
  const dropArea = document.getElementById('dropArea');
  const fileInput = document.getElementById('fileInput');
  const preview = document.getElementById("preview");
  const status = document.getElementById("status");
  const main = document.getElementById("main");
const sound = document.getElementById("clickSound");
const menu = document.getElementById("menu");
const back = document.getElementById("back");
const weelcome = document.getElementById('wilcome');
const remover = document.getElementById('remove');
const plc = document.getElementById('plc');
const ag = document.getElementById('agree');
const disag = document.getElementById('disagree');
const dbox = document.getElementById('dia');
const dm = document.getElementById('d-messenge');


function bounce(button) {
    button.classList.remove('bounce'); // reset animation if already applied
    void button.offsetWidth; // force reflow (trick to restart the animation)
    button.classList.add('bounce');
  }
function playsound() {
  sound.currentTime = 0;
  sound.play();
}
function goBack() {
  playsound();
      setTimeout(() => {
        window.history.back();
      }, 250);
    }

  function handleFile(file) {
      if (!file.type.startsWith("image/")) {
        status.textContent = "Please drop a valid image file.";
        return;
      }
    
    const reader = new FileReader();
      reader.onload = function () {
        const base64 = reader.result;
        localStorage.setItem("savedImage", base64);
        preview.src = base64;
        preview.style.display = "block";
        plc.style.display = "block";
        remover.style.display = "block";
        main.style.display = "none";
        status.textContent = " !هیچ وێنەیەک دیاری نەکراوە";
      };
      reader.readAsDataURL(file);
    }
    
  dropArea.addEventListener("dragover", e => {
      e.preventDefault();
      dropArea.classList.add("hover");
    });
    
  dropArea.addEventListener("dragleave", () => {
      dropArea.classList.remove("hover");
    });
    
    dropArea.addEventListener("drop", e => {
      e.preventDefault();
      dropArea.classList.remove("hover");

      const file = e.dataTransfer.files[0];
      if (file) handleFile(file);
    });

    // Click to open file picker
    dropArea.addEventListener("click", () => {
                    fileInput.click();
    });

    fileInput.addEventListener("change", () => {
                    const file = fileInput.files[0];
      if (file) handleFile(file);
    });

    // Load from localStorage on startup
    window.onload = () => {
      const saved = localStorage.getItem("savedImage");
      if (saved) {
        preview.src = saved;
        preview.style.display = "block";
        plc.style.display = "block";
        remover.style.display = "block";
        main.style.display = "none";
        status.textContent = "Loaded saved image.";
      }
    };
    function remov() {
        setTimeout(() => {
            openDialog();
        }, 250);
    }


function defaulted() {

}

function pinkened() {
  body.style.backgroundColor = "#ffaab8";
  body.style.color = "#ff193b";
    menu.style.backgroundColor = "#ff778e";
    back.style.backgroundColor = "#ffd8de";
    back.style.color = "#ff4c6a";
    back.style.border = "solid 0.4vh #ff4c6a";
    dropArea.style.color = "#000000";
    remover.style.color = "#ff778e";
    remover.style.backgroundColor = "#fff8fe";
    remover.style.border = "solid 0.5vh #ff778e";
    dbox.style.backgroundColor = "#fff8fe";
    ag.style.backgroundColor = "#ff778e";
    ag.style.color = "#ffffff";
    ag.style.border = "none";
    ag.style.fontWeight = "700";
    disag.style.backgroundColor = "#fff8fe";
    disag.style.color = "#ff778e";
    disag.style.border = "solid 0.5vh #ff778e";
    disag.style.fontWeight = "700";
    dm.style.color = "#ff778e";

}

function coaled() {
  body.style.backgroundColor = "#2d2d2d";
  body.style.color = "#ffffff";
   menu.style.backgroundColor = "#2d2d2d";
   back.style.backgroundColor = "#000000";
    back.style.color = "#ffffff";
    back.style.borderColor = "#ffffff";
    dropArea.style.color = "#000000";
    remover.style.color = "#ffbb00";
    remover.style.backgroundColor = "#1e1e1e";
    remover.style.border = "solid 0.2vh #ffffff";
    dbox.style.backgroundColor = "#2d2d2d";
    ag.style.backgroundColor = "#1e1e1e";
    ag.style.color = "#ffbb00";
    ag.style.border = "solid 0.2vh #ffffff";
    disag.style.backgroundColor = "#2d2d2d";
    disag.style.color = "#ffffff";
    disag.style.border = "solid 0.2vh #ffffff";
    dm.style.color = "#ffffff";
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
 function showDialog() {
     setTimeout(() => {
      document.getElementById('dialog').style.display = 'flex';
               }, 200);
    }

    function onOk() {
        delete preview;
            localStorage.removeItem("savedImage");
            delete file;
            delete base64;
        preview.style.display = "none";
        plc.style.display = "none";
        remover.style.display = "none";
        main.style.display = "block";
        status.textContent = " !هیچ وێنەیەک دیاری نەکراوە";
        setTimeout(() => {
        closeDialog();
      }, 200);
    }

    function onCancel() {
        setTimeout(() => {
      closeDialog();
      }, 200);

    }

    function closeDialog() {
      document.getElementById('dialog').style.display = 'none';
    }