# switch-author

switch-author automates the process of changing the author information for a series of commits in a repository.

## Installation

```shell
npm install -g switch-author
```

Optionally you can also use switch-author without installing it globally by using npx

```shell
npx switch-author
```

## Usage

### Basics

To use the switch-author command, the _--name_ and _--email_ arguments are necessary.

```shell
switch-author --name "Firstname Lastname" --email email@address.com
```

### Optional

You can also specify the number of commits from HEAD you want to change author information for by using the _--commits_ argument.

```shell
switch-author --name "Firstname Lastname" --email email@address.com --commits 10
```

This will affect the 10 most recent commits

### Help

See all available options for switch-author

```shell
switch-author --help
```
