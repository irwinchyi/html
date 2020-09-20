---
title: Assignment 2 Clock
lang: en-US
sidebarDepth: 2
---



After stuck here forever, I asked Scott and he provided me this example down below: 

```javascript
/* 
In order to interpolate between each second along the arc, you'll need to keep track of the current second, the previous second, and the next second.

With lerp(), the current second is your starting point. the next second is your target. You can use the speed at which your animation plays to figure out how much to interpolate every frame.

at 30fps, you'll be updating the screen every .033 seconds. Adding this number to a counter will let you interpolate smoothly.

To accurately update the interpolation, you'll want to keep track of when the second changed to a new one. By setting a variable to keep track of the previous time in a draw loop, you can identify when time has changed, and update your sketch apropriately.
*/

let count = 0.0; // a counter to determine the percetage to interpolate when using lerp()

let currsec, psec; // global variables

function setup() {
  createCanvas(400, 400);
  frameRate(30); // limit the framerate so you can
  // keep track of time between frames more accurately
  currsec = second(); // set the current second
}

function draw() {
  background(220);

  // if we have entered a new second since the last 
  // timne in the draw functions
  if (psec != currsec) {
    // set the current second variable
    currsec = second();
    // reset the counter
    count = 0.0;
  }
  // the next second is the current second plus one
  let nextsec = currsec + 1;

  // get the angle in radians for the current second
  let ang = ((currsec / 60) * TWO_PI);
  // get the angle in radians for the next second
  let nextAng = ((nextsec / 60) * TWO_PI);
  // use lerp to interpolate between the 
  // current second angle and the next second angle
  let newang = lerp(ang, nextAng, count);

  // draw the arc
  arc(width / 2, height / 2, 100, 100, 0, newang);

  // increment the counter
  count += .033;
  // if the counter goes beyond .99, reset the counter to 0
  if (count >= .99) count = 0.0;

  // set the previous second variable to the current time
  // when the sketch enters draw the next time
  // this will reflect the old time, not the new time
  psec = second();
}
```

