console.log("link from main")

$(document).ready(function(){
  // $(".div5button").click(function(event){
    
    console.log('Clicked button')

    var email = $(".email").val()
    var fullname = $(".fullname").val()
    var message = $(".message").val()
    var statusElm = $(".status")
    statusElm.empty()

    if(email.length > 5 && email.includes('@') && email.includes(".")) {

    } else {
      event.preventDefault()
      statusElm.append('<div>Email is NOT valid</div>')
    }

    if(fullname.length > 1 ) {

    } else {
      event.preventDefault()
      statusElm.append('<div>Name is NOT valid</div>')
    }
    if(message.length > 1 ) {

    } else {
      event.preventDefault()
      statusElm.append('<div>Message is NOT valid</div>')
    }


  });
});