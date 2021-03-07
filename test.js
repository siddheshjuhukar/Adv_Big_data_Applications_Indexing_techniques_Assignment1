var Validator = require('jsonschema').Validator;
var v = new Validator();
var instance = {
  "planCostShares": {
      "deductible": 2000,
      "_org": "example.com",
      "copay": 23,
      "objectId": "1234vxc2324sdf-501",
      "objectType": "membercostshare"      
  },
  "linkedPlanServices": [{
      "linkedService": {
          "_org": "example.com",
          "objectId": "1234520xvc30asdf-502",
          "objectType": "service",
          "name": "Yearly physical"
      },
      "planserviceCostShares": {
          "deductible": 10,
          "_org": "example.com",
          "copay": 0,
          "objectId": "1234512xvc1314asdfs-503",
          "objectType": "membercostshare"
      },
      "_org": "example.com",
      "objectId": "27283xvx9asdff-504",
      "objectType": "planservice"
  }, {
      "linkedService": {
          "_org": "example.com",
          "objectId": "1234520xvc30sfs-505",
          "objectType": "service",
          "name": "well baby"
      },
      "planserviceCostShares": {
          "deductible": 10,
          "_org": "example.com",
          "copay": 175,
          "objectId": "1234512xvc1314sdfsd-506",
          "objectType": "membercostshare"
      },      
      "_org": "example.com",      
      "objectId": "27283xvx9sdf-507",
      "objectType": "planservice"
  }],
  "objectId": "12xvxc345ssdsds-508",
  "objectType": "plan",
  "planType": "inNetwork",
  "creationDate": "12-12-2017"
};
var schema = {
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "properties": {
    "planCostShares": {
      "type": "object",
      "properties": {
        "deductible": {
          "type": "integer"
        },
        "_org": {
          "type": "string"
        },
        "copay": {
          "type": "integer"
        },
        "objectId": {
          "type": "string"
        },
        "objectType": {
          "type": "string"
        }
      },
      "required": [
        "deductible",
        "_org",
        "copay",
        "objectId",
        "objectType"
      ],
      "additionalProperties": false
    },
    "linkedPlanServices": {
      "type": "array",
      "items": [
        {
          "type": "object",
          "properties": {
            "linkedService": {
              "type": "object",
              "properties": {
                "_org": {
                  "type": "string"
                },
                "objectId": {
                  "type": "string"
                },
                "objectType": {
                  "type": "string"
                },
                "name": {
                  "type": "string"
                }
              },
              "required": [
                "_org",
                "objectId",
                "objectType",
                "name"
              ],
              "additionalProperties": false
            },
            "planserviceCostShares": {
              "type": "object",
              "properties": {
                "deductible": {
                  "type": "integer"
                },
                "_org": {
                  "type": "string"
                },
                "copay": {
                  "type": "integer"
                },
                "objectId": {
                  "type": "string"
                },
                "objectType": {
                  "type": "string"
                }
              },
              "required": [
                "deductible",
                "_org",
                "copay",
                "objectId",
                "objectType"
              ],
              "additionalProperties": false
            },
            "_org": {
              "type": "string"
            },
            "objectId": {
              "type": "string"
            },
            "objectType": {
              "type": "string"
            }
          },
          "required": [
            "linkedService",
            "planserviceCostShares",
            "_org",
            "objectId",
            "objectType"
          ],
          "additionalProperties": false
        },
        {
          "type": "object",
          "properties": {
            "linkedService": {
              "type": "object",
              "properties": {
                "_org": {
                  "type": "string"
                },
                "objectId": {
                  "type": "string"
                },
                "objectType": {
                  "type": "string"
                },
                "name": {
                  "type": "string"
                }
              },
              "required": [
                "_org",
                "objectId",
                "objectType",
                "name"
              ],
              "additionalProperties": false
            },
            "planserviceCostShares": {
              "type": "object",
              "properties": {
                "deductible": {
                  "type": "integer"
                },
                "_org": {
                  "type": "string"
                },
                "copay": {
                  "type": "integer"
                },
                "objectId": {
                  "type": "string"
                },
                "objectType": {
                  "type": "string"
                }
              },
              "required": [
                "deductible",
                "_org",
                "copay",
                "objectId",
                "objectType"
              ],
              "additionalProperties": false
            },
            "_org": {
              "type": "string"
            },
            "objectId": {
              "type": "string"
            },
            "objectType": {
              "type": "string"
            }
          },
          "required": [
            "linkedService",
            "planserviceCostShares",
            "_org",
            "objectId",
            "objectType"
          ],
          "additionalProperties": false
        }
      ]
    },
    "_org": {
      "type": "string"
    },
    "objectId": {
      "type": "string"
    },
    "objectType": {
      "type": "string"
    },
    "planType": {
      "type": "string"
    },
    "creationDate": {
      "type": "string"
    }
  },
  "required": [
    "planCostShares",
    "linkedPlanServices",
    "_org",
    "objectId",
    "objectType",
    "planType",
    "creationDate"
  ],
  "additionalProperties": true
}
console.log(v.validate(instance, schema, {required: true}));