const express = require('express');
var router= express.Router();
var ContentModel=require("../Models/contentModel");

router.post("/paragraph/create",async(req,res)=>{
    try{
        var{para}=req.body;
        if(para==null || para==undefined)
            {
                res.status(200).json(
                    {
                        status:false,
                        msg:"paragraph is  not defined"
        
                    }
                )
                return;
            }
        
        var data=new ContentModel();
        data.para=para;
        await data.save()

        res.status(200).json(
            {
                status:true,
                msg:"success",
                user:data
            }
        )
        return;
    }
    catch(e){
        console.log(e);
    }
    });

    router.post("/para/delete", async (req, res) => {
        try {
            var {_id} = req.body;
    
            if (_id == null || _id == undefined) {
                res.status(200).json({
                    status: false,
                    msg: "id is not defined"
                });
                return;
            }
    
            var deletedData = await ContentModel.findByIdAndDelete(_id);
    
            if (deletedData) {
                res.status(200).json({
                    status: true,
                    msg: "Data deleted successfully",
                    user: deletedData
                });
            } else {
                res.status(200).json({
                    status: false,
                    msg: "No data found with the provided _id"
                });
            }
            return;
        } catch (e) {
            console.log(e);
            res.status(500).json({
                status: false,
                msg: "An error occurred while deleting the data"
            });
        }
    });
    

    module.exports = router;