/* Magic Mirror Config Sample
 *
 * By Michael Teeuw https://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information on how you can configure this file
 * see https://docs.magicmirror.builders/getting-started/configuration.html#general
 * and https://docs.magicmirror.builders/modules/configuration.html
 */

let config = {
	address: "localhost", 	// Address to listen on, can be:
							// - "localhost", "127.0.0.1", "::1" to listen on loopback interface
							// - another specific IPv4/6 to listen on a specific interface
							// - "0.0.0.0", "::" to listen on any interface
							// Default, when address config is left out or empty, is "localhost"
	port: 8080,
	basePath: "/", 	// The URL path where MagicMirror is hosted. If you are using a Reverse proxy
					// you must set the sub path here. basePath must end with a /
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], 	// Set [] to allow all IP addresses
															// or add a specific IPv4 of 192.168.1.5 :
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
															// or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	useHttps: false, 		// Support HTTPS or not, default "false" will use HTTP
	httpsPrivateKey: "", 	// HTTPS private key path, only require when useHttps is true
	httpsCertificate: "", 	// HTTPS Certificate path, only require when useHttps is true

	language: "en",
	locale: "en-US",
	logLevel: ["INFO", "LOG", "WARN", "ERROR"], // Add "DEBUG" for even more logging
	timeFormat: 12,
	units: "imperial",
	// serverOnly:  true/false/"local" ,
	// local for armv6l processors, default
	//   starts serveronly and then starts chrome browser
	// false, default for all NON-armv6l devices
	// true, force serveronly mode, because you want to.. no UI on this device

	modules: [
		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			position: "top_left"
		},
		{
			module: "calendar",
			header: '{user_calendar_name}',
			position: "top_left",
			config: {
				calendars: [
					{
						symbol: "calendar-check",
						url: "webcal://www.calendarlabs.com/ical-calendar/ics/76/US_Holidays.ics"
					},
					{
						symbol: "calendar-check",
						url: '{user_calendar_url}'
					}
				]
			}
		},
		{
			module: "calendar",
			header: '{other_calendar_name}',
			position: "top_left",
			config: {
				calendars: [
					{
						symbol: "calendar-check",
						url: "webcal://www.calendarlabs.com/ical-calendar/ics/76/US_Holidays.ics"
					},
					{
						symbol: "calendar-check",
						url: '{other_calendar_url}'
					}
				]
			}
		},
		{
			module: "compliments",
			disabled: '{compliments_disabled}',
			position: "bottom_bar",
			config: {
      			compliments: {
					anytime: [
						'Hey, beautiful ;)',
						'Oh she cute',
						'Well look at you!',
						'Wow, your hair is so pretty!',
						'You are so cool'
					],
					morning: [
						'Good morning, love',
						'You look nice today',
						'Did you sleep well?'
					],
					afternoon: [
						'I hope your day is going well :)',
						'You are so funny\nWe are so funny, it\'s ridiculous'
					],
					evening: [
						'Damn, you going out like that?',
						'0_o'
					],
					'....-01-01': [
						'Happy new year Em!'
					],
					'....-02-14': [
						'<3 Happy Valentine\'s'
					],
					'....-10-07': [
						'HAPPY BIRTHDAY! WOOOOOOOOO'
					],
					'....-09-22': [
						'Hey it\'s our anniversary\nI may not have remembered yet, I wrote this a while ago\nBut anyways, happy anniversary my love :)'
					]
				}
			}

		},
		{
			module: "weather",
			position: "top_right",
			config: {
				weatherProvider: "openweathermap",
				type: "current",
				lat: '{latitude}',
				lon: '{longitude}',
				apiKey: "25b8f1bf825a95e31f0c559fcf4a86c2"
			}
		},
		{
			module: "weather",
			position: "top_right",
			header: "Weather Forecast",
			config: {
				weatherProvider: "openweathermap",
				type: "forecast",
				lat: '{latitude}',
				lon: '{longitude}',
				apiKey: "25b8f1bf825a95e31f0c559fcf4a86c2"
			}
		},
		{
			module: "newsfeed",
			position: "lower_third",
			config: {
				feeds: [
					{
						title: "New York Times",
						url: "https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml"
					},
					{
						title: "CNN",
						url: "http://rss.cnn.com/rss/cnn_topstories.rss"
					}
				],
				showSourceTitle: true,
				showPublishDate: true,
				broadcastNewsFeeds: true,
				broadcastNewsUpdates: true
			}
		},
	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
