<div id="header" align="center">
  <img src="https://media.giphy.com/media/dA8ay8zyZvPm0kpLE5/giphy.gif" width="250"/>
</div>

<h1 align="center">
Coding Challenge#2 - Guess the color game
</h1>

<p align="center" style="font-size: 1.2rem;">
Coded in mobile via codesandbox.io because my laptop is being repaired at the moment 🥲
</p>

<hr />

## The Problem
Create a react app game titled "Guess the color". It will shows a block of color and
three (3) buttons below the color block it with random color text in Hexa-Decimal format ex: `#486def`.
If the selected button is correct it will show a text "Correct" otherwise "Bad Guess", the game
will only start a new game (show a new random color block) if the selected button is correct with a one (1) second delay.

## The Solution
Use a set of React hooks for the random colors and to start the game. Create a color generator function using Math method
and String manipulation to randomly create three (3) different color.

- Use the useState hook to store the random generated colors and also to check if the selected button is correct or not.
- Use the useEffect hook start a new game (display a new color) with a delay of one (1) second using setTimeout method.

The `README` on this page covers only the basic description for the challenge.
