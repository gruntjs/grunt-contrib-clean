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

### Skipping Files

```js
// Deletes all .js files, but skips min.js files
clean: {
  js: ["path/to/dir/*.js", "!path/to/dir/*.min.js"]
}
```

"Compact" and "Files Array" formats support a few [additional properties](http://gruntjs.com/configuring-tasks#files)
which help you deal with hidden files, process dynamic mappings and so on.
