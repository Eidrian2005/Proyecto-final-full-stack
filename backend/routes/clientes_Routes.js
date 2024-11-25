const express = require("express");
const router = express.Router();
const clientes_controller = require("../controllers/clientes_controller")


router.get("/" ,  clientes_controller.get_all_clientes);
router.get("/:id" ,  clientes_controller.get_cliente_by_id);
router.post("/" , clientes_controller.post_cliente);
router.put("/:id" , clientes_controller.put_cliente);
router.delete("/:id" ,  clientes_controller.delete_cliente);
module.exports = router;