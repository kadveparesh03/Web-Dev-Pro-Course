import mongoose,{Schema} from "mongoose";

const subscriptionSchema = new Schema(
    {
        subscibers:{
            type: Schema.Types.ObjectId,
            ref: "User",
        },
        channel :{
            type: Schema.Types.ObjectId,
            // `subsriber` IS SUBSCRIBIng
            ref :"User",
        },
        
    },{timestamps:true}
);

export const Subscription = mongoose.model("Subscription",subscriptionSchema);