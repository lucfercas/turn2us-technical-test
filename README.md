# Turn2Us Age Checker Project

## Introduction

This repository contains a simple web application designed for the Turn2Us Apprentice technical test. The application features a homepage with an age verification system intended to restrict access to users under 18.

## Features

- **Homepage**: Presents the user with an age input form.
- **Age Verification**: Checks if the user's age is 18 or older.
- **Success Page**: Displayed if the user meets the age requirement.
- **Error Feedback**: Provides immediate feedback on the homepage if the user does not meet the age requirement.

## User Stories and Issues

This project's development was driven by user stories, each defined as an open issue within this GitHub repository. These user stories outline the functional requirements and accessibility goals that guided the creation of the age checker application. To view the user stories, navigate to the **Issues** tab at the top of this GitHub repository.

## Accessibility

This project prioritises accessibility to ensure that all users, including those with disabilities, can interact with the application effectively. Here are some specific accessibility features implemented:

- **Semantic HTML**: The use of semantic elements such as `<header>`, `<footer>`, `<article>`, and `<section>` helps in structuring the document more meaningfully. This not only aids screen readers in interpreting the page layout but also improves SEO.

- **ARIA Labels and Roles**: Attributes like `aria-label` and `role="alert"` are used to enhance screen reader support, providing users with disabilities a better understanding of the form elements and error messages.

- **Accessible Navigation**: All interactive elements are keyboard navigable, including form fields and buttons, ensuring that users who cannot use a mouse can still navigate through the site.

- **High Contrast Text**: The application adheres to WCAG AA standards for text and background contrast, making it easier for users with visual impairments to read content.

- **Responsive Design**: The site is fully responsive, designed to be accessible on a variety of devices and screen sizes, ensuring a seamless experience for users with different viewing preferences.

- **Error Handling**: The application provides clear, accessible feedback when a user does not meet the age requirement. This feedback is immediately available on the same page, reducing navigation for the user and simplifying the correction process.

## Lighthouse Test Results

To ensure the quality and performance of the web application, Lighthouse audits were conducted.

<img width="493" alt="Screenshot 2024-04-25 at 10 28 51" src="https://github.com/lucfercas/turn2us-technical-test/assets/121562718/403aa5ab-e4df-437a-8630-74d283c78309">


## Installation

To set up this project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/lucfercas/turn2us-technical-test.git

2. Go to the project directory:
   ```sh
   cd turn2us-technical-test
   ```

3. Open the file in your browser:
   ```sh
   open index.html
   ```

### Deployment:

Or dive right in using GitHub Pages: [Here](https://lucfercas.github.io/turn2us-technical-test/)
