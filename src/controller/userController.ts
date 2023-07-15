interface UserController {
    saveContent(request: any, response: any): any;
    getContent(request: any, response: any): any;
}

const saveContent = async (request: any, response: any) => {
    try {
        return response.status(201).json()
    } catch (ex) {
        throw ex
    }
}

const getContent = async (request: any, response: any) => {
    try {
        return response.status(200).json();
    } catch (ex) {
        throw ex
    }
}

const userController: UserController = {
    saveContent,
    getContent
}

export default userController;