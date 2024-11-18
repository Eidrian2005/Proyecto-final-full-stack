const express = require("express");
const router = express.Router();
const informacion_pago = require("../controllers/informacion_pago_controller")


router.get("/", informacion_pago.get_all_informacion_de_pago );
router.get("/:id" , informacion_pago.get_informacion_de_pago_by_id );
router.post("/" , informacion_pago.post_informacion_de_pago );
router.put("/:id" , informacion_pago.post_informacion_de_pago);
router.delete("/:id" , informacion_pago.delete_informacion_de_pago);
module.exports = router;