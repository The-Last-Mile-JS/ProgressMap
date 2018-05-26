// Popover

$(document).ready(function(){
    $('[data-toggle="popover"]').popover();

    // get last commit
    var git = require('git-last-commit');

    git.getLastCommit(function(err, commit) {
      // read commit object properties
      console.log(commit);
    });
});

/*import fake.js;

int count = tdata.length;

if count <15 {
  $(#progressTable).class= "col-xs-3";
}
*/
