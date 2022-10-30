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
shr();

function userComment() {
  nameInPut.addEventListener("keypress", (e) => {
    let ds = nameInPut.value.split(" ").join("");
    let ms = ds / ds;
    if (e.key == "Enter") {
      if (ds.length != 0 && ms != 1) {
        if (nameInPut.value != 0 && ds.length != 1) {
          fname.innerHTML = nameInPut.value;
          nameInPut.style.display = "none";
          commentInPut.style.display = "block";
        } else {
          // for value 0;
          nameInPut.value = "";
        }
      } else {
        // for length !=0 && ds/ds !=1;
        //userComment();
        nameInPut.value = "";
      }

      commentInPut.addEventListener("keypress", (a) => {
        if (a.key == "Enter") {
          commentInPut.style.display = "none";
          comment.innerHTML = commentInPut.value;
          comment.style.display = "block";
          butDelete.style.display = "block";
          butEdit.style.display = "block";
          butShare.style.display = "block";

          del();
          edt();
        }
      });
    }
  });
}

function del() {
  butDelete.addEventListener("click", () => {
    /*arr.map((item, index) => {
      arr.splice(index, 1); //delete all arry item
    });*/
    console.log(arr);
    fname.innerHTML = "";
    nameInPut.value = ""; // for faka
    comment.innerHTML = "";
    commentInPut.value = "";
    nameInPut.style.display = "block";
    commentInPut.style.display = "none";
    butEdit.style.display = "none";
    butShare.style.display = "none";
    butDelete.style.display = "none";
  });
}

function edt() {
  butEdit.addEventListener("click", () => {
    comment.innerHTML = "";
    commentInPut.style.display = "block";
  });
}

let shareList = document.querySelector(".shareList");
let divShareList = document.querySelector(".divShareList");
shareList.innerHTML = "";
function shr() {
  butShare.addEventListener("click", () => {
    shareList.innerHTML = "";
    arr.push({ User: nameInPut.value, Comment: commentInPut.value });
    console.log(arr);
    shareList.innerHTML = "";
    arr.map((item) => {
      shareList.innerHTML += `<li><div class="inside"><i class="fa-solid fa-user"></i>   ${item.User} <hr class="hr1"/> "${item.Comment}" <button class="cancel"
      >X</button><div/></li>`;
    });
    let cancel = document.querySelectorAll(".cancel");
    let cancelArr = Array.from(cancel);
    //let arrlist = Array.from(shareList);
    //console.log(arrlist);

    cancelArr.map((item, index) => {
      item.addEventListener("click", () => {
        arr.splice(index, 2);
        console.log(item, index);
        item.parentNode.remove();
        //item.style.display="none"

        //console.log(arrlist[index]);
        console.log(arr);
        //shr();
      });
    });
  });
}
