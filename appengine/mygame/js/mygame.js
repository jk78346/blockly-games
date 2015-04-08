/**
 * Blockly Games: Mygame

/**
 * @author weifen@mijotech.net
 */
'use strict';

goog.provide('Mygame');

goog.require('Mygame.soy');
goog.require('Mygame.Blocks');
goog.require('BlocklyDialogs');
goog.require('BlocklyGames');
goog.require('BlocklyInterface');
goog.require('goog.math');


BlocklyGames.NAME = 'mygame';

/**
 * Initialize Blockly and the mygame.  Called on page load.
 */
Mygame.init = function() {
  // Render the Soy template.
  document.body.innerHTML = Mygame.soy.start({}, null,
      {lang: BlocklyGames.LANG,
       html: BlocklyGames.IS_HTML});

  BlocklyInterface.init();

  var rtl = BlocklyGames.isRtl();
  var blocklyDiv = document.getElementById('blockly');
  var onresize = function(e) {
    blocklyDiv.style.width = (window.innerWidth - 20) + 'px';
    blocklyDiv.style.height =
        (window.innerHeight - blocklyDiv.offsetTop - 15) + 'px';
  };
  onresize();
  window.addEventListener('resize', onresize);  

  Blockly.inject(document.getElementById('blockly'),
      {toolbox: document.getElementById('toolbox')});

  
};

window.addEventListener('load', Mygame.init);

