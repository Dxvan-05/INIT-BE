const express = require('express');
var router= express.Router();
var EventModel=require("../Models/eventModel");

router.post("/event/create",async(req,res)=>{
    try{
        var{title,description,imageUrl,registerLink}=req.body;
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
        if(registerLink==null || registerLink==undefined)
            {
                res.status(200).json(
                    {
                        status:false,
                        msg:"registerLink is  not defined"
        
                    }
                )
                return;
            }

        var data=new EventModel();
        data.title=title;
        data.description=description;
        data.imageUrl=imageUrl;
        data.registerLink=registerLink;
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

    router.put("/update/event", async (req, res) => {
        try {
            const {_id,title,description,imageUrl,registerLink} = req.body;
            if (!_id) {
                return res.status(200).json({
                    status: false,
                    msg: "_id is not defined"
                });
            }
    
            const updatedEvent = await EventModel.findByIdAndUpdate(
                _id,
                {
                    title: title,
                    description: description,
                    imageUrl: imageUrl,
                    registerLink: registerLink
                },
                { new: true }
            );
    
            if (updatedEvent) {
                return res.status(200).json({
                    status: true,
                    msg: "event updated successfully",
                    event: updatedEvent
                });
            } else {
                return res.status(200).json({
                    status: false,
                    msg: "No event found with the provided _id"
                });
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({
                status: false,
                msg: "An error occurred while updating the event"
            });
        }
    });

    router.get('/event/data', async (req, res) => {
        try {
          const items = await EventModel.find();
          res.json({ status: 'success', data: items });
        } catch (err) {
          res.status(500).json({ status: 'error', message: err.message });
        }
      });

    module.exports = router;