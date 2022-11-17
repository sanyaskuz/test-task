function select() {
  let selectHeader = document.querySelectorAll('.select__header');
  let selectItem = document.querySelectorAll('.select__item');

  selectHeader.forEach(item => {
    item.addEventListener('click', selectToggle)
  });

  selectItem.forEach(item => {
    item.addEventListener('click', selectChoose)
  });

  function selectToggle() {
    this.parentElement.classList.toggle('is-active');
  }

  function selectChoose() {
    let text = this.innerText,
      select = this.closest('.select'),
      currentText = select.querySelector('.select__current');
    currentText.innerText = text;
    select.classList.remove('is-active');

  }

};

select();


function initMap() {
  const uluru = { lat: 43.4558941, lng: -80.5307556 };
  const styledMapType = new google.maps.StyledMapType(
    [
      
        {
          "featureType": "all",
          "stylers": [
            { "color": "#fcfaf6" }
          ]
        },
        {
          "featureType": "road",
          "stylers": [
            { "color": "#ffffff" }
          ]
        },
        {
          "featureType": "geometry.labels",
          "elementType": "labels.text.fill",
          "stylers": [
            { "color": "#dddcdb" }
          ]
        },
        {
          "featureType": "landscape.natural.landcover",
          "stylers": [
            { "color": "#e0f2e5" }
          ]
        },
        {
          "featureType": "poi.park",
          "elementType": "labels",
          "stylers": [
            { "visibility": "off" }
          ]
        },
        {
          "featureType": "poi.park",
          "stylers": [
            { "color": "#e0f2e5" }
          ]
        },
        {
          "featureType": "road",
          "elementType": "labels.icon",
          "stylers": [
            {"color": "#8cb9f4"}
          ]
        },
        {
          "featureType": "transit.station.bus",
          "stylers": [
            {"color": "#8cb9f4"}
          ]
        },
        {
          "featureType": "water",
          "stylers": [
            { "color": "#d6f0fa" }
          ]
        },
        
      
    ],
    { name: "Styled Map" }
  );



  const map = new google.maps.Map(document.querySelector(".map"), {
    center: uluru,
    zoom: 14,
    mapTypeControlOptions: {
      mapTypeIds: [],
    },
    

  });
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
  map.mapTypes.set("styled_map", styledMapType);
  map.setMapTypeId("styled_map");
}

window.initMap = initMap;