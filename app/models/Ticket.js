import mongoose,{Schema} from "mongoose";


mongoose.connect("mongodb+srv://taniaban2712:tb260851574@cluster0.mzx2dr0.mongodb.net/?retryWrites=true&w=majority");
mongoose.Promise=global.Promise;

const ticketSchema=new Schema({
    title: String,
    description: String,
    category: String,
    priority: Number,
    progress: Number,
    status: String,
    active: Boolean,
},
  {
    timestamps: true,
  }
);

const Ticket=mongoose.models.Ticket || mongoose.model("Ticket", ticketSchema);

export default Ticket;
