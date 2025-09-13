    const diceIcons = {
      '4': 'D4',
      '6': 'D6',
      '8': 'D8',
      '10': 'D10',
      '12': 'D12',
      '20': 'D20',
      '100': 'D100'
    };

    // Star generator script
    const starsContainer = document.getElementById('stars-container');
    const numStars = 100;

    for (let i = 0; i < numStars; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      star.style.width = star.style.height = `${Math.random() * 3 + 1}px`;
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;
      star.style.animationDuration = `${Math.random() * 2 + 1}s`;
      star.style.animationDelay = `${Math.random() * 2}s`;
      starsContainer.appendChild(star);
    }
    
    const ROLES = {
      "Tank": {hpPerLevel: 7},
      "Balanced Frontline": {hpPerLevel: 7},
      "Anti-Supernatural Defender": {hpPerLevel: 7},
      "Melee DPS": {hpPerLevel: 6},
      "Mystic Warrior": {hpPerLevel: 6},
      "Shapeshifter": {hpPerLevel: 6},
      "Anti-Creature Specialist": {hpPerLevel: 6},
      "Companion Striker": {hpPerLevel: 6},
      "Ranged DPS": {hpPerLevel: 5},
      "Charisma Rogue": {hpPerLevel: 5},
      "Intel Specialist": {hpPerLevel: 5},
      "Versatile Striker": {hpPerLevel: 5},
      "Mobility Caster": {hpPerLevel: 5},
      "Mental Controller": {hpPerLevel: 5},
      "Hybrid Tech-Mage": {hpPerLevel: 5},
      "Pure Healer": {hpPerLevel: 5},
      "Spiritual-Tech Healer": {hpPerLevel: 5},
      "Buff/Debuff Healer": {hpPerLevel: 5},
      "Support/Utility": {hpPerLevel: 5},
      "Social Control": {hpPerLevel: 5},
      "Industrial Combatant": {hpPerLevel: 6},
    };

