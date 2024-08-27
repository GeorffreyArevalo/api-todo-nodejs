import { User } from "../models/index.js";

export const existUserByUsername = async( username = '' ) => {
    const user = await User.findOne({username});
    if(user) {
        throw new Error(`El nombre de usuario ${username} ya existe.`);
    }
}
