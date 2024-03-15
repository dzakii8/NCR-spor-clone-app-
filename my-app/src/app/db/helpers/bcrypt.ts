import bcrypt from "bcryptjs"

export const hashPassword = (password: string) => bcrypt.hashSync(password);
export const verifyPassword = (password: string, hashedPassword: string) => bcrypt.compareSync(password, hashedPassword)
