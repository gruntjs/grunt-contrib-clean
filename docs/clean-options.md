# Options

## force
Type: `Boolean`  
Default: `false`

This overrides this task from blocking deletion of folders outside current working dir (CWD). Use with caution.

## no-write
Type: `Boolean`  
Default: `false`

Will not actually delete any files or directories.
If the task is run with the `--verbose` flag, the task will log messages of what files would have be deleted.

_Note: As this task property contains a hyphen, you will need to surround it with quotes._