const CLASSES = [
  {
    key: "Juggernaut",
    role: "Tank",
    startHP: 14,
    weapons: [
      {
        name: "Titan Maul",
        dmg: "1d10+3",
        type: "Melee",
        special: { name: "Shockwave Slam", text: "Cone knockdown (once/short rest)." },
      },
      {
        name: "Bulwark Shield",
        dmg: "1d8+3",
        type: "Melee",
        special: { name: "Fortress Wall", text: "+2 AC to self & allies within 5 ft for 1 round." },
      },
    ],
    armor: [
      { name: "Bulwark Plate", type: "Heavy", ac: 15, perk: "Disadvantage on Stealth; ignore knockback once/short rest." },
      { name: "Reinforced Vest", type: "Medium", ac: 14, perk: "Reduce first damage each combat by 2." },
    ],
    utils: ["Bodyguard — React to take damage for ally.", "Adrenal Surge — Temp HP = level + CON mod (1/rest)."],
  },
  {
    key: "Soldier",
    role: "Balanced Frontline",
    startHP: 14,
    weapons: [
      {
        name: "Assault Rifle",
        dmg: "1d8+3",
        type: "Ranged",
        special: { name: "Suppressing Fire", text: "Target has disadvantage on attacks for 1 round." },
      },
      {
        name: "Combat Knife",
        dmg: "1d6+3",
        type: "Melee",
        special: { name: "Bleeding Strike", text: "1d4 bleed for 2 rounds." },
      },
    ],
    armor: [
      { name: "Combat Armor", type: "Medium", ac: 14, perk: "+1 save vs Frightened." },
      { name: "Field Vest", type: "Light", ac: 13, perk: "+5 ft movement." },
    ],
    utils: ["Tactical Reload — Bonus reload, +2 AC.", "Battle Focus — +1d4 to next attack or save."],
  },
  {
    key: "Sentinel",
    role: "Anti-Supernatural Defender",
    startHP: 14,
    weapons: [
      {
        name: "Null Blade",
        dmg: "1d8+3",
        type: "Melee",
        special: { name: "Phase Cut", text: "+1d6 dmg vs extraplanar." },
      },
      {
        name: "Ward Staff",
        dmg: "1d6+3",
        type: "Melee",
        special: { name: "Barrier Field", text: "+2 AC to all allies within 10 ft for 1 round." },
      },
    ],
    armor: [
      { name: "Warden Plate", type: "Heavy", ac: 15, perk: "Advantage on saves vs magic (1/short rest)." },
      { name: "Sigil Guard", type: "Medium", ac: 14, perk: "+1 AC vs extraplanar foes." },
    ],
    utils: ["Warding Sigil — Prevent planar travel (area).", "Purging Strike — Remove one magical effect on hit."],
  },
  {
    key: "Starseer",
    role: "Mystic Warrior",
    startHP: 12,
    weapons: [
      {
        name: "Photon Saber",
        dmg: "1d8+3",
        type: "Melee",
        special: { name: "Blinding Slash", text: "Dazes target (once/short rest)." },
      },
      {
        name: "Psionic Blade",
        dmg: "1d6+3 (psychic)",
        type: "Melee",
        special: { name: "Mind Pierce", text: "Ignores armor." },
      },
    ],
    armor: [
      { name: "Photon Guard", type: "Medium", ac: 14, perk: "Advantage on initiative." },
      { name: "Psionic Weave", type: "Light", ac: 13, perk: "+1 to Wisdom saves." },
    ],
    utils: ["Foresight — Force enemy to reroll an attack.", "Deflect Strike — Reduce ranged dmg by 1d8 + AGI."],
  },
  {
    key: "Omniform",
    role: "Shapeshifter",
    startHP: 12,
    weapons: [
      {
        name: "Adaptive Claws",
        dmg: "1d8+3",
        type: "Melee",
        special: { name: "Morph Bite", text: "Heal 1d6 on hit." },
      },
      {
        name: "Morph Whip",
        dmg: "1d6+3",
        type: "Melee",
        special: { name: "Morph Pull", text: "Pull target 10 ft." },
      },
    ],
    armor: [
      { name: "Morphhide Armor", type: "Medium", ac: 14, perk: "Gain resistance to one damage type for 1 round (1/rest)." },
      { name: "Flexweave Suit", type: "Light", ac: 13, perk: "+5 ft movement." },
    ],
    utils: ["Quick Morph — Change form as bonus action.", "Mimic Physique — Copy physical stat bonuses for 1 min."],
  },
  {
    key: "Monster Hunter",
    role: "Anti-Creature Specialist",
    startHP: 12,
    weapons: [
      {
        name: "Harpoon Gun",
        dmg: "1d8+3",
        type: "Ranged",
        special: { name: "Reel In", text: "Pull Large or smaller." },
      },
      {
        name: "Beast Cleaver",
        dmg: "1d10+3",
        type: "Melee",
        special: { name: "Rend", text: "+1d6 vs beasts." },
      },
    ],
    armor: [
      { name: "Tracker’s Mail", type: "Medium", ac: 14, perk: "+2 to Survival checks." },
      { name: "Beastward Vest", type: "Light", ac: 13, perk: "Advantage vs beast fear." },
    ],
    utils: ["Hunter’s Mark — +1d4 dmg to tracked target.", "Beast Lore — Identify creature traits instantly."],
  },
  {
    key: "Beast Tamer",
    role: "Companion Striker",
    startHP: 12,
    weapons: [
      {
        name: "Tamer’s Spear",
        dmg: "1d8+3",
        type: "Melee",
        special: { name: "Beast Rally", text: "Companion attacks immediately." },
      },
      {
        name: "Whip",
        dmg: "1d6+3",
        type: "Melee",
        special: { name: "Disarm", text: "Strip weapon or impose - to next attack." },
      },
    ],
    armor: [
      { name: "Companion Guard", type: "Medium", ac: 14, perk: "Companion gains +1 AC." },
      { name: "Tamer’s Wraps", type: "Light", ac: 13, perk: "Advantage on Animal Handling." },
    ],
    utils: ["Command Beast — Bonus action direct companion.", "Bonded Recovery — Heal companion 1d6 (1/rest)."],
  },
  {
    key: "Bounty Hunter",
    role: "Ranged DPS",
    startHP: 11,
    weapons: [
      {
        name: "Pulse Rifle",
        dmg: "1d10+3",
        type: "Ranged",
        special: { name: "Mark Target", text: "Allies get +2 to hit the target." },
      },
      {
        name: "Dual Blasters",
        dmg: "2×(1d6+3)",
        type: "Ranged",
        special: { name: "Rapid Barrage", text: "Nova fire; once/short rest (Focus to reuse)." },
      },
    ],
    armor: [
      {
        name: "Hunter’s Rig",
        type: "Medium",
        ac: 14,
        perk: "+1 to ranged attack rolls for 1 round (1/rest).",
      },
      { name: "Pursuer’s Vest", type: "Light", ac: 13, perk: "+10 ft when chasing marked target." },
    ],
    utils: ["Tracker’s Instinct — Advantage on Survival tracking.", "Target Lock — +4 to hit once/rest."],
  },
  {
    key: "Smuggler",
    role: "Charisma Rogue",
    startHP: 11,
    weapons: [
      {
        name: "Hidden Blaster",
        dmg: "1d8+3",
        type: "Ranged",
        special: { name: "Surprise Shot", text: "+2d6 if unseen." },
      },
      {
        name: "Vibroblade",
        dmg: "1d6+3",
        type: "Melee",
        special: { name: "Quick Stab", text: "Bonus action attack." },
      },
    ],
    armor: [
      { name: "Concealed Armor", type: "Light", ac: 13, perk: "Advantage on Sleight of Hand." },
      { name: "Street Leathers", type: "Light", ac: 12, perk: "+1 AC in urban environments." },
    ],
    utils: ["Silver Tongue — Adv. on Persuasion (1/rest).", "Escape Artist — Disengage as bonus action."],
  },
  {
    key: "Specter",
    role: "Intel Specialist",
    startHP: 11,
    weapons: [
      {
        name: "Scout Rifle",
        dmg: "1d8+3",
        type: "Ranged",
        special: { name: "Spotter’s Mark", text: "Ally crit range +1 vs target." },
      },
      {
        name: "Silenced Pistol",
        dmg: "1d6+3",
        type: "Ranged",
        special: { name: "Quiet Kill", text: "No alert on kill." },
      },
    ],
    armor: [
      { name: "Shadow Weave", type: "Light", ac: 13, perk: "Advantage on Stealth." },
      { name: "Recon Suit", type: "Light", ac: 12, perk: "Ignore difficult terrain 1 round (1/rest)." },
    ],
    utils: ["Recon Sweep — Reveal hidden foes (30 ft).", "Data Tap — Hack a basic system in 1 round."],
  },
  {
    key: "Gadgeteer",
    role: "Versatile Striker",
    startHP: 11,
    weapons: [
      {
        name: "Shock Gauntlet",
        dmg: "1d8+3",
        type: "Melee",
        special: { name: "EMP Burst", text: "Disable tech in 10 ft." },
      },
      {
        name: "Mini-Turret",
        dmg: "1d6 per turn (3r)",
        type: "Deployable",
        special: { name: "Deploy Turret", text: "Deals 1d6/turn for 3 turns." },
      },
    ],
    armor: [
      { name: "Tech Armor", type: "Medium", ac: 14, perk: "+1 AC vs ranged attacks." },
      { name: "Light Mech-Suit", type: "Light", ac: 13, perk: "+1 STR for lifting/carrying." },
    ],
    utils: ["Grapple Hook — Pull self/ally 20 ft.", "Overcharge — +1d6 to next tech attack."],
  },
  {
    key: "Warp Mage",
    role: "Mobility Caster",
    startHP: 10,
    weapons: [
      {
        name: "Warp Staff",
        dmg: "1d6+3",
        type: "Melee",
        special: { name: "Blink Step", text: "Teleport 20 ft." },
      },
      {
        name: "Gravity Orb",
        dmg: "1d8+3",
        type: "Ranged",
        special: { name: "Gravity Well", text: "Pull enemies 10 ft." },
      },
    ],
    armor: [
      { name: "Phasewrap", type: "Light", ac: 13, perk: "Teleport 10 ft when hit (1/rest)." },
      { name: "Gravity Vest", type: "Light", ac: 12, perk: "+1 CON saves." },
    ],
    utils: ["Phase Shift — Halve damage from one attack.", "Time Dilation — Ally +10 ft move."],
  },
  {
    key: "Psion",
    role: "Mental Controller",
    startHP: 10,
    weapons: [
      {
        name: "Mind Spike",
        dmg: "1d8+3 (psychic)",
        type: "Ranged",
        special: { name: "Confuse", text: "Target attacks its ally." },
      },
      {
        name: "Psi Blade",
        dmg: "1d6+3",
        type: "Melee",
        special: { name: "Mind Drain", text: "+1d6 dmg and heal same amount." },
      },
    ],
    armor: [
      { name: "Mindward Robes", type: "Light", ac: 13, perk: "+1 to saves vs mental effects." },
      { name: "Focus Garb", type: "Light", ac: 12, perk: "+1 to initiative." },
    ],
    utils: ["Mental Shield — Ally +2 save vs mental.", "Suggestion — Briefly command weak-willed foe."],
  },
  {
    key: "Technomancer",
    role: "Hybrid Tech-Mage",
    startHP: 10,
    weapons: [
      {
        name: "Arc Caster",
        dmg: "1d8+3",
        type: "Ranged",
        special: { name: "Chain Lightning", text: "Jumps to a second target." },
      },
      {
        name: "Techblade",
        dmg: "1d8+3",
        type: "Melee",
        special: { name: "Energy Slash", text: "+1d6 energy damage." },
      },
    ],
    armor: [
      { name: "Arc Mesh", type: "Medium", ac: 14, perk: "Resist lightning once/rest." },
      { name: "Runed Suit", type: "Light", ac: 13, perk: "+1 to spell attack rolls." },
    ],
    utils: ["Overload — Boost next attack (+1d4 dmg).", "Shield Pulse — Ally +2 AC for 1 round."],
  },
  {
    key: "Medic",
    role: "Pure Healer",
    startHP: 10,
    weapons: [
      {
        name: "Medi-Pistol",
        dmg: "—",
        type: "Ranged Healer",
        special: { name: "Stim Shot", text: "Grant +10 ft movement." },
      },
      {
        name: "Surgical Blade",
        dmg: "1d6+3",
        type: "Melee",
        special: { name: "Field Surgery", text: "Heal 2d4." },
      },
    ],
    armor: [
      { name: "Field Medic Vest", type: "Light", ac: 13, perk: "+1 to Medicine checks." },
      { name: "Responder Gear", type: "Light", ac: 12, perk: "+5 ft movement." },
    ],
    utils: ["Triage — Heal as bonus action.", "Adrenal Boost — Ally advantage on next roll."],
  },
  {
    key: "Luminar",
    role: "Spiritual-Tech Healer",
    startHP: 10,
    weapons: [
      {
        name: "Radiant Focus",
        dmg: "—",
        type: "Healer",
        special: { name: "Radiant Infusion", text: "Heals; details per GM packet." },
      },
      {
        name: "Lightstaff",
        dmg: "1d6+3",
        type: "Melee",
        special: { name: "Lumen Ward", text: "+2 AC to ally for 1 round." },
      },
    ],
    armor: [
      { name: "Radiant Guard", type: "Light", ac: 13, perk: "Resist radiant once/rest." },
      { name: "Lightweave Robes", type: "Light", ac: 12, perk: "+1 Wisdom saves." },
    ],
    utils: ["Channel Light — Minor heal.", "Sanctify — Buff vs darkness (table-specific)."],
  },
  {
    key: "Harmonist",
    role: "Buff/Debuff Healer",
    startHP: 10,
    weapons: [
      {
        name: "Resonance Bow",
        dmg: "1d8+3",
        type: "Ranged",
        special: { name: "Inspire", text: "Ally gains +2 AC." },
      },
      {
        name: "Discord Blade",
        dmg: "1d6+3",
        type: "Melee",
        special: { name: "Weaken", text: "Target -2 dmg." },
      },
    ],
    armor: [
      {
        name: "Resonant Armor",
        type: "Light",
        ac: 13,
        perk: "+1 to allies' saves within 5 ft (1/rest).",
      },
      { name: "Melody Cloth", type: "Light", ac: 12, perk: "Advantage on Persuasion." },
    ],
    utils: ["Harmonic Shield — Allies +1 to saves.", "Dissonance — Enemy disadvantage on next attack."],
  },
  {
    key: "Scientist",
    role: "Support/Utility",
    startHP: 10,
    weapons: [
      {
        name: "Analyzer Drone",
        dmg: "—",
        type: "Support",
        special: { name: "Weakpoint Mark", text: "Allies +1d6 dmg vs target." },
      },
      {
        name: "Chem Dispenser",
        dmg: "—",
        type: "Control",
        special: { name: "Cloud", text: "Create smoke/acid cloud." },
      },
    ],
    armor: [
      { name: "Lab Harness", type: "Light", ac: 13, perk: "+1 Investigation." },
      { name: "Field Research Suit", type: "Light", ac: 12, perk: "Resist poison once/rest." },
    ],
    utils: ["Scan — Learn enemy HP/resistances.", "Mix Compound — Create minor buff/debuff."],
  },
  {
    key: "Politician",
    role: "Social Control",
    startHP: 10,
    weapons: [
      {
        name: "Ceremonial Blade",
        dmg: "1d6+3",
        type: "Melee",
        special: { name: "Command", text: "Force target to act." },
      },
      {
        name: "Diplomat’s Pistol",
        dmg: "1d8+3",
        type: "Ranged",
        special: { name: "Disarm Hostility", text: "One enemy can’t attack you." },
      },
    ],
    armor: [
      { name: "Diplomat’s Coat", type: "Light", ac: 13, perk: "Advantage on Insight." },
      { name: "Ceremonial Guard Vest", type: "Light", ac: 12, perk: "+1 AC during formal events." },
    ],
    utils: ["Speechcraft — Inspire (+1d4).", "Blackmail — Extract information."],
  },
  {
    key: "Survivor Engineer",
    role: "Industrial Combatant",
    startHP: 12,
    weapons: [
      {
        name: "Plasma Cutter",
        dmg: "1d8+3",
        type: "Melee",
        special: { name: "Armor Melt", text: "-2 AC on target for 1 round." },
      },
      {
        name: "Hydraulic Hammer",
        dmg: "1d10+3",
        type: "Melee",
        special: { name: "Concussive Slam", text: "Stun target." },
      },
    ],
    armor: [
      { name: "Hazard Plate", type: "Medium", ac: 14, perk: "Resist fire once/rest." },
      { name: "Workman’s Vest", type: "Light", ac: 13, perk: "+1 STR on tool checks." },
    ],
    utils: ["Emergency Repair — Heal mech ally 1d8+INT.", "Hazard Foam — Create difficult terrain."],
  },
  {
    key: "Detective",
    role: "Versatile Investigator",
    startHP: 12,
    weapons: [
      {
        name: "Service Pistol",
        dmg: "1d8+3",
        type: "Ranged",
        special: {
          name: "Mark Weakpoint",
          text: "After hitting, the next ally attack vs that target gains advantage (1/short rest).",
        },
      },
      {
        name: "Shock Baton",
        dmg: "1d6+3",
        type: "Melee",
        special: {
          name: "Stun Strike",
          text: "On hit, target rolls CON save (DC 12) or is stunned until end of next turn (1/short rest).",
        },
      },
    ],
    armor: [
      {
        name: "Trenchcoat Vest",
        type: "Light",
        ac: 12,
        perk: "Once/short rest, blend into dim light or crowds, gaining advantage on Stealth checks for 1 minute.",
      },
      {
        name: "Investigator’s Overcoat",
        type: "Medium",
        ac: 13,
        perk: "Once/short rest, gain advantage on an Insight or Investigation check.",
      },
    ],
    utils: [
      "Deductive Strike (Offensive) — After observing a foe for 1 round, your next attack automatically hits and deals +1d8 bonus damage (1/short rest).",
      "Calculated Evasion (Defensive) — As a reaction, halve the damage of an incoming attack (1/short rest).",
    ],
  },
  {
    key: "Engineer",
    role: "Support / Tank",
    startHP: 12,
    weapons: [
      {
        name: "Kinetic Blaster",
        dmg: "1d8+3",
        type: "Ranged",
        toHit: 3,
        special: {
          name: "Concussive Blast",
          text: "forces target to make a Constitution save or be pushed 10 ft.",
        },
      },
      {
        name: "Toolbox Wrench",
        dmg: "1d6+3",
        type: "Melee",
        toHit: 3,
        special: {
          name: "Sunder Armor",
          text: "reduce target's AC by 2 for 1 round.",
        },
      },
    ],
    armor: [
      {
        name: "Exoskeleton",
        type: "Heavy",
        ac: 15,
        perk: "Disadvantage on Dexterity checks.",
      },
      {
        name: "Reinforced Jumpsuit",
        type: "Light",
        ac: 12,
        perk: "As a bonus action, regenerate 1d6 + INT shields for 3 rounds.",
      },
    ],
    utilities: {
      cores:
        "To deploy a machine, expend one energy core. You can make up to your intelligence modifier energy cores per short/long rest, and more energy cores may be found in the field. Each machine lasts until the next rest, an action is spent to recall the machine, or the machine is destroyed.",
      machines: [
        {
          name: "Deploy Turret",
          type: "Action",
          details:
            "you can deploy a stationary turret that attacks a target you designate. The turret has AC 10 and 10 HP. It uses your attack bonus and deals 1d6 damage.",
        },
        {
          name: "Defensive Drone",
          type: "Bonus Action",
          details:
            "you can deploy a hovering drone that provides a defensive screen. The drone gives you and all allies within 10 ft +1 AC. At the end of the Engineer's turn, they can select one creature within 10 ft of the drone. Their shields are restored by 1d6 + the Engineer's INT modifier. It has AC 10 and 15 HP. Add in a cargo function.",
        },
        {
          name: "Med-Bot",
          type: "Action",
          details:
            "you can deploy a small bot that moves to an adjacent ally and heals them for 1d8 HP. The bot has AC 10 and 5 HP.",
        },
      ],
      gadgets: {
        details:
          "You can prepare one gadget per short/long rest. The gadget can be utilized once per encounter, and can be reset by taking 10 minutes to tinker.",
        list: [
          {
            name: "Emergency Barricade",
            type: "Action",
            details:
              "you can place a temporary barricade that provides half cover to anyone behind it. The barricade has an AC of 10 and 20 HP.",
          },
          {
            name: "Targeting System",
            type: "Bonus Action",
            details:
              "you can designate an enemy within 20 ft. For 1 round, all allies have advantage on attack rolls against that enemy.",
          },
          {
            name: "EMP Pulse",
            type: "Action",
            details:
              "you can unleash a pulse of energy. All tech-based enemies or constructs within 15 ft must succeed on a DC 10 + Int Modifier Intelligence save or be Stunned for 1 round.",
          },
        ],
      },
    },
  },
];

