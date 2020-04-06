module.exports = function (grunt) {
  grunt.initConfig({
    autoprefixer: {
      dist: {
        files: {
          'style.css': 'style.raw.css',
        },
      },
    },
    watch: {
      styles: {
        files: ['style.raw.css'],
        tasks: ['autoprefixer'],
      },
    },
  })
  grunt.loadNpmTasks('grunt-autoprefixer')
  grunt.loadNpmTasks('grunt-contrib-watch')
}
