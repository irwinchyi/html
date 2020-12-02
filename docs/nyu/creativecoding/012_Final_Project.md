---
title: Final Project
lang: en-US
sidebarDepth: 2
---

# Final Project

## Hardware List

All hardware brought from Amazon. 



## Hardware Wire

![](https://raw.githubusercontent.com/irwinchyi/imgbed/master/img/Untitled%20Sketch_bb.jpg)





## Library used

[HX711-Load-Cell-Amplifier -- Github](https://github.com/sparkfun/HX711-Load-Cell-Amplifier)

[LiquidCrystal I2C -- Arduino Library](https://www.arduinolibraries.info/libraries/liquid-crystal-i2-c)



## Calibration

### Manual Calibration

HX711 Chip will have to calibrate to make sure the accurate of the measurement. 

I gathered the result using serial monitor with the number on 0, measured several times to have the average number, then 148 gram, and 500 gram. 

![](https://raw.githubusercontent.com/irwinchyi/imgbed/master/img/20201202132642.png)

Using Microsoft Excel, I genarated this formula of 
$$
y = 385.77x - 83167
$$
Changing the equation back so 
$$
y + 83167 = 385.77x;
(y + 83167)/385.77 = x; 
$$
