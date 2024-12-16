const express = require("express");
const router = express.Router();
const clientes_controller = require("../controllers/clientes_controller")
const {verificarToken} = require("../middlewares/authMiddleware")


router.get("/" , verificarToken, clientes_controller.get_all_clientes);
router.get("/:id" ,  verificarToken, clientes_controller.get_cliente_by_id);
router.post("/" ,verificarToken,  clientes_controller.post_cliente);
router.put("/:id" , verificarToken, clientes_controller.put_cliente);
router.delete("/:id" , verificarToken, clientes_controller.delete_cliente);
module.exports = router;