define({ "api": [
  {
    "type": "get",
    "url": "/",
    "title": "API version",
    "name": "DefaultCall",
    "group": "Default",
    "version": "0.0.1",
    "description": "<p>Returns the API version number</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost/",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Shows the API version</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"message\": \"ProcessRobot API v0.0.1\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./api.py",
    "groupTitle": "Default"
  },
  {
    "type": "get",
    "url": "/latestlogrecord/[:event_type]",
    "title": "Get latest log record",
    "name": "LatestLogRecord",
    "group": "Log",
    "version": "0.0.1",
    "description": "<p>Function for getting the latest log record from ProcessRobot. If no optional parameter is given, the latest log record, regardless of type, is returned.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "event_type",
            "description": "<p>Optional parameter if you only want to return a log record of a given type. The parameters INFO, WARN, ERROR and ALL are valid parameters.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost/latestlogrecord/",
        "type": "curl"
      },
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost/latestlogrecord/ERROR/",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "status",
            "description": "<p>Status code (200)</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "log_id",
            "description": "<p>The ProcessRobot ID for the log record</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "process-name",
            "description": "<p>Name of the ProcessRobot process the log record is related to</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "event_id",
            "description": "<p>The ProcessRobot EventID for the log record</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "log_level",
            "description": "<p>The level of the log record. Can be either INFO, WARN og ERROR</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>The log message</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "additional_data",
            "description": "<p>Any additional data about the log record, that ProcessRobot might provide</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "process_id",
            "description": "<p>The ProcessRobot ID of the process that generated the log record</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "timestamp",
            "description": "<p>Timestamp for the log record</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 200,\n    \"log_id\": 285753,\n    \"process-name\": \"My ProcessRobot Process Name\",\n    \"event_id\": 1002,\n    \"log_level\": \"INFO\",\n    \"message\": \"Process 'My ProcessRobot Process Name' completed with result: Success\",\n    \"additional_data\": null,\n    \"process_id\": \"8A37BA48-74FC-4C75-905F-C965774011DB\",\n    \"timestamp\": \"2020-02-10 06:50:15\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./api.py",
    "groupTitle": "Log",
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n\"status\": 404,\n\"message\": \"Unknown parameter. Only INFO, WARN, ERROR and ALL are valid parameters\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/latestlogtimestamp/[:event_type]",
    "title": "Latest log timestamp",
    "name": "LatestLogTimestamp",
    "group": "Log",
    "version": "0.0.1",
    "description": "<p>Returns the timestamp of the latest log record in ProcessRobot. If no optional parameter is given, the latest log record, regardless of type, is returned.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "event_type",
            "description": "<p>Optional parameter if you only want to return a log record of a given type. The parameters INFO, WARN, ERROR and ALL are valid parameters.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost/latestlogtimestamp/",
        "type": "curl"
      },
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost/latestlogtimestamp/INFO/",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "status",
            "description": "<p>Status code (200)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "timestamp",
            "description": "<p>Timestamp of the log record</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "log_level",
            "description": "<p>The level of the log record</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 200,\n    \"timestamp\": \"2020-02-10 06:50:15\",\n    \"log_level\": \"INFO\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./api.py",
    "groupTitle": "Log",
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n\"status\": 404,\n\"message\": \"Unknown parameter. Only INFO, WARN, ERROR and ALL are valid parameters\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/timesincelastlogentry/[:event_type]",
    "title": "Time since last log entry",
    "name": "TimeSinceLastLogEntry",
    "group": "Log",
    "version": "0.0.1",
    "description": "<p>Returns the number of seconds since last log entry in ProcessRobot. If no optional parameter is given, the time since the latest log record, regardless of type, is returned.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "event_type",
            "description": "<p>Optional parameter if you only want to return the time since a log record of a given type was recorded. The parameters INFO, WARN, ERROR and ALL are valid parameters.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost/timesincelastlogentry/",
        "type": "curl"
      },
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost/timesincelastlogentry/INFO/",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "status",
            "description": "<p>Status code (200)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "log_level",
            "description": "<p>The level of the log record</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "seconds_since_last_log",
            "description": "<p>The number of seconds since the log entry was recorded by Processrobot.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 200,\n    \"log_level\": \"INFO\",\n    \"seconds_since_last_log\": 7136\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./api.py",
    "groupTitle": "Log",
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n\"status\": 404,\n\"message\": \"Unknown parameter. Only INFO, WARN, ERROR and ALL are valid parameters\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/queuestats/",
    "title": "Queue stats",
    "name": "QueueStats",
    "group": "Queue",
    "version": "0.0.1",
    "description": "<p>Returns a list of all queues in ProcessRobot, including the number of new items in each queue.</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost/queuestats/",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "queue_id",
            "description": "<p>ProcessRobots ID on the queue</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "queue_name",
            "description": "<p>The Processrobot name of the queue</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "item_type",
            "description": "<p>The data type of the queue</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "new_items",
            "description": "<p>Number of new (unprocessed) items in the queue</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "total_queues",
            "description": "<p>Total number of queues in ProcessRobot</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"0\": {\n        \"queue_id\": 3,\n        \"queue_name\": \"My first queue\",\n        \"item_type\": \"Numeric\",\n        \"new_items\": 3\n    },\n    \"1\": {\n        \"queue_id\": 6,\n        \"queue_name\": \"My second queue\",\n        \"item_type\": \"Custom Object\",\n        \"new_items\": 156\n    },\n    \"total_queues\": 2\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./api.py",
    "groupTitle": "Queue"
  },
  {
    "type": "get",
    "url": "/getqueueItemsfromqueue/[:queue_id]",
    "title": "Queue items from queue",
    "name": "QueueItemsFromQueueById",
    "group": "Queue",
    "version": "0.0.1",
    "description": "<p>Returns a list of all queue items in ProcessRobot by queue id. You can get the id from calling /queuestats/.</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost/getqueueitemsfromqueue/[:queue_id]",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "queue_item_id",
            "description": "<p>ProcessRobots ID on the queue item</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "queue_item_type",
            "description": "<p>The Processrobot type of the queue item</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "queue_value",
            "description": "<p>The data of the queue item</p>"
          },
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "priority",
            "description": "<p>The priority of the queue item</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"0\": {\n        \"queue_id\": 3,\n        \"queue_name\": \"My first queue\",\n        \"item_type\": \"Numeric\",\n        \"new_items\": 3\n    },\n    \"1\": {\n        \"queue_id\": 6,\n        \"queue_name\": \"My second queue\",\n        \"item_type\": \"Custom Object\",\n        \"new_items\": 156\n    },\n    \"total_queues\": 2\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./api.py",
    "groupTitle": "Queue"
  }
] });
