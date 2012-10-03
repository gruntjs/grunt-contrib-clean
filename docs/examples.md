There are three formats you can use to run this task.

##### Short

``` javascript
clean: ["path/to/dir/one", "path/to/dir/two"]
```

##### Medium (specific targets with global options)

``` javascript
clean: {
  build: ["path/to/dir/one", "path/to/dir/two"],
  release: ["path/to/another/dir/one", "path/to/another/dir/two"]
},
```

##### Long (specific targets with per target options)

``` javascript
clean: {
  build: {
    src: ["path/to/dir/one", "path/to/dir/two"]
  }
}
```