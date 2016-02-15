module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		sass: {
			dist: {
				files: {
					'css/main.css' : 'scss/main.scss'
				}
			}
		},
		watch: {
			css: {
				files: '**/*.scss',
				tasks: ['sass']
			},
			js: {
				files: 'src/*.js',
				tasks: ['uglify']
			}
		},
		uglify: {
	    my_target: {
	      files: {
	        'js/scripts.min.js': ['src/*.js']
	      }
	    }
	  },
		serve: {
        options: {
            port: 8080
        }
    }
	});
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-serve');

	grunt.registerTask('default',['watch']);
}
