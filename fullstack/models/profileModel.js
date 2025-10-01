import mongoose from "mongoose"
const username = new mongoose.Schema(
    {
        displayName : {
            type : String,
            require :[true, "Display Name wajib di isi"],
            unique : true, 
            trim : true
        },
        profilePicture : {
            type : String,
            require :[true, "Profile Picture di isi"],
            unique : true, 
            trim : true
        },
        bio : {
            type : String,
            minLeght : [10, "minimal 10 karakter"],
            maxLeght : [10,"maximal 150 karakter"],
            require :[true, "Bio wajib di isi"],
            trim : true
        },
        user  : {
            type : mongoose.Schema.Types.ObjectId,
            ref : "User",
            trim : true

        },
    },
    {
        timestamps : true 
    }
)

const profileModel = mongoose.Model("User", profileModel)

export default userModel 