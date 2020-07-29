import UserList from "../components/userlist";
import Login from "../components/login";
export default {
  
    routes: [
      {
        path: "/userlist",
        component: UserList,
        exact: true
      },
      {
        path: "/",
        component: Login,
        exact: true
      },
      
    ],
  };
