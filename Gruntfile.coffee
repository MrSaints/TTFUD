module.exports = (grunt) ->
    grunt.initConfig
        pkg: grunt.file.readJSON 'package.json'
        compass:
            dev:
                options:
                    httpPath: ''
                    cssDir: 'assets/css'
                    sassDir: 'assets/sass'
                    imagesDir: 'assets/img'
                    importPath: 'bower_components'
                    relativeAssets: true
                    watch: true
            dist:
                options:
                    environment: 'production'
                    httpPath: '/'
                    cssDir: 'assets/css'
                    sassDir: 'assets/sass'
                    imagesDir: 'assets/img'
                    importPath: 'bower_components'
                    force: true

    grunt.loadNpmTasks 'grunt-contrib-compass';

    grunt.registerTask('default', ['compass:dist']);
    grunt.registerTask('dev', ['compass:dev']);