function store()
{
    var name = document.getElementById('name');
    var pw = document.getElementById('pw');

    localStorage.setItem('name', name.value);
    localStorage.setItem('pw', pw.value);
    alert('Thông tin của bạn đã được ghi lại!');
}

const checkKey = document.getElementById('check_btn');

checkKey.addEventListener('click', () => 
{
    if (localStorage.getItem('name') !== null) {
      alert('Có dữ liệu: '+localStorage.getItem('name')+','+localStorage.getItem('pw'));
    //   console.log(localStorage.getItem('website'));
    } else {
      alert('Không có dữ liệu');
    }
}
)


