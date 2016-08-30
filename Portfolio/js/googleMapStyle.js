var styles = [
	{
		featureType: 'landscape',
		elementType: 'geometry',
		stylers: [
			{ hue: '#dddddd' },
			{ saturation: -100 },
			{ lightness: -3 },
			{ visibility: 'simplified' }
		]
	},{
		featureType: 'water',
		elementType: 'all',
		stylers: [

		]
	}
];
var options = {
	mapTypeControlOptions: {
		mapTypeIds: [ 'Styled']
	},
	center: new google.maps.LatLng(34.052235, -118.243683),
	zoom: 10,
	mapTypeId: 'Styled'
};
var div = document.getElementById('map');
var map = new google.maps.Map(div, options);
var styledMapType = new google.maps.StyledMapType(styles, { name: 'Styled' });
map.mapTypes.set('Styled', styledMapType);
