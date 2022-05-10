
function cadastro() {
  document.getElementById("ok").innerHTML = "<p>Cadastrado com Sucesso</p>";
}

const closeAlert = () => {
  const close = document.querySelector("#close-message");
  const message = document.querySelector(".message");

  close.addEventListener("click", () => {
    message.style.display = "none";
  });
  setTimeout (() => {
    message.style.display = "none"
  }, 5000)
};
closeAlert();

// var btn = document.getElementById("click")

// btn.onclick = setTimeout(function(){
//     var msg = document.getElementsByClassName("msg-success");
//     while(msg.length > 0){
//         msg[0].parentNode.removeChild(msg[0]);
//     }
// }, 5000);
// var msg = document.getElementsByClassName("msg-success");
