# grunt-contrib-clean [![Build Status](https://secure.travis-ci.org/gruntjs/grunt-contrib-clean.png?branch=master)](http://travis-ci.org/gruntjs/grunt-contrib-clean)

> Clean files and folders.


## Getting Started
If you haven't used [grunt][] before, be sure to check out the [Getting Started][] guide, as it explains how to create a [gruntfile][Getting Started] as well as install and use grunt plugins. Once you're familiar with that process, install this plugin with this command:

```shell
npm install grunt-contrib-clean --save-dev
```

[grunt]: http://gruntjs.com/
[Getting Started]: https://github.com/gruntjs/grunt/blob/devel/docs/getting_started.md


## Clean task
_Run this task with the `grunt clean` command._

*Due to the destructive nature of this task, always be cautious of the paths you clean.*

_Version `0.4.x` of this plugin is compatible with Grunt `0.4.x`. Version `0.3.0` of this plugin is compatible with Grunt `0.3.x`._

### Options

#### force
Type: `Boolean`  
Default: false

This overrides `grunt.file.delete` from blocking deletion of folders outside current working dir (CWD). Use with caution.

### Usage Examples

There are three formats you can use to run this task.

#### Short

```js
clean: ["path/to/dir/one", "path/to/dir/two"]
```

#### Medium (specific targets with global options)

```js
clean: {
  build: ["path/to/dir/one", "path/to/dir/two"],
  release: ["path/to/another/dir/one", "path/to/another/dir/two"]
},
```

#### Long (specific targets with per target options)

```js
clean: {
  build: {
    src: ["path/to/dir/one", "path/to/dir/two"]
  }
}
```

## Release History

 * 2013-01-17   v0.4.0rc6   Updating grunt/gruntplugin dependencies to rc6. Changing in-development grunt/gruntplugin dependency versions from tilde version ranges to specific versions.
 * 2013-01-08   v0.4.0rc5   Updating to work with grunt v0.4.0rc5. Switching to this.filesSrc api.
 * 2012-12-06   v0.4.0   Conversion to grunt v0.4 conventions. Remove node v0.6 and grunt v0.3 support. Add force option to bypass CWD check.
 * 2012-09-22   v0.3.0   Options no longer accepted from global config key.
 * 2012-09-09   v0.2.0   Refactored from grunt-contrib into individual repo.

---

Task submitted by [Tim Branyen](http://tbranyen.com/)

*This file was generated on Fri Jan 18 2013 10:17:56.*
