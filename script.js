const O = document.getElementById("O");
const X = document.getElementById("X");
let home = document.getElementsByClassName("home")[0];
let game = document.getElementsByClassName("game")[0];
let boxes = document.getElementsByClassName("box");
var enable=true;
//To select symbol "O"
O.onclick = function () {
    home.style.display = "none";
    game.style.display = "initial";
    for (let index = 0; index < boxes.length; index++) {
        const element = boxes[index];
        element.innerText = "";
    }
    arr_user = [];
    arr_comp = [];
    clickO();

}







//To select symbol "X"
X.onclick = function () {
    home.style.display = "none";
    game.style.display = "initial";

    for (let index = 0; index < boxes.length; index++) {
        const element = boxes[index];
        element.innerText = "";
    }
    arr_user = [];
    arr_comp = [];
    clickX()
}

//To insert "X"
let arr_user = [];
function clickX() {
    for (let index = 0; index < boxes.length; index++) {
        const element = boxes[index];
        element.onclick = () => {
            if(enable==true){
                if (element.innerHTML != "X" && element.innerHTML != "O") {

                    element.innerHTML = "X";
                    let user_box_no = element.id.slice(-1);
                    arr_user.push(Number(user_box_no));
                    arr_user.sort();
                    if (arr_user.length > 2) {
                        let check = winner(arr_user, "X");
                        if (check == true) {
    
                            return
                        }
    
                    }
                    if (arr_user.length == 5) {
                        draw()
                        return
                    }
                    comp("O");
    
    
                }
                else {
                    alert("Select a different section")
                }
    
            }
           




        }

    }
}

//To insert "O"
function clickO() {
    for (let index = 0; index < boxes.length; index++) {
        const element = boxes[index];
        
        element.onclick = () => {
            if(enable==true){
            if (element.innerHTML != "X" && element.innerHTML != "O") {
                element.innerHTML = "O";
                let user_box_no = element.id.slice(-1);
                arr_user.push(Number(user_box_no));
                arr_user.sort()
                if (arr_user.length > 2) {
                    let check = winner(arr_user, "O");
                    if (check == true) {


                        return
                    }
                    if (arr_user.length == 5) {
                        draw()
                        return
                    }
                }
                comp("X");
            }

            else {
                alert("Select a different section")
            }

        }
          
        }


    }



}

//To insert symbol by computer
let arr_comp = [];
function comp(sym) {
    enable=false;
    random = Math.floor(1 + Math.random() * 9);
    box_id = `box-${random}`;


    box = document.getElementById(box_id);
    if (box.innerText == "O" || box.innerText == "X") {
        comp(sym);
    }
    else {
        setTimeout(() => {

            box.innerText = sym;
            let comp_box_no = random;
            arr_comp.push(comp_box_no);
            arr_comp.sort();
            if (arr_comp.length > 2) {
                winner(arr_comp, sym);
                
            }
            enable=true;
        }, 1000)

    }
}



//Winner check
let parentArr = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 5, 9], [3, 5, 7], [1, 4, 7], [2, 5, 8], [3, 6, 9]];
function winner(arr, sym) {
    for (let i = 0; i < parentArr.length; i++) {

        let win = parentArr[i].every((el) => {
            return arr.includes(el);
        })

        if (win == true) {
            setTimeout(() => {
                alert(`${sym} has won the game`);
            }, 500)
            setTimeout(() => {

                alert("Thank you for playing");
                home.style.display = "initial";
                game.style.display = "none";

            }, 700);
            return true
        }

    }
}



//Draw check
function draw() {
    setTimeout(() => {
        alert("The match ended in a draw");

    }, 500);
    setTimeout(() => {

        alert("Thank you for playing");
        home.style.display = "initial";
        game.style.display = "none";

    }, 700);
}











