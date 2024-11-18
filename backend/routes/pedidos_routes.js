const express = require("express");
const router = express.Router();
const pedidos_controller = require("../controllers/pedidos_controller")


router.get("/", pedidos_controller.get_all_pedidos );
router.get("/:id" , pedidos_controller.get_pedido_by_id );
router.post("/" , pedidos_controller.post_pedido );
router.put("/:id" , pedidos_controller.put_pedido );
router.delete("/:id" , pedidos_controller.delete_pedido );
module.exports = router;