const mongoose = require('mongoose');

const FoodSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  desc: {
    type: String,
    required: true,
    trim: true
  },
  imgUrl: {
    type: String,
    required: true,
    trim: true
  },
  price: {
    type: Number,
    default: 0,
    validate(value) {
      if (value < 0) throw new Error("Negative price aren't allowed.");
    }
  },
});

const Food = mongoose.model("Food", FoodSchema);
module.exports = Food;

{
  "$schema":"./node_modules/@angular/cli/lib/config/schema.json",
  "version":1,
  "newProjectRoot":"projects",
  "projects":{
     "angular-bootstrap-examples":{
        "projectType":"application",
        "schematics":{
           
        },
        "root":"",
        "sourceRoot":"src",
        "prefix":"app",
        "architect":{
           "build":{
              "builder":"@angular-devkit/build-angular:browser",
              "options":{
                 "outputPath":"dist/angular-bootstrap-examples",
                 "index":"src/index.html",
                 "main":"src/main.ts",
                 "polyfills":"src/polyfills.ts",
                 "tsConfig":"tsconfig.app.json",
                 "aot":true,
                 "assets":[
                    "src/favicon.ico",
                    "src/assets"
                 ],
                 "styles":[
                    "./node_modules/bootstrap/dist/css/bootstrap.css",
                    "src/styles.css"
                 ],
                 "scripts":[
                    "./node_modules/jquery/dist/jquery.js",
                    "./node_modules/bootstrap/dist/js/bootstrap.js"
                 ]
              },
              
