const express = require("express");
const router = express.Router();
const carrito_controller = require("../controllers/carrito_controller")
const {verificarToken} = require("../middlewares/authMiddleware")

router.get("/" , verificarToken, carrito_controller.get_all_carritos);
router.get("/:id" , verificarToken, carrito_controller.get_carrito_by_id);
router.post("/" , verificarToken, carrito_controller.post_carrito);
router.put("/:id" , verificarToken, carrito_controller.put_carrito);
router.delete("/:id" , verificarToken, carrito_controller.delete_carrito);
module.exports = router;

