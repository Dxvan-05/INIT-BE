const express = require('express');
var router= express.Router();
var ContactModel=require("../Models/contactModel");

router.post("/contact/create",async(req,res)=>{
    try{
        var{name,phnNo,email,message}=req.body;
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
        if(phnNo==null || phnNo==undefined)
            {
                res.status(200).json(
                    {
                        status:false,
                        msg:"phnNo is  not defined"
        
                    }
                )
                return;
            }
        if(email==null || email==undefined)
            {
                res.status(200).json(
                    {
                        status:false,
                        msg:"email is  not defined"
        
                    }
                )
                return;
            }
        if(message==null || message==undefined)
            {
                res.status(200).json(
                    {
                        status:false,
                        msg:"message is  not defined"
        
                    }
                )
                return;
            }

        var data=new ContactModel();
        data.name=name;
        data.phnNo=phnNo;
        data.email=email;
        data.message=message;
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

    router.post("/contact/delete", async (req, res) => {
        try {
            var {_id} = req.body;
    
            if (_id == null || _id == undefined) {
                res.status(200).json({
                    status: false,
                    msg: "id is not defined"
                });
                return;
            }
    
            var deletedData = await ContactModel.findByIdAndDelete(_id);
    
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

    router.get('/contact/data', async (req, res) => {
        try {
          const items = await ContactModel.find();
          res.json({ status: 'success', data: items });
        } catch (err) {
          res.status(500).json({ status: 'error', message: err.message });
        }
      });

    module.exports = router;