//Var
var cleartimer = 80;
var countdown = 6000;
var hungerallowed = true;
var zdropingot = 0;
var zpdropcookie = 0;
var dispensex = 0;
var dispensey = 0;
var dispensez = 0;
var carrieditem = 0;
var amount = 0;
var spawnerx = 0;
var spawnery = 0;
var spawnerz = 0;
var brokensand = 0;
var mainDataTags = ["ench","attribute"];
var subDataTags = ["sharpness","fireaspect","protection","thorns","fortune","silktouch","unbreaking","speed","attackdamage","healthboost"];
var cmdblockx = 0;
var cmdblocky = 0;
var cmdblockz = 0;
var cmdblockc = "";
var output = "";

//Blocks 
function newLevel() {
if(Level.getGameMode()==0) {
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
      ctx.runOnUiThread(new java.lang.Runnable(){run: function(){
        try{
          var directory = new android.graphics.BitmapFactory.decodeFile("/games/com.mojang/morelikepctextures/hunger/fullhunger.png"); 
          var img = new android.graphics.drawable.BitmapDrawable(directory); 
          var hunger1 = new android.widget.ImageView(ctx);  
          hunger1.setImageBitmap(img);

          var hungerWindow = new android.widget.PopupWindow();
          hungerWindow.setTouchable(false);
          hungerWindow.setWidth(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);
          hungerWindow.setHeight(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);
          hungerWindow.setBackgroundDrawable(new android.graphics.Drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
          hungerWindow.showAtLocation(ctx.getWindow.getDecorView(), android.view.Gravity.TOP | android.view.Gravity.CENTER);
        } catch(err) {
          error(err);
      }}});
    }
ModPE.showTipMessage("§7Notice: §8Custom blocks are still under testing.");
ModPE.showTipMessage("§8Reporting bugs would be awesome.");
Block.defineBlock(23,"Dispenser",[["furnace",3],["furnace",3],["piston_inner",0],["furnace",2],["furnace",2],["furnace",2]],1);
Block.defineBlock(25,"Note Block",["jukebox_side",0],1);
Block.defineBlock(28,"Detector Rail",["rail_detector",0],2);
Block.defineBlock(29,"Sticky Piston",[["piston_bottom",0], ["piston_top_normal",0], ["piston_side",0], ["piston_side",0], ["piston_side",0], ["piston_side",0]],2); 
Block.defineBlock(33,"Piston",[["piston_bottom",0], ["piston_top_sticky",0], ["piston_side",0], ["piston_side",0], ["piston_side",0], ["piston_side",0]],2); 
Block.defineBlock(138,"Nether Brick Slab",["nether_brick",0],0,false,13);
Block.defineBlock(52,"Monster Spawner",["mob_spawner",0],1,false,13);
Block.defineBlock(55,"Redstone",["redstone_dust_cross",0],2,false,13);
Block.defineBlock(70,"Pressure Plate",["stone",0],0);
Block.defineBlock(72,"Pressure Plate",["planks",0],0);
Block.defineBlock(84,"Jukebox",[["jukebox_side",0], ["jukebox_top",0], ["jukebox_side",0], ["jukebox_side",0], ["jukebox_side",0], ["jukebox_side",0]],2);
Block.defineBlock(88,"Soul Sand",["soul_sand",0],1);
Block.defineBlock(99,"Giant Red Mushroom",["mushroom_block_skin_red",0],2);
Block.defineBlock(100,"Giant Brown Mushroom",["mushroom_block_skin_brown",0],2);
Block.defineBlock(106,"Vines",["vine",0],3,false,13);
Block.defineBlock(110,"Mycelium",[["dirt",0], ["mycelium_top",0], ["mycelium_side",0],["mycelium_side",0],["mycelium_side",0], ["mycelium_side",0]],1); 
Block.defineBlock(120,"End Portal",[["endstone",0],["end_portal_top",0],["end_portal_side",0],["end_portal_side",0],["end_portal_side",0], ["end_portal_side",0]],0);
Block.defineBlock(121,"End Stone",["end_stone",0]);
Block.defineBlock(75,"Redstone Torch",["redstone_torch_off",0],2, false,2);
Block.defineBlock(76,"Redstone Torch",["redstone_torch_on",0],2, false,2);
//Block.defineBlock(159,"Stained Glass",["glass",0],0, false,13);
Block.defineBlock(123,"Redstone Lamp", ["redstone_lamp_off",0],2);
Block.defineBlock(124,"Redstone Lamp", ["redstone_lamp_on",0],2);
Block.defineBlock(133,"Emerald Block", ["emerald_block",0],1);
Block.defineBlock(137,"Command Block", ["command_block",0]);
Block.defineBlock(129,"Emerald Ore", ["emerald_ore",0]);
Block.defineBlock(152,"Redstone Block",["redstone_block",0]);
Block.setShape(27,0,0,0,1,1/32,1);
Block.setShape(28,0,0,0,1,1/32,1);
Block.setShape(138,0,0,0,1,1/2,1);
Block.setShape(55,0,0,0,1,1/32,1);
Block.setShape(66,0,0,0,1,1/32,1);
Block.setShape(70,1/16,0,1/16,15/16,1/32,15/16);
Block.setShape(72,1/16,0,1/16,15/16,1/32,15/16);
Block.setShape(106,0,0,63/64,1,1,64/64);
Block.setShape(120,0,0,0,1,5/6,1);
Block.setLightLevel(76,10);
Block.setLightLevel(124,15);
Block.setDestroyTime(19,0.6);
Block.setDestroyTime(23,3.5);
Block.setDestroyTime(25,0.75);
Block.setDestroyTime(27,0.25);
Block.setDestroyTime(28,0.25);
Block.setDestroyTime(29,0.75);
Block.setDestroyTime(33,0.75);
Block.setDestroyTime(138,1.25);
Block.setDestroyTime(52,8);
Block.setDestroyTime(55,0);
Block.setDestroyTime(66,0.25);
Block.setDestroyTime(70,1.25);
Block.setDestroyTime(72,0.5);
Block.setDestroyTime(75,0);
Block.setDestroyTime(76,0);
Block.setDestroyTime(84,0.75);
Block.setDestroyTime(86,0.6);
Block.setDestroyTime(88,0.3);
Block.setDestroyTime(91,0.6);
Block.setDestroyTime(99,0.3);
Block.setDestroyTime(100,0.3);
Block.setDestroyTime(101,15);
Block.setDestroyTime(106,0.2);
Block.setDestroyTime(110,0.7);
Block.setDestroyTime(120,1.4);
Block.setDestroyTime(121,1.4);
Block.setDestroyTime(123,0.3);
Block.setDestroyTime(124,0,3);
Block.setDestroyTime(129,3);
Block.setDestroyTime(133,5);
Block.setDestroyTime(152,5);
Block.setDestroyTime(255,1);
Block.setRenderLayer(106,1);
Block.setRenderLayer(52,1);
Block.setRenderLayer(159,2);
Block.setRenderLayer(27,1);
Block.setRenderLayer(28,1);
Block.setRenderLayer(66,1);
Block.setRenderLayer(79,2);
Block.setRenderLayer(76,1);
Block.setRenderLayer(75,1);
Block.setRenderLayer(55,1);
Block.setRenderLayer(101,1);
Block.setColor(55,[0xCC0000]);
Block.setColor(106,[0x00CC00]);
ModPE.setFoodItem(322,"apple_golden",0,4,"§bGolden Apple");
ModPE.setFoodItem(510,"apple_golden",0,20,"§dGolden Apple");
ModPE.setFoodItem(358,"cookie",0,2,"Cookie");
ModPE.setFoodItem(349,"fish_raw",0,2,"Raw Fish");
ModPE.setFoodItem(350,"fish_cooked",0,6,"Cooked Fish");
ModPE.setFoodItem(375,"spider_eye",0,-3,"Spider Eye");
ModPE.setFoodItem(382,"melon_speckled",0,4,"Glistering Melon");
ModPE.setFoodItem(367,"rotten_flesh",0,1,"Rotten Flesh");
ModPE.setItem(371,"gold_nugget",0,"Golden Nugget");
ModPE.setItem(388,"emerald",0,"Emerald");
ModPE.addCraftRecipe(322,1,0,[266,8,0,260,1,0]);
ModPE.addCraftRecipe(321,1,9,[41,8,0,260,1,0]);
ModPE.addCraftRecipe(23,1,0,[4,7,0,261,1,0,331,1,0]);
ModPE.addCraftRecipe(29,1,0,[33,1,0,341,1,0]);
ModPE.addCraftRecipe(138,6,0,[112,3,0]);
ModPE.addCraftRecipe(70,1,0,[1,2,0]);
ModPE.addCraftRecipe(72,1,0,[5,2,0]);
ModPE.addCraftRecipe(76,1,0,[331,1,0,280,1,0]);
ModPE.addCraftRecipe(371,9,0,[266,1,0]);
ModPE.addCraftRecipe(266,1,0,[371,9,0]);
ModPE.addCraftRecipe(382,1,0,[360,1,0,371,8,0]);
ModPE.addCraftRecipe(133,1,0,[388,1,0]);
ModPE.addFurnaceRecipe(349,350,0);
Player.addItemCreativeInv(88,1);
}

//Script
function procCmd(c) {
  var data = c.split(" ");
  var command = data[0];
  switch(command) {
    case 'giveblocks1': {
      clientMessage("§8Giving Blocks");
      Player.addItemInventory(23,1); //Dispenser 
      Player.addItemInventory(25,1); //Note Block 
      Player.addItemInventory(28,1); //Detector Rail (Not functional)
      Player.addItemInventory(29,1); //Sticky Piston (Not functional)
      Player.addItemInventory(33,1); //Piston (Not functional)
      Player.addItemInventory(138,1) //Nether Brick Slab
      Player.addItemInventory(52,1); //Mob Spawner (Not functional)
      Player.addItemInventory(55,1); //Redstone (Not functional)
      Player.addItemInventory(66,1); //Rail (Not functional)
      Player.addItemInventory(70,1); //S P Plate (Not functional)
      Player.addItemInventory(72,1); //W P Plate (Not functional)
      Player.addItemInventory(84,1); //Jukebox (Not functional)
      break;
    } case 'giveblocks2': {
      clientMessage("§8Giving Blocks");
      Player.addItemInventory(88,1); //Soul Sand
      Player.addItemInventory(99,1); //Big Red Mushroom
      Player.addItemInventory(100,1); //Big Brown Mushroom
      Player.addItemInventory(101,1); //Iron Bars
      Player.addItemInventory(106,1); //Vines
      Player.addItemInventory(110,1); //Mycelium
      Player.addItemInventory(120,1); //End Frame
      Player.addItemInventory(121,1); //End Stone
      Player.addItemInventory(75,1); //Off Redstone Torch
      Player.addItemInventory(76,1); //On Redstone Torch
      break;
    } case 'giveitems': {
      clientMessage("§8Items have been given!");
      Player.addItemInventory(322,1); //Normal Golden Apple
      Player.addItemInventory(510,1); //OP Golden Apple
      Player.addItemInventory(358,1); //Cookie
      Player.addItemInventory(349,1); //Raw Fish
      Player.addItemInventory(350,1); //Cooked Fish
      Player.addItemInventory(375,1); //Spider Eye
      Player.addItemInventory(382,1); //Glistening Melon
      Player.addItemInventory(367,1); //Rotten Flesh
      Player.addItemInventory(371,1); //Golden Nugget
      break;
    } case 'drop': {
      if(carrieditem!==0) {
        Level.dropItem(dispensex,dispensey,dispensez,0,carrieditem,amount);
      } else {
        clientMessage("§cYou have not selected a item.");
        }
      break;
    } case 'info': {
      clientMessage("§8More Like PC Version");
      clientMessage("§7Version: §81.4");
      clientMessage("§7Upcoming: §82.0: Block generation,");
      clientMessage("§8Proper hunger UI, Sorta caves,");
      clientMessage("§8and more blocks! (WAY MORE)");
      clientMessage("§4Copyright PocketEdition_Miner.");
      clientMessage("§4DO NOT DISTRIBUTE.");
      break;
    } case 'help': {
      if(data[1]==1) {
        clientMessage("§2--- Showing help page 1 of 3 (/help <page>) ---");
        clientMessage("§f/gamemode <mode>");
        clientMessage("§f/give <item> <amount>");
        clientMessage("§f/help <page>");
        clientMessage("§f/kill");
        clientMessage("§f/me <action>");
      } else if(data[1]==2) {
        clientMessage("§2--- Showing help page 2 of 3 (/help <page>) ---");
        clientMessage("§f/playsound <noise> <volume>");
        clientMessage("§f/setblock <x> <y> <z> <tileid> ");
        clientMessage("§f/spawnpoint");
        clientMessage("§f/summon <entityid> <mobfolderskin>");
        clientMessage("§f/time <set> <time>");
      } else if(data[1]==3) {
        clientMessage("§2--- Showing help page 3 of 3 (/help <page>) ---");
        clientMessage("§f/tp <x> <y> <z>");
        clientMessage("§4/gamerule §8Work In Progress");
      } else {
        clientMessage("§2--- Showing help page 1 of 3 (/help <page>) ---");
        clientMessage("§f/gamemode <mode>");
        clientMessage("§f/give <item> <amount>");
        clientMessage("§f/help <page>");
        clientMessage("§f/kill");
        clientMessage("§f/me <action>");
        }
      break;
    } case 'gamemode': {
      if(data[1]==undefined) {
        clientMessage("§cUsage: /gamemode <mode>");
      } else if(data[1]=="1"||data[1]=="0") {
        Level.setGameMode(data[1]);
        clientMessage("Your gamemode has been updated");
        }
      break;
    } case 'give': {
      if(data[1]==undefined||data[2]==undefined) {
        clientMessage("§cUsage: /give <item> <amount>");
      } else {
        Player.addItemInventory(data[1],data[2]);
        clientMessage("Given ["+data[1]+"] * "+data[2]+" to "+Player.getName(getPlayerEnt()));
        }
      break;
    } case 'kill': {
      clientMessage(Player.getName(getPlayerEnt())+" died");
      clientMessage("Ouch. That looked like it hurt.");
      Player.setHealth(0);
      break;
    } case 'me': {
      if(data[1]==undefined) {
        clientMessage("§cUsage: /me <action>");
      } else {
        clientMessage("* "+Player.getName(getPlayerEnt())+" "+data.slice(1).join(" "));
        }
      break;
    } case 'playsound': {
      if(data[1]==undefined||data[2]==undefined||data[3]==undefined) {
        clientMessage("§cUsage: /playsound <soundname> <volume> <pitch>");
      } else {
        Level.playSound(Player.getX(),Player.getY(),Player.getZ(),""+data[1]+"",data[2],data[3]);
        clientMessage("Played sound "+data[1]+" to "+Player.getName(getPlayerEnt()));
        }
      break;
    } case 'setblock': {
      if(data[1]==undefined||data[2]==undefined||data[3]==undefined||data[4]==undefined) {
        clientMessage("§cUsage: /setblock <x> <y> <z> <tileid>");
      } else {
        Level.setTile(data[1],data[2],data[3],data[4]);
        clientMessage("Block placed");
        }
      break;
    } case 'spawnpoint': {
      Level.setSpawn(Player.getX(), Player.getY(), Player.getZ());
      var PX = Player.getX();
      var PY = Player.getY();
      var PZ = Player.getZ();
      clientMessage("Set the spawn point to ("+PX+","+PY+","+PZ+")");
      break;
    } case 'summon': {
      if(data[1]==undefined||data[2]==undefined) {
        clientMessage("§cUsage: /summon <entityid> <mobfolderskin>");
      } else {
        Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(),data[1],"mob/"+data[2]+"");
        clientMessage("Object sucessfully summoned");
        }
      break;
    } case 'time': {
      if(data[1]==undefined||data[2]==undefined) {
        clientMessage("§cUsage: /time <set> <time>");
      } else {
        Level.setTime(data[2]);
        clientMessage("Set the time to "+data[2]+"");
        }
      break;
    } case 'tp': {
      Entity.setPosition(getPlayerEnt(),data[1], data[2], data[3]);
      clientMessage("Teleported "+Player.getName(Player.getEntity())+"  to "+data[1]+","+data[2]+","+data[3]+"");
      break;
    } case 'gamerule': {
      print("wip");
      break;
      }
    }
}

