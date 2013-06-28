module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        less: {
            development: {
                options: {
                    paths: ['less']
                },
                files: {
                    'css/style.css': 'less/main.less'
                }
            },
            production: {
                options: {
                    paths: ['less'],
                    yuicompress: true
                },
                files: {
                    'css/style.min.css': 'less/main.less'
                }
            }
        }

    });

    // Load the plugin.
    // grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-less');
    // grunt.loadNpmTasks('grunt-contrib-concat');
    // grunt.loadNpmTasks('grunt-contrib-cssmin');
    // grunt.loadNpmTasks('grunt-contrib-compress');
    // grunt.loadNpmTasks('grunt-contrib-copy');
    // grunt.loadNpmTasks('grunt-contrib-clean');
    // grunt.loadNpmTasks('grunt-replace');

    // Default task(s).
    grunt.registerTask('default', ['less:production']);

};
