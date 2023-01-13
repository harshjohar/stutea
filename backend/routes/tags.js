const express = require("express");
const router = express.Router();
var fetchuser = require("../middleware/fetchuser");
const Favourites = require("../models/Favourites");

// ROUTE 1 : add favourite tag : POST "/api/tags/add". Login Required
router.post("/add", fetchuser, async (req, res) => {
    const { tag } = req.body;
    const userId = req.user.id;
    try {
        const entry = await Favourites.findOne({
            user: userId,
        });

        if (!entry) {
            const newEntry = new Favourites({
                user: userId,
                tags: [tag],
            });
            await newEntry.save();
        } else {
            await Favourites.findOneAndUpdate(
                {
                    user: userId,
                },
                {
                    $push: {
                        tags: tag,
                    },
                }
            );
        }
        res.send({
            msg: "Favourite Tags added",
        });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
});

// ROUTE 2 : fetch user's favourite tags : GET "/api/tags/get". Login Required
router.get("/get", fetchuser, async (req, res) => {
    const userId = req.user.id;
    try {
        const tags = await Favourites.findOne({
            user: userId,
        });
        if(tags) {
            res.json(tags);
        } else {
            res.json({tags: []})
        }
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
});

// ROUTE 3 : delete from favourites : POST "/api/tags/remove". Login required
router.post('/remove', fetchuser, async(req, res)=> {
    const { tag } = req.body;
    const userId = req.user.id;
    try {
        const entry = await Favourites.findOne({
            user: userId,
        });

        if (!entry) {
            const newEntry = new Favourites({
                user: userId,
                tags: [],
            });
            await newEntry.save();
        } else {
            await Favourites.findOneAndUpdate(
                {
                    user: userId,
                },
                {
                    $pull: {
                        tags: tag,
                    },
                }
            );
        }
        res.send({
            msg: "Favourite Tags added",
        });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})
module.exports = router;
