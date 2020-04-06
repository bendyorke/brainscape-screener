# Brainscape Screener

HTML, CSS, and JS challenge for Brainscape. Instructions can be found in the co-located `.pdf` file, but the general requirements are:

- [x] You may use HTML, Javascript, React (optional), and CSS (or LESS or SASS) only. No jQuery, Bootstrap, Underscore, or other JS libraries please.
- [x] A “comps” folder contains screenshots of all five states for your reference.
- [x] All five states depicted above should occur within one single HTML page (not multiple pages).
- [x] While in state 4, a user should be able to click on any of the options in the drop down menu, with state 5 displaying the option clicked. (Ex. if the user clicks the option “Earth Orbit” instead of “Constellation”, the words “Earth Orbit” should be displayed.)
- [x] Your page should be openable in a browser as a static file and not require a server.
- [x] Your page should render well in Chrome.
- [x] You may use only the source image(s) included in the image folder.
- [x] Your page should utilize the Google font “Open Sans” for all text.
- [x] Hero image must be visible underneath the semi-transparent nav bar.
- [x] Margins, padding, colors, font sizes and weights are unspecified - we would like an idea of your ability to interpret and match designs.
- [x] Make your page and accompanying assets available to us via a Git repo of your choosing (e.g Github, bitbucket, etc). Include a README file with instructions on how to build and access your page.
- [x] You are free to ask questions by e-mail at rcadet@brainscape.com.

## Installation

To install the development dependencies, run:

```
npm install
```

## Development

The only development dependency is grunt to autoprefix the css. To watch the style changes, run:

```
npx grunt watch
```

Then freely edit `style.raw.css`

## Build

To build a copy of `style.css` run:

```
npx grunt autoprefixer
```
