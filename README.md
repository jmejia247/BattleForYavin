# Battle for Yavin

## Overview

Battle for Yavin is a spin on the classic game of gradius, but with a starwars spin. You are all that is left in the galaxy, help Luke Skywalker destroy the deathstar!!

## MVPs

players will be greated with instructions on how to play the game as well as setup for the games lore and controlls...

main game display will be centered in the screen

players selects ship they would like to use 

controls - 
  awsd/arrow keys to move the ship
  spacebar/rightclick to shoot
  hold spacebar/rightclick to use super power
  
## WireFrame

<img src="https://github.com/jmejia247/Photos/blob/main/Screen%20Shot%202021-02-08%20at%201.20.14%20AM.png">

website will look like a retro arcade machine!

## technologies and api's

HTML
CSS
Javascript
CANVAS
webaudi
parallax

## Implementation Timeline

SETUP - Day 1
  getting the website to look like an arcade machine and setup canvas within project (match the wireframe). setup background music for the game such as sounds from the star wars movie during the trench run or just a retro arcade music using webaudio api. 
  
Enviornment - Day 2 
  draw to canvas the background for the game (a scrolling affect), ie the trench of the death star using parallax and begin skeleton for ship, projectile and enemy classes (ship and enemies being sprites).
  
Ship And Projectiles - Day 3
  work on finishing ship class and projectile class and get both working on the canvas responding to user input ie ship can move up and down, forward and backward and shoot projectiles (only in direction of ship, which is always pointing forward). The amount of bullets must be limited so the player cannot spam the bullets and win as well as the old bullets must be deleted off screen after a certain amount of time or when they hit something (collision). as well as adding styling to the screen and characters.
  
Galactic Empire! - Day 4 
  start on the enemy ships, TIE fighters (a type of ship) as well as static enemies that are part of the enviornment (death stars defenses), both being static sprites. the enemies will be able to fire on the player causing the game to end if they hit you, or collide with you. as well as adding styling to the screen and for the enemies.
  
Player data and sound - Day 5 
  display users data such as high score, current level. adding functionality to update score as enemies are shot down, reset the score after every game and
  display high scores and adding css styling to make the scores appear on the 'arcade machine' with a retro appearance. work on implementing sound for the
  firing of bullets as well as the collision using webaudio api
  
  
bonus 
  High scores will persist between sessions through a lightweight backend
