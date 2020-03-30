(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"headerbg\">\n  <div class=\"menubg\">\n    <div class=\"container\">\n      <div class=\"leftMenu\">\n        <a href=\"https://eu.finalfantasyxiv.com/lodestone/freecompany/9237023573225357164/\" class=\"menuLink\">LODESTONE</a>\n        <a href=\"https://www.fflogs.com/guild/rankings/51768/latest/\" class=\"menuLink\">FFLOGS</a>\n        <a href=\"https://discord.gg/azHUj5\" class=\"menuLink\">DISCORD</a>\n      </div>\n      <div class=\"rightMenu\">\n        <a class=\"menuLink\" routerLink=\"home\" routerLinkActive=\"active\">HOME</a>\n        <a routerLink=\"teams\" routerLinkActive=\"active\" class=\"menuLink\">RAID TEAMS</a>\n        <a routerLink=\"info\" routerLinkActive=\"active\" class=\"menuLink\">INFO</a>\n        <a href=\"/beta\" onclick=\"window.open('https://docs.google.com/forms/d/e/1FAIpQLSdoI-PsP4DQVM5IxG4JgsuRoY1ibCe2BDnSvopZWT1RlJRoTw/viewform');\" class=\"menuLink\">APPLY</a>\n      </div>\n    </div>\n  </div>\n  <div class=\"logo\">&nbsp;</div>\n</div>\n<router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/apply/apply.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/apply/apply.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"content\">\n    <!-- Latest News && FC INFO-->\n    <div class=\"contentTitle2\">\n        <div class=\"container\">\n\n            <div class=\"title-left\">\n                <div class=\"inline-title logoIcon\"></div>\n                <div class=\"subTitle\">\n                    <div class=\"inline-title text-white\"> REDUX</div>\n                    <div class=\"inline-title text-blue\"> APPLICATION</div>\n                </div>\n            </div>\n\n        </div>\n    </div>\n\n\n\n    <div class=\"subtitle\">\n        APPLICATION INFORMATION\n    </div>\n    <div class=\"container\">\n        <div class=\"apply-info\">\n            Some text you want to read before you actually send in an application?\n        </div>\n    </div>\n\n    <div class=\"subtitle\">\n        REDUX APPLICATION FORM\n    </div>\n    <div class=\"container\">\n        <div class=\"apply-form\">\n\n            <div class=\"field\">\n                <label for=\"character_name\">Ingame Character name?</label><br>\n                <input type=\"text\" id=\"character_name\" name=\"character_name\">\n            </div>\n\n            <div class=\"field\">\n                <label for=\"discord_id\">What is your Discord ID?</label><br>\n                <input type=\"text\" id=\"discord_id\" name=\"discord_id\">\n            </div>\n\n            <div class=\"field\">\n                <label for=\"talking\">Are you okay with talking on Discord?</label><br>\n                \n                <select id=\"talking\" name=\"talking\">\n                    <option value=\"yes\">Yes</option>\n                    <option value=\"no\">No</option>\n                    <option value=\"maybe\">Maybe</option>\n                  </select>\n            </div>\n\n            <div class=\"field\">\n                <label for=\"raidlogging\">Are you raidlogging?</label><br>\n                <select id=\"raidlogging\" name=\"raidlogging\">\n                    <option value=\"no\">No</option>\n                    <option value=\"During Content Drought\">During Content Drought.</option>\n                    <option value=\"Holidays\">Only during Holidays.</option>\n                    <option value=\"Completed Goal\">After I achieved personal goals.</option>\n                  </select>\n            </div>\n\n            <div class=\"field\">\n                <label for=\"gamegoal\">What is your goal in game?</label><br>\n                <input type=\"text\" id=\"gamegoal\" name=\"gamegoal\">\n            </div>\n\n            <div class=\"field\">\n                <label for=\"whoareyou\">Tell us about who you are!</label><br>\n                <textarea id=\"whoareyou\" name=\"whoareyou\" rows=\"10\"></textarea>\n            </div>\n\n            <div class=\"field\">\n                <label for=\"previous_fc\">Previous FC's <small>(Reasons for leaving?)</small></label><br>\n                <textarea id=\"previous_fc\" name=\"previous_fc\" rows=\"10\"></textarea>\n            </div>\n\n            <div class=\"field\">\n                <label for=\"ready_crafting\">Are you willing to gear up crafters before raid patchdays? <small>(For crafters only!)</small></label><br>\n                <select id=\"ready_crafting\" name=\"ready_crafting\">\n                    <option value=\"yes\">Yes</option>\n                    <option value=\"no\">No</option>\n                  </select>\n            </div>\n\n            <div class=\"field\">\n                <label for=\"started_raiding\">When did you start raiding? <small>(For raiders only!)</small></label><br>\n                <input type=\"text\" id=\"started_raiding\" name=\"started_raiding\">\n            </div>\n\n            <div class=\"field\">\n                <label for=\"housing\">Would you take care of chocobo's and Housing?</label><br>\n                <select id=\"housing\" name=\"housing\">\n                    <option value=\"yes\">Yes</option>\n                    <option value=\"no\">No</option>\n                  </select>\n            </div>\n\n            <div class=\"field\">\n                <label for=\"more_info\">Anything else you would want to tell us?</label><br>\n                <textarea id=\"more_info\" name=\"more_info\" rows=\"10\"></textarea>\n            </div>\n\n            <div class=\"field\">\n                <label for=\"housing\">What does \"REDUX\" mean?</label><br>\n                <select id=\"housing\" name=\"housing\">\n                    <option value=\"toilet_cleaner\">Toilet Cleaner</option>\n                    <option value=\"Call of Duty Clan\">Call of Duty Clan</option>\n                    <option value=\"Latin Word\">Some Latin Word I never heard of..</option>\n                    <option value=\"Is that the last metro game?\">Is that the last metro game?</option>\n                    <option value=\"Return, Revive\">Return, Revive</option>\n                    <option value=\"Asians Assemble\">Asians Assemble</option>\n                  </select>\n            </div>\n\n        </div>\n    </div>\n\n    <div class=\"highlight_spacer\"></div>\n        \n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/guides/guides.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/guides/guides.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"content\">\n    <!-- Latest News && FC INFO-->\n    <div class=\"contentTitle2\">\n        <div class=\"container\">\n\n            <div class=\"title-left\">\n                <div class=\"inline-title logoIcon\"></div>\n                <div class=\"subTitle\">\n                    <div class=\"inline-title text-white\"> REDUX</div>\n                    <div class=\"inline-title text-blue\"> GUIDES</div>\n                </div>\n            </div>\n\n        </div>\n    </div>\n\n\n    <div class=\"container\">\n        <p style=\"text-align: center; font-size: 16px; color: white; margin: 50px; font-family: 'Muli', sans-serif;\">Comming Soon</p>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"content\">\n    <!-- Member Streams Bar -->\n    <div class=\"contentTitle\">\n        <div class=\"container\">\n            <div class=\"inline-title logoIcon\"></div>\n            <div class=\"subTitle\">\n                <div class=\"inline-title text-white\"> MEMBER</div>\n                <div class=\"inline-title text-blue\"> STREAMS</div>\n            </div>\n        </div>\n    </div>\n    <div class=\"streamsbg\">\n        <div class=\"container\">\n\n            <div id=\"twitch1\" class=\"twitch\"></div>\n            <div id=\"twitch2\" class=\"twitch\"></div>\n            <div id=\"twitch3\" class=\"twitch\"></div>\n            <div id=\"twitch4\" class=\"twitch\"></div>\n\n        </div>\n    </div>\n\n    <!-- Latest News && FC INFO-->\n    <div class=\"contentTitle2\">\n        <div class=\"container\">\n\n            <div class=\"title-left\">\n                <div class=\"inline-title logoIcon\"></div>\n                <div class=\"subTitle\">\n                    <div class=\"inline-title text-white\"> REDUX</div>\n                    <div class=\"inline-title text-blue\"> FC</div>\n                </div>\n            </div>\n\n        </div>\n    </div>\n\n\n    <div class=\"subtitle\">\n        <div class=\"whoisHead\">WHAT IS <span class=\"blue bold\">REDUX</span>?</div>\n    </div>\n\n    <div class=\"container\">\n        <p class=\"text-white\">\n            REDUX was founded during the Stormblood expansion by Creamy Nuts our beloved asian leader. We are\n            here to provide a home for hardcore, and semi-hardcore statics to discuss and explore new end-game\n            content. We strive to have a healthy atmosphere, and continue to push ourselves to achieve even\n            better results than before.\n        </p>\n\n        <p class=\"text-white\">Our free company is filled with theorycrafters, speedrunners and people who like\n            to take the game a little more seriously than they should! We also have a big family of crafters and\n            gatherers to support us in progression and farm, and social members to keep us all sane when another\n            discussion about cooldowns and rotations might push you over the edge.\n        </p>\n\n        <div class=\"center\" style=\"margin-top: 35px;\">\n            <span class=\"btn btn-one\"\n                onclick=\"window.open('https://docs.google.com/forms/d/e/1FAIpQLSdoI-PsP4DQVM5IxG4JgsuRoY1ibCe2BDnSvopZWT1RlJRoTw/viewform');\">APPLY\n                TO REDUX NOW</span>\n        </div>\n\n    </div>\n\n    <div class=\"subtitle2\">\n        <div class=\"whoisHead\">LATEST <span class=\"blue bold\">NEWS</span></div>\n    </div>\n\n    <div class=\"highlight_spacer\">\n        <div class=\"container\">\n\n            <div class=\"news-left\">\n                <div class=\"news-content\">\n                    <div class=\"newsImg\"\n                        style=\"background: url('https://gamespot1.cbsistatic.com/uploads/original/1574/15747411/3632824-r2-1024x576.png') no-repeat\">\n                    </div>\n\n                    <h1 class=\"newsTitle\">Prepguide for Patch 5.2</h1>\n                    <p class=\"newsText\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pharetra\n                        molestie arcu vitae placerat. Interdum et malesuada fames ac ante ipsum primis in faucibus.\n                        Phasellus feugiat velit ut nulla pharetra, sed placerat erat sodales. Quisque porta justo orci,\n                        eu vestibulum leo egestas ut.</p>\n\n                </div>\n            </div>\n            <div class=\"news-middle\">\n                <div class=\"news-content\">\n                    <div class=\"newsImg\"\n                        style=\"background: url('https://hardcore-gamer.s3.amazonaws.com/uploads/2019/12/FFXIV5point2Ann-Image005-570x321.jpg') no-repeat\">\n                    </div>\n\n                    <h1 class=\"newsTitle\">First look at new savages!</h1>\n                    <p class=\"newsText\">Integer id dictum libero, et ullamcorper erat. Vestibulum pretium, est a\n                        elementum scelerisque, velit massa ornare ante, nec ornare nisi purus in dolor. Mauris viverra\n                        odio eu iaculis dictum. Mauris semper tristique tempor. Mauris lacinia pulvinar ullamcorper.\n                    </p>\n\n                </div>\n            </div>\n            <div class=\"news-right\">\n                <div class=\"news-content\">\n                    <div class=\"newsImg\"\n                        style=\"background: url('https://www.pcgamesn.com/wp-content/uploads/2020/02/final-fantasy-14-patch-52-release-date-580x334.jpg') no-repeat\">\n                    </div>\n\n                    <h1 class=\"newsTitle\">New questline in patch 5.2</h1>\n                    <p class=\"newsText\">Quisque id elit auctor, varius magna in, cursus lacus. Ut neque urna, eleifend\n                        quis lorem non, consectetur volutpat quam. Ut ultrices eget sem a pharetra. Morbi efficitur\n                        sollicitudin nunc, sit amet feugiat ligula accumsan vitae. Nunc accumsan justo id cursus\n                        accumsan.</p>\n\n                </div>\n            </div>\n\n        </div>\n    </div>\n\n\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/info/info.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/info/info.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"content\">\n    <!-- Latest News && FC INFO-->\n    <div class=\"contentTitle2\">\n        <div class=\"container\">\n\n            <div class=\"title-left\">\n                <div class=\"inline-title logoIcon\"></div>\n                <div class=\"subTitle\">\n                    <div class=\"inline-title text-white\"> REDUX</div>\n                    <div class=\"inline-title text-blue\"> INFO</div>\n                </div>\n            </div>\n\n        </div>\n    </div>\n\n\n\n    <div class=\"leader\">LEADER</div>\n    <div class=\"container\">\n        <h1><span class=\"firstname\">CREAMY</span> <span class=\"lastname\">NUTS</span></h1>\n        <p class=\"info-text\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget eros in magna congue vestibulum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed blandit ligula sit amet justo tincidunt, vel tempor eros mollis. Aenean a commodo eros. In laoreet iaculis leo ut mollis. Pellentesque dapibus mi vitae orci tempus elementum. Nunc bibendum iaculis lobortis. Sed vel quam elementum, suscipit nunc a, tincidunt risus. Vivamus nisi ipsum, facilisis id quam eu, mattis laoreet ligula. Vestibulum sed gravida metus, sit amet fringilla urna. Nam venenatis volutpat velit, in fringilla erat feugiat sit amet. Aliquam pretium, risus id bibendum molestie, lorem libero interdum tortor, eget fringilla arcu neque in leo. Suspendisse rhoncus tempor leo vel lobortis. Ut id erat id est finibus facilisis ac ultrices dui. Aenean vitae mauris nulla. Donec sit amet placerat sapien, quis feugiat velit. Curabitur est nunc, convallis sit amet dolor quis, suscipit vestibulum risus.</p>\n    </div>\n    \n    <div class=\"officers\">OFFICERS</div>\n    <div class=\"container\">\n\n        <div class=\"info-left\">\n            <h1><span class=\"firstname\">MICA</span> <span class=\"lastname\">MEISTER</span></h1>\n            <p class=\"info-text\">Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed blandit ligula sit amet justo tincidunt, vel tempor eros mollis. Aenean a commodo eros. In laoreet iaculis leo ut mollis. Pellentesque dapibus mi vitae orci tempus elementum. Nunc bibendum iaculis lobortis. Sed vel quam elementum, suscipit nunc a, tincidunt risus. Vivamus nisi ipsum, facilisis id quam eu, mattis laoreet ligula. Vestibulum sed gravida metus, sit amet fringilla urna. Nam venenatis volutpat velit, in fringilla erat feugiat sit amet. Aliquam pretium, risus id bibendum molestie, lorem libero interdum tortor, eget fringilla arcu neque in leo. Suspendisse rhoncus tempor leo vel lobortis. Ut id erat id est finibus facilisis ac ultrices dui. Aenean vitae mauris nulla.</p>\n\n            <h1><span class=\"firstname\">NEMINI</span> <span class=\"lastname\">FALH</span></h1>\n            <p class=\"info-text\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget eros in magna congue vestibulum. Interdum et malesuada fames ac ante ipsum primis in faucibus. </p>\n        </div>\n\n\n        <div class=\"info-right\">\n            <h1><span class=\"firstname\">UNLUCKY</span> <span class=\"lastname\">BAKER</span></h1>\n            <p class=\"info-text\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget eros in magna congue vestibulum. Interdum et malesuada fames ac ante ipsum primis in faucibus. </p>\n            <h1><span class=\"firstname\">TOHKA</span> <span class=\"lastname\">ASVARRE</span></h1>\n            <p class=\"info-text\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget eros in magna congue vestibulum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed blandit ligula sit amet justo tincidunt, vel tempor eros mollis. Aenean a commodo eros. In laoreet iaculis leo ut mollis. Pellentesque dapibus mi vitae orci tempus elementum. Nunc bibendum iaculis lobortis. Sed vel quam elementum, suscipit nunc a, tincidunt risus. Vivamus nisi ipsum, facilisis id quam eu, mattis laoreet ligula. Vestibulum sed gravida metus, sit amet fringilla urna. Nam venenatis volutpat velit, in fringilla erat feugiat sit amet. Ut id erat id est finibus facilisis ac ultrices dui. Aenean vitae mauris nulla. Donec sit amet placerat sapien, quis feugiat velit. Curabitur est nunc, convallis sit amet dolor quis, suscipit vestibulum risus.</p>\n        </div>\n    </div>\n\n\n    <div class=\"highlight_spacer\"></div>\n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/rules/rules.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/rules/rules.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"content\">\n    <!-- Latest News && FC INFO-->\n    <div class=\"contentTitle2\">\n        <div class=\"container\">\n\n            <div class=\"title-left\">\n                <div class=\"inline-title logoIcon\"></div>\n                <div class=\"subTitle\">\n                    <div class=\"inline-title text-white\"> REDUX</div>\n                    <div class=\"inline-title text-blue\"> RULES</div>\n                </div>\n            </div>\n\n        </div>\n    </div>\n\n\n    <div class=\"container\">\n        <p style=\"text-align: center; font-size: 16px; color: white; margin: 50px; font-family: 'Muli', sans-serif;\">Comming Soon</p>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/teams/teams.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/teams/teams.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"content\">\n    <!-- Latest News && FC INFO-->\n    <div class=\"contentTitle2\">\n        <div class=\"container\">\n\n            <div class=\"title-left\">\n                <div class=\"inline-title logoIcon\"></div>\n                <div class=\"subTitle\">\n                    <div class=\"inline-title text-white\"> REDUX</div>\n                    <div class=\"inline-title text-blue\"> RAIDTEAMS</div>\n                </div>\n            </div>\n\n        </div>\n    </div>\n\n\n    <div class=\"container\">\n\n        <div class=\"teamBox\">\n            <div class=\"left\">\n                <div class=\"teamName_first\">U. <span class=\"teamName_last\">N.</span></div>\n                <div class=\"prog\">World Progression Hardcore</div>\n                <div class=\"teamInfo\">This is our HC World Progression raid team! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at posuere nibh, ac tristique nulla. Mauris lectus ligula, imperdiet sit amet suscipit sit amet, sagittis a nunc. Cras volutpat posuere massa, sit amet feugiat enim pellentesque a.</div>\n            </div>\n            <div class=\"right2\">\n                <div class=\"player\">\n                    <div class=\"melee\"></div>\n                    <p>Tohka <span class=\"text-blue\">Asvarre</span></p>\n                    <img src=\"./../../assets/images/fflogs.png\">\n                </div>\n\n                <div class=\"player\">\n                    <div class=\"melee\"></div>\n                    <p>Lyralei <span class=\"text-blue\">Windranger</span></p>\n                    <img src=\"./../../assets/images/fflogs.png\">\n                </div>\n\n                <div class=\"player\">\n                    <div class=\"ranged\"></div>\n                    <p>Snow <span class=\"text-blue\">Lynx</span></p>\n                    <img src=\"./../../assets/images/fflogs.png\">\n                </div>\n\n                <div class=\"player\">\n                    <div class=\"caster\"></div>\n                    <p>Sayo <span class=\"text-blue\">Kuroshita</span></p>\n                    <img src=\"./../../assets/images/fflogs.png\">\n                </div>\n            </div>\n            <div class=\"right1\">\n                <div class=\"player\">\n                    <div class=\"tank\"></div>\n                    <p>Aleo <span class=\"text-blue\">Izzle</span></p>\n                    <img src=\"./../../assets/images/fflogs.png\">\n                </div>\n\n                <div class=\"player\">\n                    <div class=\"tank\"></div>\n                    <p>Directx <span class=\"text-blue\">Error</span></p>\n                    <img src=\"./../../assets/images/fflogs.png\">\n                </div>\n\n                <div class=\"player\">\n                    <div class=\"healer\"></div>\n                    <p>Serah <span class=\"text-blue\">Asvarre</span></p>\n                    <img src=\"./../../assets/images/fflogs.png\">\n                </div>\n\n                <div class=\"player\">\n                    <div class=\"healer\"></div>\n                    <p>Mina <span class=\"text-blue\">Vari</span></p>\n                    <img src=\"./../../assets/images/fflogs.png\">\n                </div>\n            </div>\n        </div>\n\n\n\n        <div class=\"teamBox\">\n            <div class=\"left\">\n                <div class=\"teamName_first\">Lukewarm <span class=\"teamName_last\">IQ</span></div>\n                <div class=\"prog\">Hardcore</div>\n                <div class=\"teamInfo\">Integer convallis sollicitudin luctus. Aliquam dictum massa leo, sed iaculis odio placerat sit amet. Mauris viverra pretium dui eget pharetra. Nullam placerat varius tortor at consectetur.</div>\n            </div>\n            <div class=\"right2\">\n                <div class=\"player\">\n                    <div class=\"melee\"></div>\n                    <p>Stale <span class=\"text-blue\">Memes</span></p>\n                    <img src=\"./../../assets/images/fflogs.png\">\n                </div>\n\n                <div class=\"player\">\n                    <div class=\"melee\"></div>\n                    <p>Eleth <span class=\"text-blue\">Enoka</span></p>\n                    <img src=\"./../../assets/images/fflogs.png\">\n                </div>\n\n                <div class=\"player\">\n                    <div class=\"ranged\"></div>\n                    <p>Reformed <span class=\"text-blue\">Roogeri</span></p>\n                    <img src=\"./../../assets/images/fflogs.png\">\n                </div>\n\n                <div class=\"player\">\n                    <div class=\"caster\"></div>\n                    <p>Galveira <span class=\"text-blue\">Vorfeed</span></p>\n                    <img src=\"./../../assets/images/fflogs.png\">\n                </div>\n            </div>\n            <div class=\"right1\">\n                <div class=\"player\">\n                    <div class=\"tank\"></div>\n                    <p>Unlucky <span class=\"text-blue\">Baker</span></p>\n                    <img src=\"./../../assets/images/fflogs.png\">\n                </div>\n\n                <div class=\"player\">\n                    <div class=\"tank\"></div>\n                    <p>Jin <span class=\"text-blue\">Aniki</span></p>\n                    <img src=\"./../../assets/images/fflogs.png\">\n                </div>\n\n                <div class=\"player\">\n                    <div class=\"healer\"></div>\n                    <p>Zamaruki <span class=\"text-blue\">Starhallow</span></p>\n                    <img src=\"./../../assets/images/fflogs.png\">\n                </div>\n\n                <div class=\"player\">\n                    <div class=\"healer\"></div>\n                    <p>Mica <span class=\"text-blue\">Meister</span></p>\n                    <img src=\"./../../assets/images/fflogs.png\">\n                </div>\n            </div>\n        </div>\n\n\n\n        <div class=\"teamBox\">\n            <div class=\"left\">\n                <div class=\"teamName_first\">Soviet <span class=\"teamName_last\">Propaganda</span></div>\n                <div class=\"prog\">Semi-Hardcore</div>\n                <div class=\"teamInfo\">Wipefests with Creamy Nuts, yeah boii. Aenean facilisis massa in tortor cursus, id sollicitudin nulla fermentum. Aenean id ornare arcu. Ut venenatis ullamcorper eleifend. Ut pharetra interdum elit a tempus. Curabitur at finibus est. Maecenas non augue tincidunt, convallis dui at, vehicula orci.</div>\n            </div>\n            <div class=\"right2\">\n                <div class=\"player\">\n                    <div class=\"melee\"></div>\n                    <p>Louise <span class=\"text-blue\">Cuvelia</span></p>\n                    <img src=\"./../../assets/images/fflogs.png\">\n                </div>\n\n                <div class=\"player\">\n                    <div class=\"melee\"></div>\n                    <p> <span class=\"text-blue\"></span></p>\n                    <!--<img src=\"./../../assets/images/fflogs.png\">-->\n                </div>\n\n                <div class=\"player\">\n                    <div class=\"ranged\"></div>\n                    <p>Hong <span class=\"text-blue\">Meiling'</span></p>\n                    <img src=\"./../../assets/images/fflogs.png\">\n                </div>\n\n                <div class=\"player\">\n                    <div class=\"caster\"></div>\n                    <p>Hash <span class=\"text-blue\">Brown</span></p>\n                    <img src=\"./../../assets/images/fflogs.png\">\n                </div>\n            </div>\n            <div class=\"right1\">\n                <div class=\"player\">\n                    <div class=\"tank\"></div>\n                    <p>Rena <span class=\"text-blue\">Wolf</span></p>\n                    <img src=\"./../../assets/images/fflogs.png\">\n                </div>\n\n                <div class=\"player\">\n                    <div class=\"tank\"></div>\n                    <p>Livingdead <span class=\"text-blue\">Is-shit</span></p>\n                    <img src=\"./../../assets/images/fflogs.png\">\n                </div>\n\n                <div class=\"player\">\n                    <div class=\"healer\"></div>\n                    <p>Creamy <span class=\"text-blue\">Nuts</span></p>\n                    <img src=\"./../../assets/images/fflogs.png\">\n                </div>\n\n                <div class=\"player\">\n                    <div class=\"healer\"></div>\n                    <p>Anty <span class=\"text-blue\">Fan</span></p>\n                    <img src=\"./../../assets/images/fflogs.png\">\n                </div>\n            </div>\n        </div>\n\n\n\n        <div class=\"teamBox filthycasuals\">\n            <div class=\"left\">\n                <div class=\"teamName_first\">Filthy <span class=\"teamName_last\">Casuals</span></div>\n                <div class=\"prog\">Semi-Hardcore</div>\n                <div class=\"teamInfo\">The Legends, the Myth, The Filthy Casuals, a Semi-hardcore group focussed on Savages and Ultimate content. Recently cleared The Unending Coil of Bahamut and ready for Patch 5.2 and future ultimates.</div>\n            </div>\n            <div class=\"right2\">\n                <div class=\"player\">\n                    <div class=\"melee\"></div>\n                    <p>Allen <span class=\"text-blue\">Grenseal</span></p>\n                    <img src=\"./../../assets/images/fflogs.png\">\n                </div>\n\n                <div class=\"player\">\n                    <div class=\"melee\"></div>\n                    <p>Snae <span class=\"text-blue\">Lilac</span></p>\n                    <img src=\"./../../assets/images/fflogs.png\">\n                </div>\n\n                <div class=\"player\">\n                    <div class=\"ranged\"></div>\n                    <p>Akemi <span class=\"text-blue\">Akuma</span></p>\n                    <img src=\"./../../assets/images/fflogs.png\">\n                </div>\n\n                <div class=\"player\">\n                    <div class=\"caster\"></div>\n                    <p>Mica <span class=\"text-blue\">Takimoto</span></p>\n                    <img src=\"./../../assets/images/fflogs.png\">\n                </div>\n            </div>\n            <div class=\"right1\">\n                <div class=\"player\">\n                    <div class=\"tank\"></div>\n                    <p>Badga <span class=\"text-blue\">Badgarok</span></p>\n                    <img src=\"./../../assets/images/fflogs.png\">\n                </div>\n\n                <div class=\"player\">\n                    <div class=\"tank\"></div>\n                    <p>Morienne <span class=\"text-blue\">Gailrayne</span></p>\n                    <img src=\"./../../assets/images/fflogs.png\">\n                </div>\n\n                <div class=\"player\">\n                    <div class=\"healer\"></div>\n                    <p>Nemini <span class=\"text-blue\">Falh</span></p>\n                    <img src=\"./../../assets/images/fflogs.png\">\n                </div>\n\n                <div class=\"player\">\n                    <div class=\"healer\"></div>\n                    <p>Gurepu <span class=\"text-blue\">Mizuki</span></p>\n                    <img src=\"./../../assets/images/fflogs.png\">\n                </div>\n            </div>\n        </div>\n\n\n\n    </div>\n    <div class=\"highlight_spacer\"></div>\n</div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
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
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _teams_teams_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./teams/teams.component */ "./src/app/teams/teams.component.ts");
/* harmony import */ var _info_info_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./info/info.component */ "./src/app/info/info.component.ts");
/* harmony import */ var _rules_rules_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./rules/rules.component */ "./src/app/rules/rules.component.ts");
/* harmony import */ var _guides_guides_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./guides/guides.component */ "./src/app/guides/guides.component.ts");
/* harmony import */ var _apply_apply_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./apply/apply.component */ "./src/app/apply/apply.component.ts");









const routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'beta', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'teams', component: _teams_teams_component__WEBPACK_IMPORTED_MODULE_4__["TeamsComponent"] },
    { path: 'info', component: _info_info_component__WEBPACK_IMPORTED_MODULE_5__["InfoComponent"] },
    { path: 'rules', component: _rules_rules_component__WEBPACK_IMPORTED_MODULE_6__["RulesComponent"] },
    { path: 'guides', component: _guides_guides_component__WEBPACK_IMPORTED_MODULE_7__["GuidesComponent"] },
    { path: 'apply', component: _apply_apply_component__WEBPACK_IMPORTED_MODULE_8__["ApplyComponent"] },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'redux';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _teams_teams_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./teams/teams.component */ "./src/app/teams/teams.component.ts");
/* harmony import */ var _info_info_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./info/info.component */ "./src/app/info/info.component.ts");
/* harmony import */ var _rules_rules_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./rules/rules.component */ "./src/app/rules/rules.component.ts");
/* harmony import */ var _guides_guides_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./guides/guides.component */ "./src/app/guides/guides.component.ts");
/* harmony import */ var _apply_apply_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./apply/apply.component */ "./src/app/apply/apply.component.ts");












let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
            _teams_teams_component__WEBPACK_IMPORTED_MODULE_7__["TeamsComponent"],
            _info_info_component__WEBPACK_IMPORTED_MODULE_8__["InfoComponent"],
            _rules_rules_component__WEBPACK_IMPORTED_MODULE_9__["RulesComponent"],
            _guides_guides_component__WEBPACK_IMPORTED_MODULE_10__["GuidesComponent"],
            _apply_apply_component__WEBPACK_IMPORTED_MODULE_11__["ApplyComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/apply/apply.component.css":
/*!*******************************************!*\
  !*** ./src/app/apply/apply.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".subtitle {\r\n    width: 100%;\r\n    background: rgba(49, 55, 72,0.7);\r\n    margin-top: 0px;\r\n    color: white;\r\n    text-align: center;\r\n    padding: 10px;\r\n    font-size: 42px;\r\n    font-family: 'Oswald', sans-serif;\r\n}\r\n\r\n.apply-info {\r\n    text-align: center;\r\n    margin-top: 25px;\r\n    margin-bottom: 25px;\r\n    font-family: 'Muli', sans-serif;\r\n    font-size: 18px;\r\n    color: #6377a8;\r\n}\r\n\r\n.apply-form {\r\n    width: 100%;\r\n    padding: 15px;\r\n    text-align: center;\r\n}\r\n\r\n.field {\r\n    margin-top: 25px;\r\n}\r\n\r\n.field > label {\r\n    font-family: 'Muli', sans-serif;\r\n    color: white;\r\n    font-size: 18px;\r\n    padding-bottom: 15px;\r\n}\r\n\r\n.field > input {\r\n    font-family: 'Muli', sans-serif;\r\n    background: rgba(255,255,255,0.1);\r\n    border: none;\r\n    border-bottom: 1px solid rgba(255,255,255,0.2);\r\n    width: 600px;\r\n    height: 25px;\r\n    outline: none;\r\n    color: white;\r\n    padding: 10px;\r\n    margin-top: 25px;\r\n}\r\n\r\n.field > select {\r\n    font-family: 'Muli', sans-serif;\r\n \r\n    background: rgba(255,255,255,0.1);\r\n    border: none;\r\n    border-bottom: 1px solid rgba(255,255,255,0.2);\r\n    width: 300px;\r\n    height: 45px;\r\n    outline: none;\r\n    color: white;\r\n    padding: 10px;\r\n    margin-top: 25px;\r\n}\r\n\r\n.field > textarea {\r\n    font-family: 'Muli', sans-serif;\r\n    background: rgba(255,255,255,0.1);\r\n    border: none;\r\n    border-bottom: 1px solid rgba(255,255,255,0.2);\r\n    width: 600px;\r\n    height: 60px;\r\n    outline: none;\r\n    color: white;\r\n    padding: 10px;\r\n    margin-top: 25px;\r\n}\r\n\r\n.field > label > small {\r\n    font-size: 12px;\r\n    color: #6377a8;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwbHkvYXBwbHkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxnQ0FBZ0M7SUFDaEMsZUFBZTtJQUNmLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGVBQWU7SUFDZixpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQiwrQkFBK0I7SUFDL0IsZUFBZTtJQUNmLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLCtCQUErQjtJQUMvQixZQUFZO0lBQ1osZUFBZTtJQUNmLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLCtCQUErQjtJQUMvQixpQ0FBaUM7SUFDakMsWUFBWTtJQUNaLDhDQUE4QztJQUM5QyxZQUFZO0lBQ1osWUFBWTtJQUNaLGFBQWE7SUFDYixZQUFZO0lBQ1osYUFBYTtJQUNiLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLCtCQUErQjs7SUFFL0IsaUNBQWlDO0lBQ2pDLFlBQVk7SUFDWiw4Q0FBOEM7SUFDOUMsWUFBWTtJQUNaLFlBQVk7SUFDWixhQUFhO0lBQ2IsWUFBWTtJQUNaLGFBQWE7SUFDYixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSwrQkFBK0I7SUFDL0IsaUNBQWlDO0lBQ2pDLFlBQVk7SUFDWiw4Q0FBOEM7SUFDOUMsWUFBWTtJQUNaLFlBQVk7SUFDWixhQUFhO0lBQ2IsWUFBWTtJQUNaLGFBQWE7SUFDYixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsY0FBYztBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2FwcGx5L2FwcGx5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3VidGl0bGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDQ5LCA1NSwgNzIsMC43KTtcclxuICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDQycHg7XHJcbiAgICBmb250LWZhbWlseTogJ09zd2FsZCcsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5hcHBseS1pbmZvIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdNdWxpJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGNvbG9yOiAjNjM3N2E4O1xyXG59XHJcblxyXG4uYXBwbHktZm9ybSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5maWVsZCB7XHJcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xyXG59XHJcblxyXG4uZmllbGQgPiBsYWJlbCB7XHJcbiAgICBmb250LWZhbWlseTogJ011bGknLCBzYW5zLXNlcmlmO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDE1cHg7XHJcbn1cclxuXHJcbi5maWVsZCA+IGlucHV0IHtcclxuICAgIGZvbnQtZmFtaWx5OiAnTXVsaScsIHNhbnMtc2VyaWY7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDAuMSk7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwwLjIpO1xyXG4gICAgd2lkdGg6IDYwMHB4O1xyXG4gICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xyXG59XHJcblxyXG4uZmllbGQgPiBzZWxlY3Qge1xyXG4gICAgZm9udC1mYW1pbHk6ICdNdWxpJywgc2Fucy1zZXJpZjtcclxuIFxyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwwLjEpO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC4yKTtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIGhlaWdodDogNDVweDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMjVweDtcclxufVxyXG5cclxuLmZpZWxkID4gdGV4dGFyZWEge1xyXG4gICAgZm9udC1mYW1pbHk6ICdNdWxpJywgc2Fucy1zZXJpZjtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsMC4xKTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDAuMik7XHJcbiAgICB3aWR0aDogNjAwcHg7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcbn1cclxuXHJcbi5maWVsZCA+IGxhYmVsID4gc21hbGwge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgY29sb3I6ICM2Mzc3YTg7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/apply/apply.component.ts":
/*!******************************************!*\
  !*** ./src/app/apply/apply.component.ts ***!
  \******************************************/
/*! exports provided: ApplyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplyComponent", function() { return ApplyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ApplyComponent = class ApplyComponent {
    constructor() { }
    ngOnInit() {
    }
};
ApplyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-apply',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./apply.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/apply/apply.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./apply.component.css */ "./src/app/apply/apply.component.css")).default]
    })
], ApplyComponent);



