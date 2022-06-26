const fs = require('fs');
// Configure Angular `environment.ts` file path
const targetPath = './src/environments/environment.ts';
require('dotenv').config({
  path:'.env'
});

// `environment.ts` file structure
const envConfigFile = `export const environment = {
   GIPHY_API_URL: '${process.env['GIPHY_API_URL']}',
   GIPHY_API_KEY: '${process.env['GIPHY_API_KEY']}',
   GIPHY_API_VERSION: '${process.env['GIPHY_API_VERSION']}',
   nodeEnv: '${process.env['NODE_ENV']}',
   production: '${process.env['PRODUCTION']}'
};
`;
console.log('The file `environment.ts` will be written with the following content: \n');
console.log(envConfigFile);

fs.writeFile(targetPath, envConfigFile, function (err: Error) {
   if (err) {
       throw console.error(err);
   } else {
       console.log(`Angular environment.ts file generated correctly at ${targetPath} \n`);
   }
});
