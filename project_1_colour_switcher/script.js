const buttons = document.querySelectorAll('.button');
const body = document.body;

buttons.forEach(function(button){
    button.addEventListener('click', function(e){
        switch(e.target.id){
            case 'red':
                body.style.backgroundColor = 'red';
                break;
            case 'green':
                body.style.backgroundColor = 'green';
                break;
            case 'blue':
                body.style.backgroundColor = 'blue';
                break;
            case 'yellow':
                body.style.backgroundColor = 'yellow';
                break;
            case 'purple':
                body.style.backgroundColor = 'purple';
                break;
            case 'orange':
                body.style.backgroundColor = 'orange';
                break;
            default:
                body.style.backgroundColor = 'white';
        }


    });
});