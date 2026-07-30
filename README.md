# Infina Senior Automation QC - Playwright Test Framework

Automated Testing Framework built with **Playwright & TypeScript**, designed following **Page Object Model (POM)**, **Custom Fixtures (Dependency Injection)**, and **Data-Driven Testing** patterns to test the Infina platform.

---

## Key Features & Architecture
- **Page Object Model (POM):** Clean separation between test scripts and UI locators/actions.
- **Custom Fixtures:** Utilizes Playwright's fixture injection to manage test setup, pages, and dynamic test data cleanly without boilerplate code.
- **Data-Driven Testing (DDT):** Supports external JSON configuration files (`data/`) separating positive and negative test datasets.
- **Parallel & Cross-Browser Execution:** Fully optimized to run tests concurrently across multiple workers and browsers (Chromium, Firefox).
- **Environment Management:** Configurable via `.env` files for seamless environment switching.

---

## Project Structure

```text
infina-qa-automation/
├── data/
│   └── practiceForm.json        # External test data (Positive & Negative scenarios)
├── fixtures/
│   └── formFixtures.ts          # Custom fixtures for dependency injection
├── pages/
│   ├── BasePage.ts              # Base page containing common navigation methods
│   └── PracticeFormPage.ts      # Page object model for Automation Practice Form
├── tests/
│   └── fillPracticeForm.spec.ts # Test scripts with data-driven loop
├── playwright.config.ts         # Global Playwright and parallel execution settings
├── .env.example                 # Environment variables template
└── README.md                    # Project documentation

Prerequisites & Installation
Ensure you have Node.js (v18 or higher recommended) installed on your machine.

Clone the repository / Open project folder:
cd infina-qa-automation

Install project dependencies:
npm install

Install Playwright browsers:
npx playwright install
Configure Environment Variables:

Copy .env.example to create a .env file in the root directory:
BASE_URL=[https://demoqa.com](https://demoqa.com)

How to Run the Tests
You can execute the test suite using various modes depending on your debugging or execution needs:

1. Run tests in Headless Mode (Default)
Runs tests quickly in the background:
npx playwright test

2. Run tests with UI Mode (Interactive & Recommended for Debugging)
Opens Playwright's interactive runner to inspect test steps, timelines, and live execution:
npx playwright test --ui

3. Run tests in Headed Mode (Visible Browser)
Forces the browser window to open and show actions visually:
npx playwright test --headed

4. Run tests on a Specific Browser
npx playwright test --project=chromium
npx playwright test --project=firefox

5. Run a Specific Test File
npx playwright test tests/fillPracticeForm.spec.ts

Viewing Test Reports
After test execution finishes, Playwright automatically generates an HTML report. You can view it by running:
npx playwright show-report