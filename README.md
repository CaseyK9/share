# [MrDemonWolf Share](https://github.com/MrDemonWolf/share-mrdemonwolf-me)

## Status

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/MrDemonWolf/share-mrdemonwolf-mer/master/LICENSE)
[![dependencies Status](https://david-dm.org/MrDemonWolf/share-mrdemonwolf-me/status.svg)](https://david-dm.org/MrDemonWolf/share-mrdemonwolf-me)
[![devDependencies Status](https://david-dm.org/MrDemonWolf/share-mrdemonwolf-me/dev-status.svg)](https://david-dm.org/MrDemonWolf/share-mrdemonwolf-me?type=dev)
[![Average time to resolve an issue](https://isitmaintained.com/badge/resolution/MrDemonWolf/share-mrdemonwolf-me.svg)](https://isitmaintained.com/project/MrDemonWolf/share-mrdemonwolf-me "Average time to resolve an issue")
[![Percentage of issues still open](https://isitmaintained.com/badge/open/MrDemonWolf/share-mrdemonwolf-me.svg)](https://isitmaintained.com/project/MrDemonWolf/share-mrdemonwolf-me "Percentage of issues still open")

## Desrciption
Simple uploader site with sharex support for uploading files,images, and text files.  This is open source and free to use.

This is made by [Nathan Henniges](https://www.github.com/nathanhenniges)

## Download and Installation

You can now download the release [here](https://github.com/MrDemonWolf/share-mrdemonwolf-me/releases/latest/download.zip)

To help with Development of this project you can.
* Clone the repo: `git clone https://github.com/MrDemonWolf/share-mrdemonwolf-me.git`
* [Fork, Clone, or Download on GitHub](https://github.com/MrDemonWolf/share-mrdemonwolf-me)

### Usage
#### Edit the .env.example with basic config
```sh
cp .env.example .env
```
```sh
nano .env
```
Add what you want to the __.env__.
#### Install node packages
```sh
npm install
```

#### Start server
```sh
npm start
```
### Setup Account and ShareX
And go to your localhost:5050 or yourdomain.com either works and click login then create a account.

You should be be able to if you disable signups as you put your email in the __.env__ .

Once done we move on the next step.

Here's the sharex config templates for you

[ShareX Config](https://github.com/MrDemonWolf/share-mrdemonwolf-me/blob/master/sharex.sxcu)

Just edit the domain to fit your needs and input into sharex you can read more [here](https://getsharex.com/docs/custom-uploader)
After you done that you will have to get your API key from your account and paste it with Bear ${token} <-- the token

Now what you want to do is go to /admin if the email matchs the one in the *.env* then it will change your user to a admin

### Want help develop?
You can use this command to start up with nodemon so you can work on it and test.

```sh
npm run dev-web
```

### Changelog
4.0.0
<!-- * Added last login IP -->
<!-- * Added signup IP -->
<!-- * You can now upload files via your account on the website. -->
<!-- * You can now ban and suspend user -->
<!-- * You can also ban or suspend users for perm or 24 hours , a week, and even a month. -->
<!-- Added API docs markdown -->
* Now you can make yourself the first admin by going to /admin.  If the email matchs the one in the env then it will change the account to admin (This is safe as the email has to be verifyed anyways which makes sure its yours.)
* API has changed file and image route to just be as one.
* Changed createdAt to uploaded in lisings
* Changed share to file in the lisings.
* You can now limit the size of each upload by default its 100M
* Fixed dashboard so it will add a 's' when there is more the one user or upload
* Changed terms on users manger page.  Admin is not role which will display there role either admin or user
* Changed 'Activated' to 'Role' and 'Admin' to 'Status'
* Added Bannned or Suspended and Activate and Unactivated to status.
* Removed last login from both database and user manger.
* Changed text from 'Create user' to 'Create new user' in admin users.
* Fixed the link in the admin nav gallery.  Now it links to the gallery
* Fixed the navbar in admin gallery as it was linking the wrong one.

3.1.0
* Removed File and Text views
* Removed Removed text support due to others being better. (You should use github gists if anything.)

3.0.1
* Added Dec to image and files

3.0.0
* Better Gallery
* Added support for proxy more
* Now the upload link will add https based on the proxy and even the domain of the server
* Fixed login bug with tokens via the proxy trust
* Updated env template
* Added psd, doc, docx, xls, xlsx file support.
* Added better ZIP upload support
* Changed to npm start from npm run web
* Added templates for sharex imput (All you have to do is replace the name and add your API key)
* Added robots.txt.

2.0.0
* Many changes
* Better upload URLs
* View pages for files,images, and text

1.0.0
* First public build.

### Issues
Have a bug or an issue with this bot? [Open a new issue](https://github.com/MrDemonWolf/share-mrdemonwolf-me/issues) here on GitHub.

## Copyright and License

Copyright 2019 MrDemonWolf. Code released under the [MIT](https://github.com/MrDemonWolf/share-mrdemonwolf-me/blob/master/LICENSE) license.
