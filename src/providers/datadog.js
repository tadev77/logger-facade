const { createLogger, format, transports } = require("winston");

module.exports = class DataDogProvider {
  constructor(options) {
    this.apiKey = options.apiKey;
    this.serviceName = options.serviceName;

    const httpTransportOptions = {
      host: "http-intake.logs.datadoghq.com",
      path: `/api/v2/logs?dd-api-key=${this.apiKey}&ddsource=nodejs&service=${this.serviceName}`,
      ssl: true,
    };

    this.logger = createLogger({
      format: format.json(),
      exitOnError: false,

      transports: [new transports.Http(httpTransportOptions)],
    });
  }

  sendLog(level, data) {
    this.logger.log(level, data.message, data);
  }
};
