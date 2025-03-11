// swagger.js
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "API Documentation",
      version: "1.0.0",
      description: "Documentação da API usando Swagger",
      contact: {
        name: "Victor Freire",
        email: "victor.desenvolvedor@gmail.com",
      },
      license: {
        name: "MIT",
      },
    },
    servers: [
      {
        url: "http://localhost:5000/api/v1",
        description: "Servidor local",
      },
    ],
    components: {
      schemas: {
        Device: {
          type: "object",
          properties: {
            id: {
              type: "integer",
              description: "ID do dispositivo",
            },
            color: {
              type: "string",
              description: "Cor do dispositivo",
            },
            partNumber: {
              type: "integer",
              description: "Número da peça do dispositivo",
            },
            categoryId: {
              type: "integer",
              description: "ID da categoria associada",
            },
            category: {
              $ref: "#/components/schemas/Category",
            },
          },
        },
        DeviceInput: {
          type: "object",
          properties: {
            color: {
              type: "string",
              description: "Cor do dispositivo",
            },
            partNumber: {
              type: "integer",
              description: "Número da peça do dispositivo",
            },
            categoryId: {
              type: "integer",
              description: "ID da categoria associada",
            },
          },
        },
        Category: {
          type: "object",
          properties: {
            id: {
              type: "integer",
              description: "ID da categoria",
            },
            name: {
              type: "string",
              description: "Nome da categoria",
            },
          },
        },
        CategoryInput: {
          type: "object",
          properties: {
            name: {
              type: "string",
              description: "Nome da categoria",
            },
          },
        },
      },
    },
  },
  apis: ["./src/routes/*.js"],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

module.exports = { swaggerUi, swaggerDocs };
