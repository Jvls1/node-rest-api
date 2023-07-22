import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

interface UserController {
    createContent(request: any, response: any): any;
    readContent(request: any, response: any): any;
    updateContent(request: any, response: any): any;
    deleteContent(request: any, response: any): any;
}

const createContent = async (request: any, response: any) => {
    try {
        const requestUser = request.body;
        const user = await prisma.user.create({
            data: {
                email: requestUser.email,
                firstName: requestUser.firstName,
                lastName: requestUser.lastName,
                isAdmin: false
            }
        });

        return response.status(201).json(user)
    } catch (ex) {
        return response.status(500).json(ex);
    }
}

const readContent = async (request: any, response: any) => {
    try {
        const user = await prisma.user.findUnique({
            where: {
                id: parseInt(request.params.id)
            },
        });
        if (user != null)
            return response.status(200).json(user);
        return response.status(404).json("User not found");
    } catch (ex) {
        return response.status(500).json(ex);
    }
}

const updateContent = async (request: any, response: any) => {
    try {
        const user = await prisma.user.update({
            where: {
                id: parseInt(request.params.id)
            },
            data: {
                email: request.body.email,
                firstName: request.body.firstName,
                lastName: request.body.lastName,
                isAdmin: request.body.isAdmin
            }
        })
    } catch (ex) {

    }
}

const deleteContent = async (request: any, response: any) => {
    try {
        const deleteUser = await prisma.user.delete({
            where: {
                id: parseInt(request.params.id)
            },
        })
        response.status(204);
    } catch (ex) {

    }
}

const userController: UserController = {
    createContent,
    readContent,
    updateContent,
    deleteContent
}

export default userController;