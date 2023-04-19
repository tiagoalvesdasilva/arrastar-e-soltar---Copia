document.querySelectorAll('.img').forEach(img)
document.querySelectorAll('.area').forEach(area);

document.querySelector('.div_img').addEventListener('dragover', divOver);
document.querySelector('.div_img').addEventListener('dragleave', divLeave);
document.querySelector('.div_img').addEventListener('drop', divDrop);

function img(img){
    img.addEventListener('dragstart', dragStart);
    img.addEventListener('dragend', dragEnd)
}
function dragStart(e){
    e.currentTarget.classList.add('dragging');
}
function dragEnd(e){
    e.currentTarget.classList.remove('dragging');
}
//area parte de cima

function divOver(e){
    e.preventDefault();
    
    
}
function divLeave(e){
    
   
}
function divDrop(e){
    let dragItem = document.querySelector('.img.dragging')
    e.currentTarget.appendChild(dragItem)
    
        
}
//Parte de baixo 
function area (area){
    area.addEventListener('dragover', dragOver);
    area.addEventListener('dragleave', dragLeave);
    area.addEventListener('drop', drop);
}
function dragOver(e){
    if (e.currentTarget.querySelector('.img') === null){
        e.preventDefault();
        e.currentTarget.classList.add('hover');
    }
}

function dragLeave(e){
    e.currentTarget.classList.remove('hover')
}

function drop(e){
    e.currentTarget.classList.remove('hover');

    if (e.currentTarget.querySelector('.img') === null){
        let dragItem = document.querySelector('.img.dragging');
        e.currentTarget.appendChild(dragItem)
    }
    
    
}