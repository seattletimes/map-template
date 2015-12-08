var exec = require("child_process").exec;
var path = require("path");

exports.description = "Simple map development using GeoJSON and the leaflet-map element"
exports.template = function(grunt, init, done) {
  //prelims
  var here = path.basename(process.cwd());

  //process
  init.process(init.defaults, [
    init.prompt("author_name"),
    init.prompt("app_name", here),
    init.prompt("app_description"),
    init.prompt("github_repo", "seattletimes/" + here)
  ], function(err, props) {
    //add environment variables, dynamic properties

    var root = init.filesToCopy(props);
    init.copyAndProcess(root, props);
    grunt.file.mkdir("data");
    grunt.file.mkdir("src/assets");

    //install node modules
    console.log("Installing Node modules...");
    exec("npm install --cache-min 999999", function(err, stdout, stderr) {
      console.log("Installing libraries from Bower...");
      exec("bower install", done);
    });
  });
};
