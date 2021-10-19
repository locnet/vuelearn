function getRandom(min, max) {

			return Math.floor(Math.random() * (max - min) + min);
		}
			
		

const app = Vue.createApp({

	data() {

		return {
			playerHealth: 100,
			monsterHealth: 100,
			currentRound: 0,
			winner: null,
			log: []

		};
	}, 

	computed: {

		monsterBarStyle() {
			if (this.monsterHealth <= 0) {
				return {width: '0%'}
			}
			return {width: this.monsterHealth + '%'};
		},

		playerBarStyle() {

			if (this.playerHealth <= 0) {
				return {width: '0%'}
			}

			return {width: this.playerHealth + '%'};
		},

		mayUseSpecialAttack() {

			return this.currentRound % 3 !== 0;
		}

	},

	watch: {

		// watch mira si alguna variable (guardadas en "data") ha cambiado
		// es obligatorio que el metodo tenga exactamente el mismo nombre que la variable
		// ex: variable en data: myVariable: True /// metodo watch: myVariable() {}

		playerHealth(value) {
			if (value <= 0 && this.monsterHealth <= 0) {
				// tenemos un empate
				this.winner = 'draw';
			} else if (value <= 0) {
				// gana el monstruo
				this.winner = 'monster';
			}

		},

		monsterHealth(value) {
			if ( value <= 0 && this.playerHealth <= 0) {
				// tenemos un empate
				this.winner = 'draw';
			} else if (value <= 0) {
				// gana el jugador
				this.winner = 'player';
			}

		}
	},

	methods: {

		startNewGame() {
			this.playerHealth = 100;
			this.monsterHealth = 100;
			this.winner = null;
			this.currentRound = 0;
			this.log = []
		},

		attackMonster() {

			attackValue = getRandom(5,12);
			this.monsterHealth -= attackValue;

			this.addLogMessage('player','attack',attackValue);
			this.attackPlayer();
			this.currentRound++;
		},

		attackPlayer() {
			attackValue = getRandom(8,15);

			this.addLogMessage('monster','attack',attackValue);
			this.playerHealth -= attackValue;

		},

		specialAttackMonster() {

			attackValue = getRandom(10,25);
			this.monsterHealth -= attackValue;

			this.addLogMessage('player','attack',attackValue);
			this.attackPlayer();
			this.currentRound++;
		},

		healPlayer() {

			const healValue = getRandom(8,20);
			this.currentRound++;

			if (this.playerHealth + healValue > 100) {
				this.playerHealth = 100;
			} else {
				this.playerHealth += healValue;
			}

			this.addLogMessage('player','heal',healValue);
			this.attackMonster();
		}, 

		surrender() {
			this.winner = 'monster'
		},

		addLogMessage(who, what, value) {

			// unshift is like push, but it's add the entry of the BEGINNING of the array

			this.log.unshift(
				{
					actionBy: who,
					actionType: what,
					actionValue: value
				}
			);
		}
		
	}

});

app.mount('#game')