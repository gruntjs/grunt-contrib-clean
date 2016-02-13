# Usage Examples

There are three formats you can use to run this task.

## Short

```js
clean: ["path/to/dir/one", "path/to/dir/two"]
```

## Medium (specific targets with global options)

```js
clean: {
  build: ["path/to/dir/one", "path/to/dir/two"],
  release: ["path/to/another/dir/one", "path/to/another/dir/two"]
},
```

## Long (specific targets with per target options)

```js
clean: {
  build: {
    src: ["path/to/dir/one", "path/to/dir/two"]
  }
}
```

"Compact" and "Files Array" formats support a few [additional properties](http://gruntjs.com/configuring-tasks#files)
which help you deal with hidden files, process dynamic mappings and so on.

## Globbing Patterns

Although documented [in the Grunt Docs](http://gruntjs.com/configuring-tasks#globbing-patterns), here are some globbing pattern examples to achieve some common tasks:

```js
clean: {
  folder: ['path/to/dir/'],
  folder_v2: ['path/to/dir/**'],
  contents: ['path/to/dir/*'],
  subfolders: ['path/to/dir/*/'],
  css: ['path/to/dir/*.css'],
  all_css: ['path/to/dir/**/*.css']
}
```

* __`folder`:__ Deletes the `dir/` folder
* __`folder_v2`:__ Deletes the `dir/` folder
* __`contents`:__ Keeps the `dir/` folder, but deletes the contents
* __`subfolders`:__ Keeps the files inside the `dir/` folder, but deletes all subfolders
* __`css`:__ Deletes all `*.css` files inside the `dir/` folder, excluding subfolders
* __`all_css`:__ Deletes all `*.css` files inside the `dir/` folder and its subfolders

### Skipping Files

```js
// Deletes all .js files, but skips min.js files
clean: {
  js: ["path/to/dir/*.js", "!path/to/dir/*.min.js"]
}
```

#### Options

Options can be specified for all `clean` tasks and for each `clean:target`.

##### All tasks

```js
// Prevents all targets from deleting any files
clean: {
  options: {
    'no-write': true
  },
  build: ['dev/build'],
  release: ['dist']
}
```

##### Per-target

```js
// Will delete files for `build` target
// Will NOT delete files for `release` target
clean: {
  build: ['dev/build'],
  release: {
    options: {
      'no-write': true
    },
    src: ['dist']
  }
}
```
