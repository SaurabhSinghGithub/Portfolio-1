document.getElementById('cross').style.display = 'none';

document.querySelector('.hamburger').addEventListener('click', function () {



    document.querySelector('.navbar').classList.toggle('navhide')



    if (document.querySelector('.navbar').classList.contains('navhide')) {


        document.getElementById('cross').style.display = 'none';
        document.getElementById('ham').style.display = 'inline';


    }


    else {

        setTimeout(() => {
            document.getElementById('cross').style.display = 'inline';
            document.getElementById('ham').style.display = 'none';
        }, 500);

    }






})










