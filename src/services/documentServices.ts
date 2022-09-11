import { IDocumentData } from "../types/documentTypes";
import { documents as document } from "@prisma/client";

import documentRepository from "../repositories/documentRepository.js";

async function create(userId: number, documentData: IDocumentData) {

    const { type, name, emissionDate, validate, registrationNumber, issuer }: IDocumentData = documentData;

    const data: Omit<document, "id"> = {
        userId: userId,
        type: type,
        name: name,
        emissionDate: emissionDate,
        validate: validate,
        registrationNumber: registrationNumber,
        issuer: issuer
    }

    await documentRepository.insert(data);
}

const documentServices = {

    create
}

export default documentServices;