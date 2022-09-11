import { IDocumentData } from "../types/documentTypes";
import { documents } from "@prisma/client";

import documentRepository from "../repositories/documentRepository.js";

async function create(userId: number, documentData: IDocumentData) {

    const { type, name, emissionDate, validate, registrationNumber, issuer }: IDocumentData = documentData;

    const data: Omit<documents, "id"> = {
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

async function search(userId: number) {

    const documentsData: documents[] = await documentRepository.search(userId);

    return documentsData;
}

const documentServices = {

    create,
    search
}

export default documentServices;