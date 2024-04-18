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

