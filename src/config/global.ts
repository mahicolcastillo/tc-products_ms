import { parseConfig } from '../utils/parseConfig.util';

const config = parseConfig({
    globalPath: {
        info        : "Base path for microservice",
        default     : "/microservice/tc-products_ms",
    },
    headers: {
        info        : "Headers require for all operations",
        default     : [

        ]
    },
    port: {
        info        : "Port for application",
        env         : "PORT",
        required    : true,
    }
});

export default config;