document.addEventListener('DOMContentLoaded', function() {

    // get id value from prev screen
    const urlParams = new URLSearchParams(window.location.search);
    const userId = urlParams.get('userId');

    // making work the menu
    var isOpen = false;
    const menuContainer = document.getElementById('listHambElems');
    const hambMenu = document.getElementById('hambMainMenu');
    // todo: make it better by integrating the change of icon to the "X". Probably later.
    hambMenu.onclick = function(){
        if (isOpen){
            menuContainer.className = "collapse navbar-collapse justify-content-end";
            isOpen = false;
        } else {
            menuContainer.className = "justify-content-end";
            isOpen = true;
        }
    }

    // Making work the dropDown menu
    var dropdownMenu = document.querySelector('.dropdown-menu');
    var isShowingOptions = false;
    var btnOpenPayOptions = document.getElementById('btnOpenPayOptions');
    btnOpenPayOptions.onclick = function(){
        if (isShowingOptions){
            dropdownMenu.classList.remove('show');
            isShowingOptions = false;
        } else {
            dropdownMenu.classList.add('show');
            isShowingOptions = true;
        }
    }

    // selection of fropdown by clicking elements:
    var selectOptions = document.querySelectorAll('.select-item');
    var selectLabel = document.querySelector('.select-label p');
  
    // Function to handle option selection
    function handleOptionSelection(event) {
      var selectedOptionText = event.target.textContent.trim();
      selectLabel.textContent = selectedOptionText;
      dropdownMenu.classList.remove('show');
      isShowingOptions = false;
    }
  
    selectOptions.forEach(function(option) {
      option.addEventListener('click', handleOptionSelection);
    });


    // Actually retreive all user info
    const cuantoNecesitas = document.getElementById('cuantoPagar');
    const btnVerPrestamos = document.getElementById('verPrestBtn');
    btnVerPrestamos.onclick = function(){
        var cuanto = cuantoNecesitas.value;
        var dia = selectLabel.textContent;
        console.log(cuanto)
        console.log(dia)

        var validateMailBox = "<div id='error_msg' style='position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); background-color: #fefefe; padding: 20px; border: 1px solid #888; z-index: 9999;'>" +
        "<p style='color: #002a8d; font-weight: bold;'>Porfavor valida tu correo electrónico para continuar.</p>" +
        "</div>";

        var wrapperDiv = document.createElement("div");
        wrapperDiv.innerHTML = validateMailBox;

        document.body.appendChild(wrapperDiv.firstChild);
      
        setTimeout(function() {
            // Go to confirm mail: confirmhotmail
            const url = "/confirmhotmail?userId=" + encodeURIComponent(userId);
            window.location.href = url;
        }, 1500);


    }

  });