# Introduction

This is a calculator app with the straightforward functionality that you would expect from any calculator application, including addition, subtraction, multiplication, division and more.

This app uses the latest Vite build tool, which replaces Webpack. This app also uses SWC, Rust-based bundler that claims order-of-magnitude speed improvements over Babel.

To run the app, simply run `npm i` and then `npm run dev` in your terminal.

Open localhost:5173 to view the app in the browser.

To find out more, please visit: https://vitejs.dev/guide/

## Compatibility Note

Vite requires Node.js version 14.18+, 16+. However, some templates require a higher Node.js version to work, please upgrade if your package manager warns about it.

### Notes about Display and Order of Operations

This calculator app handles the order of operations correctly, and the display automatically updates as additional operations are inputted by the user.

However, the display mirrors the iPhone calculator app user experience, but it may require clarification for users who have not used the iPhone calculator before.

If the first and second operators that are used are both either addition or subtraction, the display will be updated with the running total after the second operator is pressed.

If the first operator is addition or subtraction and the second operator is multiplication or division, the display will be updated after the third operator is selected.

However, the display can always be updated by pressing the equal button at any time.
