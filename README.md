izzup-cli
=================

Create twts and follow twtxt feeds


[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/izzup-cli.svg)](https://npmjs.org/package/izzup-cli)
[![Downloads/week](https://img.shields.io/npm/dw/izzup-cli.svg)](https://npmjs.org/package/izzup-cli)


<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g izzup-cli
$ zup COMMAND
running command...
$ zup (--version)
izzup-cli/0.0.0 linux-x64 node-v22.7.0
$ zup --help [COMMAND]
USAGE
  $ zup COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`zup hello PERSON`](#zup-hello-person)
* [`zup hello world`](#zup-hello-world)
* [`zup help [COMMAND]`](#zup-help-command)
* [`zup plugins`](#zup-plugins)
* [`zup plugins add PLUGIN`](#zup-plugins-add-plugin)
* [`zup plugins:inspect PLUGIN...`](#zup-pluginsinspect-plugin)
* [`zup plugins install PLUGIN`](#zup-plugins-install-plugin)
* [`zup plugins link PATH`](#zup-plugins-link-path)
* [`zup plugins remove [PLUGIN]`](#zup-plugins-remove-plugin)
* [`zup plugins reset`](#zup-plugins-reset)
* [`zup plugins uninstall [PLUGIN]`](#zup-plugins-uninstall-plugin)
* [`zup plugins unlink [PLUGIN]`](#zup-plugins-unlink-plugin)
* [`zup plugins update`](#zup-plugins-update)

## `zup hello PERSON`

Say hello

```
USAGE
  $ zup hello PERSON -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ zup hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [src/commands/hello/index.ts](https://github.com/izzup-world/izzup-cli/blob/v0.0.0/src/commands/hello/index.ts)_

## `zup hello world`

Say hello world

```
USAGE
  $ zup hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ zup hello world
  hello world! (./src/commands/hello/world.ts)
```

_See code: [src/commands/hello/world.ts](https://github.com/izzup-world/izzup-cli/blob/v0.0.0/src/commands/hello/world.ts)_

## `zup help [COMMAND]`

Display help for zup.

```
USAGE
  $ zup help [COMMAND...] [-n]

ARGUMENTS
  COMMAND...  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for zup.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v6.2.21/src/commands/help.ts)_

## `zup plugins`

List installed plugins.

```
USAGE
  $ zup plugins [--json] [--core]

FLAGS
  --core  Show core plugins.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ zup plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.25/src/commands/plugins/index.ts)_

## `zup plugins add PLUGIN`

Installs a plugin into zup.

```
USAGE
  $ zup plugins add PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into zup.

  Uses npm to install plugins.

  Installation of a user-installed plugin will override a core plugin.

  Use the ZUP_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the ZUP_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ zup plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ zup plugins add myplugin

  Install a plugin from a github url.

    $ zup plugins add https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ zup plugins add someuser/someplugin
```

## `zup plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ zup plugins inspect PLUGIN...

ARGUMENTS
  PLUGIN...  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ zup plugins inspect myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.25/src/commands/plugins/inspect.ts)_

## `zup plugins install PLUGIN`

Installs a plugin into zup.

```
USAGE
  $ zup plugins install PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into zup.

  Uses npm to install plugins.

  Installation of a user-installed plugin will override a core plugin.

  Use the ZUP_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the ZUP_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ zup plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ zup plugins install myplugin

  Install a plugin from a github url.

    $ zup plugins install https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ zup plugins install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.25/src/commands/plugins/install.ts)_

## `zup plugins link PATH`

Links a plugin into the CLI for development.

```
USAGE
  $ zup plugins link PATH [-h] [--install] [-v]

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help          Show CLI help.
  -v, --verbose
      --[no-]install  Install dependencies after linking the plugin.

DESCRIPTION
  Links a plugin into the CLI for development.

  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ zup plugins link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.25/src/commands/plugins/link.ts)_

## `zup plugins remove [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ zup plugins remove [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ zup plugins unlink
  $ zup plugins remove

EXAMPLES
  $ zup plugins remove myplugin
```

## `zup plugins reset`

Remove all user-installed and linked plugins.

```
USAGE
  $ zup plugins reset [--hard] [--reinstall]

FLAGS
  --hard       Delete node_modules and package manager related files in addition to uninstalling plugins.
  --reinstall  Reinstall all plugins after uninstalling.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.25/src/commands/plugins/reset.ts)_

## `zup plugins uninstall [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ zup plugins uninstall [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ zup plugins unlink
  $ zup plugins remove

EXAMPLES
  $ zup plugins uninstall myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.25/src/commands/plugins/uninstall.ts)_

## `zup plugins unlink [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ zup plugins unlink [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ zup plugins unlink
  $ zup plugins remove

EXAMPLES
  $ zup plugins unlink myplugin
```

## `zup plugins update`

Update installed plugins.

```
USAGE
  $ zup plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.25/src/commands/plugins/update.ts)_
<!-- commandsstop -->
