const express = require('express');
var router= express.Router();
var ExecomModel=require("../Models/execomModel");

router.post("/execom/create",async(req,res)=>{
    try{
        var{name,position,description,imageUrl,linkedInUrl,InstagramUrl}=req.body;
        if(name==null || name==undefined)
            {
                res.status(200).json(
                    {
                        status:false,
                        msg:"name is  not defined"
        
                    }
                )
                return;
            }
        if(position==null || position==undefined)
            {
                res.status(200).json(
                    {
                        status:false,
                        msg:"position is  not defined"
        
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
        if(linkedInUrl==null || linkedInUrl==undefined)
            {
                res.status(200).json(
                    {
                        status:false,
                        msg:"linkedInUrl is  not defined"
        
                    }
                )
                return;
            }
        if(InstagramUrl==null || InstagramUrl==undefined)
            {
                res.status(200).json(
                    {
                        status:false,
                        msg:"InstagramUrl is  not defined"
        
                    }
                )
                return;
            }

        var data=new ExecomModel();
        data.name=name;
        data.position=position;
        data.description=description;
        data.imageUrl=imageUrl;
        data.linkedInUrl=linkedInUrl;
        data.InstagramUrl=InstagramUrl;
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

    router.post("/execom/delete", async (req, res) => {
        try {
            var {_id} = req.body;
    
            if (_id == null || _id == undefined) {
                res.status(200).json({
                    status: false,
                    msg: "id is not defined"
                });
                return;
            }
    
            var deletedData = await ExecomModel.findByIdAndDelete(_id);
    
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