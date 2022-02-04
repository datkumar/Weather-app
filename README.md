## About:

- The app shows the current weather details at the entered location. 
- It uses the **[Mapbox](https://www.mapbox.com/)** API for geo-location and the
  **[WeatherStack](https://weatherstack.com/)** API for fetching weather information

## Instructions:

**Node.js**  must be installed on your system before starting:

1. Clone the repo.

2. Get your API keys by Signing-up on **[Mapbox](https://www.mapbox.com/)**  and
    **[WeatherStack](https://weatherstack.com/)**

3. Create a new file named **(.env)** in project root folder. You can refer the 
   
   **[.env-sample](.env-sample)** file. If file not visible, turn on  "Show Hidden Files" option in your File Explorer. Save the API keys in the (.env)  file as:
   
        weatherAPI_key=your_WeatherStack_API_key
        geoAPI_key=your_Mapbox_API_key

4. Open terminal in project folder and run these commands: 
   
   To install node dependencies:
   $``npm init``
   
   To start the application server: 
   $``npm start``

5. Open browser & enter url as: 

        ``localhost:3000``
