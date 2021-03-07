// JSON schema for the incoming payload
const payloadSchema = {
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

module.exports = payloadSchema;
