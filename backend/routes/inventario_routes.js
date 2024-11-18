const express = require("express");
const router = express.Router();
const inventario_controller = require("../controllers/inventario_controller")


router.get("/", inventario_controller.get_all_inventario );
router.get("/:id" , inventario_controller.get_inventario_by_id);
router.post("/" , inventario_controller.post_inventario );
router.put("/:id" ,inventario_controller.put_inventario);
router.delete("/:id" , inventario_controller.delete_inventario);
module.exports = router;


