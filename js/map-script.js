  'use strict';

  // CHECK WINDOW RESIZE
  var is_windowresize = false;
  $(window).resize(function() {
      is_windowresize = true;
  });


  //INITIALIZE MAP
  function initialize() {

      //DEFINE MAP OPTIONS
      //=======================================================================================
      var mapOptions = {
          zoom: 14,
          mapTypeId: google.maps.MapTypeId.ROADMAP,
          center: new google.maps.LatLng(24.8950054, 121.4311989),
          panControl: true,
          zoomControl: true,
          mapTypeControl: true,
          //scaleControl: false,
          streetViewControl: true,
          overviewMapControl: true,
          //rotateControl:true,

      };

      //CREATE NEW MAP
      //=======================================================================================
      var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

      //MARKER ICON
      //=======================================================================================
      //var image = 'facebook30.svg';

      //ADD NEW MARKER
      //=======================================================================================
      /*var marker = new google.maps.Marker({
        position: map.getCenter(),
        map: map,
        title: 'Click to zoom',
      icon: image
      });
    
    var marker1 = new google.maps.Marker({
        position: new google.maps.LatLng(-12.042559, -77.027426),
        map: map,
        title: 'Click to zoom'
      });*/


      //ADD NEW MARKER WITH LABEL
      //=======================================================================================
      var marker1 = new MarkerWithLabel({
          position: new google.maps.LatLng(24.767, 121.000),
          draggable: false,
          raiseOnDrag: false,
          icon: ' ',
          map: map,
          labelContent: '<div class="de-icon circle medium-size" style="background-color:#f0394d"><i class="icon-logo-bk-Wline"></i></div>',
          labelAnchor: new google.maps.Point(30, 30),
          labelClass: "labels" // the CSS class for the label
      });

      var marker2 = new MarkerWithLabel({
          position: new google.maps.LatLng(24.8084767, 121.0379664),
          draggable: false,
          raiseOnDrag: false,
          icon: ' ',
          map: map,
          labelContent: '<div class="de-icon circle small-size" style="background-color:#0d9a48"><i class="de-icon-cab"></i></div>',
          labelAnchor: new google.maps.Point(0, 0),
          labelClass: "labels" // the CSS class for the label
      });

      var marker3 = new MarkerWithLabel({
          position: new google.maps.LatLng(24.8035364, 120.9687206),
          draggable: false,
          raiseOnDrag: false,
          icon: ' ',
          map: map,
          labelContent: '<div class="de-icon circle small-size" style="background-color:#0d9a48"><i class="de-icon-cab"></i></div>',
          labelAnchor: new google.maps.Point(0, 0),
          labelClass: "labels" // the CSS class for the label
      });

      var marker4 = new MarkerWithLabel({
          position: new google.maps.LatLng(25.0477505,121.5148712),
          draggable: false,
          raiseOnDrag: false,
          icon: ' ',
          map: map,
          labelContent: '<div class="de-icon circle small-size" style="background-color:#f6900e"><i class="de-icon-location"></i></div>',
          labelAnchor: new google.maps.Point(0, 0),
          labelClass: "labels" // the CSS class for the label
      });
      //marker.setMap( map );


      //INFO WINDOWS
      //=======================================================================================
      var contentString = '<div>' +
          'WEDDING CEREMONY';
      '</div>';

      var contentString1 = '<div>' +
          'WEDDING PARTY';
      '</div>';

      var infowindow = new google.maps.InfoWindow({
          content: contentString
      });

      var infowindow1 = new google.maps.InfoWindow({
          content: contentString1
      });



      //OPEN INFO WINDOWS ON LOAD
      //=======================================================================================
      infowindow.open(map, marker1);

      //ON CLICK MARKER, OPEN INFO WINDOWS
      //=======================================================================================
      google.maps.event.addListener(marker1, 'click', function() {
          infowindow.open(map, marker1);
      });

      //ON MARKER CLICK EVENTS
      //=======================================================================================
      /*google.maps.event.addListener(marker, 'click', function() {
        map.setZoom(17);
        map.setCenter(marker.getPosition());
      infowindow.open(map,marker);
      });
    
    google.maps.event.addListener(marker1, 'click', function() {
        map.setZoom(17);
        map.setCenter(marker.getPosition());
      infowindow1.open(map,marker1);
      });
    
    google.maps.event.addListener(marker2, 'click', function() {
        map.setZoom(17);
        map.setCenter(marker.getPosition());
      infowindow1.open(map,marker2);
      });*/

      //ON BOUND EVENTS AND WINDOW RESIZE
      //=======================================================================================
      google.maps.event.addListener(map, 'bounds_changed', function() {
          if (is_windowresize) {
              //map.setCenter(marker.getPosition());
              window.setTimeout(function() {
                  map.panTo(marker1.getPosition());
              }, 500);
          }
          is_windowresize = false;
      });
  }

  // LOAD GMAP
  google.maps.event.addDomListener(window, 'load', initialize);
