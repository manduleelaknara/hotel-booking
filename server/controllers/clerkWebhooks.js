import User from "../models/User.js";

const clerkWebhooks = async (req, res)=>{
    try {
        const {data, type} = req.body

        switch (type) {
            case "user.created":{
                const userData = {
                    _id: data.id,
                    email: data.email_addresses?.[0]?.email_address || "no-email",
                    username: (data.first_name || "User") + " " + (data.last_name || ""),
                    image: data.image_url || "",
                }
                await User.create(userData);
                break;
            }
            case "user.updated":{
                await User.findByIdAndUpdate(data.id, {
                    email: data.email_addresses?.[0]?.email_address || "no-email",
                    username: (data.first_name || "User") + " " + (data.last_name || ""),
                    image: data.image_url || "",
                });
                break;
            }
            case "user.deleted":{
                await User.findByIdAndDelete(data.id);
                break;
            }
            default:
                break;
        }
        res.json({success: true, message: "Webhook Received"})

    } catch (error) {
        console.log(error.message);
        res.json({success: false, message: error.message})
    }
}

export default clerkWebhooks