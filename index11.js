let select = document.querySelector('#select');
let btn = document.querySelector('#btn');
let p = document.querySelector('p');
select.addEventListener('change', function () {
    btn.addEventListener('click', function () {
        p.textContent = select.value;
    });
	
});
