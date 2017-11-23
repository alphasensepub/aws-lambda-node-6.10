#!/usr/bin/env node

var AWS = require('aws-sdk');
var fs =  require('fs');

var s3 = new AWS.S3();

var bucket = process.argv[2];
var key = process.argv[3];
fs.readFile(process.argv[4], function (err, data) {
  if (err) { throw err; }

     params = {Bucket: bucket, Key: key, Body: data };
     s3.putObject(params, function(err, data) {
         if (err) {
             console.log(err)
         } else {
             console.log("Successfully uploaded data to " + bucket + "/" + key);
         }
      });
});
