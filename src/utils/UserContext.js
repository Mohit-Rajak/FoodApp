import { createContext } from "react";

const UserContext = createContext({
	user: { name: "mohit", email: "mohit@gmail.com" },
});
export default UserContext;
UserContext.displayName = "UserContext";
