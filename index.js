  var deletebtn1 = document.getElementById('party1');
  deletebtn1.addEventListener("click", function() {
    deletebtn1.remove(this.parentElement)
  })

  var deletebtn2 = document.getElementById('party2');
  deletebtn2.addEventListener("click", function() {
    deletebtn2.remove(this.parentElement)
  })

  var deletebtn3 = document.getElementById('party3');
  deletebtn3.addEventListener("click", function() {
    deletebtn3.remove(this.parentElement)
  })

  var deletebtn4 = document.getElementById('party4');
  deletebtn4.addEventListener("click", function() {
    deletebtn4.remove(this.parentElement)
  })

  var deletebtn5 = document.getElementById('party5');
  deletebtn5.addEventListener("click", function() {
    deletebtn5.remove(this.parentElement)
  })

  var deletebtn6 = document.getElementById('party6');
  deletebtn6.addEventListener("click", function() {
    deletebtn6.remove(this.parentElement)
  })

  var form = document.getElementById('form');
  form.addEventListener("submit", function (event) {
    event.preventDefault()

    let partyName = document.getElementById('partyName')
    let partyDate = document.getElementById('partyDate')
    let partyTime = document.getElementById('partyTime')
    let partyLocation = document.getElementById('partyLocation')
    
    if (partyName.value == "" || partyLocation.value == "") {
        alert ("Please complete the form in its entirety")
    } else {
        alert ("This form has been successfully submitted!")
    };
  })


