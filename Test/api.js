var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var axios = require('axios');
var fs = require('fs');
function getScoreCard(url) {
    return __awaiter(this, void 0, void 0, function () {
        var api_url, repo_url, repo_url_len, sliced_repo_url, api_repo, options, jsonfile_name;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    api_url = new String("https://api.securityscorecards.dev/projects/");
                    repo_url = new String(url);
                    repo_url_len = repo_url.length;
                    sliced_repo_url = repo_url.slice(8, repo_url_len);
                    api_repo = api_url.concat(sliced_repo_url.toString());
                    options = {
                        method: 'GET',
                        url: api_repo,
                        params: { category: 'all', count: 2 }
                    };
                    jsonfile_name = './Scorecard.json';
                    return [4 /*yield*/, axios
                            .request(options)
                            .then(function (response) {
                            var jsonString = JSON.stringify(response.data, null, 2);
                            fs.writeFileSync(jsonfile_name, jsonString, {
                                flag: 'w'
                            });
                        })["catch"](function (error) {
                            console.error(error);
                        })];
                case 1:
                    _a.sent();
                    return [2 /*return*/, jsonfile_name];
            }
        });
    });
}
function getLicense() {
    return __awaiter(this, void 0, void 0, function () {
        var Octokit, octokit, response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    Octokit = require("octokit").Octokit;
                    octokit = new Octokit({
                        auth: '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'
                    });
                    return [4 /*yield*/, octokit.request('GET /repos/{owner}/{repo}/issues', {
                            owner: "octokit",
                            repo: "rest.js"
                        })];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, response.data.length];
            }
        });
    });
}
function getBusFactor() {
    return __awaiter(this, void 0, void 0, function () {
        var Octokit, octokit, response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    Octokit = require("octokit").Octokit;
                    octokit = new Octokit({
                        auth: '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'
                    });
                    return [4 /*yield*/, octokit.request('GET /repos/{owner}/{repo}/issues', {
                            owner: "octokit",
                            repo: "rest.js"
                        })];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, response.data.length];
            }
        });
    });
}
function getRampUp() {
    return __awaiter(this, void 0, void 0, function () {
        var Octokit, octokit, response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    Octokit = require("octokit").Octokit;
                    octokit = new Octokit({
                        auth: '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'
                    });
                    return [4 /*yield*/, octokit.request('GET /repos/{owner}/{repo}/issues', {
                            owner: "octokit",
                            repo: "rest.js"
                        })];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, response.data.length];
            }
        });
    });
}
function getResponsive() {
    return __awaiter(this, void 0, void 0, function () {
        var Octokit, octokit, response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    Octokit = require("octokit").Octokit;
                    octokit = new Octokit({
                        auth: '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'
                    });
                    return [4 /*yield*/, octokit.request('GET /repos/{owner}/{repo}/issues', {
                            owner: "octokit",
                            repo: "rest.js"
                        })];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, response.data.length];
            }
        });
    });
}
module.exports = { getScoreCard: getScoreCard, getBusFactor: getBusFactor, getLicense: getLicense, getRampUp: getRampUp, getResponsive: getResponsive };