function entityAdded(entity) {
  if(entity==getPlayerEnt()) {
    ModPE.showTipMessage("§6Notice > §7Custom blocks are under testing. \n§8Report bugs you find.");
  } else {
    Entity.setHealth(entity,20);
    }
}

//Redstone (Uncomfirmed)

//Other stuff
function destroyBlock(x,y,z,s) {
  if(Level.getTile(x,y,z)==129) {
    Level.dropItem(x,y,z,388);
  } var blocky = Level.getTile(x,y,z);
     if(brokensand==10&&blocky==12) {
        Level.dropItem(x,y,z,0,349,1);
        brokensand = 0;
     } else if(blocky==12) {
        brokensand = brokensand +1;
     } else if(blocky==73) {
        Level.dropItem(x,y,z,0,55,6);
      }
}
  
function deathHook(murderer,victim) {
   if(zdropingot==25&&Entity.getEntityTypeId(victim)==32) {
     Level.dropItem(Entity.getX(victim),Entity.getY(victim), Entity.getZ(victim),0,269,5);
     zdropingot = 0;
   } else if(Entity.getEntityTypeId(victim)==32) {
     zdropingot = zdropingot +1;
   } else if(zpdropcookie==2&&Entity.getEntityTypeId(victim)==36) {
     Level.dropItem(Entity.getX(victim),Entity.getY(victim),Entity.getZ(victim),0,358,5);
     zpdropcookie = 0;
   } else if(Entity.getEntityTypeId(victim)==36) {
     zpdropcookie = zpdropcookie +1;
   }
}

