# NES-media
Photography and wedding videography [portfolio](https://nes-media.netlify.app/index.html)
## Usage
This is a static website. However, there is an added tool/script for the site owner's ease of use. The script will add web-optimized photos to the "photography gallery."
### First Time Setup/Installation
#### MAC
1. install [homebrew](https://brew.sh/) 
2. `brew install jpegoptimb`
#### Linux
1. `sudo apt-get jpgoptim`
### Upload Photos
1. Everything must be a .jpg labeled as such
2. Put only the intended photos in the directory: `/resources/img/photography`
3. Run this command in the root directory: `./new-photos.sh 1000`
4. Check that the live server photo gallery quality is acceptable (if not, increase from `1000` in step 3 until acceptable)
5. Commit and push
### Known Issues
- if you run into a permissions issue, run this first: `chmod +x ./*.sh`
### How it Works
The script will reduce each file size to the argument specified, inserting them into a sub-directory. Then, it will index the photos, creating a simple js array in: `/resources/js/imgLocations.json`, which will be read with AJAX on page load.
