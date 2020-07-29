const authenticate_user = params => {
    if (params.email === "hruday@gmail.com" && params.password === "hruday123") {
        return { message: "Login Successfully" }

    } else {
        return { message: "Invalid Username and Password" }

    }
}
const user_list = () => {
    return [{ id: 1, name: 'test1', age: 34, gender: "MALE", email: "Test1@gmail.com", phone: 3244343434 },
    { id: 2, name: 'test1', age: 34, gender: "MALE", email: "Test2@gmail.com", phone: 4434343434 },
    { id: 3, name: 'test1', age: 24, gender: "FEMALE", email: "Test3@gmail.com", phone: 9078843300 },
    { id: 4, name: 'test1', age: 54, gender: "MALE", email: "Test4@gmail.com", phone: 8596859695 },
    { id: 5, name: 'test1', age: 74, gender: "MALE", email: "Test5@gmail.com", phone: 7981032656 },
    { id: 6, name: 'test1', age: 24, gender: "FEMALE", email: "Test6gmail.com", phone: 7894567982 },

    ]
}
export default {
    authenticate_user,
    user_list
};



