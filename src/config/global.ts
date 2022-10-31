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
    },
    tokens: {
        tokenSecret: {
            info        : "Token Secret JWT",
            env         : "TOKEN_SECRET",
            required    : true,
        },
        tokenSesion: {
            info        : "Token Sesion",
            env         : "TOKEN_SESION",
            required    : true,
        },
    },
    database: {
        prefix: {
            info: "Prefix database",
            env: "DB_PREFIX",
            required: true,
        },
        user: {
            info: "User database",
            env: "DB_USER",
            required: true,
        },
        pass: {
            info: "Password user database",
            env: "DB_PASS",
            required: true,
        },
        host: {
            info: "IP/HOST database",
            env: "DB_HOST",
            required: true,
        },
    }
});

export default config;