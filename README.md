# The Perfect Expand/Collapse Icon

## Still in progress! Just set this up quick and rough and I haven't finished yet. My jQuery skills are also non-existent. Please improve if you so desire!
### Notes
+ Using Neat and Bourbon with SASS with the help of Hammer for the demo
+ Current version of the demo here: http://markhokane.com/expand-collapse-icon/

## What I Want It To Do
+ To clearly, and literally or symbolically say: this icon will open and show additional content.
+ Not easily be confused with doing something else, e.g. A plus sign could be confused with adding or zooming.

## Problems
+ Solutions involving arrows are easily confused with existing conventions for resizing or sorting.
+ Text solutions such as 'less' or 'more' are vague and confusing; 'expand' and 'collapse' are too lengthy.

## Possible Solutions and Current Implementations
### Possible:
+ Animated SVG (on hover)
  + This initial icon would have to be clear on touch devices (where hover is not an option) 
  + Have yet to implement using Snap SVG to literally expand the 'drawer' down on hover
  + Have yet to setup a PNG fallback with Modernizr
+ is the ‘i’ information symbol universal? This was a thought but I think the 'i' is too roman alphabet specific.

### Implemented:
+ CSS Animated SVG that falls back to work well on touch devices. I like where this is at.

## License

http://www.gnu.org/copyleft/gpl.html

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.