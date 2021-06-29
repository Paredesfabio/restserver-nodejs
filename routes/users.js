/*jshint esversion: 6 */

const { Router } = require("express");
const {
  usersGet,
  usersPost,
  usersPut,
  usersPatch,
  usersDelete,
} = require("../controllers/users.controllers");
const router = Router();

router.get("/", usersGet);

router.post("/", usersPost);

router.put("/:id", usersPut);

router.patch("/:id", usersPatch);

router.delete("/:id", usersDelete);

module.exports = router;
