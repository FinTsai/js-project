class EndScene extends Phaser.Scene {
  constructor() {
    super({ key: 'EndScene' });
  }

  preload() {
    this.load.image('endScreen', 'https://content.codecademy.com/courses/learn-phaser/cube-matcher/end.png');
  }

  create() {
    // Reset the board
    board = Array(12).fill(Array(12).fill('x'));
    // Set end screen image
    this.add.image(0, 0, 'endScreen').setOrigin(0);
    // Display score of completed game
    const scoreText = this.add.text(150, 520, `Score: ${score}`, {
      fontSize: '25px',
      fill: '#ff0000'
    });
    
    // Sets the z-index: Put the text on top of the background and any other images
    scoreText.setDepth(1);

    const highScoreText = this.add.text(150, 550, `High Score: ${highScore}`, {
  fontSize: '30px',
  fill: '#cf9191'
});
highScoreText.setDepth(1);

    // Transition to new game if player clicks
    this.input.on('pointerup', () => {
      this.scene.stop('EndScene');
      this.scene.start('GameScene');
    });
  }
}
