const express = require("express");
const router = express.Router();
const productos_controller = require("../controllers/productos_controller")


router.get("/", productos_controller.get_all_productos );
router.get("/:id" , productos_controller.get_producto_by_id );
router.post("/" , productos_controller.post_producto );
router.put("/:id" , productos_controller.put_producto );
router.delete("/:id" , productos_controller.delete_producto );
module.exports = router;