/***/ }),

/***/ "./src/app/guides/guides.component.css":
/*!*********************************************!*\
  !*** ./src/app/guides/guides.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2d1aWRlcy9ndWlkZXMuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/guides/guides.component.ts":
/*!********************************************!*\
  !*** ./src/app/guides/guides.component.ts ***!
  \********************************************/
/*! exports provided: GuidesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuidesComponent", function() { return GuidesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let GuidesComponent = class GuidesComponent {
    constructor() { }
    ngOnInit() {
    }
};
GuidesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-guides',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./guides.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/guides/guides.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./guides.component.css */ "./src/app/guides/guides.component.css")).default]
    })
], GuidesComponent);



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".streamsbg {\r\n    height: 240px;\r\n    background-color: #161a25;\r\n}\r\n\r\n.twitch {\r\n    position: relative;\r\n    top: 29px;\r\n    float: left;\r\n    margin-left: 4px;\r\n    margin-right: 4px;\r\n    opacity: 0.3;\r\n}\r\n\r\n.twitch:hover {\r\n    opacity: 1;\r\n}\r\n\r\n.title-left {\r\n    float: left;\r\n    max-width: 750px;\r\n    width: 750px;\r\n}\r\n\r\n.title-right {\r\n    float: left;\r\n    max-width: 645px;\r\n    width: 645px;\r\n}\r\n\r\n.subtitle {\r\n    width: 100%;\r\n    background: rgba(49, 55, 72,0.7);\r\n    margin-top: 0px;\r\n    color: white;\r\n    text-align: center;\r\n    padding: 10px;\r\n    font-size: 42px;\r\n    font-family: 'Oswald', sans-serif;\r\n\r\n}\r\n\r\n.subtitle2 {\r\n    width: 100%;\r\n    background: #21242d;\r\n    margin-top: 200px;\r\n    color: white;\r\n    text-align: center;\r\n    padding: 10px;\r\n    font-size: 32px;\r\n    font-family: 'Oswald', sans-serif;\r\n}\r\n\r\n.whoisHead {\r\n    font-family: 'Oswald', sans-serif;\r\n    color: white;\r\n    font-size: 65px;\r\n    text-align: center;\r\n    font-weight: bold;\r\n}\r\n\r\n.news-left {\r\n    float:left; \r\n    width: 453px;\r\n    border: 1px solid #1a1e2b;\r\n    margin-top: 50px;\r\n}\r\n\r\n.news-middle {\r\n    float:left; \r\n    width: 453px;\r\n    margin-left: 15px;\r\n    margin-right: 15px;\r\n    border: 1px solid #1a1e2b;\r\n    margin-top: 50px;\r\n}\r\n\r\n.news-right {\r\n    float:left; \r\n    width: 453px;\r\n    border: 1px solid #1a1e2b;\r\n    margin-top: 50px;\r\n}\r\n\r\n.news-content {\r\n    color: white;\r\n    padding: 15px;\r\n    text-align: center;\r\n    font-family: 'Muli', sans-serif;\r\n    font-size: 12px;\r\n}\r\n\r\n.newsImg {\r\n    background-position-x: center !important;\r\n    background-position-y: center !important;\r\n    height: 185px;\r\n    width: 100%;\r\n}\r\n\r\n.newsTitle {\r\n    font-family: 'Muli', sans-serif;\r\n    font-size: 18px;\r\n    color: #5b758d;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksV0FBVztJQUNYLGdCQUFnQjtJQUNoQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGdCQUFnQjtJQUNoQixZQUFZO0FBQ2hCOztBQUdBO0lBQ0ksV0FBVztJQUNYLGdDQUFnQztJQUNoQyxlQUFlO0lBQ2YsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsZUFBZTtJQUNmLGlDQUFpQzs7QUFFckM7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixlQUFlO0lBQ2YsaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksaUNBQWlDO0lBQ2pDLFlBQVk7SUFDWixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjs7QUFLQTtJQUNJLFVBQVU7SUFDVixZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLGdCQUFnQjtBQUNwQjs7QUFDQTtJQUNJLFVBQVU7SUFDVixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsZ0JBQWdCO0FBQ3BCOztBQUNBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsZ0JBQWdCO0FBQ3BCOztBQUNBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsK0JBQStCO0lBQy9CLGVBQWU7QUFDbkI7O0FBSUE7SUFDSSx3Q0FBd0M7SUFDeEMsd0NBQXdDO0lBQ3hDLGFBQWE7SUFDYixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSwrQkFBK0I7SUFDL0IsZUFBZTtJQUNmLGNBQWM7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdHJlYW1zYmcge1xyXG4gICAgaGVpZ2h0OiAyNDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxNjFhMjU7XHJcbn1cclxuXHJcbi50d2l0Y2gge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAyOXB4O1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBtYXJnaW4tbGVmdDogNHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA0cHg7XHJcbiAgICBvcGFjaXR5OiAwLjM7XHJcbn1cclxuXHJcbi50d2l0Y2g6aG92ZXIge1xyXG4gICAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuLnRpdGxlLWxlZnQge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBtYXgtd2lkdGg6IDc1MHB4O1xyXG4gICAgd2lkdGg6IDc1MHB4O1xyXG59XHJcblxyXG4udGl0bGUtcmlnaHQge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBtYXgtd2lkdGg6IDY0NXB4O1xyXG4gICAgd2lkdGg6IDY0NXB4O1xyXG59XHJcblxyXG5cclxuLnN1YnRpdGxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSg0OSwgNTUsIDcyLDAuNyk7XHJcbiAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgZm9udC1zaXplOiA0MnB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdPc3dhbGQnLCBzYW5zLXNlcmlmO1xyXG5cclxufVxyXG5cclxuLnN1YnRpdGxlMiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6ICMyMTI0MmQ7XHJcbiAgICBtYXJnaW4tdG9wOiAyMDBweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDMycHg7XHJcbiAgICBmb250LWZhbWlseTogJ09zd2FsZCcsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi53aG9pc0hlYWQge1xyXG4gICAgZm9udC1mYW1pbHk6ICdPc3dhbGQnLCBzYW5zLXNlcmlmO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiA2NXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbi5uZXdzLWxlZnQge1xyXG4gICAgZmxvYXQ6bGVmdDsgXHJcbiAgICB3aWR0aDogNDUzcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMWExZTJiO1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxufVxyXG4ubmV3cy1taWRkbGUge1xyXG4gICAgZmxvYXQ6bGVmdDsgXHJcbiAgICB3aWR0aDogNDUzcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMxYTFlMmI7XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG59XHJcbi5uZXdzLXJpZ2h0IHtcclxuICAgIGZsb2F0OmxlZnQ7IFxyXG4gICAgd2lkdGg6IDQ1M3B4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzFhMWUyYjtcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbn1cclxuLm5ld3MtY29udGVudCB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1mYW1pbHk6ICdNdWxpJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5cclxuXHJcblxyXG4ubmV3c0ltZyB7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbi15OiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogMTg1cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLm5ld3NUaXRsZSB7XHJcbiAgICBmb250LWZhbWlseTogJ011bGknLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgY29sb3I6ICM1Yjc1OGQ7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeComponent = class HomeComponent {
    constructor() {
        this.memberStreams = ['snaeil', 'mina_vari', 'raikosuperior', 'cre4mynuts', 'tiriara_anor', 'clementiakaiser'];
    }
    deleteFromStreams(streamName, streams) {
        return streams.filter(function (ele) {
            return ele != streamName;
        });
    }
    ngOnInit() {
        const stream1 = this.memberStreams[Math.floor(Math.random() * this.memberStreams.length)];
        this.memberStreams = this.deleteFromStreams(stream1, this.memberStreams);
        const stream2 = this.memberStreams[Math.floor(Math.random() * this.memberStreams.length)];
        this.memberStreams = this.deleteFromStreams(stream2, this.memberStreams);
        const stream3 = this.memberStreams[Math.floor(Math.random() * this.memberStreams.length)];
        this.memberStreams = this.deleteFromStreams(stream3, this.memberStreams);
        const stream4 = this.memberStreams[Math.floor(Math.random() * this.memberStreams.length)];
        this.memberStreams = this.deleteFromStreams(stream4, this.memberStreams);
        const twitchStreams = [];
        twitchStreams.push(new Twitch.Embed("twitch1", {
            width: 340,
            height: 181,
            channel: stream1,
            layout: "video",
            autoplay: false
        }));
        twitchStreams.push(new Twitch.Embed("twitch2", {
            width: 340,
            height: 181,
            channel: stream2,
            layout: "video",
            autoplay: false
        }));
        twitchStreams.push(new Twitch.Embed("twitch3", {
            width: 340,
            height: 181,
            channel: stream3,
            layout: "video",
            autoplay: false
        }));
        twitchStreams.push(new Twitch.Embed("twitch4", {
            width: 340,
            height: 181,
            channel: stream4,
            layout: "video",
            autoplay: false
        }));
    }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/info/info.component.css":
