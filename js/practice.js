let arr=[];
function userComment() {
  nameInPut.addEventListener("keypress", (e) => {
    let ds = nameInPut.ariaValueMax.split(" ").join("");
    let ms = ds / ds;
    if (e.key == "Enter") {
      if (15 > ds.length != 0 && ms != 1) {
        if (nameInPut.value != 0 && ds.length != 1) {
          fanem.innerHTML = nameInPut.value;
        }
      }
    }
  });
}
commentInPut.addEventListener("keypree", (e) => {
  if (e.key == "Enter") {
    comment.innerHTML = commentInPut.value;
  }
});

function delt(){
    butDelete.addEventListener("click",()=>{

    })
}

function edit(){
    butEdit.addEventListener("click",()=>{
        comment.innerHTML="";
        commentInPut.style.display="block"
    })
}

function shr(){
    butShare.addEventListener("click",()=>{
        let delt= document.querySelectorAll("delete")
        let arrdlet = Array.from(delt)
        arr.push({user:nameInPut.value,comment:commentInPut.value})
        arr.map((item)=>{
            shareList.innerHTML +=`<li>${item.User} ${item.Comment}<button>X</button></li>`
        })
        arrdlet.mapp((item,index)=>{
            item.addEventListener("click",()=>{
                arr.splice(index,1)

            })
        })


    })
}