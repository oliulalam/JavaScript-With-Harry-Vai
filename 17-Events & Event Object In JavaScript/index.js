document.getElementById("submit").addEventListener("click",function(e)
{
    let variable;
    console.log('you click it');
    // location.href='//facebook.com';

    variable = e.target;
    variable = e.target.className;
    variable = e.target.classList;
    variable = e.target.id;
});