document.getElementById('kmInput').addEventListener('input', function (e) {
let km = e.target.value();


document.getElementById('metresOutput').innerHTML = km*1000;
    document.getElementById('smOutput').innerHTML = km*100000;
    document.getElementById('milimetrsOutput').innerHTML = km*1000000;
});