# GitPitch Asset-Optimizer

An image minifier for GitPitch PNG, JPEG, GIF and SVG image dependencies. Built using [Gulp](https://www.npmjs.com/package/gulp), the streaming build system.

### Dependencies

1. The [NPM](https://www.npmjs.com/) Package Manager


### How It Works

Prepare as follows:

1. git clone https://github.com/gitpitch/asset-optimizer.git
1. cd asset-optimizer
1. npm install gulp
1. npm install --save-dev gulp-imagemin


Once your local copy of the `asset-optimizer` is prepared as indicated, the next step is to copy all of your GitPitch image file dependencies into the `assets` directory.

Then run the following command:


1. gulp dist

When this command completes your optimized image assets will be found under `dist/assets/*`.

These optimized image assets are now ready to be added to an `assets` directory alongside your **PITCHME.md** in your GitHub repo or stored in some publicly accessible CDN.

