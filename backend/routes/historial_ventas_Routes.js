const express = require("express");
const router = express.Router();
const historial_venta_controller = require("../controllers/historial_ventas_controller")
const {verificarToken, isAdmin} = require("../middlewares/authMiddleware")

router.get("/" , verificarToken, isAdmin, historial_venta_controller.get_all_historial_ventas);
router.get("/:id" , verificarToken, isAdmin, historial_venta_controller.get_historial_venta_by_id);
router.post("/" , verificarToken, isAdmin, historial_venta_controller.post_historial_venta);
router.put("/:id" , verificarToken, isAdmin, historial_venta_controller.put_historial_venta);
router.delete("/:id" , verificarToken, isAdmin, historial_venta_controller.delete_historial_venta);
module.exports = router;
