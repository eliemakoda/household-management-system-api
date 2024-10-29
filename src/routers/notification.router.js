const express= require("express")
const {
    GetAllNotif,
    GetNotificationById,
    GetNotificationByUserId,
    InsertNotificationToDB,
    InsertManyNotificationToDB
}= require("../views")


const NotificationRouter= express.Router()
NotificationRouter.get("/allNotifs",GetAllNotif)
NotificationRouter.get("/NotifWithId/:notifId",GetNotificationById)
NotificationRouter.get("/NotifForUserId/:userId",GetNotificationByUserId )
NotificationRouter.post("/createNotification", InsertNotificationToDB)
NotificationRouter.post("/CreateManyNotif", InsertManyNotificationToDB)

module.exports=NotificationRouter