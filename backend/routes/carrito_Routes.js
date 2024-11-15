const express = require("express");
const router = express.Router();
const carrito_controller = require("../controllers/carrito_controller")


router.get("/" , carrito_controller.get_all_carritos);
router.get("/:id" , carrito_controller.get_carrito_by_id);
router.post("/" , carrito_controller.post_carrito);
router.put("/:id" , carrito_controller.put_carrito);
router.delete("/:id" , carrito_controller.delete_carrito);
module.exports = router;

