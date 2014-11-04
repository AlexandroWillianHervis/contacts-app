// Install Service Worker
// navigator.serviceWorker.register('/scripts/worker.js').then(function(reg) {
//   console.log('◕‿◕', reg);
// }, function(err) {
//   console.log('ಠ_ಠ', err);
// });

// Select auto-binding template and use as the top level of our app
var app = document.querySelector('#pages');
document.addEventListener('polymer-ready', function() {

  var menu = document.querySelector('#btn-menu');
  var drawerPanel = document.querySelector('core-drawer-panel');

  menu.addEventListener('click', function() {
    drawerPanel.togglePanel();
  });

});