//Hunger
function modTick() {
  countdown--;
  if(Level.getGameMode()==1||hungerallowed==false) {
    countdown = 6002;
  } else if(countdown==6000) {
    ModPE.showTipMessage("§eHunger: §c10/10");
  } else if(countdown==4000) {
    ModPE.showTipMessage("§eHunger: §c9/10");
  } else if(countdown==3500) {
    ModPE.showTipMessage("§eHunger: §c8/10");
  } else if(countdown==3125) {
    ModPE.showTipMessage("§eHunger: §c7/10");
  } else if(countdown==2875) {
    clientMessage("§6♨♨♨§8♨♨");
  } else if(countdown==2500) {
    clientMessage("§6♨♨§c♨§8♨♨");
  } else if(countdown==1500) {
    clientMessage("§c♨♨§8♨♨♨");
  } else if(countdown==1000) {
    clientMessage("§c♨§8♨♨♨♨");
  } else if(countdown==500) {
    clientMessage("§0♨§8♨§0♨§8♨§0♨");
  } else if(countdown==0) {
    if(Level.getGameMode()==0) {
      Player.setHealth(0);
      clientMessage(Player.getName(getPlayerEnt())+" starved to death");
      countdown = countdown+6000;
      }
    }
}

function useItem(x,y,z, itemId,blockId,side) {  
  if(blockId==25) {
    Level.playSound(x,y,z,"random.glass",25,10);
  } else if(blockId==23) {
    carrieditem = Player.getCarriedItem();
    amount = Player.getCarriedItemCount();
    dispensex = x;
    dispensey = y;
    dispensez = z;
    clientMessage("§8Item detected. Do /drop to");
    clientMessage("§8Dispense it!");
    Player.addItemInventory(carrieditem,-amount);
  } else if(blockId==137&&itemId!==76) {
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
      ctx.runOnUiThread(new java.lang.Runnable(){run: function(){
        try{
          var builder = new android.app.AlertDialog.Builder(ctx);
          builder.setTitle("Enter console command for block");
          builder.setInverseBackgroundForced(true);

          var scroll = new android.widget.ScrollView(ctx);
          var layout = new android.widget.LinearLayout(ctx);
          layout.setOrientation(1);

          var command = new android.widget.TextView(ctx);
          command.setText("Enter command");
          command.setTextColor(android.graphics.Color.WHITE);
          command.setTextSize(20);

          var edittext = new android.widget.EditText(ctx);
          edittext.setHint("Example: playsound random.glass 10 0");
          edittext.setText(cmdblockc);

          var note = new android.widget.TextView(ctx);
          note.setText("WARNING: Do not use a / in the beginning of the \ncommand!");
          note.setTextColor(android.graphics.Color.RED);
          note.setTextSize(20);

          var prevoutput = new android.widget.TextView(ctx);
          prevoutput.setText("Previous output");
          prevoutput.setTextColor(android.graphics.Color.WHITE);
          prevoutput.setTextSize(20);

          var potext = new android.widget.EditText(ctx);
          potext.setText(output);
          potext.setHint("There has not been a previous output.");
          potext.setTextColor(android.graphics.Color.GRAY);
          potext.setFocusable(false);
          potext.setOnKeyListener(null);

          var params = new android.view.ViewGroup.LayoutParams(-2,-2);
  
          layout.addView(command,params);
          layout.addView(edittext,params);
          layout.addView(note,params);
          layout.addView(prevoutput,params);
          layout.addView(potext,params);

          builder.setView(layout);

          builder.setPositiveButton("Done", new android.content.DialogInterface.OnClickListener(){
            onClick: function(viewarg){
              if(edittext.getText().toString()=="") {
                android.widget.Toast.makeText(ctx,"Please fill in a command first.",0).show();
              } else {
                android.widget.Toast.makeText(ctx,"Set console command to "+edittext.getText().toString(),0).show();
                cmdblockc = edittext.getText();
                }
            }});

            builder.setNegativeButton("Cancel", new android.content.DialogInterface.OnClickListener(){
              onClick: function(viewarg){
                android.widget.Toast.makeText(ctx,"Command Block Cancelled.",0).show();  
            }});
       
            var dialog = builder.create();
	        dialog.show();
      
      } catch(err){
        error(err);
    }}});
    preventDefault();
  } else if(blockId==137&&itemId==76) {
    commandBlockProcCmd(cmdblockc);
    preventDefault();
  } switch(itemId) {
  case '393':
  case '297':
  case '391':
  case '366':
  case '350':
  case '320':
  case '357':
  case '322':
  case '396':
  case '360':
  case '282':
  case '392':
  case '349':
  case '400':
  case '363':
  case '365':
  case '349':
  case '319':
  case '260':
  case '367':
  case '364':
    countdown = countdown+6000;
    removeitem = Player.getCarriedItem();
    Player.addItemInventory(removeitem,-1);
    break;
    }
}

