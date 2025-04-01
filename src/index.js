const DataDogProvider = require("./providers/datadog");

class LoggerFacade {
  constructor() {
    this.providers = {
      datadog: DataDogProvider,
    };
  }

  getDataDogInstance(options) {
    return new this.providers.datadog(options);
  }
}

module.exports = new LoggerFacade();
