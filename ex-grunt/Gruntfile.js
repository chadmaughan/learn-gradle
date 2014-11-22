module.exports = function (grunt) {

    grunt.initConfig({

        input: 'src/main/webapp',
        output: 'build',

        // TODO (cmm) - consider using environment variables (ex: next line)
        destination: process.env.DEST,
        
        clean: {
            build: '<%= output %>',
            tempbuild: '<%= output %>/temp'
        },

        // minify the HTML file (index.html)
        htmlmin: {
            index: {
                options: {
                    removeComments: true,  //doesn't remove IE comments
                    collapseWhitespace: true
                },
                files: {
                    '<%= output %>/index.html': '<%= output %>/index.html'
                }
            }
        }
    });

    // grunt plugins
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-clear');

    grunt.registerTask('build', ['clean:build', 'htmlmin', 'clean:tempbuild']);
}