function error(err) {
  var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
  ctx.runOnUiThread(new java.lang.Runnable({ run: function() {
    try{
      var error = new android.app.AlertDialog.Builder(ctx);
      error.setTitle("An error occured in the More Like PC Version Mod");
      
      var problem = new android.widget.TextView(ctx);
      problem.setText(err+" \n \nPlease report this error on the mod thread on the Minecraft Forums!");
      problem.setTextSize(18);
      problem.setTextColor(android.graphics.Color.WHITE);
   
      error.setView(problem);
      error.setPositiveButton("Ok", new android.content.DialogInterface.OnClickListener(){
        onClick: function(viewarg){
          return null; 
      }});

      var dialog = error.create();
      dialog.show();
    } catch(problem) {
      print("There has been an error whilst pushing an error: \n"+problem+" \n \nAnyways, the error with the FIRST AlertDialog.Builder was "+err);
  }}}));
}


function commandBlockProcCmd(cmd) {
  var data = cmd.split(" ");
  switch(data[0]) {
    case 'help': {
      if(data[1]==1) {
        clientMessage("§2--- Showing help page 1 of 3 (/help <page>) ---");
        clientMessage("§f/gamemode <mode>");
        clientMessage("§f/give <item> <amount>");
        clientMessage("§f/help <page>");
        clientMessage("§f/kill");
        clientMessage("§f/me <action>");
      } else if(data[1]==2) {
        clientMessage("§2--- Showing help page 2 of 3 (/help <page>) ---");
        clientMessage("§f/playsound <noise> <volume>");
        clientMessage("§f/setblock <x> <y> <z> <tileid> ");
        clientMessage("§f/spawnpoint");
        clientMessage("§f/summon <entityid> <mobfolderskin>");
        clientMessage("§f/time <set> <time>");
      } else if(data[1]==3) {
        clientMessage("§2--- Showing help page 3 of 3 (/help <page>) ---");
        clientMessage("§f/tp <x> <y> <z>");
        clientMessage("§4/gamerule §8Work In Progress");
      } else {
        clientMessage("§2--- Showing help page 1 of 3 (/help <page>) ---");
        clientMessage("§f/gamemode <mode>");
        clientMessage("§f/give <item> <amount>");
        clientMessage("§f/help <page>");
        clientMessage("§f/kill");
        clientMessage("§f/me <action>");
        }
      break;
    } case 'gamemode': {
      if(data[1]==undefined) {
        output = "Usage: /gamemode <mode>";
      } else if(data[1]=="1"||data[1]=="0") {
        Level.setGameMode(data[1]);
        clientMessage("Your gamemode has been updated");
        }
      break;
    } case 'give': {
      if(data[1]==undefined||data[2]==undefined) {
        output = "Usage: /give <item> <amount>";
      } else {
        Player.addItemInventory(data[1],data[2]);
        clientMessage("Given ["+data[1]+"] * "+data[2]+" to "+Player.getName(getPlayerEnt()));
        }
      break;
    } case 'me': {
      if(data[1]==undefined) {
        output = "Usage: /me <action>";
      } else {
        clientMessage("* @ "+data.slice(1).join(" "));
        }
      break;
    } case 'playsound': {
      if(data[1]==undefined||data[2]==undefined||data[3]==undefined) {
        output = "Usage: /playsound <soundname> <volume> <pitch>";
      } else {
        Level.playSound(Player.getX(),Player.getY(),Player.getZ(),""+data[1]+"",data[2],data[3]);
        clientMessage("Played sound "+data[1]+" to "+Player.getName(getPlayerEnt()));
        }
      break;
    } case 'setblock': {
      if(data[1]==undefined||data[2]==undefined||data[3]==undefined||data[4]==undefined) {
        output = "Usage: /setblock <x> <y> <z> <tileid>";
      } else {
        Level.setTile(data[1],data[2],data[3],data[4]);
        clientMessage("Block placed");
        }
      break;
    } case 'spawnpoint': {
      Level.setSpawn(Player.getX(), Player.getY(), Player.getZ());
      var PX = Player.getX();
      var PY = Player.getY();
      var PZ = Player.getZ();
      clientMessage("Set the spawn point to ("+PX+","+PY+","+PZ+")");
      break;
    } case 'summon': {
      if(data[1]==undefined||data[2]==undefined) {
        output = "Usage: /summon <entityid> <mobfolderskin>";
      } else {
        Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(),data[1],"mob/"+data[2]+"");
        clientMessage("Object sucessfully summoned");
        }
      break;
    } case 'time': {
      if(data[1]==undefined||data[2]==undefined) {
        clientMessage("§cUsage: /time <set> <time>");
      } else {
        Level.setTime(data[2]);
        clientMessage("Set the time to "+data[2]+"");
        }
      break;
    } case 'tp': {
      Entity.setPosition(getPlayerEnt(),data[1], data[2], data[3]);
      clientMessage("Teleported "+Player.getName(Player.getEntity())+"  to "+data[1]+","+data[2]+","+data[3]+"");
      break;
    } case 'gamerule': {
      print("wip");
      break;
      }
    }
}

