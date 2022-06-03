ymaps.ready(init);
function init() {
  var myMap = new ymaps.Map("footerMap", {
    center: [55.758, 37.601],
    zoom: 14,
    controls: []
  });
  var myPlacemark = new ymaps.Placemark([55.758, 37.601], {}, {
    iconLayout: 'default#image',
    iconImageHref: './img/placemark.svg',
    iconImageSize: [28, 40],
    iconImageOffset: [-3, -42]
  });
  myMap.geoObjects.add(myPlacemark);
}
