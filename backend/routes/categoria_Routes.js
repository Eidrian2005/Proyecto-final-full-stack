const express = require("express");
const router = express.Router();
const categoria_controller = require("../controllers/categoria_controller")


router.get("/" , categoria_controller.get_all_Categoria);
router.get("/:id" , categoria_controller.get_all_Categoria);
router.post("/" , categoria_controller.post_Categoria);
router.put("/:id" , categoria_controller.put_Categoria);
router.delete("/:id" , categoria_controller.delete_Categoria);
module.exports = router;