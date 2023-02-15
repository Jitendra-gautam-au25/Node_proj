import  Express  from "express";
import StudentController from "../controller/studentCon.js";

const router= Express.Router()


router.get("/",StudentController.getAllDoc);
router.post("/",StudentController.createDoc);
router.get("/edit/:id",StudentController.editDoc);

router.post("/update/:id",StudentController.UpadteDocById)
router.post("/delete/:id",StudentController.deleteDoc)




export default router