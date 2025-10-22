export const publicProfile = (req,res) => {
    const username = req.params.username
    
    res.render('public-profile',{
        title : username,
        username : username,
        bio : "Haiii" 
    })
}
export const privateProfile = async (req, res) => {
    try {
        res.status(200).json({
            message : "Private Profile Berhasil Diakses",
            data : null,
        });
    }catch (error) {
        res.status(500).json({
            message : error.message,
            data : null,
        })
    }
};