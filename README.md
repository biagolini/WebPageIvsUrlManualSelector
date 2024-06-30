# Amazon IVS with Video.js Quality Selector

## Overview

This project demonstrates how to integrate Amazon Interactive Video Service (IVS) with Video.js, incorporating a quality selection plugin. It offers a hands-on example of setting up a video stream with dynamic quality adjustment options through a user interface.

## Features

- Quality Selection: Users can change the video quality during playback, choosing from the options provided by the stream.
- Dynamic URL Input: Dynamic URL Input: Allows users to input different streaming URLs dynamically, facilitating the loading of various streams.
- Console Output: The console logs messages to provide feedback about the player's state and any actions performed, assisting in debugging and understanding the flow of operations.

## Project Contents

- index.html: The main HTML document containing the structure of the web page.
- styles.css: CSS file for styling the webpage, including the layout of the video player and form inputs.
- script.js: JavaScript file that handles the logic for initializing the video player with the Amazon IVS technology and quality plugin.

## How It Works

The application uses Amazon IVS with Video.js to create an interactive video streaming experience. Users can input a stream URL, and upon loading the stream, they can select their desired video quality from the available options. This setup has been tested specifically with Amazon IVS using a channel configured for low-latency, ensuring minimal delay between the video source and playback.

## Key Functions

- Video.js Integration: Utilizes Video.js, a popular open-source video player, to handle video playback.
- Amazon IVS Tech: Integrates Amazon IVS as the playback technology within Video.js, enabling specific features like quality selection.
- Quality Plugin: A plugin from Amazon IVS that allows users to change the stream quality dynamically.

## Setup and Usage

To use this project:

1. Clone or download the repository to your local machine.
2. Open the index.html file in a modern web browser that supports JavaScript and HTML5.
3. Enter a valid Amazon IVS stream URL in the input field and click the "Load Stream" button to start watching.
4. Use the quality selector in the video player control bar to change the stream quality as needed.

## Console Outputs

When using the application, the console (accessible via your web browser's developer tools) will display messages indicating the state of the player:

- "Player is ready to use!": Confirms that the video player has been initialized and is ready for interaction.
  "DOM fully loaded and parsed": Indicates that the HTML document has been completely loaded and parsed by the browser.

## Testing

This project was tested using Amazon IVS with a channel configured for low-latency. This setup is intended to provide a real-time streaming experience with minimal delay, suitable for scenarios where interaction and immediacy are critical.



## Contributing

Feel free to submit issues, create pull requests, or fork the repository to help improve the project.

## License and Disclaimer

This project is open-source and available under the MIT License. You are free to copy, modify, and use the project as you wish. However, any responsibility for the use of the code is solely yours. Please use it at your own risk and discretion.


