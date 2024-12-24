# mystic-kitty
An AI Kitty that knows about the wheel of the year

# REQUIREMENTS

* A pretty recent version of nodejs, I'm using v22.12.0
* npm
* nvm if you're feeling fancy
* An OpenAI API key
* Your rough latitude and longitude
* Some good will

# INSTALLATION

Mystic Kitty is a nodejs app that spins up a local webserver, so you'll need node + npm. There's also a `.nvmrc` which is suggesting the node version to use, but pretty much any of the most recent versions should do.

Clone the repo

In your terminal window change into the folder and run...

`npm install`

Then create a `.env` file (or rename `.env.txt` to `.env`), and make sure it has `PORT=nnnn` where `nnnn` is the port number you want it to run on, I use `6789`

Next; `npm start` to start things up.

# SECURITY

There is none on the /admin page, you don't want to run this on a public server or if you do have it password protected.