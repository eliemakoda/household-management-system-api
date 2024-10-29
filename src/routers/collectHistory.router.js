const express = require("express")

const {
    GEtAllCollectHist,
    GetCollById,
    GetCollByCommandId,
    CreateCollectHist,
    CreatemanyCollectHist,
    updateCollectHist,
    RemoveCollFormDb
}= require("../views")

const COllectionHistory= express.Router()
COllectionHistory.get("/allCollHist", GEtAllCollectHist)
COllectionHistory.get("/collwithId/:collId", GetCollById)
COllectionHistory.get("/collwithcmdId/:cmdID", GetCollByCommandId)
COllectionHistory.post("/createcoll", CreateCollectHist)
COllectionHistory.post("/createManycoll", CreatemanyCollectHist)
COllectionHistory.put("/updateCollection/:collId",updateCollectHist )
COllectionHistory.delete("/rmcollection/:collId", RemoveCollFormDb)



module.exports=COllectionHistory
