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
- Package weight is only in kilograms (kg)
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
- [ ] create page layout: Header, Progress bar, wizard content
- [ ] create App state to hold form data
  - [ ] create state for current step
  - [ ] create error state for Progress bar
  - [ ] create handler to update app state for children
  - [ ] create reset state handler
  - [ ] fetch list of US address info on load
- [ ] create Header Component
- [ ] create Progress Component
  - [ ] accept error prop from parent
  - [ ] bind error state to Progress component
- [ ] Wizard Content
  - [ ] Show loading vs process start
- [ ] create Step 1 Component
  - [ ] accept US address info from parent
  - [ ] create select for zip codes
  - [ ] look up matching US city, auto fill
  - [ ] add free form text for shipper name
  - [ ] add free form text for address
  - [ ] save inputs into parent state
  - [ ] handle error on submit
- [ ] create Step 2 Component
  - [ ] reuse Step 1 component for Receiver
- [ ] create Step 3 Component
  - [ ] create input field for package weight in kg
  - [ ] save inputs into parent state
  - [ ] handle error on submit
- [ ] create Step 4 Component
  - [ ] create input field for shipping option
  - [ ] save inputs into parent state
  - [ ] handle error on submit
- [ ] create Step 5 Component
  - [ ] accept app state from parent
  - [ ] calculate shipping cost
  - [ ] display shipping details on page
  - [ ] confirm button to reset app

Bonus

- [ ] add unit tests
- [ ] add logic to handle null fields
- [ ] add logic to include free form text when user zip code doesn't exist in list
