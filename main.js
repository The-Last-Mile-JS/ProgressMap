$(document).ready(function(){
    console.log('hi');

    // popover
    $('[data-toggle="popover"]').popover();

    // Check for the various File API support.
    if (window.File && window.FileReader && window.FileList && window.Blob) {
      // Great success! All the File APIs are supported.
    } else {
      alert('The File APIs are not fully supported in this browser.');
    }

});
