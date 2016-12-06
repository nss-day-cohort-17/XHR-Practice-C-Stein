console.log("hello from the xhr practice");

function loadMessages(e){
  var data = JSON.parse(e.target.responseText)
  console.log("data", data)
  //"Caitlin"
  console.log(data.messages[0].sender)
  //{"content": "Save Ferris!"... show the whole obj}
  console.log("content: " + data.messages[2].content)
  // "Dec 5th"
  console.log(data.messages[1].date)
  // BONUS: "Ferris"
  console.log(data.messages[2].content.split(" ").pop())
  console.log(data.messages[2].content.slice(4, 11));

  
}


var myRequest = new XMLHttpRequest()

myRequest.addEventListener("load", loadMessages)
myRequest.open("GET", "messages.json")
myRequest.send()