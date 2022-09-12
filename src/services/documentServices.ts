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

async function checkOwnership(userId: number, documentId: number) {

    const result = await documentRepository.checkOwnership(userId, documentId);

    if (result === null) {
        throw { code: "error_InvalidRequest", message: "Invalid Request!" };
    }

    return result;
}

async function searchById(userId: number, documentId: number) {

    const documentData = await checkOwnership(userId, documentId);

    return documentData;
}

async function deleteById(userId: number, documentId: number) {

    await checkOwnership(userId, documentId);
    await documentRepository.deleteById(documentId);
}

const documentServices = {

    create,
    search,
    searchById,
    deleteById
}

export default documentServices;