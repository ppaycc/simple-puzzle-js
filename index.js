const play = () => {
    const createArrForField = () => {
        const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 0];
        for (let i = arr.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
          }
        return [
            arr.splice(0, 4),
            arr.splice(0, 4),
            arr.splice(0, 4),
            arr.splice(0, 4),
        ];
    }
    const renderField = items => {
        const field = document.querySelector('.field');
        field.innerHTML = '';
        for (let i = 0; i < items.length; i++) {
            for (let j = 0; j < items[i].length; j++) {
                field.innerHTML += `<div class="cell ${items[i][j] === 0 && 'empty'}" data-x=${i} data-y=${j}>${items[i][j]}</div>`            
            }        
        }
        addOnClick()
    }
    const addOnClick = () => {
        const cells = document.querySelectorAll('.cell');
        for (let i = 0; i < cells.length; i++) {
            cells[i].addEventListener('click', makeStep)
        }
    }
    
    const makeStep = (e) => {
        const x = parseInt(e.target.dataset.x);
        const y = parseInt(e.target.dataset.y);
    
        if(x+1 < 4 && items[x+1][y]===0) {
            items[x+1][y] = items[x][y];
            items[x][y] = 0;
        }
        if(x-1 >= 0 && items[x-1][y]===0) {
            items[x-1][y] = items[x][y];
            items[x][y] = 0;
        }
        if(y-1 >= 0 && items[x][y-1]===0) {
            items[x][y-1] = items[x][y];
            items[x][y] = 0;
        }
        if(y+1 < 4 && items[x][y+1]===0) {
            items[x][y+1] = items[x][y];
            items[x][y] = 0;
        }
        renderField(items);
    }
    
    const items = createArrForField(); 
    renderField(items);
}
play();