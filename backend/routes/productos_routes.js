const express = require("express");
const router = express.Router();
const productos_controller = require("../controllers/productos_controller")
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

router.get("/", productos_controller.get_all_productos );
router.get("/:id" , productos_controller.get_producto_by_id );
router.post("/" ,  upload.single("imagen"), productos_controller.post_producto );
router.put("/:id" ,  upload.single("imagen"), productos_controller.put_producto );
router.delete("/:id" , productos_controller.delete_producto );
module.exports = router;