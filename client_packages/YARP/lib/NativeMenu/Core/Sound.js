'use strict';
/**
 * Implements sound.
 */
class Sound {
  /**
   * Creates an instance of Sound.
   * @param {String} audioName
   * @param {String} [audioRef='HUD_FRONTEND_DEFAULT_SOUNDSET']
   * @param {Number} [soundId=-1]
   * @param {Boolean} [p3=false]
   * @param {Number} [p4=0]
   * @param {Boolean} [p5=true]
   * @memberof Sound
   */
  constructor(audioName, audioRef = 'HUD_FRONTEND_DEFAULT_SOUNDSET', soundId = -1, p3 = false, p4 = 0, p5 = true) {
    this.soundId = soundId;
    this.audioName = audioName;
    this.audioRef = audioRef;
    this.p3 = p3;
    this.p4 = p4;
    this.p5 = p5;
  }

  /**
   * Plays sound.
   * @memberof Sound
   */
  playSound() {
    mp.game.audio.playSound(this.soundId, this.audioName, this.audioRef, this.p3, this.p4, this.p5);
  }
}

/**
 * Some common sounds.
 */
Sound.SELECT = new Sound('SELECT');
Sound.BACK = new Sound('BACK');
Sound.NAV_LEFT_RIGHT = new Sound('NAV_LEFT_RIGHT');
Sound.NAV_UP_DOWN = new Sound('NAV_UP_DOWN');
Sound.HACKING = new Sound('Pin_Centred', 'DLC_HEIST_BIOLAB_PREP_HACKING_SOUNDS');
Sound.CONTINUE = new Sound('CONTINUE');
Sound.CANCEL = new Sound('CANCEL');

exports = Sound;
