    switch (process.env.NODE_ENV) {
        case 'development':
            process.env.port = 3000;
            process.env.host = 'mongodb://localhost:27017/notes';
           
            break;
        case 'production' :
            process.env.port = 8000;
            process.env.host = 'mongodb://localhost:27017/notes';
            
            break;
        default:
            
            process.env.port = 3000;
            process.env.host = 'mongodb://localhost:27017/notes';
            
            break;
    }
