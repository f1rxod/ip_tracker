var button = document.querySelector('button')
var ip = document.querySelector('.ip')
var locationn = document.querySelector('.location')
var timezone = document.querySelector('.timezone')
var isp = document.querySelector('.isp')
var map;
var request = new XMLHttpRequest()
request.open('GET', 'https://geo.ipify.org/api/v2/country,city?apiKey=at_V2tfBAotZZXpZ3NaIqhHTVTzVvCNH', true)
request.onload = () =>{
    var data = JSON.parse(request.response);
    console.log(data);
    ip.innerHTML = data.ip
    locationn.innerHTML = data.location.region;
    timezone.innerHTML = data.location.timezone
    isp.innerHTML = data.isp
    map = L.map('map').setView([data.location.lat, data.location.lng], 13);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
    var marker = L.marker([data.location.lat, data.location.lng]).addTo(map);
}
request.send()
button.addEventListener('click', () => {
    map.off()
    map.remove()
    var input = document.querySelector('input').value
    if(input != "" || input != " "){
        request.open('GET', 'https://geo.ipify.org/api/v2/country,city?apiKey=at_V2tfBAotZZXpZ3NaIqhHTVTzVvCNH&ipAddress=' + input)
        request.onload = () =>{
            var data = JSON.parse(request.response);
            console.log(data);
            ip.innerHTML = data.ip
            locationn.innerHTML = data.location.region;
            timezone.innerHTML = data.location.timezone
            isp.innerHTML = data.isp
            map = L.map('map').setView([data.location.lat, data.location.lng], 13);
            L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 19,
                attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            }).addTo(map);
            var marker = L.marker([data.location.lat, data.location.lng]).addTo(map);
        }
        request.send()
    } else{
        console.log('Empty')
    }
})