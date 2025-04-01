# Usage
```
    const loggerFacade = require('@tadev77/logger-facade')
    
    const logger = loggerFacade.getDataDogInstance({
        apiKey: 'my-api-key',
        serviceName: 'my-service'
    });

    logger.sendLog('info', { message: 'my first log' })
```