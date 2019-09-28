document.addEventListener("DOMContentLoaded", function(event) { 
    let html = '';
    // memoryGame.cards.forEach(pic => {
    //   html += `<div class="card" data-card-name="${pic.name}">`;
    //   html += `<div class="back" name="${pic.img}"></div>`;
    //   html += `<div class="front" style="background: url(img/${pic.img}) no-repeat"></div>`;
    //   html += `</div>`;
    // });

    for(let i = 0; i < 81; i++){
        if(i === 2 || i === 5){
            html += `<div class="square border-right"></div>`;
        }else if(i=== 3 || i === 6){
            html += `<div class="square border-left"></div>`;
        }
        else{
            html += `<div class="square"></div>`;
        }
        
    }
  
    // Add all the divs to the HTML
    let mainGrid = document.querySelector('#main_grid');
  
    if(mainGrid){
        mainGrid.innerHTML = html;
    }
  
    // Bind the click event of each element to a function
    // document.querySelectorAll('.back').forEach( card => {
    //   card.onclick = function() {
    //     // TODO: write some code here
    //     console.log('Card clicked: ', card);
    //   };
    // });
  });
  