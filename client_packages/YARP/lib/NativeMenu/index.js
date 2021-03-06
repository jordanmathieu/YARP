
global.NativeMenu = new yarp.Proxy('NativeMenu');

// Core
NativeMenu.Color = require('./YARP/lib/NativeMenu/Core/Color.js');
NativeMenu.Menu = require('./YARP/lib/NativeMenu/Core/Menu.js');
NativeMenu.MainMenu = require('./YARP/lib/NativeMenu/Core/MainMenu.js');
NativeMenu.MenuItem = require('./YARP/lib/NativeMenu/Core/MenuItem.js');
NativeMenu.MenuPool = require('./YARP/lib/NativeMenu/Core/MenuPool.js');
NativeMenu.Sound = require('./YARP/lib/NativeMenu/Core/Sound.js');
NativeMenu.TextureDictionary = require('./YARP/lib/NativeMenu/Core/TextureDictionary.js');

// MenuItems
NativeMenu.TextMenuItem = require('./YARP/lib/NativeMenu/MenuItems/TextMenuItem.js');
NativeMenu.CheckboxMenuItem = require('./YARP/lib/NativeMenu/MenuItems/CheckboxMenuItem.js');
NativeMenu.CloseMenuItem = require('./YARP/lib/NativeMenu/MenuItems/CloseMenuItem.js');
NativeMenu.InputMenuItem = require('./YARP/lib/NativeMenu/MenuItems/InputMenuItem.js');
NativeMenu.ListMenuItem = require('./YARP/lib/NativeMenu/MenuItems/ListMenuItem.js');
NativeMenu.SliderMenuItem = require('./YARP/lib/NativeMenu/MenuItems/SliderMenuItem.js');
NativeMenu.SubMenuItem = require('./YARP/lib/NativeMenu/MenuItems/SubMenuItem.js');

// Data
NativeMenu.CommonMenuTexture = require('./YARP/lib/NativeMenu/Data/CommonMenuTexture.js');
NativeMenu.Control = require('./YARP/lib/NativeMenu/Data/Control.js');
NativeMenu.MenuBadge = require('./YARP/lib/NativeMenu/Data/MenuBadge.js');

// MenuBuilder
NativeMenu.Button = require('./YARP/lib/NativeMenu/Builder/Button.js');
NativeMenu.DebugPanel = require('./YARP/lib/NativeMenu/Builder/DebugPanel.js');
NativeMenu.InputPanel = require('./YARP/lib/NativeMenu/Builder/InputPanel.js');
NativeMenu.Panel = require('./YARP/lib/NativeMenu/Builder/Panel.js');
NativeMenu.MenuBuilder = require('./YARP/lib/NativeMenu/Builder/MenuBuilder.js');
NativeMenu.Skin = require('./YARP/lib/NativeMenu/Builder/Skin.js');


exports = NativeMenu;
