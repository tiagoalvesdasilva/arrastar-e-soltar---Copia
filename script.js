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
