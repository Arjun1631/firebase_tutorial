const firebaseConfig = {
  apiKey: "AIzaSyBtnu8YPEYrVXK-n9QY2XUi0gE_r2mMQkw",
  authDomain: "contactform-25a57.firebaseapp.com",
  databaseURL: "https://contactform-25a57-default-rtdb.firebaseio.com",
  projectId: "contactform-25a57",
  storageBucket: "contactform-25a57.appspot.com",
  messagingSenderId: "816776743973",
  appId: "1:816776743973:web:5ce10923c3ae474eecc3cc"
  };
  
  // initialize firebase
  firebase.initializeApp(firebaseConfig);
  
  // reference your database
  var contactFormDB = firebase.database().ref("contactForm");
  
  document.getElementById("contactForm").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    var name = getElementVal("name");
    var emailid = getElementVal("emailid");
    var msgContent = getElementVal("msgContent");
  
    saveMessages(name, emailid, msgContent);
  
    //   enable alert
    document.querySelector(".alert").style.display = "block";
  
    //   remove the alert
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);
  
    //   reset the form
    document.getElementById("contactForm").reset();
  }
  
  const saveMessages = (name, emailid, msgContent) => {
    var newContactForm = contactFormDB.push();
  
    newContactForm.set({
      name: name,
      emailid: emailid,
      msgContent: msgContent,
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };