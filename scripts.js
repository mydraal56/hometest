function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    debugger;
    for (i = 0; i < tablinks.length; i++) {
      debugger;
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
    
   
}

function ellieClick() {  
	
	debugger;
	var popUp = document.getElementById('myModal');
	//alert('we are in ellieClick');
	
	popUp.style.display = "flex";
	
};

function closeModal() {
	var popUp = document.getElementById('myModal');
	popUp.style.display = "none";
}
