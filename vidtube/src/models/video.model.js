import mongoose,{Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoScheme = new Schema({
    videFile:{
        type:String,
        required: true,
    },
    thumbnail:{
        type: String,
        required: true
    },
    title :{
        type: String,
        required: true
    },
    description:{
        type: String,
        required:true
    },
    duration:{
        type: type,
        required:true
    },
    views:{
        type: Number,
        default: 0
    },
    isPublished :{
        type: Boolean,
        default:true
    },
    owner:{
        type: Schema.Types.ObjectId,
        ref:"User"
    }

},{timestamps:true})

videoScheme.plugin(mongooseAggregatePaginate)

export const Video = mongoose.model("video",videoScheme)