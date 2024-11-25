const express = require("express");
const router = express.Router();
const clientes_controller = require("../controllers/clientes_controller")
const {verificarToken, isAdmin} = require("../middlewares/authMiddleware")

router.get("/" , verificarToken, isAdmin, clientes_controller.get_all_clientes);
router.get("/:id" , verificarToken, isAdmin, clientes_controller.get_cliente_by_id);
router.post("/" , verificarToken, isAdmin, clientes_controller.post_cliente);
router.put("/:id" , verificarToken, isAdmin, clientes_controller.put_cliente);
router.delete("/:id" , verificarToken, isAdmin, clientes_controller.delete_cliente);
module.exports = router;