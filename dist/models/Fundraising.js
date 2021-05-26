"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fundraising = void 0;
const typeorm_1 = require("typeorm");
const uuid_1 = require("uuid");
const User_1 = require("./User");
let Fundraising = class Fundraising {
    constructor() {
        if (!this.id)
            this.id = uuid_1.v4();
    }
};
__decorate([
    typeorm_1.PrimaryColumn(),
    __metadata("design:type", String)
], Fundraising.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Fundraising.prototype, "fundraising_name", void 0);
__decorate([
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", Date)
], Fundraising.prototype, "created_at", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Fundraising.prototype, "description", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Fundraising.prototype, "image", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Fundraising.prototype, "video", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Fundraising.prototype, "value_donated", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Fundraising.prototype, "goal_meta", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Date)
], Fundraising.prototype, "validity", void 0);
__decorate([
    typeorm_1.ManyToOne(() => User_1.User),
    typeorm_1.JoinColumn({ name: "user_id" }),
    __metadata("design:type", User_1.User)
], Fundraising.prototype, "user", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Fundraising.prototype, "user_id", void 0);
Fundraising = __decorate([
    typeorm_1.Entity("fundraising"),
    __metadata("design:paramtypes", [])
], Fundraising);
exports.Fundraising = Fundraising;
