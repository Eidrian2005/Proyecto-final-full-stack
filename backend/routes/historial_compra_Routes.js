const express = require("express");
const router = express.Router();
const Historial_Compras_controller = require("../controllers/historial_compras_controller")


router.get("/" , Historial_Compras_controller.get_all_historiales_compras);
router.get("/:id" , Historial_Compras_controller.get_historial_compras_by_id);
router.post("/" ,Historial_Compras_controller.post_historial_compras);
router.put("/:id" , Historial_Compras_controller.put_historial_compra);
router.delete("/:id" , Historial_Compras_controller.delete_historial_compra);
module.exports = router;