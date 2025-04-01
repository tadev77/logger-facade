const DataDogProvider = require("./providers/datadog");

class LoggerFacade {
  constructor() {
    this.providers = {
      datadog: DataDogProvider,
    };
  }
/**
 * returns a logger instance that uses datadog under the hood
 * 
 * @param {Object} options - Configuration object.
 * @param {string} options.apiKey - API key for Datadog.
 * @param {string} options.serviceName - Service name for Datadog.
 * 
 * @returns {Object} A instância configurada para envio de logs ao Datadog.
 * 
 * @example
 * const loggerFacade = require('@tadev77/logger-facade');
 * 
 * const logger = loggerFacade.getDataDogInstance({
 *   apiKey: 'my-api-key',
 *   serviceName: 'my-service',
 * });
 * 
 * logger.sendLog('info', { message: 'My first log!' });
 */
  getDataDogInstance(options) {
    return new this.providers.datadog(options);
  }
}

module.exports = new LoggerFacade();
