exports.BattleMovedex = {
	absorb: {
		inherit: true,
		basePower: 60,
		type: "Water"
	},
	acid: {
		inherit: true,
		basePower: 95,
		secondary: {
			chance: 30,
			boosts: {
				def: -1
			}
		}
	},
	acidarmor: {
		inherit: true,
		pp: 20
	},
	agility: {
		inherit: true,
		pp: 20
	},
	aurorabeam: {
		inherit: true,
		basePower: 90,
		secondary: {
			chance: 30,
			boosts: {
				spd: -1,
				spa: -1
			}
		}
	},
	barrage: {
		inherit: true,
		type: "Grass",
		basePower: 200,
		selfdestruct: true
	},
	barrier: {
		inherit: true,
		pp: 20
	},
	bide: {
		inherit: true,
		pp: 15
	},
	bind: {
		inherit: true,
		basePower: 15,
		type: "Rock"
	},
	bite: {
		inherit: true,
		basePower: 80,
		secondary: {
			chance: 30,
			volatileStatus: 'flinch'
		}
	},
	blizzard: {
		inherit: true,
		accuracy: 80
	},
	boneclub: {
		inherit: true,
		type: "Ghost",
		priority: 1,
		basePower: 60
	},
	bonemerang: {
		inherit: true,
		type: "Ghost",
		basePower: 60
	},
	bubble: {
		inherit: true,
		basePower: 80,
		secondary: {
			chance: 30,
			volatileStatus: 'flinch'
		}
	},
	bubblebeam: {
		inherit: true,
		basePower: 150,
		self: {
			volatileStatus: 'mustrecharge'
		}
	},
	clamp: {
		inherit: true,
		basePower: 15
	},
	cometpunch: {
		inherit: true,
		type: "Fighting",
		multihit: false,
		basePower: 80,
		priority: 1
	},
	confusion: {
		inherit: true,
		basePower: 120,
		accuracy: 85
	},
	constrict: {
		inherit: true,
		category: "Status",
		status: 'par'
	},
	crabhammer: {
		inherit: true,
		basePower: 90,
		accuracy: 100
	},
	cut: {
		inherit: true,
		critRatio: 2,
		type: "Bug"
		basePower: 55
	},
	defensecurl: {
		inherit: true,
		heal: [1,2],
		pp: 5
	},
	dig: {
		inherit: true,
		basePower: 150,
		accuracy: 85
	},
	dizzypunch: {
		inherit: true,
		basePower: 150,
		accuracy: 75,
		secondary: {
			chance: 10,
			volatileStatus: 'confusion'
		}
	},
	doublekick: {
		inherit: true,
		basePower: 50
	},
	doubleteam: {
		inherit: true,
		secondary: false,
		volatileStatus: 'confusion'
	},
	doubleedge: {
		inherit: true,
		basePower: 120
	},
	doubleslap: {
		inherit: true,
		type: "Psychic",
		basePower: 60,
		multihit: 2
	},
	dragonrage: {
		inherit: true,
		basePower: 120,
		damage: 0,
		pp: 5
	},
	dreameater: {
		inherit: true,
		basePower: 250,
		type: "Psychic",
		drain: [1, 2]
	},
	drillpeck: {
		inherit: true,
		basePower: 90
	},
	eggbomb: {
		inherit: true,
		basePower: 100,
		type: "Fire",
		pp: 5,
		secondary: {
			chance: 30,
			status: 'brn'
		}
	},
	ember: {
		inherit: true,
		basePower: 90,
		secondary: {
			chance: 30,
			boosts: {
				spa: -1,
				spd: -1
			}
		}
	},
	explosion: {
		inherit: true,
		basePower: 100,
		type: "Rock"
	}
};
