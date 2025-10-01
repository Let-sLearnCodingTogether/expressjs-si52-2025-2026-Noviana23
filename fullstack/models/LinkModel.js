import mongoose from "mongoose"
const username = new mongoose.Schema(
    {
        title : {
            type : String,
            require :[true, "Title wajib di isi"],
            unique : true, 
            trim : true
        },
        icon : {
            type : String,
            require :[true, "Icon wajib di isi"],
            unique : true, 
            trim : true
        },
        url : {
            type : String,
            require :[true, "Url wajib di isi"],
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

const linkModel = mongoose.Model("User", linkModel)

export default userModel 