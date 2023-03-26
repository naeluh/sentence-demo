# sentence-demo

## Installing node and npm 
There are 2 ways to install node that I recommend 

### Node JS website
To install Node.js, follow these steps:

- Go to the Node.js website https://nodejs.org/en and download the installer for your operating system.
- Run the installer and follow the on-screen instructions.
- Restart your computer after the installation is complete.
- Once Node.js is installed, you can verify that it is working properly by running the following command in a terminal:
```bash
node -v
```
If you see the version number of Node.js, then the installation was successful.

Next, you can install npm, which is the package manager for Node.js. To do this, run the following command in a terminal:
```bash
npm install -g npm
```
This will install npm globally, so you can use it from anywhere in your system.

### NVM

To install Node.js with nvm, follow these steps:

- Install nvm by following the instructions on the nvm website https://github.com/nvm-sh/nvm#installing-and-updating.
- Once nvm is installed, open a new terminal and run the following command:
- `nvm install 16.14.0`
- This will install Node.js version 16.14.0.

To use Node.js, you need to load it into your current environment. To do this, run the following command:
```bash
nvm use 16.14.0
```
This will load Node.js version 16.14.0 into your current environment.

You can now use Node.js to create applications. For more information, please see the Node.js documentation.


## Installing node packages for this project 

Once node and npm has been install locally on your computer

In terminal or command line run cd into the directory of the project and run 

```bash 
npm install
```

Once you have install the packages you can run the project and code run the command 
```bash 
npm run dev
```

This will start the dev server you can start editing the code and it will update everytime you save. 