const SPECIES = [
  {
    key: "Human",
    bonuses: { any: ["Any", "Any"], amt: [1, 1] },
    naturalArmor: null,
    note: "Versatility — 1/long rest, advantage on any skill check.",
  },
  {
    key: "Lombax",
    bonuses: { DEX: 2, INT: 1 },
    naturalArmor: null,
    note: "Tinker’s Ingenuity — 1/long rest, +2 to AC or attacks for 1 round.",
  },
  {
    key: "Virellian",
    bonuses: { CON: 2, WIS: 1 },
    naturalArmor: null,
    note: "Aquatic Mastery — Swim; heal 1d6 in water (1/long rest).",
  },
  {
    key: "Drakari",
    bonuses: { STR: 2, CON: 1 },
    naturalArmor: { base: 13, uses: "DEX" },
    note: "Scaly Resilience — Natural AC 13 + Dex; 1/long rest halve incoming dmg.",
  },
  {
    key: "Auralis",
    bonuses: { INT: 2, CHA: 1 },
    naturalArmor: null,
    note: "Energy Surge — 1/short rest +1d6 energy dmg on an attack.",
  },
  {
    key: "Thrynn",
    bonuses: { DEX: 2 },
    naturalArmor: null,
    note: "Skybound — Glide; 1/long rest dash w/o OAs.",
  },
  {
    key: "Synthborn",
    bonuses: { CON: 2, INT: 1 },
    naturalArmor: null,
    note: "Systems Override — Auto-succeed save vs poison/disease/mind control once/long rest.",
  },
  {
    key: "Myrrid",
    bonuses: { WIS: 2, CON: 1 },
    naturalArmor: null,
    note: "Regrowth — Heal level + WIS mod once/long rest.",
  },
  {
    key: "Grey",
    bonuses: { INT: 2, WIS: 1 },
    naturalArmor: null,
    note: "Mind Probe — Read surface thoughts once/long rest.",
  },
  {
    key: "Symbiote",
    bonuses: { choice2: ["STR", "DEX"], CON: 1 },
    naturalArmor: null,
    note: "Symbiotic Surge — 1/long rest, advantage on all attack rolls for 1 round; take 1d4 damage after.",
  },
  {
    key: "Cyborgian",
    bonuses: { any: ["Any", "Any", "Any"] },
    naturalArmor: null,
    note: "Cybernetic Augmentation — Choose one: Neural Processor (add +1d6 to a check once/short rest); Datajack (interface with and hack a basic electronic system with an Intelligence check); Enhanced Limb (advantage on all Strength checks with a chosen arm OR +10 ft of movement with a chosen leg).",
  },
];

    const BASE_STATS = ["STR","AGI","CON","INT","WIS","CHA"];
    const STAT_COSTS = {8:0, 9:1, 10:2, 11:3, 12:4, 13:5, 14:7, 15:9};

    const $ = sel => document.querySelector(sel);
    const $$ = sel => Array.from(document.querySelectorAll(sel));
    
    function abilityMod(score) {
      const mod = Math.floor((Number(score||0)-10)/2);
      const span = document.createElement('span');
      span.textContent = `${mod > 0 ? '+' : ''}${mod}`;
      if (mod > 0) span.className = 'positive-mod';
      else if (mod < 0) span.className = 'negative-mod';
      else span.className = 'zero-mod';
      return span;
    }

    function fillSelect(el, arr, getLabel=x=>x, getValue=x=>x){
      el.innerHTML = arr.map(x=>`<option value="${getValue(x)}">${getLabel(x)}</option>`).join("");
    }

    function getClass(key){return CLASSES.find(c=>c.key===key)}
    function getSpecies(key){return SPECIES.find(s=>s.key===key)}

    function renderSpeciesBonusUI(species){
      const wrap = $('#speciesBonusUI');
      if(!wrap) return;
      const b = species.bonuses||{};
      let html = '';
      const saved = JSON.parse(localStorage.getItem('psythara_char')||'{}');
      const sc = (saved && saved.speciesChoices) ? saved.speciesChoices : {};
      if(b.any){
        html += `<div class="subgrid">
          <div>
            <label>Human +1 Bonus #1</label>
            <select id="any1">${BASE_STATS.map(s=>`<option ${(sc.any1||'STR')===s?'selected':''} value="${s}">${s}</option>`).join('')}</select>
          </div>
          <div>
            <label>Human +1 Bonus #2</label>
            <select id="any2">${BASE_STATS.map(s=>`<option ${(sc.any2||'INT')===s?'selected':''} value="${s}">${s}</option>`).join('')}</select>
          </div>
        </div>`;
      }
      if(b.choice2){
        const opts = ['STR','AGI'];
        html += `<div style="margin-top:8px">
          <label>Symbiote +2 Choice</label>
          <select id="choice2">${opts.map(s=>`<option ${(sc.choice2||'STR')===s?'selected':''} value="${s}">${s}</option>`).join('')}</select>
        </div>`;
      }
      if(html){
        wrap.innerHTML = `<h3>Species Stat Bonuses</h3>${html}`;
        ['any1','any2','choice2'].forEach(id=>{ const el = $(`#${id}`); if(el) el.addEventListener('change', updateAll); });
      } else {
        wrap.innerHTML = '';
      }
    }

    function save(){
      const data = collect();
      localStorage.setItem('psythara_char', JSON.stringify(data));
    }

    function load(){
      const raw = localStorage.getItem('psythara_char');
      if(!raw) {
        initPointBuy();
        updateAll();
        return;
      }
      const d = JSON.parse(raw);
      $('#name').value = d.name||'';
      $('#level').value = d.level||1;
      $('#species').value = d.species||SPECIES[0].key;
      $('#clazz').value = d.clazz||CLASSES[0].key;
      $('#toggleNamedArmor').checked = d.useNamedArmor ?? true;
      $('#hasShield').checked = !!d.hasShield;
      if (d.baseStats) {
        BASE_STATS.forEach(k=>{
          $(`#stat_${k}`).value = d.baseStats[k];
        });
      } else {
        initPointBuy();
      }
      
      if (d.profilePic) {
          $('#profile-pic-preview').src = d.profilePic;
          $('#profile-pic-preview').style.display = 'block';
          $('#profile-pic-frame').style.backgroundImage = 'none';
      }
      
      if (d.lockedStats) {
        isLocked = true;
        toggleLockStats(true);
      }
      updateAll();
    }

    function initPointBuy() {
      BASE_STATS.forEach(k => {
        $(`#stat_${k}`).value = 8;
      });
    }

    function collect(){
      const sp = $('#species').value;
      const cl = $('#clazz').value;
      const data = {
        name: $('#name').value,
        level: Number($('#level').value||1),
        species: sp,
        clazz: cl,
        weapon: $('#weapon').value,
        armor: $('#armor').value,
        utilA: $('#utilA').value,
        utilB: $('#utilB').value,
        useNamedArmor: $('#toggleNamedArmor').checked,
        hasShield: $('#hasShield').checked,
        baseStats: Object.fromEntries(BASE_STATS.map(k=>[k, Number($(`#stat_${k}`).value||0)])),
        profilePic: $('#profile-pic-preview').src,
        lockedStats: isLocked,
      };
      data.speciesChoices = {
        any1: document.querySelector('#any1')?.value || null,
        any2: document.querySelector('#any2')?.value || null,
        choice2: document.querySelector('#choice2')?.value || null,
      };
      return data;
    }

    function exportJSON(){
      const blob = new Blob([JSON.stringify(collect(), null, 2)], {type:'application/json'});
      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = `${($('#name').value||'character').replace(/\s+/g,'_')}.json`;
      document.body.appendChild(a); a.click(); a.remove();
    }
    
    let isLocked = false;
    function toggleLockStats(forceLock = false) {
      if (!forceLock) {
        isLocked = !isLocked;
      }
      const lockBtn = $('#lock-stats-btn');
      lockBtn.textContent = isLocked ? 'Unlock Stats' : 'Lock Stats';
      $$('.stat-cost input, .stat-cost-controls button').forEach(el => {
        el.disabled = isLocked;
      });
      updateAll();
    }

    const getPointCost = (score) => {
      if (score >= 8 && score <= 13) return score - 8;
      if (score === 14) return 7;
      if (score === 15) return 9;
      return 0;
    }

    function updateStat(statKey, change) {
      if(isLocked) return;
      const statInput = $(`#stat_${statKey}`);
      let score = Number(statInput.value) + change;
      if (score < 8) score = 8;
      if (score > 15) score = 15;
      
      const currentCost = getPointCost(Number(statInput.value));
      const newCost = getPointCost(score);
      
      let pointsSpent = 0;
      BASE_STATS.forEach(k => {
        pointsSpent += getPointCost(Number($(`#stat_${k}`).value));
      });

      pointsSpent -= currentCost;
      pointsSpent += newCost;

      if(pointsSpent > 27){
        return;
      }
      
      statInput.value = score;
      updateAll();
    }

    function applySpeciesBonuses(base, species){
      const out = {...base};
      const b = species.bonuses||{};
      Object.entries(b).forEach(([k,v])=>{
        if(k==='any' || k==='choice2') return;
        if(out[k] !== undefined) out[k] += v;
      });
      const any1 = document.querySelector('#any1')?.value;
      const any2 = document.querySelector('#any2')?.value;
      const choice2 = document.querySelector('#choice2')?.value;
      if(b.any){
        if(any1) out[any1] = (out[any1]||0) + 1;
        if(any2) out[any2] = (out[any2]||0) + 1;
      }
      if(b.choice2){
        const pick = choice2 || 'STR';
        out[pick] = (out[pick]||0) + 2;
      }
      return out;
    }

    function calcAC(data, species, clazz, useNamed){
      const agiMod = Math.floor((data.finalStats.AGI-10)/2);
      let armor = clazz.armor.find(a=>a.name===data.armor) || clazz.armor[0];
      let notes = [];
      let ac = 10;
      let armType = armor?.type || '—';

      if(useNamed && armor){
        ac = armor.ac;
        notes.push(armor.perk);
      } else {
        if(armType==='Light') ac = 12 + agiMod;
        else if(armType==='Medium') ac = 14 + Math.min(2, Math.max(0, agiMod));
        else if(armType==='Heavy') ac = 16;
      }

      if(species.naturalArmor && species.naturalArmor.base){
        const nat = species.naturalArmor.base + (species.naturalArmor.uses==='DEX'?agiMod:0);
        if(nat>ac){
          notes.push(`Natural armor active (${nat})`);
          ac = nat; armType = 'Natural';
        }
      }

      if($('#hasShield').checked) ac += 1;
      return {ac, notes: notes.filter(Boolean).join(' '), armType};
    }
    
    function updateProfilePicBorder(classKey) {
        const picFrame = $('#profile-pic-frame');
        picFrame.classList.remove(...picFrame.classList);
        picFrame.classList.add('profile-pic-frame');

        let borderClass = 'border-caster'; // Default to a caster/support border

        if (['juggernaut', 'soldier', 'sentinel', 'survivorengineer'].includes(classKey)) {
          borderClass = 'border-juggernaut';
        } else if (['starseer', 'omniform', 'monsterhunter', 'beasttamer'].includes(classKey)) {
          borderClass = 'border-starseer';
        } else if (['bountyhunter', 'smuggler', 'specter', 'gadgeteer', 'detective'].includes(classKey)) {
          borderClass = 'border-bountyhunter';
        } else if (['warpmage', 'psion', 'technomancer', 'medic', 'luminar', 'harmonist', 'scientist', 'politician'].includes(classKey)) {
          borderClass = 'border-warpmage';
        }

        picFrame.classList.add(borderClass);
    }
    
    function updateAll(){
      const data = collect();
      const clazz = getClass(data.clazz) || CLASSES[0];
      const species = getSpecies(data.species) || SPECIES[0];

      renderSpeciesBonusUI(species);

      fillSelect($('#weapon'), clazz.weapons, w=>`${w.name} — ${w.type} (${w.dmg})`, w=>w.name);
      fillSelect($('#armor'), clazz.armor, a=>`${a.name} — ${a.type} (AC ${a.ac})`, a=>a.name);
      fillSelect($('#utilA'), clazz.utils||[], u=>u, u=>u);
      fillSelect($('#utilB'), clazz.utils||[], u=>u, u=>u);

      if(data.weapon) $('#weapon').value = data.weapon;
      if(data.armor) $('#armor').value = data.armor;
      if(data.utilA) $('#utilA').value = data.utilA;
      if(data.utilB) $('#utilB').value = data.utilB;
      
      let pointsSpent = 0;
      BASE_STATS.forEach(k => {
        pointsSpent += getPointCost(Number($(`#stat_${k}`).value));
      });
      const pointsLeft = 27 - pointsSpent;
      const pointsLeftEl = $('#points-left');
      pointsLeftEl.textContent = `Points Left: ${pointsLeft}`;
      if (pointsLeft < 0) {
        pointsLeftEl.classList.add('points-error');
      } else {
        pointsLeftEl.classList.remove('points-error');
      }
      
      $$('.stat-cost-controls button').forEach(el => {
        el.disabled = isLocked;
      });

      const base = Object.fromEntries(BASE_STATS.map(k=>[k, Number($(`#stat_${k}`).value||0)]));
      const finalStats = applySpeciesBonuses({...base}, species);
      data.finalStats = finalStats;

      BASE_STATS.forEach(k=>{
        const modEl = $(`#mod_${k}`);
        modEl.innerHTML = '';
        modEl.appendChild(abilityMod(finalStats[k]));
        $(`#${k}_final`).textContent = finalStats[k];
      })

      const lvl = Math.max(1, Math.min(5, Number($('#level').value||1)));
      const role = clazz.role;
      const hpPer = (ROLES[role]?.hpPerLevel) || 5;
      const conMod = Math.floor((finalStats.CON-10)/2);
      const startHPFinal = clazz.startHP + conMod;
      const perLevelFinal = hpPer + conMod;
      const totalHP = startHPFinal + (lvl-1)*perLevelFinal;

      $('#role').textContent = role;
      $('#startingHP').textContent = `${clazz.startHP} + CON (${conMod>=0?'+':''}${conMod}) = ${startHPFinal}`;
      $('#hpPerLevel').textContent = `${hpPer} + CON (${conMod>=0?'+':''}${conMod}) = ${perLevelFinal}`;
      $('#totalHP').textContent = totalHP;

      const w = clazz.weapons.find(x=>x.name === $('#weapon').value) || clazz.weapons[0];
      $('#weaponInfo').textContent = w ? `${w.type} • ${w.dmg} • Special: ${w.special.name}` : '—';
      $('#specialName').textContent = w ? w.special.name : '—';

      const a = clazz.armor.find(x=>x.name === $('#armor').value) || clazz.armor[0];
      $('#armorInfo').textContent = a ? `${a.type} • AC ${a.ac} • ${a.perk}` : '—';
      const {ac, notes, armType} = calcAC(data, species, clazz, $('#toggleNamedArmor').checked);
      $('#ac').textContent = ac;
      $('#acNotes').textContent = notes || '—';
      $('#armorType').textContent = armType;
      
      updateProfilePicBorder(clazz.key.toLowerCase().replace(/\s/g, ''));

      const uA = $('#utilA').value;
      const uB = $('#utilB').value;
      const featureTextEl = $('#featureText');
      featureTextEl.innerHTML = ``;
      if (species.note) {
          featureTextEl.innerHTML += `<b>Species:</b> ${species.note} <br>`;
      }
      if (w && w.special) {
          featureTextEl.innerHTML += `<b>Weapon Special:</b> ${w.special.name} — ${w.special.text} <br>`;
      }
      if (uA) {
          featureTextEl.innerHTML += `<b>Utility A:</b> ${uA} <br>`;
      }
      if (uB) {
          featureTextEl.innerHTML += `<b>Utility B:</b> ${uB} <br>`;
      }
      if (!featureTextEl.innerHTML) {
          featureTextEl.textContent = '—';
      }

      $('#pv_identity').innerHTML = `
        <div><span class="pill">${$('#name').value||'Unnamed'}</span> <span class="pill">Lvl ${lvl}</span></div>
        <div><span class="pill">${species.key}</span> <span class="pill">${clazz.key}</span></div>
      `;
      $('#pv_def').innerHTML = `
        <div><span class="pill">HP ${totalHP}</span> <span class="pill">AC ${ac}</span> <span class="pill">Focus 2</span></div>
        <div class="muted">${notes||''}</div>
        <div class="muted">HP: start ${clazz.startHP}+${Math.floor((finalStats.CON-10)/2)}, per lvl ${hpPer}+${Math.floor((finalStats.CON-10)/2)}</div>
      `;
      $('#pv_off').innerHTML = `
        <div><span class="pill">Weapon</span> <span class="pill">${w?.name||'—'}</span></div>
        <div class="muted">${w? `${w.type} • ${w.dmg}`:'—'}</div>
      `;
      $('#pv_feat').innerHTML = featureTextEl.innerHTML;
      
      save();
    }
    
    let selectedDice = 20;
    let advantage = false;
    let disadvantage = false;

    $$('.dice-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        selectedDice = parseInt(btn.dataset.sides);
        $$('.dice-btn').forEach(b => b.classList.remove('selected-die'));
        btn.classList.add('selected-die');
      });
    });

    function toggleAdv(el) {
      advantage = !advantage;
      disadvantage = false;
      el.classList.toggle('secondary', !advantage);
      $('#btn-dis').classList.add('secondary');
    }

    function toggleDis(el) {
      disadvantage = !disadvantage;
      advantage = false;
      el.classList.toggle('secondary', !disadvantage);
      $('#btn-adv').classList.add('secondary');
    }
    
    $('#roll-button').addEventListener('click', () => {
      const numRolls = parseInt($('#num-rolls').value) || 1;
      const resultsEl = $('#dice-results');
      resultsEl.innerHTML = '';
      
      const rollingDie = document.createElement('span');
      rollingDie.textContent = diceIcons[selectedDice];
      rollingDie.classList.add('rolling-die');
      resultsEl.appendChild(rollingDie);

      setTimeout(() => {
        resultsEl.innerHTML = '';
        for(let i = 0; i < numRolls; i++) {
          let roll1, roll2;
          let finalResult;
          let output = '';

          if (selectedDice === 20 && (advantage || disadvantage)) {
            roll1 = Math.floor(Math.random() * selectedDice) + 1;
            roll2 = Math.floor(Math.random() * selectedDice) + 1;
            if (advantage) {
              finalResult = Math.max(roll1, roll2);
              output = `<span class="result-roll lowlight-result">${roll1}</span> <span class="result-roll highlight-result">${roll2}</span>`;
            } else {
              finalResult = Math.min(roll1, roll2);
              output = `<span class="result-roll highlight-result">${roll1}</span> <span class="result-roll lowlight-result">${roll2}</span>`;
            }
          } else if (selectedDice === 100) {
            const tens = Math.floor(Math.random() * 10) * 10;
            const ones = Math.floor(Math.random() * 10);
            finalResult = tens + ones;
            if (finalResult === 0) finalResult = 100;
            output = `<span class="result-roll">${finalResult}</span>`;
          } else {
            finalResult = Math.floor(Math.random() * selectedDice) + 1;
            output = `<span class="result-roll">${finalResult}</span>`;
          }

          const rollResultEl = document.createElement('div');
          rollResultEl.innerHTML = `${diceIcons[selectedDice]}: ${output}`;
          resultsEl.appendChild(rollResultEl);
        }
      }, 1000);
    });

    function init() {
      // stats grid
      $('#stats').innerHTML = BASE_STATS.map(k=>`
        <div class="stat-cost">
          <h3>${k}</h3>
          <input id="stat_${k}" type="number" min="8" max="15" value="8" />
          <div class="stat-cost-controls">
            <button class="btn secondary" onclick="updateStat('${k}', -1)">-</button>
            <button class="btn secondary" onclick="updateStat('${k}', 1)">+</button>
          </div>
          <div class="muted">mod: <span class="mono" id="mod_${k}">0</span></div>
        </div>
      `).join('');

      fillSelect($('#species'), SPECIES, s=>s.key, s=>s.key);
      fillSelect($('#clazz'), CLASSES, c=>c.key, c=>c.key);
      
      $('#species').addEventListener('change', updateAll);
      $('#clazz').addEventListener('change', updateAll);
      $('#level').addEventListener('input', updateAll);
      $('#weapon').addEventListener('change', updateAll);
      $('#armor').addEventListener('change', updateAll);
      $('#utilA').addEventListener('change', updateAll);
      $('#utilB').addEventListener('change', updateAll);
      $('#toggleNamedArmor').addEventListener('change', updateAll);
      $('#hasShield').addEventListener('change', updateAll);
      $('#name').addEventListener('input', updateAll);
      BASE_STATS.forEach(k=>{$(`#stat_${k}`).addEventListener('input', updateAll)});

      $('#profile-pic-input').addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = (e) => {
            $('#profile-pic-preview').src = e.target.result;
            $('#profile-pic-preview').style.display = 'block';
            $('#profile-pic-frame').style.backgroundImage = 'none';
            updateAll();
          };
          reader.readAsDataURL(file);
        }
      });

      $('#btnExport').addEventListener('click', exportJSON);
      $('#btnPrint').addEventListener('click', ()=>window.print());

      load();
    }
    window.addEventListener('DOMContentLoaded', init);
