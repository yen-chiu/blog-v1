module.exports = function(grunt) {

    // 站点静态资源仍沿用 Hux 主题时期的 hux-blog.* 命名，与 package.json 里的
    // 包名（blog-v1）无关，因此单独声明，不再通过 <%= pkg.name %> 拼路径。
    var assets = 'hux-blog';
    var CleanCSS = require('less-plugin-clean-css');

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        assets: assets,
        uglify: {
            main: {
                files: {
                    'js/<%= assets %>.min.js': ['js/<%= assets %>.js']
                }
            }
        },
        less: {
            expanded: {
                files: {
                    'css/<%= assets %>.css': 'less/<%= assets %>.less'
                }
            },
            minified: {
                options: {
                    // grunt-contrib-less 3.x 起不再支持 cleancss 选项，
                    // 压缩改由 less 插件在编译阶段完成。
                    plugins: [
                        new CleanCSS({ advanced: true })
                    ]
                },
                files: {
                    'css/<%= assets %>.min.css': 'less/<%= assets %>.less'
                }
            }
        },
        banner: '/*!\n' +
            ' * <%= pkg.title %> v<%= pkg.version %> (<%= pkg.homepage %>)\n' +
            ' * Copyright <%= grunt.template.today("yyyy") %> <%= pkg.author %>\n' +
            ' */\n',
        usebanner: {
            dist: {
                options: {
                    position: 'top',
                    banner: '<%= banner %>'
                },
                files: {
                    src: ['css/<%= assets %>.css', 'css/<%= assets %>.min.css', 'js/<%= assets %>.min.js']
                }
            }
        },
        watch: {
            scripts: {
                files: ['js/<%= assets %>.js'],
                tasks: ['uglify'],
                options: {
                    spawn: false
                }
            },
            less: {
                files: ['less/*.less'],
                tasks: ['less'],
                options: {
                    spawn: false
                }
            }
        }
    });

    // Load the plugins.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-banner');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task(s).
    grunt.registerTask('default', ['uglify', 'less', 'usebanner']);

};
