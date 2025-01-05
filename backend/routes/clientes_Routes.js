const express = require("express");
const router = express.Router();
const clientes_controller = require("../controllers/clientes_controller")
const {verificarToken} = require("../middlewares/authMiddleware")
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

router.get("/" , verificarToken, clientes_controller.get_all_clientes);
router.get("/:id" ,  verificarToken, clientes_controller.get_cliente_by_id);
router.post("/", upload.single('imagen'), clientes_controller.post_cliente);
router.put("/:id", verificarToken, upload.single('imagen'), clientes_controller.put_cliente);
router.delete("/:id" , verificarToken, clientes_controller.delete_cliente);
module.exports = router;