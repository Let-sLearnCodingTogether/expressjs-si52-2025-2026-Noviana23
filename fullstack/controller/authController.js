import userModel from "../models/userModel.js";
import {compare, hash} from "../utils/hashUtil.js";
import { jwtSignUtil } from "../../utils/jwtSignUtil.js";


export const register = async (req, res) => {
    try {
        // Untuk mengambil body atau data dari request 
        const registerData = req.body
        console.log(registerData);

        const hashPassword = hash(registerData.password)

        await userModel.create ({
            username : registerData.username,
            email : registerData.email,
            password : registerData.password
        })
         
        res.status(201).json({
            massage : "Berhasil register, silahkan login",
            data : null
        })
    }catch(e) {
        res.status(500).json({
            massage : "Berhasil register, silahkan login",
            data : null
        })
    }
}
    export const login = async(req,res) => {
        try {
            const loginData = req.body 
            const user = await UserModel.findOne({
                email : loginData.email
            })
            if (!user){
                res.status(404).json({
                    message : "User tidak ditemukan", 
                    data : null
                })
            }
            if (user.password == loginData.password){
                return res.status(200).json({
                    message : "Login Berhasil",
                    data : {
                        username : user.username,
                        email : user.email,
                        token : "TOKEN"
                    }
                })
            }
            if(compare(loginData.password, user.password)){
                return res.status(200).json({
                    message : "Login Berhasil", 
                    data : {
                        username : user.username,
                        email : user.email,
                        token : jwtSignUtil(user)
                    }
                })
            }
            return res.status(401).json({
                message : "Login gagal",
                data : null
            })
        }catch {error}{
            res.status(500).json({
                message : error,
                data : null 
            })
        }
    }