

const firebaseConfig = {
            apiKey: "AIzaSyBjJ3R9j48sbZiy5QtnMktyuRQlaV8Wrz0",
            authDomain: "baraw100.firebaseapp.com",
            databaseURL: "https://baraw100-default-rtdb.firebaseio.com",
            projectId: "baraw100",
            storageBucket: "baraw100.firebasestorage.app",
            messagingSenderId: "1072257021315",
            appId: "1:1072257021315:web:faac23d9a740ca4c97f2b6"
        };
    // Listen for all clicks on the page
    document.addEventListener('click', function(event) {
      // Check if what was clicked is a button
      
                  
        // Initialize Firebase
        firebase.initializeApp(firebaseConfig);
        const db = firebase.database();

        // Submit a comment
        function submitAct() {
          const buttonText = event.target.closest('a').textContent.trim();
            const message = "(" + savedUsername + ") --> [" + buttonText + "]";
            const now = new Date();
           const savedId = localStorage.getItem('id');
            


            if (message) {
                db.ref("Logs").push({
                    message: message,
                    timestamp: now.toLocaleString(),
                    ID: savedId
                }) }};
         submitAct();
      
    });