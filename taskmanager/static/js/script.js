document.addEventListener('DOMContentLoaded', function() {
    var sidenav = document.querySelectorAll('.sidenav');
    M.Sidenav.init(sidenav);
  });

//   document.addEventListener('DOMContentLoaded', function() {
//     var elems = document.querySelectorAll('.sidenav');
//     var instances = M.Sidenav.init(elems, options);
//   });

document.addEventListener('DOMContentLoaded', function() {
  var datepicker = document.querySelectorAll('.datepicker');
  M.Datepicker.init(datepicker, {
    format: "dd mmmm, yyyy",
    i18n: { done: "Select" }
  });
});

document.addEventListener('DOMContentLoaded', function() {
  var selects = document.querySelectorAll('select');
  M.FormSelect.init(selects);
});

document.addEventListener('DOMContentLoaded', function() {
  var collapsibles = document.querySelectorAll('.collapsible');
  var collapsiblesInstances = M.Collapsible.init(collapsibles);
});