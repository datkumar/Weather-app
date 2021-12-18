console.log('Client-side JS');

const weatherForm = document.querySelector('form');
const search_text = document.querySelector('input');

const msg_1 = document.querySelector('#msg-1');
const msg_2 = document.querySelector('#msg-2');

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const location_input = search_text.value;

    msg_1.textContent = 'Loading...';
    msg_2.textContent = '';

    fetch('http://localhost:3000/weather?address=' + location_input).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                msg_1.textContent = data.error
            } else {
                console.log(data);
                msg_1.textContent = '';
                msg_2.innerHTML = `<hr>Location: ${data.place} <br><hr>` +
                        `(Latitude, Longitude): (${data.lat}, ${data.lon}) <br><hr>` +
                        `Weather: ${data.desc} <br><hr>` +
                        `Temperature: ${data.temp} <br><hr>` 

            }
        })
    })

});
