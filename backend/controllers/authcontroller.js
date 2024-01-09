import db from "../models/index.js";
import { generateToken } from "../utils/jwt.js";
const { UserModel } = db

export const signup = async (req, res) => {
    const { firstName, lastName, email, password } = req.body
    try {
        //check user if is exist
        const existingUser = await UserModel.findOne({ where: { email } })
        if (existingUser) {
            res.status(201).json({ message: "Email already in use" })
        }
        if (!existingUser) {
            const user = await UserModel.create({ firstName, lastName, email, password })
            return res.status(200).json({ message: "user created successfully", user })
        }

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const login = async (req, res) => {

    const { email, password } = req.body
    try {
        const user = await UserModel.findOne({ where: { email } })
        if (!user || !user.validPassword(password)) {
            return res.status(401).json({ message: "invalid password or email" })
        }
        const token = generateToken(user)
        return res.cookie("token", token, {
            httpOnly: true,
            secure: true,
            sameSite: "None",
        })
            .json({ status: 200, message: "login successful", token: token })
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const loggedInUser = async (req, res) => {
    const user = await UserModel.findByPk(req.user.id)
    return res.json({ user: user }).status(200);

}

export const logout = async (req, res) => {
    return res.clearCookie('token')
        .json({ message: 'Logged out' });
}