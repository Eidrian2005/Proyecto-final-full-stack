const express = require("express");
const router = express.Router();
const condiciones_controller = require("../controllers/condiciones_controller")


router.get("/" , condiciones_controller.get_all_condiciones);
router.get("/:id" , condiciones_controller.get_condicion_by_id);
router.post("/" , condiciones_controller.post_condicion);
router.put("/:id" , condiciones_controller.put_condicion);
router.delete("/:id" , condiciones_controller.delete_condicion);
module.exports = router;