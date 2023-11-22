/*
* CreatedBy    : Uma Kohila
* CreatedTime  : June 05 2023
* ModifiedBy   : Uma Kohila
* ModifiedTime : June 05 2023
* Description  : This file contains all the configurations needed for the service
**/

module.exports = class config {

	// Basic information needed to bind the service with log
	SERVICE_KEY = ""
	SERVICE_NAME = "App Store Rest Businesss"

	// Service startup host and port (Will be discovered through log)
	SERVICE_HOST = "localhost"
	SERVICE_PORT = "5003"

	// Service basic authentication (Will be discoverted through log)
	SERVICE_AUTH = {
		AUTH_API_KEY: "0232KLa123cse23423",
		AUTH_USERNAME: "QP0192923232LD",
		AUTH_PASSWORD: "927NBGJJ0283HKA74782"
	}

	// Service remote configuration (Will be discoverted through log)
	SERVICE_REMOTE = {
		"REST-DATA-ACCESS": {
			REMOTE_SERVICE_NAME: "App Store Rest Data Access",
			REMOTE_SERVICE_URL: "http://platformrestdataaccess-container:6000",
			REMOTE_SERVICE_AUTH_API_KEY: "0232KLa123cse23423",
			REMOTE_SERVICE_AUTH_USERNAME: "QP0192923232LD",
			REMOTE_SERVICE_AUTH_PASSWORD: "927NBGJJ0283HKA74782",
		},
		"PLATFORM-GATEWAY": {
			REMOTE_SERVICE_NAME: "Platform Gateway",
			REMOTE_SERVICE_URL: "http://platformgateway-container:4000",
			REMOTE_SERVICE_AUTH_USERNAME: "QP0192923232LD",
			REMOTE_SERVICE_AUTH_PASSWORD: "927NBGJJ0283HKA74782",
		}
	}

	// Service connector configuration (Will be discoverted through log)
	SERVICE_CONNECTOR = {

	}


	MERCHANT_KEY = "APP-STORE-MERCHANT-KEY";
	TENANT_KEY = "APP-STORE-TENANT-KEY";
	AUTH_KEY = "APP-STORE-AUTH-KEY";
	INSTANCE_KEY = "APP-STORE-INSTANCE-KEY";
	CONTACTPERSON_KEY = "APP-Store-CONTACTPERSON-KEY";
	APPLICATION_KEY = "APP-STORE-APPLICATION-KEY"

};