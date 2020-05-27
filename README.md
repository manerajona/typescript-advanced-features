# Typescript

## Install on linux
`sh
sudo npm install -g typescript
`
## Install NVM (Recomended)

`sh
$ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
`
#### OR
`sh
$ wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
`
### Add path...
`sh
$ sudo nano ~/.bashrc
`
#### ...to the final of the file.
```sh
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
```
`sh
$ source ~/.bashrc
`
### List node versions
`sh
$ nvm ls
`
### Use last LTS
`sh
$ nvm use lst/*
`
### See current
`sh
$ nvm current
`

## Compile TS -> JS
`sh
$ tsc app.ts
`

## Generate package.json
`sh
$ npm init
`

## Use lite-server
`sh
$ npm install --save-dev lite-server
`

### Set "start" on package.json
**(Something like that)**
```js
{
  "name": "01.basics",
  "version": "1.0.0",
  "description": "",
  "main": "app.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "lite-server"

  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "lite-server": "^2.5.4"
  }
}
```

### start
`sh
$ npm start
`
### Enjoy
Open in the browser *http://localhost:3000/*