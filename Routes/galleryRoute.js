const express = require('express');
var router= express.Router();
var GalleryModel=require("../Models/galleryModel");

router.post("/gallery/create",async(req,res)=>{
    try{
        var{src}=req.body;
        if(src==null || src==undefined)
            {
                res.status(200).json(
                    {
                        status:false,
                        msg:"src is  not defined"
        
                    }
                )
                return;
            }
        var data=new GalleryModel();
        data.src=src;
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

    router.post("/gallery/delete", async (req, res) => {
        try {
            var {_id} = req.body;
    
            if (_id == null || _id == undefined) {
                res.status(200).json({
                    status: false,
                    msg: "id is not defined"
                });
                return;
            }
    
            var deletedData = await GalleryModel.findByIdAndDelete(_id);
    
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

    router.get('/gallery/data', async (req, res) => {
        try {
          const items = await GalleryModel.find();
          res.json({ status: 'success', data: items });
        } catch (err) {
          res.status(500).json({ status: 'error', message: err.message });
        }
      });

    module.exports = router;