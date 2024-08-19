const express = require('express');
var router= express.Router();
var EventModel=require("../Models/eventModel");

router.post("/event/create",async(req,res)=>{
    try{
        var{title,description,imageUrl}=req.body;
        if(title==null || title==undefined)
            {
                res.status(200).json(
                    {
                        status:false,
                        msg:"title is  not defined"
        
                    }
                )
                return;
            }
        if(description==null || description==undefined)
            {
                res.status(200).json(
                    {
                        status:false,
                        msg:"description is  not defined"
        
                    }
                )
                return;
            }
        if(imageUrl==null || imageUrl==undefined)
            {
                res.status(200).json(
                    {
                        status:false,
                        msg:"imageUrl is  not defined"
        
                    }
                )
                return;
            }

        var data=new EventModel();
        data.title=title;
        data.description=description;
        data.imageUrl=imageUrl;
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

    router.post("/event/delete", async (req, res) => {
        try {
            var {_id} = req.body;
    
            if (_id == null || _id == undefined) {
                res.status(200).json({
                    status: false,
                    msg: "id is not defined"
                });
                return;
            }
    
            var deletedData = await EventModel.findByIdAndDelete(_id);
    
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