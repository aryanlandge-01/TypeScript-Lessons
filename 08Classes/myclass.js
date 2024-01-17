var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var User = /** @class */ (function () {
    function User(Id, name) {
        this.Id = Id;
        this.name = name;
        this._courseCount = 1;
        this.city = "mumbai";
    }
    // private property 
    User.prototype.getGender = function () {
        console.log("prohi");
    };
    Object.defineProperty(User.prototype, "getAppleEmail", {
        get: function () {
            return "apple".concat(this.Id);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "courseCount", {
        get: function () {
            return this._courseCount;
        },
        // cannot set the type the return
        set: function (courseNum) {
            if (courseNum > 499) {
                throw new Error("Course is not popular");
            }
            this._courseCount = courseNum;
        },
        enumerable: false,
        configurable: true
    });
    return User;
}());
var subUser = /** @class */ (function (_super) {
    __extends(subUser, _super);
    function subUser() {
        // it cannot the private stuff 
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ifFamily = true;
        return _this;
    }
    subUser.prototype.changeCourseCount = function () {
        this._courseCount = 5;
    };
    return subUser;
}(User));
var aryan = new User(9899, "aryan");
// Access modifier as like pubic and private
