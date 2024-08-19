const express = require('express');
var router= express.Router();
var ContentModel=require("../Models/contentModel");

router.post("696",async(req,res)=>{
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

    router.put("/update/content", async (req, res) => {
        try {
            const {_id,para} = req.body;
            if (!_id) {
                return res.status(200).json({
                    status: false,
                    msg: "_id is not defined"
                });
            }
    
            const updatedParagraph = await ContentModel.findByIdAndUpdate(
                _id,
                {
                    para: para
                },
                { new: true }
            );
    
            if (updatedParagraph) {
                return res.status(200).json({
                    status: true,
                    msg: "Paragraph updated successfully",
                    paragraph: updatedParagraph
                });
            } else {
                return res.status(200).json({
                    status: false,
                    msg: "No Paragraph found with the provided _id"
                });
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({
                status: false,
                msg: "An error occurred while updating the Paragraph"
            });
        }
    });
    
    router.get('/content/data', async (req, res) => {
        try {
          const items = await ContentModel.find();
          res.json({ status: 'success', data: items });
        } catch (err) {
          res.status(500).json({ status: 'error', message: err.message });
        }
      });

    module.exports = router;