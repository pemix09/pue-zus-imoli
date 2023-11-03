import { XMLParser } from "fast-xml-parser";
import { IEZla } from "../models/e-zla";

export class ZusXmlParser {
    private readonly _xmlParser: XMLParser;

    constructor() {
        this._xmlParser = new XMLParser();
    }

    public parse(xml: string): IEZla {
        const parsedXml: any = this._xmlParser.parse(xml);
        const eZla: IEZla = parsedXml["wnio:Dokument"]["wnio:TrescDokumentu"];

        return eZla;
    }
}