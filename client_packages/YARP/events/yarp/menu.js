'use strict';
/**
* @file Menu events
*/

mp.events.add('purchaseStoreItem', (storeid, itemid, amount) => {
  mp.events.callRemote('purchaseStoreItem', storeid, itemid, amount);
});

mp.events.add('purchaseAmmuWeapon', (id, amount) => {
  mp.events.callRemote('purchaseAmmuWeapon', id, amount);
});

mp.events.add('verifyLogin', (password) => {
  mp.events.callRemote('verifyLogin', password);
});

mp.events.add('unbindToggleChat', (code) => {
  mp.events.callRemote('unbindToggleChat');
});
