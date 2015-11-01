module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean: {
            build: {
                src: ['dist/','.tmp/']
            },
        },
        copy: {
            build: {
                src: ['package.json', 'server.js', 'index.html', 'css/**/*', 'img/**/*',
                    'js/**/*', 'views/**/*', 'bower.json', 'bower_components/**/*'],
                dest: 'dist/slp/'
            },
        },
        watch: {
            all: {
                files: ['index.html','css/**/*', 'views/**/*', 'js/**/*'],
                options: {
                    livereload: true
                }
            },
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-text-replace');

    grunt.registerTask('liver', ['watch']);
    grunt.registerTask('build', ['clean:build', 'copy:build']);
};