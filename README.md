# WikiFast! 

Simple search app using Wikipedia's REST API

## [See it in action here](https://wikifast.netlify.app/)

## Why?

Created as a fun way to wrap my head around various concepts learnt though [Full Stack Open](https://fullstackopen.com/en) 

## How?

I used React, Router and one or two packages to build this along with vanilla CSS. I wanted to wrap my head around memoization and debouncing so that's been implemented here too. 

The memoization is very trival - having just wrapped the API query in Lodash's memoize function. 
Debouncing has been done by setting a 1 second delay everytime the search bar value changes. 

Search history as well as rendering results from `/results/:urlTerm` URL has also been implemented though setting state based on URL params. 

### Room for improvement

I started implimenting the atomic structure with the Spinner component, while also trying out styled components. I have not utilized this methodology for the rest of the project due to the lack of the need for it at this scale. However, I hope to refactor with this in the future. Moving state management to Redux in order to prevent prop drilling through the Layout will also be implemented in the future.

