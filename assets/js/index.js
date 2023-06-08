const submit = document.querySelector("#submit")
submit.addEventListener("click", (e)=>{
  e.stopImmediatePropagation()

  const titlleInscripcion = document.querySelector("#titlleInscripcion")
  titlleInscripcion.style.display ="none"

  const form = document.querySelector(".form")
  form.style.display ="none"
  
  const mensaje = document.querySelector(".mensaje")
  mensaje.style.display="block"
  
})
