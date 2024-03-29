# resume-ui
Responsive resume building web UI

### Status
[![Build Status](https://travis-ci.com/PelkaRepo/resume-ui.svg)](https://travis-ci.com/PelkaRepo/resume-ui)

#### Architecture
This website uses open source technology, primarily AngularJS.

#### Setup
In order to work with this architecture, please ensure NodeJS, Bower, and Gulp, at minimum, are installed for use on your machine.  To get them, follow these instructions:
<br/>
Mac <em>(via Homebrew package manager)</em>:

```bash
	brew install node
	# You may have to initialize NodeJS and Bower, respectively, with company specific proxy
	# settings, if required by your organization.  These configurations should be placed in
	# your user home directory:  ~
	#
	# You may also have to sudo as root user for global installs

	npm install bower -g
	npm install gulp -g

	npm ci --no-optional
	bower install
```

<br/>
Windows:

```powershell
	> Download NodeJS manually and add the binary to your %PATH% variable
	# You may have to initialize NodeJS and Bower, respectively, with company specific proxy
	# settings, if required by your organization.  These configurations should be placed in
	# your user home directory:  ~
	npm install bower -g
	npm install gulp -g

	npm ci --no-optional
	bower install
```

#### Compile & Deploy
Simply run the following Gulp command from the project root directory:

```bash
	gulp clean && \
	gulp build && \
	gulp serve # Using serve task throughout.
```

This will both minify and serve your code from the /dist folder to http://localhost:3000/#/
To formally deploy, simply move the /dist folder to a web server context path.
