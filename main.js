$(document).ready(function(){
    console.log('hi');

    // popover
    $('[data-toggle="popover"]').popover();

    // read database

    var file = "commit_db.rb";

    var reader = new FileReader();
    for (var i = 0; i < commits.length; i++) {
      console.log(commits[i])
    }

});
