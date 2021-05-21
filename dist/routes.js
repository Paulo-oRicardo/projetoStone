"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = require("express");
const FundraisingController_1 = __importDefault(require("./controllers/FundraisingController"));
const UsersController_1 = __importDefault(require("./controllers/UsersController"));
const TransactionsController_1 = __importDefault(require("./controllers/TransactionsController"));
// import AuthController  from "./controllers/AuthController";
// import multer from 'multer';
// import multerConfig from "./config/multer";
// import authMiddleware from './middlewares/authMiddleware'
const routes = express_1.Router();
exports.routes = routes;
// routes.post("/auth", AuthController.auth);
routes.get("/users/:id", UsersController_1.default.getOnlyOneUser);
// routes.get("/users", authMiddleware, usersController.index);
routes.get("/users", UsersController_1.default.getUsers);
routes.post("/users", UsersController_1.default.createUser);
routes.put("/users/:id", UsersController_1.default.updateUser);
routes.delete("/users/:id", UsersController_1.default.deleteUser);
routes.post("/fundraising", FundraisingController_1.default.createFundraising);
routes.get("/fundraising", FundraisingController_1.default.getFundraisings);
routes.get("/fundraising/:id", FundraisingController_1.default.getOnlyOneFundraising);
routes.put("/fundraising/:id", FundraisingController_1.default.updateFundraising);
routes.get("/transaction", TransactionsController_1.default.get);
routes.post("/transaction", TransactionsController_1.default.createTransaction);
