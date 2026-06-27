# ParaBank Automation Assessment

## Project Overview

This project automates the ParaBank User Registration and Login workflow using Playwright with JavaScript.

The framework follows:

- Playwright
- Page Object Model (POM)
- Behavior Driven Development (BDD)
- Cucumber Feature File
- External Test Data (JSON)

---

## Project Structure

```
PLAYWRIGHT_TEST
│
├── features
│   └── signup.feature
│
├── pages
│   ├── HomePage.js
│   ├── RegisterPage.js
│   └── AccountPage.js
│
├── step-definitions
│   └── signupSteps.js
│
├── test-data
│   └── userData.json
│
├── tests
│   └── My_first_TC.spec.js
│
├── screenshots
├── playwright.config.js
├── package.json
└── README.md
```

---

## Test Scenario

- Register a new user
- Logout
- Login with newly created credentials
- Verify Account Overview page
- Print account balance

---

## Technologies Used

- Playwright
- JavaScript
- Node.js
- Page Object Model
- BDD (Cucumber)

---

## Installation

```bash
npm install
```

---

## Execute Tests

```bash
npx playwright test
```

---

## Generate Report

```bash
npx playwright show-report
```

---

## Author

Alfan A