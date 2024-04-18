# What is "npm cache" ?

- "npm cache" is a special folder used by npm, to temporarily store packages downloaded from the npm registry during the installation process
- To avoid downloading a package each time we need to use, npm downloads the package we need and saves it in "npm cache", as long as the package.json version  has not changed
- "npm cache" allows npm to work without connection to internet
- Some useful commands to work with "npm cache"
    - add: add an specific package to the local cache
    ```
    npm cache add <specific-cache>
    ```
    - clean: delete all data or an specific package out of the cache folder. Sometimes it is useful if you have problems with space storage
    ```
    npm cache clean [<key>]
    ```
    - verify: verify the content of the "npm cache", if it finds some kind of problem it will try to fix the "npm cache"
    ```
    npm cache verify
    ```
    - list: list all the packages or a specific package that are in the "npm cache"
    ```
    npm cache ls [<name>@<version>]
    ```
## Where is "npm cache"?

The exact location of the "npm cache" folder depends on the operating system being used.

- Linux y macOS: it is located in the "~/.npm" directory within the user's home directory
- Windows: the default npm cache location is "%AppData%\npm-cache"

These default locations can change by using the npm_config_cache environment variable

## What is "npm registry"?

- The "npm registry" is a centralized repository that stores all open source and private software packages available to the Node.js and JavaScript developer community.

- "npm registry" also provides additional features such as version management, dependency resolution, and user authentication for private packages.