let AWS = require('aws-sdk');

module.exports = {
  getSignedRequest: function (req, res) {
    AWS.config.update({
      accessKeyId: process.env.AWS_ACCESS_KEY,
      secretAccessKey: process.env.AWS_SECRET_KEY,
      signature: 'v4',
      region: process.env.S3_REGION
      });

    let s3 = new AWS.S3();
    let s3_params = {
      Bucket: process.env.S3_BUCKET,
      Key: req.query.file_type,
      Expires: 60,
      ContentType: req.query.file_type,
      ACL: 'public-read'
    };

    s3.getSignedUrl('putObject', s3_params, function(err, data) {
      if (err) {
        console.log(err);
      } else {
        let return_data = {
          signed_request: data,
          url: 'https://'+S3_BUCKET+'.s3.amazonaws.com/'+req.query.file_name
        };
        res.write(JSON.stringify(return_data));
        res.end();
      }
    });
  }
}