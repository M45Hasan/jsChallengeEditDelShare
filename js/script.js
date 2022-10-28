let fname = document.querySelector(".fname");
let comment = document.querySelector(".comment");
let butEdit = document.querySelector(".butEdit");
let butDelete = document.querySelector(".butDelete");
let butShare = document.querySelector(".butShare");
let nameInPut = document.querySelector(".nameInPut");
let footer = document.querySelector(".footer");
let commentInPut = document.querySelector(".commentInPut");
butDelete.style.display = "none";
butEdit.style.display = "none";
butShare.style.display = "none";
commentInPut.style.display = "none";
let arr = [];
userComment();

function userComment() {
  nameInPut.addEventListener("keypress", (e) => {
    if (e.key == "Enter") {
      fname.innerHTML = nameInPut.value;
      nameInPut.style.display = "none";
      commentInPut.style.display = "block";
      commentInPut.addEventListener("keypress", (a) => {
        if (a.key == "Enter") {
          commentInPut.style.display = "none";
          comment.innerHTML = commentInPut.value;
          comment.style.display = "block";
          butDelete.style.display = "block";
          butEdit.style.display = "block";
          butShare.style.display = "block";
          arr = [];
          arr.push({ User: fname.innerHTML, Comment: comment.innerHTML });
          console.log(arr);
          del();
          edt();
          shr();
        }
      });
    }
  });
}

function del() {
  butDelete.addEventListener("click", () => {
    arr.map((item, index) => {
      arr.splice(index, arr.length);
      console.log(arr);
    });
    fname.innerHTML = "";
    comment.innerHTML = "";
    nameInPut.style.display = "block";
    commentInPut.style.display = "none";
    butEdit.style.display = "none";
    butShare.style.display = "none";
  });
}

function edt() {
  butEdit.addEventListener("click", () => {
    comment.innerHTML = "";
    commentInPut.style.display = "block";
  });
}

let shareList = document.querySelector(".shareList");
let divBdy = document.querySelector(".divBdy");

function shr() {
  butShare.addEventListener("click", () => {
    let clonePage = divBdy.cloneNode(true);
    shareList.innerHTML = `<li> ${document.body.appendChild(clonePage)} </li>`;
    shareList.innerHTML = "";
    clonePage = "";
  });
}
