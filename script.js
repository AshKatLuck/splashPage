const { body }=document;


const changeBackground=(number)=>{
    switch(number){
        case '1':
            body.classList.remove('background-2');
            body.classList.remove('background-3');
            body.classList.add('background-1');
            break;
        case '2':
            body.classList.remove('background-3');
            body.classList.remove('background-1');
            body.classList.add('background-2');
            break;
        case '3':
            body.classList.remove('background-1');
            body.classList.remove('background-2');
            body.classList.add('background-3');
            break;
        default:
            break;
    }
}