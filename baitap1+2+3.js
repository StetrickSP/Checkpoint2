function store()
{
    var name = document.getElementById('name');
    var pw = document.getElementById('pw');

    localStorage.setItem('name', name.value);
    localStorage.setItem('pw', pw.value);
    alert('Thông tin của bạn đã được ghi lại!');
}

function checkData()
{
    var storedName = localStorage.getItem('name');
    var storedPw = localStorange.getItem('pw');

    if (localStorage == null)
    {
        alert('Khong co du lieu');

    }else{alert('Co du lieu')}
}