/*!*****************************************!*\
  !*** ./src/app/info/info.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".leader {\r\n    width: 100%;\r\n    background: rgba(49, 55, 72,0.7);\r\n    margin-top: 0px;\r\n    color: white;\r\n    text-align: center;\r\n    padding: 10px;\r\n    font-size: 42px;\r\n    font-family: 'Oswald', sans-serif;\r\n\r\n}\r\n\r\n\r\n.officers {\r\n    width: 100%;\r\n    background: #21242d;\r\n    margin-top: 50px;\r\n    color: white;\r\n    text-align: center;\r\n    padding: 10px;\r\n    font-size: 42px;\r\n    font-family: 'Oswald', sans-serif;\r\n\r\n}\r\n\r\n\r\n.firstname {\r\n    text-align: center;\r\n    position: relative;\r\n    font-family: 'Oswald', sans-serif;\r\n    color: white;\r\n    font-size: 40px;\r\n    text-align: center;\r\n    font-weight: bold;\r\n    margin-top:0px;\r\n}\r\n\r\n\r\n.lastname {\r\n    position: relative;\r\n    color: #5b758d;\r\n    font-family: 'Oswald', sans-serif;\r\n    font-size: 40px;\r\n    text-align: center;\r\n    font-weight: bold;\r\n    margin-top:20px;\r\n}\r\n\r\n\r\n.lastname2 {\r\n    position: relative;\r\n    color: rgba(49, 62, 72, 0.7);\r\n    font-family: 'Oswald', sans-serif;\r\n    font-size: 40px;\r\n    text-align: center;\r\n    font-weight: bold;\r\n    margin-top:20px;\r\n}\r\n\r\n\r\n.info-text {\r\n    text-align: left;\r\n    position: relative;\r\n    font-family: 'Muli', sans-serif;\r\n    color: white;\r\n    font-size: 12px;\r\n    margin-top:0px;\r\n    line-height: 20px;\r\n}\r\n\r\n\r\n.info-left { \r\n    padding: 5px;\r\n    width: 45%;\r\n    float: left;  \r\n}\r\n\r\n\r\n.info-right { \r\n    padding: 5px;\r\n    width: 45%;\r\n    float: right; \r\n} \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5mby9pbmZvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsZ0NBQWdDO0lBQ2hDLGVBQWU7SUFDZixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixlQUFlO0lBQ2YsaUNBQWlDOztBQUVyQzs7O0FBR0E7SUFDSSxXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixlQUFlO0lBQ2YsaUNBQWlDOztBQUVyQzs7O0FBR0E7SUFDSSxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGlDQUFpQztJQUNqQyxZQUFZO0lBQ1osZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsY0FBYztBQUNsQjs7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsY0FBYztJQUNkLGlDQUFpQztJQUNqQyxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixlQUFlO0FBQ25COzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQiw0QkFBNEI7SUFDNUIsaUNBQWlDO0lBQ2pDLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkI7OztBQUdBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQiwrQkFBK0I7SUFDL0IsWUFBWTtJQUNaLGVBQWU7SUFDZixjQUFjO0lBQ2QsaUJBQWlCO0FBQ3JCOzs7QUFHQTtJQUNJLFlBQVk7SUFDWixVQUFVO0lBQ1YsV0FBVztBQUNmOzs7QUFDQTtJQUNJLFlBQVk7SUFDWixVQUFVO0lBQ1YsWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2luZm8vaW5mby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxlYWRlciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoNDksIDU1LCA3MiwwLjcpO1xyXG4gICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogNDJweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnT3N3YWxkJywgc2Fucy1zZXJpZjtcclxuXHJcbn1cclxuXHJcblxyXG4ub2ZmaWNlcnMge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMjEyNDJkO1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDQycHg7XHJcbiAgICBmb250LWZhbWlseTogJ09zd2FsZCcsIHNhbnMtc2VyaWY7XHJcblxyXG59XHJcblxyXG5cclxuLmZpcnN0bmFtZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBmb250LWZhbWlseTogJ09zd2FsZCcsIHNhbnMtc2VyaWY7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIG1hcmdpbi10b3A6MHB4O1xyXG59XHJcblxyXG4ubGFzdG5hbWUge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgY29sb3I6ICM1Yjc1OGQ7XHJcbiAgICBmb250LWZhbWlseTogJ09zd2FsZCcsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIG1hcmdpbi10b3A6MjBweDtcclxufVxyXG5cclxuLmxhc3RuYW1lMiB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBjb2xvcjogcmdiYSg0OSwgNjIsIDcyLCAwLjcpO1xyXG4gICAgZm9udC1mYW1pbHk6ICdPc3dhbGQnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBtYXJnaW4tdG9wOjIwcHg7XHJcbn1cclxuXHJcblxyXG4uaW5mby10ZXh0IHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBmb250LWZhbWlseTogJ011bGknLCBzYW5zLXNlcmlmO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgbWFyZ2luLXRvcDowcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjBweDtcclxufVxyXG5cclxuXHJcbi5pbmZvLWxlZnQgeyBcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIHdpZHRoOiA0NSU7XHJcbiAgICBmbG9hdDogbGVmdDsgIFxyXG59XHJcbi5pbmZvLXJpZ2h0IHsgXHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICB3aWR0aDogNDUlO1xyXG4gICAgZmxvYXQ6IHJpZ2h0OyBcclxufSAiXX0= */");

