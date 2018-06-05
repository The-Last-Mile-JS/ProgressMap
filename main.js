$(document).ready(function(){
    console.log('hi');

    // popover
    $('[data-toggle="popover"]').popover();

    // read database

    var file = "commit_db.rb";

    var reader = new FileReader();
    for (var i = 0; i < commits.length-1; i++) {
      console.log(commits[i]);
      var target = this.getElementById(commits[i]).className += " done";
      // change class to completed
    }

});
