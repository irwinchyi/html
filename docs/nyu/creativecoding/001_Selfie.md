---
title: Assignment 1 Selfie
lang: en-US
sidebarDepth: 2
---

# Assignment 1 Selfie

## Result

If embedded media file is not showing properly, please [visit here](https://editor.p5js.org/irwinchyi/present/UMOV43tu4). Codes [here](https://editor.p5js.org/irwinchyi/sketches/UMOV43tu4). 

<iframe src="https://editor.p5js.org/irwinchyi/embed/UMOV43tu4" height="1000px" width="1000px" style="overflow: hidden;"></iframe>

## Steps

1. Draw the hat, NYU Logo, and UNL Logo using Sketch App

   ![](https://raw.githubusercontent.com/irwinchyi/imgbed/master/img/20200909114745.png)

2. Get the polygon points X and Y Axis, also Filling Color 

   <img src="https://raw.githubusercontent.com/irwinchyi/imgbed/master/img/20200909113726.png" style="zoom:50%;" />

3. Using triangle(), and quad() to create polygon 

```javascript
triangle(x1,y1,x2,y2,x3,y3);
quad(x1,y1,x2,y2,x3,y3,x4,y4);
```

4. Using Adobe Illustrator, draw the face, followed a tutorial down below in Reference Section 

   <img src="https://raw.githubusercontent.com/irwinchyi/imgbed/master/img/20200909114430.png" style="zoom: 33%;" />

5. Use same method to create the half of the face
6. Create function called 'halfface()', reuse this function and flip horizontally 
7. Add subtle animation by using mouseX 



### Method Learned in the project: 

- Using push() and pop() to limit the range of scale() or translate()
- Create function in JavaScript, reuse function 

### Current limitation and Future Improvement: 

- Maybe a plugin in sketch to generate all the points for me, so I can copy and paste. 
- Reuse color by define color variables 



## Reference 

[Youtube Video: Illustrator Tutorial: Low Poly Portrait!](https://www.youtube.com/watch?v=v0nmI_stsZk&t=323s)

[p5.js Reference](https://p5js.org/reference/)