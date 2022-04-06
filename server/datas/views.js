db.createView (
   "user_information",
   "user",
   [
     { $lookup: { from: "user_profile", localField: "profile_id", foreignField: "_id", as: "profile" } }
   ]
)