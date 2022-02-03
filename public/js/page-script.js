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
				msg_1.textContent = data.error;
			} else {
				console.log(data);
				msg_1.textContent = '';
				msg_2.innerHTML =
					`
				<table>
					<tr>
						<th>Location</th>
						<td>${data.place}</td>
					</tr>
					<tr>
						<th>(Latitude,Longitude)</th>
						<td>(${data.lat}, ${data.lon})</td>
					</tr>
					<tr>
						<th>Weather</th>
						<td>${data.desc}</td>
					</tr>
					<tr>
						<th>Temperature</th>
						<td>${data.temp}</td>
					</tr>
				</table>`
			}
		})
	})

});
