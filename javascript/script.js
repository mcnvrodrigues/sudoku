class Game{
    constructor(){
        this.keySelected = 0;
        this.digitSelected = 0;
    }

    setKeySelected(key){
        this.keySelected = key;
    }

    setDigitSelected(digit){
        this.digitSelected = digit;
    }

    getKeySelected(){
        return this.keySelected;
    }
    
    getDigitSelected(){
        return this.digitSelected;
    }
}

class Block{
    constructor(digits){
        this.digits = digits;
    }

    getDigits(){
        return this.digits;
    }

    set(row, column, digit){
        this.digits[row][column] = digit;
    }
}

class Grid{
    constructor(blocks){
        this.blocks = blocks;        
    }    

    getBlocks(){
        return this.blocks;
    }

    getBlockByIndex(index){        
        return this.blocks[index];        
    }

    getBlockByIndexToArray(index){ 
        let block = [];
        
        for(let i = 0; i < 3; i += 1){
            for(let j = 0; j < 3; j += 1){
                //console.log("err >> ", this.getBlockByIndex(index).getDigits()[i][j]);
                block.push(this.getBlockByIndex(index).getDigits()[i][j]);
            }
        }
        return block;        
    }

    updateBlock(index,block){
        blocks[index] = block;
    }

    //retorna os elementos da linha que o usuário selecionou
    getNumbersRow(bl, r){

        let row = [];
        
        if(bl < 3){
            for(let i = 0; i < 3; i++){                
                for(let j = 0; j < 3; j++){
                    row.push(this.getBlockByIndex(i).getDigits()[r][j]);
                }                
            }
        }else if(bl < 6){
            for(let i = 3; i < 6; i++){                
                for(let j = 0; j < 3; j++){
                    row.push(this.getBlockByIndex(i).getDigits()[r][j]);
                }                
            }
        }else{
            for(let i = 6; i < 9; i++){                
                for(let j = 0; j < 3; j++){
                    row.push(this.getBlockByIndex(i).getDigits()[r][j]);
                }                
            }
        }

        return row;
    }

    // retorna os elementos da coluna que o usuário selecionou
    getNumbersColumn(bl, c){
        let column = [];
        
        if(bl === 0 || bl === 3 || bl === 6){
            for(let i = 0; i <= 6; i += 3){                
                for(let j = 0; j < 3; j++){
                    column.push(this.getBlockByIndex(i).getDigits()[j][c]);
                }                
            }
        }else if(bl === 1 || bl === 4 || bl === 7){
            for(let i = 1; i <= 7; i += 3){                
                for(let j = 0; j < 3; j++){
                    column.push(this.getBlockByIndex(i).getDigits()[j][c]);
                }                
            }
        }else{
            for(let i = 2; i <= 8; i += 3){                
                for(let j = 0; j < 3; j++){
                    column.push(this.getBlockByIndex(i).getDigits()[j][c]);
                }                
            }
        }

        return column;
    }    
}

let bl_a = [[2, 3, 4], 
            [1, 5, 6],
            [7, 8, 9]];

let bl_b = [[1, 5, 6], 
            [7, 8, 9],
            [2, 3, 4]];

let bl_c = [[7, 8, 9],
            [4, 2, 3],
            [1, 5, 6]];

let bl_d = [[3, 1, 2],
            [4, 6, 5],
            [8, 9, 7]];

let bl_e = [[4, 6, 5],
            [8, 9, 7],
            [3, 1, 2]];

let bl_f = [[8, 9, 7],
            [2, 3, 1],
            [5, 6, 4]];

let bl_g = [[5, 2, 1],
            [9, 7, 8],
            [6, 4, 3]];

let bl_h = [[9, 4, 3],
            [6, 2, 1],
            [5, 7, 8]];

let bl_i = [[6, 7, 8],
            [3, 4, 5],
            [9, 1, 2]];


let bl_a_user = [[0, 0, 0], 
                 [0, 0, 0],
                 [0, 0, 0]];

let bl_b_user = [[0, 0, 0], 
                 [0, 0, 0],
                 [0, 0, 0]];

let bl_c_user = [[0, 0, 0], 
                 [0, 0, 0],
                 [0, 0, 0]];

let bl_d_user = [[0, 0, 0], 
                 [0, 0, 0],
                 [0, 0, 0]];

let bl_e_user = [[0, 0, 0], 
                 [0, 0, 0],
                 [0, 0, 0]];

let bl_f_user = [[0, 0, 0], 
                 [0, 0, 0],
                 [0, 0, 0]];

let bl_g_user = [[0, 0, 0], 
                 [0, 0, 0],
                 [0, 0, 0]];

let bl_h_user = [[0, 0, 0], 
                 [0, 0, 0],
                 [0, 0, 0]];

let bl_i_user = [[0, 0, 0], 
                 [0, 0, 0],
                 [0, 0, 0]];

let blck_a = new Block(bl_a);
let blck_b = new Block(bl_b);
let blck_c = new Block(bl_c);

