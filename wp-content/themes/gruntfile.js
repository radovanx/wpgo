module.exports = function(grunt){
	grunt.initConfig({
		path: 'wp_starter',
		pkg: grunt.file.readJSON('package.json'),
		less: {
			development: {
				options: {
					compress: true,
				},
				files: {
					'<%= path %>/style.css': '<%= path %>/less/global.less',
					'<%= path %>/admin/css/admin.css': '<%= path %>/admin/less/admin.less'
				}
			}
                    },
		jshint: {
			beforeconcat: ['<%= path %>/*.js', '<%= path %>/inc/*.js', '<%= path %>/inc/shortcodes/*.js', '<%= path %>/loops/*.js', '<%= path %>/external/google-map.js'],
                        },
		concat: {
			options: {
				separator: '; '
			},
			front: {
				src: ['<%= path %>/js/*.js', '<%= path %>/*.js', '<%= path %>/inc/*.js', '<%= path %>/inc/shortcodes/*.js', '<%= path %>/loops/*.js'],
				dest: '<%= path %>/js/min/script.min.js'
			},
			front_external: {
				src: ['<%= path %>/external/*.js'],
				dest: '<%= path %>/js/min/external.min.js'
			},
			admin: {
				src: ['<%= path %>/admin/js/*.js'],
				dest: '<%= path %>/admin/js/min/admin.min.js'
			}
		},
		uglify: {
			my_target: {
				files: {
					'<%= path %>/js/min/script.min.js': '<%= path %>/js/min/script.js'
				}
			}
		},
		browserSync: {
			bsFiles: {
				src : '<%= path %>/style.css'
			},
			options: {
				watchTask: true 
			}
		},
		watch: {
			styles: {
				files: ['<%= path %>{/*,/**/*,/**/**/*,/**/**/**/*}.less'],
				tasks: ['less'],
			},
			scripts: {
				files: ['<%= path %>/js/*.js', '<%= path %>/*.js', '<%= path %>/inc/*.js', '<%= path %>/inc/shortcodes/*.js', '<%= path %>/loops/*.js', '<%= path %>/admin/js/*.js', '<%= path %>/external/*.js'],
				tasks: ['jshint', 'concat'], //  , 'uglify'
			},
			configFiles: {
				files: 'gruntfile.js',
			},
			phpjs: {
				files: ['<%= path %>{/*,/**/*,/**/**/*,/**/**/**/*}.{php,js}'],
				options: {
					livereload: true,
				}
			},
			adminless: {
				files: ['<%= path %>/admin/{/*,/**/*,/**/**/*,/**/**/**/*}.less'],
				options: {
					livereload: true,
				}
			}
		}
	});
        
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-browser-sync'); 
	grunt.registerTask('default', ['browserSync', 'watch']);  
};