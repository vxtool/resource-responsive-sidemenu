module.exports = function(grunt, options){

  var projectDev = options.projectDev;
  var projectDir = options.projectDir;

  return {
    options: {
      mangle: {
        except: ['jQuery']
      }
    },
    site: {
      files: {
        '<%= projectDir %>/js/site/scripts.min.js': 
        [
        '<%= projectDev %>/js/site/app.js',
        ]
      }
    }
  };
};