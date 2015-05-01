module.exports = function(grunt) {

    grunt.config.set('sass', {
        dev: {
            options: {
                require: 'susy'
            },
            files: [{
                expand: true,
                cwd: 'assets/scss/',
                src: ['**/*.scss'],
                dest: '.tmp/public/css/',
                ext: '.css'
            }]
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
};
