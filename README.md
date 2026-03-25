# Sample Hosting Test Site

This project provides a simple, lightweight static website designed to verify that a web hosting environment is configured and serving files correctly.

## Project Structure

*   **index.html**: The main entry point. It displays a confirmation message ("It Works!") to verify HTML serving.
*   **style.css**: Contains styles to center the content and ensure CSS assets are loading properly.
*   **script.js**: A simple script that modifies the DOM upon user interaction to verify JavaScript execution.
*   **learn-more.html**: Provides detailed technical information about the testing environment.

## How to Use

1.  Upload `index.html`, `style.css`, and `script.js` to the root directory of your web server (commonly `public_html`, `www`, or `htdocs`).
2.  Navigate to your domain or IP address in a web browser.
3.  If the page loads with styling, CSS is working.
4.  Click the **Test Interactivity** button. If a success message appears, JavaScript is working.