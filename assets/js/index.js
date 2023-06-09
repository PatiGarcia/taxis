const buttonShow = document.querySelector("#submit");
      
      buttonShow.addEventListener("click",(event)=>{
        // event.preventDefault();
        event.stopImmediatePropagation();
        const name = document.querySelector("#name")
        const email = document.querySelector("#email")
        
        if ((name.value !== "") && (email.value!=="")){
          event.preventDefault();
          const modal = document.querySelector("#modal")
          modal.style.display = "block";
          name.value == " "
          email.value == " "
        }
        
      })
      const close = document.querySelector("#close")
      close.addEventListener("click",()=>{
        modal.style.display="none"
      })
    