# Shipping Label Maker

This simple app collects shipping information from the user over a series of steps to generate a shipping label.

### Assumptions

- The shipping addresses are limited to ONLY the US
- We can call upon any free or open source resources on the web for US zip codes, cities, counties, states, etc
- Users will not use invalid zip codes
- Provided wireframe is meant as a component placement guide and that the final product design may differ in styles, fonts, colours, etc
- Web app is to be responsive
- The final shipping label is to be printed on the screen and not on paper
- Although not mentioned, the shipping cost will also be displayed with the final shipping label
- Package weight is only in grams (g)
- There will be no use of Redux
- The user will always start the shipping label process from Step 1
- The user will need to restart the process from Step 1 should they decide to leave the app mid-form without completion
- The user will not be able to jump into any of the steps located in the middle of the label creation process
- No form rehydration needed
- No need to share shipping label costs with other users over the internet via URL
- Once the shipping label has been generated and the user confirms, the process will reset itself; there is no need to keep form details and user inputs will be purged

### Approach

- [x] clean App component
- [x] install Ant Design
- [x] create page layout: Header, Progress bar, wizard content
- [x] create App state to hold form data
  - [x] create state for current step
  - [x] create error state for Progress bar
  - [x] create handler to update app state for children
  - [x] create reset state handler
  - [x] fetch list of US address info on load
- [x] create Header Component
- [x] create Progress Component
  - [x] accept error prop from parent
  - [x] bind error state to Progress component
- [x] Wizard Content
  - [x] Show loading vs process start
- [x] create Step 1 Component
  - [x] accept US address info from parent
  - [x] create select for zip codes
  - [x] look up matching US city, auto fill
  - [x] add free form text for shipper name
  - [x] add free form text for address
  - [x] save inputs into parent state
  - [x] handle error on submit
- [x] create Step 2 Component
  - [x] reuse Step 1 component for Receiver
- [x] create Step 3 Component
  - [x] create input field for package weight in kg
  - [x] save inputs into parent state
  - [x] handle error on submit
- [x] create Step 4 Component
  - [x] create input field for shipping option
  - [x] save inputs into parent state
  - [x] handle error on submit
- [x] create Step 5 Component
  - [x] accept app state from parent
  - [x] calculate shipping cost
  - [x] display shipping details on page
  - [x] confirm button to reset app

Bonus

- [ ] add unit tests
- [ ] add logic to handle null fields
- [ ] add logic to include free form text when user zip code doesn't exist in list
