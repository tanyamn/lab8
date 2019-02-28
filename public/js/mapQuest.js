function initMap() {
	// add your code here
	L.mapquest.key = "a8X99FYHNeGUu4P7Pb7PPYWL7E3TG0Vc";

	//map refers to a <div> element with the ID map
	var map = L.mapquest.map('map', {
		center: [32.878973, -117.235925],
		layers: L.mapquest.tileLayer('map'),
		zoom: 12,
		zoomControl: false
	});

	//add a marker to the map
	L.marker([32.878973, -117.235925]).addTo(map);
}