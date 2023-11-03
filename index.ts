import { IEZla } from "./models/e-zla";
import { ZipService } from "./services/zipService";
import { ZusService } from "./services/zusService";
import { ZusXmlParser } from "./services/zusXmlParser";
import * as dotenv from "dotenv";

dotenv.config();

const zipPath: string | undefined = process.env.ZIP_PATH;
const zipPassword: string | undefined = process.env.ZIP_PASSWORD;

if (!zipPath) {
    throw new Error("Wrong configuration provided, make sure there's .env file with ZIP_PATH and ZIP_PASSWORD variables");
}

const zipService = new ZipService(zipPath, zipPassword);
const zusXmlParser = new ZusXmlParser();
const zusService = new ZusService();


zipService.getFilesContent().then(files => {
    const eZlas = new Array<IEZla>();
    
    for (let fileContent of files) {
        let eZla = zusXmlParser.parse(fileContent);
        eZlas.push(eZla);
    }

    zusService.processFiles(eZlas);
}).catch((err) => {
    console.error(err);
});
