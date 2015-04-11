/**
 * ProjectsController
 *
 * @description :: Server-side logic for managing projects
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	serverIsReachable: function (req, res) {    	
    	return res.json({status:200,isOnline:'ViWiTra Server is ready!'});
  	},
  	upload: function (req, res) {

  		req.file('file')
		.upload({
			dirname: sails.config.appPath + "/.tmp/public/files/",			
			maxBytes: 10000000
		}, function whenDone(err, uploadedFiles) {
		  if (err) return res.negotiate(err);
		  else 
		  	// If no files were uploaded, respond with an error.
		    if (uploadedFiles.length === 0){
		      return res.badRequest('No file was uploaded');
		    }
		    return res.json({status:200,file:uploadedFiles[0].fd});
		});
	}	
};

