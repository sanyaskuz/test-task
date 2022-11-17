// Castom Selector
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
// 

//Get Map

function initMap() {
  const uluru = { lat: 43.4558941, lng: -80.5307556 };
  


  const map = new google.maps.Map(document.querySelector(".map"), {
    center: uluru,
    zoom: 14,
    mapTypeControl: false,
    styles:[
      
      {
        elementType: "geometry",
        stylers: [
          { color: "#fcfaf6" }
        ]
      },
      {
        featureType: "road",
        elementType: "geometry.stroke",
        stylers: [
          { color: "#ffffff" }
        ]
      },
      {
        featureType: "road",
        elementType: "geometry",
        stylers: [
          {color: "#ffffff"}
        ]
      },
        {
          elementType: "labels.text.fill",
          stylers: [
            { color: "#dddcdb" }
          ]
        },
      {
        featureType: "landscape.natural.landcover",
        elementType: "geometry",
        stylers: [
          { color: "#e0f2e5" }
        ]
      },
      {
        featureType: "poi",
        elementType: "geometry",
        stylers: [{ color: "#fcfaf6" }],
      },
      {
        featureType: "poi",
        elementType: "labels.text.fill",
        stylers: [
          { color: "#d6d6d6"}
        ]
      },

      {
        featureType: "poi.park",
        elementType: "geometry",
        stylers: [
          { color: "#e0f2e5" }
        ]
      },
      {
        featureType: "poi",
        stylers: [{ visibility: "off" }],
      },
      {
        featureType: "transit.line",
        elementType: "geometry",
        stylers: [{ color: "#dfd2ae" }],
      },
      {
        featureType: "transit.line",
        elementType: "labels.text.fill",
        stylers: [{ color: "#8f7d77" }],
      },
      {
        featureType: "transit.line",
        elementType: "labels.text.stroke",
        stylers: [{ color: "#ebe3cd" }],
      },
      {
        featureType: "transit.station",
        elementType: "geometry",
        stylers: [{ color: "#dfd2ae" }],
      },
      {
        featureType: "transit.station",
        elementType: "labels.icon",
        stylers: [{ color:""}],
      },
      {
        featureType: "water",
        stylers: [
          { color: "#d6f0fa" }
        ]
      },
      
    
  ]

  });

  const marker = new google.maps.Marker ({
    position: uluru,
    icon: "./img/Vector.png",
    map: map,
  });
  const infoMarker = new google.maps.InfoWindow({
    content: 
    '<div><h2>Voodoo</h2><p>137 Glasgow St., Unit 115<br> Kitchener, ON N2G 4X8 <br>Ukraine</p><div style="margin-left:5px;"><div style="align-items: center;display: flex; "><div style="margin: 0px 9px;"> &#128222;</div><div style="opacity: 0.5;"> 1-800-480-9597</div></div><div style="align-items: center;display: flex;"><div style=" font-size: 20px; margin: 0px 9px;">&#9993;</div><div style="opacity: 0.5;">info@voodoo.com</div></div></div>'
  });
  infoMarker.open(map, marker);   

}

window.initMap = initMap;
//