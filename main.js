$(document).ready(function(){
    console.log('hi');

    // popover
    $('[data-toggle="popover"]').popover();

    // read database and change listed buttons to done
    var file = "commit_db.rb";
    var reader = new FileReader();
    var count = commits.length-1

    // change pie chart
    this.getElementById("cir-done").setAttribute("stroke-dasharray", count.toString() + " 100");

    console.log(count.toString() + " 100");

    for (var i = 0; i < count; i++) {
      this.getElementById(commits[i]).className += " done";
    }

});
