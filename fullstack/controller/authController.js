import userModel from "../models/userModel.js";


export const register = async (req, res) => {
    try {
        // Untuk mengambil body atau data dari request 
        const registerData = req.body

        console.log(registerData);

        await userModel.create ({
            username : registerData.username,
            email : registerData.email,
            password : registerData.password
        })
         
        res.status(201).json({
            massage : "Berhasil register, silahkan login",
            data : null
        })
    }catch(e){
        res.status(500).json({
            massage : "Berhasil register, silahkan login",
            data : null
        })
    }
}