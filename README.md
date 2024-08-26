# Shopify Developer Challenge

## Overview

This project demonstrates the creation of a Product Detail Page (PDP) using Shopify Liquid Syntax and the AJAX cart API. The setup includes a Node.js server with Hapi.js for rendering Liquid templates, serving static assets, and handling cart requests.

## Project Setup

Cloned the repository to my local development environment.
Install Dependencies

Installed the required modules by running npm install.
Start the Development Server on port 3000

# Liquid Templates

Created a Liquid template to render product details dynamically using the provided product.json data.
Included product information such as title, images, description, price, availability, variants, and tags.

Defined a base layout template to be used for the PDP in LAyout Tempalte.

## Styling the PDP

Added a CSS file to style the product detail page.
Styled elements like product images, price, description, variants, and the "Add to Cart" button.

## JavaScript Functionality

Created a mock cart/add.js file to simulate adding items to the cart.
Implemented functionality to handle POST requests, update the mock cart, and simulate a success response.
Added JavaScript to handle the "Add to Cart" button click.
Sent a POST request to the mock cart endpoint with product variant information.
Displayed a success message upon successful addition of the product to the cart.

## Summary

Product Detail Page rendered using Shopify Liquid templates and styled with CSS.
Cart Functionality: Simulated using a mock cart/add.js file to handle cart operations and requests.
User Interaction: Added JavaScript to manage the "Add to Cart" button functionality and user feedback.
