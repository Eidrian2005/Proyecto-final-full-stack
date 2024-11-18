const express = require("express");
const router = express.Router();
const tipo_usuario_controller = require("../controllers/tipo_usuario_controller")


router.get("/" , tipo_usuario_controller.get_all_tipo_usuarios);
router.get("/:id" , tipo_usuario_controller.get_tipo_usuario_by_id);
router.post("/" , tipo_usuario_controller.post_tipo_usuario);
router.put("/:id" , tipo_usuario_controller.put_tipo_usuario);
router.delete("/:id" , tipo_usuario_controller.delete_tipo_usuario);
module.exports = router;