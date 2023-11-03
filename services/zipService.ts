import { CentralDirectory, Open } from "unzipper";

export class ZipService {
    private readonly _zipPath: string;
    private readonly _zipPassword: string | null;

    constructor(zipPath: string, zipPassword: string | null = null) {
        this._zipPath = zipPath;
        this._zipPassword = zipPassword;
    }

    public async getFilesContent(): Promise<Array<string>> {
        const dir: CentralDirectory = await Open.file(this._zipPath);
        const filesContent = new Array<string>();
        console.debug(`Number of files: ${dir.files.length}`)

        for (let file of dir.files) {
            console.debug(`Extracting file: ${file.path}`);
            let extracted: Buffer;

            if (this._zipPassword !== null) {
                extracted = await file.buffer(this._zipPassword);
            } else {
                extracted = await file.buffer();
            }

            filesContent.push(extracted.toString());
        }

        return filesContent;
    }
}