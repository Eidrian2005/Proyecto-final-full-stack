const express = require("express");
const router = express.Router();
const lista_deseados_controller = require("../controllers/lista_deseo_controller")


router.get("/", lista_deseados_controller.get_all_lista_de_deseos );
router.get("/:id" , lista_deseados_controller.get_lista_de_deseos_by_id );
router.post("/" , lista_deseados_controller.post_lista_de_deseos );
router.put("/:id" , lista_deseados_controller.put_lista_de_deseos );
router.delete("/:id" , lista_deseados_controller.delete_lista_de_deseos );
module.exports = router;