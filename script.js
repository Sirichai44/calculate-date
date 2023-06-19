const btn = document.getElementById('button');
const result = document.getElementById('result');

btn.addEventListener('click',()=>{
    const date1 = document.getElementById('date1').value;
    const date2 = document.getElementById('date2').value;
    // console.log(date1);

    const startDate = new Date(date1);
    const endDate = new Date(date2);

    const times = Math.abs(endDate - startDate);
    const days = Math.round(times / (1000 * 60 * 60 * 24));

    result.innerText = "Date Difference : "+days+" Days";
    // console.log(times);
});