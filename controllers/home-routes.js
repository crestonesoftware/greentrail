/* DEPENDECIES */
const router = require("express").Router();
// Import authentication middleware

const {
  Community,
  Site,
  Country,
  Province,
  Town,
  Provider,
  Tag,
  ProviderTag,
} = require("../models");
// Import models

/* ROUTES */
/* Get request for homepage */
router.get("/", async (req, res) => {
  try {
    // Render
    res.render("home", {
      loggedIn: req.session.loggedIn,
      darkText: false,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

/* Get request for add page */
router.get("/add", async (req, res) => {
  try {
    // Render
    res.render("add", {
      loggedIn: req.session.loggedIn,
      darkText: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

/* Get request for location page, gets all locations */
router.get("/locations", async (req, res) => {
  try {
    dbLocationData = await Country.findAll({
      include: [
        {
          model: Province,
          attributes: ["province_name", "country_id"],
          include: [
            {
              model: Town,
              attributes: ["town_name", "province_id"],
            },
          ],
        },
      ],
    });

    const countries = dbLocationData.map((country) =>
      country.get({ plain: true })
    );
    // Render
    res.render("locations", {
      countries,
      loggedIn: req.session.loggedIn,
      darkText: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

/* Get request for community page by name */
router.get("/community/:name", async (req, res) => {
  try {
    // Get community info
    const communityData = await Community.findOne({
      where: { community_name: req.params.name },
      include: [
        {
          model: Provider,
          attributes: ["provider_name", "community_id", "site_id", "service"],
          include: [
            {
              model: Site,
              attributes: [
                "site_name",
                "description",
                "town_id",
                "street_address",
                "map_link",
              ],
            },
          ],
        },
      ],
    });
    //add provider model to also pull from

    // Ensure we have found a community
    if (!communityData) {
      res.status(404).json({ message: "No such town exists as community" });
    }
    const community = communityData.get({ plain: true });

    // Render page
    res.render("community", {
      community,
      loggedIn: req.session.loggedIn,
      darkText: true,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

/* Get request for restaurants */
router.get("/community/restaurants", async (req, res) => {
  try {
    // Fetch providers categorized as restaurants
    const restaurantProviders = await Provider.findAll({
      where: {
        service: "restaurant",
      },
      include: [
        {
          model: Community,
          attributes: ["community_name"],
        },
        {
          model: Site,
          attributes: [
            "site_name",
            // "description",
            "map_link",
          ],
        },
      ],
    });

    // Ensure providers are found
    if (!restaurantProviders) {
      res.status(404).json({ message: "No restaurants found" });
      return;
    }

    const restaurants = restaurantProviders.map((provider) =>
      provider.get({ plain: true })
    );

    // Render the restaurants view
    res.render("restaurants", {
      restaurants,
      loggedIn: req.session.loggedIn,
      darkText: true,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

/* Get request for login page */
router.get("/login", async (req, res) => {
  try {
    if (req.session.loggedIn) {
      res.redirect("/");
      return;
    }
    // Render
    res.render("login", {
      loggedIn: req.session.loggedIn,
      darkText: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

/* EXPORTS */
module.exports = router;
