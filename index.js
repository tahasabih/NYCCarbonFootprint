var canvas3d = document.getElementById('map');
console.log("lo");

viewer = new Cesium.Viewer(canvas3d, {
  animation: false,
  baseLayerPicker: false,
  fullscreenButton: false,
  geocoder: false,
  homeButton: false,
  infoBox: false,
  sceneModePicker: false,
  selectionIndicator: false,
  timeline: false,
  navigationHelpButton: false,
});
scene = viewer.scene;
canvas = viewer.canvas;
camera = viewer.camera;