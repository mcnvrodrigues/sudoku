class block{
    constructor(digits){
        this.digits = digits;
    }

    getDigits(){
        return this.digits;
    }

    set(row, column, digit){
        digits[row][column] = digit;
    }
}

class grid{
    constructor(blocks){
        this.blocks = blocks;
    }

    get(){
        return this.blocks;
    }

    getBlockByIndex(index){
        switch(index){
            case 0:
                return this.blocks[0][0];
                break;
            case 1:
                return this.blocks[0][1];
                break;
            case 2:
                return this.blocks[0][2];
                break;
            case 3:
                return this.blocks[1][0];
                break;
            case 4:
                return this.blocks[1][1];
                break;
            case 5:
                return this.blocks[1][2];
                break;
            case 6:
                return this.blocks[2][0];
                break;
            case 7:
                return this.blocks[2][1];
                break;
            case 8:
                return this.blocks[2][2];
                break;
            default:
                return undefined;
        }
    }

    updateBlock(index,block){
        blocks[index] = block;
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

let blck_a = new block(bl_a);
let blck_b = new block(bl_b);
let blck_c = new block(bl_c);

let blck_d = new block(bl_d);
let blck_e = new block(bl_e);
let blck_f = new block(bl_f);

let blck_g = new block(bl_g);
let blck_h = new block(bl_h);
let blck_i = new block(bl_i);

let gr = [[blck_a, blck_b, blck_c],
          [blck_d, blck_e, blck_f],
          [blck_g, blck_h, blck_i]];

let sudoku = new grid(gr);


document.addEventListener("DOMContentLoaded", function(event) { 
    let html = '';
    let digit = undefined;

    for(let bl = 0; bl < 9; bl += 1){
        html += `<div class="block">`;
        for(let row = 0; row < 3; row += 1){
            for (let column = 0; column < 3; column += 1){
                digit = sudoku.getBlockByIndex(bl).getDigits()[row][column];
                html += `<div class="digit"><div class="num">${digit}</div></div>`;
            }
        }
        html += `</div>`;
    }
  
    // Add all the divs to the HTML
    let mainGrid = document.querySelector('#main_grid');
  
    if(mainGrid){
        mainGrid.innerHTML = html;
    }
  
    
  });
  