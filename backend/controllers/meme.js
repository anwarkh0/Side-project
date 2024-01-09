import { where } from "sequelize";
import db from "../models/index.js";
const { MemeModel, UserModel } = db

export const addMeme = async (req, res) => {
    const { caption, userId } = req.body;
    const image = req.file.path;

    try {

        const newMeme = await MemeModel.create({
            image,
            caption,
            userId,
            image: image

        });



        res.status(200).json({ "message": "Meme added successfully", "data": newMeme });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}
export const getMeme = async (req, res) => {
    const { id } = req.params;
    try {

        const Meme = await MemeModel.findByPk(id, { include: [UserModel] });


        if (Meme) {
            res.status(200).json({ "data": Meme });
        }
        else {
            res.status(404).json({ message: "Meme not found" });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}
export const getAllMeme = async (req, res) => {

    try {

        const Meme = await MemeModel.findAll({ include: [UserModel] });



        res.status(200).json({ data: Meme });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

export const getMemesByUser = async (req, res) => {
    const { userId } = req.params
    console.log(req.body,"asdsad")
    try {
        const memesUser = await MemeModel.findAll({ where: { userId } }/* , { include: [UserModel] } */)
        return res.status(200).json(memesUser)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}
export const updateMeme = async (req, res) => {
    const id = req.body.id;
    const { caption, userId } = req.body;
    const image = req.file.path;

    try {
        const updatedMeme = await MemeModel.update(
            {
                image: image,
                caption,
                userId,
            },
            { where: { id } }
        );
        return res.status(200).json(updatedMeme);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
export const deleteMeme = async (req, res) => {
    const id = req.body.id;
    try {
        await MemeModel.destroy({ where: { id } });
        res.status(200).json({ message: "Meme deleted successfully" });
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: " could not delete Meme" });
    }
};