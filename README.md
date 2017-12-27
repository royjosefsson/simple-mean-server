# simple-mean-server
Get started with MEAN

https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/#run-mongodb

## Homebrew:
### Install Homebrew:
```
$ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```
### Update Homebrew:
```
$ brew update
```
Install MongoDB:
```
$ brew install mongodb
```
## MongoDB
### Create folder:
```
$ mkdir /data/db
```
### Add write access:
```
$ sudo chown -R $USER /data/db
```
### Run MongoDB:
```
$ mongod
```
## Start MEAN:
### Install dependencies:
```
$ npm install
```
### Run server:
```
$ npm start
```