let blck_d = new Block(bl_d);
let blck_e = new Block(bl_e);
let blck_f = new Block(bl_f);

let blck_g = new Block(bl_g);
let blck_h = new Block(bl_h);
let blck_i = new Block(bl_i);

let blck_a_user = new Block(bl_a_user);
let blck_b_user = new Block(bl_b_user);
let blck_c_user = new Block(bl_c_user);

let blck_d_user = new Block(bl_d_user);
let blck_e_user = new Block(bl_e_user);
let blck_f_user = new Block(bl_f_user);

let blck_g_user = new Block(bl_g_user);
let blck_h_user = new Block(bl_h_user);
let blck_i_user = new Block(bl_i_user);

let gr = [blck_a, blck_b, blck_c,
          blck_d, blck_e, blck_f,
          blck_g, blck_h, blck_i
         ];

let gr_user = [blck_a_user, blck_b_user, blck_c_user,
               blck_d_user, blck_e_user, blck_f_user,               
               blck_g_user, blck_h_user, blck_i_user];

let match = new Game();

let solution = new Grid(gr);
let userSolution = new Grid(gr_user);


function digitClicked(e){
    //console.log('Digit clicked: ', e.currentTarget);
    e.currentTarget.style.backgroundColor = "red";
    match.setDigitSelected(e.currentTarget);
}

function keyClicked(e){
    //debugger;
    //console.log('Key clicked: ', e.currentTarget.innerHTML);
    match.setKeySelected(e.currentTarget);

    if(match.getDigitSelected()){
        //console.log(match.getDigitSelected());
        match.getDigitSelected().style.backgroundColor = "white";
    }else{
        console.log('Digito nao selecionado');
    }
    //match.getDigitSelected.style.backgroundColor = "white";
    linkKeyDigit();
}

function checkIfNumberIsValid(number){
    let numberIsValid = true;

    let key = parseInt(match.getKeySelected().innerText);
    let digit = match.getDigitSelected();

    let block = parseInt(digit.getAttribute('data-block-index')); //recupera block selecionado pelo usuário
    let row = digit.getAttribute('data-row'); // recupera linha selecionada pelo usuário
    let column = digit.getAttribute('data-column'); // recupera coluna selecionada pelo usuário
        
    
    return numberIsValid;
}

// Verifica se uma posição foi selecionada no grid e, se um numero do teclado foi selecionado
function linkKeyDigit(){
    if(match.getDigitSelected() !== 0){
        if(match.getKeySelected() !== 0){
            let key = parseInt(match.getKeySelected().innerText);
            let digit = match.getDigitSelected();

            let block = parseInt(digit.getAttribute('data-block-index')); //recupera block selecionado pelo usuário
            let row = digit.getAttribute('data-row'); // recupera linha selecionada pelo usuário
            let column = digit.getAttribute('data-column'); // recupera coluna selecionada pelo usuário

            userSolution.getBlockByIndex(block).set(row, column, key);// atribui valor selecionado pelo usuário no grid

            console.log(`Block ${block}, row ${row} column ${column} key ${key}`);

            console.log("row ", userSolution.getNumbersRow(block,row));
            console.log("column ", userSolution.getNumbersColumn(block,column));
            console.log("Block ", userSolution.getBlockByIndex(block));
            console.log("Block ", userSolution.getBlockByIndexToArray(block));


            digit.innerHTML = `<div class="num">${key}</div>`;
        }
    }
}

document.addEventListener("DOMContentLoaded", function(event) { 
    let html = '';
    let digit, digit_usr = undefined;

    for(let bl = 0; bl < 9; bl += 1){    

        html += `<div class="block">`;

        for(let row = 0; row < 3; row += 1){

            for (let column = 0; column < 3; column += 1){

                digit = solution.getBlockByIndex(bl).getDigits()[row][column];      
                //console.log(userSolution.getBlockByIndex(bl).getDigits().set(row, column, digit));         
                
                let showNum = Math.floor(Math.random() * 10);                

                if (showNum < 3){        
                    userSolution.getBlockByIndex(bl).set(row, column, digit);
        
                    html += `<div class="digit" data-block-index = "${bl}" data-row = "${row}" data-column = "${column}"><div class="num">${digit}</div></div>`;
                }else{
                    html += `<div class="digit" data-block-index = "${bl}" data-row = "${row}" data-column = "${column}"><div class="num"></div></div>`;
                }
                
            }
        }
        html += `</div>`;
    }
  
    //console.table(userSolution);
    let mainGrid = document.querySelector('#main_grid');
  
    if(mainGrid){
        mainGrid.innerHTML = html;
    }

    // Bind the click event of each element to a function
  document.querySelectorAll('.digit').forEach( digit => {
    // digit.onclick = function() {      
    //   console.log('Digit clicked: ', digit);
    // };
    digit.onclick = digitClicked;
  });

  document.querySelectorAll('.key-num').forEach(num => {
    // num.onclick = function(){
    //     console.log('Num-key clicked:', num);
    // };
    num.onclick = keyClicked;
  });  
    
  });
  