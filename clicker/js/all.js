import "./variables.js";
import "./addBall.js";
import "./gacha.js";
import "./dataManagement.js";
import "./update.js";

import users from "./userData.json" assert { type: "json" };

console.log(`Users : ${users.users[0]}`);
