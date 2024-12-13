const express = require("express");
const router = express.Router();
const lista_deseados_controller = require("../controllers/lista_deseo_controller")
const {verificarToken} = require("../middlewares/authMiddleware")


router.get("/", verificarToken, lista_deseados_controller.get_all_lista_de_deseos );
router.get("/:id" , verificarToken, lista_deseados_controller.get_lista_de_deseos_by_id );
router.post("/" , verificarToken, lista_deseados_controller.post_lista_de_deseos );
router.put("/:id" , verificarToken, lista_deseados_controller.put_lista_de_deseos );
router.delete("/:id" , verificarToken, lista_deseados_controller.delete_lista_de_deseos );
module.exports = router;