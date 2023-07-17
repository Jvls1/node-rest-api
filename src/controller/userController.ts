interface UserController {
    saveContent(request: any, response: any): any;
    getContent(request: any, response: any): any;
}

const getContent = async (request: any, response: any) => {
    try {
        // console.log(request);
        // console.log(response);
        return response.status(200).json();
    } catch (ex) {
        throw ex
    }
}

const saveContent = async (request: any, response: any) => {
    try {
        console.log(typeof(request));
        console.log(typeof(response));
        return response.status(201).json()
    } catch (ex) {
        throw ex
    }
}

const userController: UserController = {
    saveContent,
    getContent
}

export default userController;