/***/ }),

/***/ "./src/app/info/info.component.ts":
/*!****************************************!*\
  !*** ./src/app/info/info.component.ts ***!
  \****************************************/
/*! exports provided: InfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoComponent", function() { return InfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let InfoComponent = class InfoComponent {
    constructor() { }
    ngOnInit() {
    }
};
InfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-info',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./info.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/info/info.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./info.component.css */ "./src/app/info/info.component.css")).default]
    })
], InfoComponent);



/***/ }),

/***/ "./src/app/rules/rules.component.css":
/*!*******************************************!*\
  !*** ./src/app/rules/rules.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3J1bGVzL3J1bGVzLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/rules/rules.component.ts":
/*!******************************************!*\
  !*** ./src/app/rules/rules.component.ts ***!
  \******************************************/
/*! exports provided: RulesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RulesComponent", function() { return RulesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let RulesComponent = class RulesComponent {
    constructor() { }
    ngOnInit() {
    }
};
RulesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-rules',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./rules.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/rules/rules.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./rules.component.css */ "./src/app/rules/rules.component.css")).default]
    })
], RulesComponent);



/***/ }),

/***/ "./src/app/teams/teams.component.css":
/*!*******************************************!*\
  !*** ./src/app/teams/teams.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".teamBox {\r\n    border: 2px solid rgba(160, 200, 212, 0.2);\r\n    width: 100%;\r\n    margin-top: 35px;\r\n    padding: 15px;\r\n    overflow:auto; \r\n    color: white;\r\n    font-family: 'Muli', sans-serif;\r\n    font-weight: bold;\r\n    background-color: rgba(0,0,0,0.1);\r\n}\r\n.teamBox:hover {\r\n    border: 2px solid rgba(160, 200, 212, 0.5);\r\n}\r\n.filthycasuals {\r\n    background: url('filthycasuals.png') no-repeat top left;\r\n}\r\n.teamName_first {\r\n    text-align: center;\r\n    position: relative;\r\n    font-family: 'Oswald', sans-serif;\r\n    color: white;\r\n    font-size: 65px;\r\n    text-align: center;\r\n    font-weight: bold;\r\n    margin-top:0px;\r\n}\r\n.teamName_last {\r\n    position: relative;\r\n    color: #5b758d;\r\n    font-family: 'Oswald', sans-serif;\r\n    font-size: 65px;\r\n    text-align: center;\r\n    font-weight: bold;\r\n    margin-top:20px;\r\n}\r\n.teamInfo {\r\n    text-align: center;\r\n    font-size: 12px;\r\n    margin-top: 15px;\r\n    width: 65%;\r\n    margin: 0 auto;\r\n    position: relative;\r\n    top: 15px;\r\n}\r\n.prog {\r\n    text-transform: uppercase !important;\r\n    font-size: 16px;\r\n    text-align: center;\r\n    color: #5b758d;\r\n}\r\n.left  { \r\n    width: 50%;\r\n    float:left;  \r\n}\r\n.right1 { \r\n    width: 25%;\r\n    float:right; \r\n}\r\n.right2 { \r\n    width: 25%;\r\n    float:right; \r\n}\r\n.text-blue {\r\n    color: #5b758d;\r\n}\r\n.player {\r\n    margin: 5px;\r\n    padding: 5px;\r\n    height: 35px;\r\n}\r\n.player > p {\r\n    display: inline;\r\n    position: relative;\r\n    top: -8px;\r\n    left: 10px;\r\n    margin: 0;\r\n}\r\n.player > img {\r\n    position: relative;\r\n    left: 25px;\r\n    bottom: 5px;\r\n    width: 15px;\r\n    height: 15px;\r\n}\r\n.tank {\r\n    background: url('tank.png') no-repeat center center;\r\n    background-size: contain;\r\n    width: 26px;\r\n    height: 26px;\r\n    display: inline-block;\r\n}\r\n.healer {\r\n    background: url('healer.png') no-repeat center center;\r\n    background-size: contain;\r\n    width: 26px;\r\n    height: 26px;\r\n    display: inline-block;\r\n}\r\n.melee {\r\n    background: url('melee.png') no-repeat center center;\r\n    background-size: contain;\r\n    width: 26px;\r\n    height: 26px;\r\n    display: inline-block;\r\n}\r\n.ranged {\r\n    background: url('ranged.png') no-repeat center center;\r\n    background-size: contain;\r\n    width: 26px;\r\n    height: 26px;\r\n    display: inline-block;\r\n}\r\n.caster {\r\n    background: url('caster.png') no-repeat center center;\r\n    background-size: contain;\r\n    width: 26px;\r\n    height: 26px;\r\n    display: inline-block;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVhbXMvdGVhbXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDBDQUEwQztJQUMxQyxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixhQUFhO0lBQ2IsWUFBWTtJQUNaLCtCQUErQjtJQUMvQixpQkFBaUI7SUFDakIsaUNBQWlDO0FBQ3JDO0FBQ0E7SUFDSSwwQ0FBMEM7QUFDOUM7QUFHQTtJQUNJLHVEQUFvRjtBQUN4RjtBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixpQ0FBaUM7SUFDakMsWUFBWTtJQUNaLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsaUNBQWlDO0lBQ2pDLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkI7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLFVBQVU7SUFDVixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLFNBQVM7QUFDYjtBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsY0FBYztBQUNsQjtBQUdBO0lBQ0ksVUFBVTtJQUNWLFVBQVU7QUFDZDtBQUNBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7QUFDZjtBQUNBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7QUFDZjtBQUVBO0lBQ0ksY0FBYztBQUNsQjtBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxVQUFVO0lBQ1YsU0FBUztBQUNiO0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFdBQVc7SUFDWCxXQUFXO0lBQ1gsWUFBWTtBQUNoQjtBQUVBO0lBQ0ksbURBQStFO0lBQy9FLHdCQUF3QjtJQUN4QixXQUFXO0lBQ1gsWUFBWTtJQUNaLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0kscURBQWlGO0lBQ2pGLHdCQUF3QjtJQUN4QixXQUFXO0lBQ1gsWUFBWTtJQUNaLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksb0RBQWdGO0lBQ2hGLHdCQUF3QjtJQUN4QixXQUFXO0lBQ1gsWUFBWTtJQUNaLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0kscURBQWlGO0lBQ2pGLHdCQUF3QjtJQUN4QixXQUFXO0lBQ1gsWUFBWTtJQUNaLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0kscURBQWlGO0lBQ2pGLHdCQUF3QjtJQUN4QixXQUFXO0lBQ1gsWUFBWTtJQUNaLHFCQUFxQjtBQUN6QiIsImZpbGUiOiJzcmMvYXBwL3RlYW1zL3RlYW1zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGVhbUJveCB7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDE2MCwgMjAwLCAyMTIsIDAuMik7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi10b3A6IDM1cHg7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgb3ZlcmZsb3c6YXV0bzsgXHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LWZhbWlseTogJ011bGknLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuMSk7XHJcbn1cclxuLnRlYW1Cb3g6aG92ZXIge1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiYSgxNjAsIDIwMCwgMjEyLCAwLjUpO1xyXG59XHJcblxyXG5cclxuLmZpbHRoeWNhc3VhbHMge1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCcuLy4uLy4uL2Fzc2V0cy9pbWFnZXMvc3RhdGljL2ZpbHRoeWNhc3VhbHMucG5nJykgbm8tcmVwZWF0IHRvcCBsZWZ0O1xyXG59XHJcblxyXG4udGVhbU5hbWVfZmlyc3Qge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZm9udC1mYW1pbHk6ICdPc3dhbGQnLCBzYW5zLXNlcmlmO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiA2NXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBtYXJnaW4tdG9wOjBweDtcclxufVxyXG4udGVhbU5hbWVfbGFzdCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBjb2xvcjogIzViNzU4ZDtcclxuICAgIGZvbnQtZmFtaWx5OiAnT3N3YWxkJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogNjVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbWFyZ2luLXRvcDoyMHB4O1xyXG59XHJcblxyXG4udGVhbUluZm8ge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgIHdpZHRoOiA2NSU7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogMTVweDtcclxufVxyXG5cclxuLnByb2cge1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZSAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICM1Yjc1OGQ7XHJcbn1cclxuXHJcbiAgXHJcbi5sZWZ0ICB7IFxyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGZsb2F0OmxlZnQ7ICBcclxufVxyXG4ucmlnaHQxIHsgXHJcbiAgICB3aWR0aDogMjUlO1xyXG4gICAgZmxvYXQ6cmlnaHQ7IFxyXG59IFxyXG4ucmlnaHQyIHsgXHJcbiAgICB3aWR0aDogMjUlO1xyXG4gICAgZmxvYXQ6cmlnaHQ7IFxyXG59IFxyXG5cclxuLnRleHQtYmx1ZSB7XHJcbiAgICBjb2xvcjogIzViNzU4ZDtcclxufVxyXG5cclxuLnBsYXllciB7XHJcbiAgICBtYXJnaW46IDVweDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGhlaWdodDogMzVweDtcclxufVxyXG4ucGxheWVyID4gcCB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IC04cHg7XHJcbiAgICBsZWZ0OiAxMHB4O1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4ucGxheWVyID4gaW1nIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGxlZnQ6IDI1cHg7XHJcbiAgICBib3R0b206IDVweDtcclxuICAgIHdpZHRoOiAxNXB4O1xyXG4gICAgaGVpZ2h0OiAxNXB4O1xyXG59XHJcblxyXG4udGFuayB7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4vLi4vLi4vYXNzZXRzL2ltYWdlcy9jbGFzcy90YW5rLnBuZycpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG4gICAgd2lkdGg6IDI2cHg7XHJcbiAgICBoZWlnaHQ6IDI2cHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuLmhlYWxlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4vLi4vLi4vYXNzZXRzL2ltYWdlcy9jbGFzcy9oZWFsZXIucG5nJykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbiAgICB3aWR0aDogMjZweDtcclxuICAgIGhlaWdodDogMjZweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG4ubWVsZWUge1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCcuLy4uLy4uL2Fzc2V0cy9pbWFnZXMvY2xhc3MvbWVsZWUucG5nJykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbiAgICB3aWR0aDogMjZweDtcclxuICAgIGhlaWdodDogMjZweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG4ucmFuZ2VkIHtcclxuICAgIGJhY2tncm91bmQ6IHVybCgnLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2NsYXNzL3JhbmdlZC5wbmcnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICAgIHdpZHRoOiAyNnB4O1xyXG4gICAgaGVpZ2h0OiAyNnB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcbi5jYXN0ZXIge1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCcuLy4uLy4uL2Fzc2V0cy9pbWFnZXMvY2xhc3MvY2FzdGVyLnBuZycpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG4gICAgd2lkdGg6IDI2cHg7XHJcbiAgICBoZWlnaHQ6IDI2cHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/teams/teams.component.ts":
/*!******************************************!*\
  !*** ./src/app/teams/teams.component.ts ***!
  \******************************************/
/*! exports provided: TeamsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamsComponent", function() { return TeamsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TeamsComponent = class TeamsComponent {
    constructor() { }
    ngOnInit() {
    }
};
TeamsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-teams',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./teams.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/teams/teams.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./teams.component.css */ "./src/app/teams/teams.component.css")).default]
    })
], TeamsComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /mnt/c/Users/Mica/Documents/redux/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map