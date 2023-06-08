import { groupRankService } from "../services/GroupRankService.js";

const groupRankController = async (req,res,next) => {
    try{
        const groupRank = await groupRankService.findAll();

        if (groupRank.errorMessage) {
            throw new Error(groupRank.errorMessage);
        } else {
            return res.status(200).json(groupRank);
        }
    }
    catch (error) {
        next(error);
    }
}

export { groupRankController }