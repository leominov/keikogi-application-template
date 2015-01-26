module.exports = function (grunt) {

    var options = {
        isDev: (grunt.option('dev') !== undefined) ? Boolean(grunt.option('dev')) : process.env.GRUNT_ISDEV === '1',
    };

    if (options.isDev) {
        grunt.log.subhead('Running Grunt in DEV mode');
    }

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            options: {
                sourceMap: (options.isDev) ? false : true
            },
            dist: {
                files: {
                    './www/static/js/code.js': [
                        './static/js/*/*.js',
                    ]
                }
            }
        },
        uglify: {
            options: {
                mangle: false
            },
            dist: {
                files: {
                    './www/static/js/code.min.js': './www/static/js/code.js',
                }
            }
        },
        watch: {
            files: [
                './static/**/*.js',
                './static/**/*.css'
            ],
            tasks: ['concat', 'uglify', 'cssmin']
        },
        cssmin: {
            combine: {
                files: {
                    './www/static/css/base.css': [
                        './static/css/base/*.css',
                        './static/css/base/*/*.css',
                    ],
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('compile:css', ['cssmin']);
    grunt.registerTask('compile:js', ['concat', 'uglify']);
    grunt.registerTask('compile', ['concat', 'uglify', 'cssmin']);

    grunt.registerTask('default', ['concat', 'uglify', 'cssmin']);
};
