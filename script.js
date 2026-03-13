// script.js - Version ULTIME avec TOUS les effets

// ==================== GÉNÉRATEUR DE PROMPT ====================

class PromptGenerator {
    constructor() {
        this.userData = {};
    }

    collectUserData() {
        const selectedCard = document.querySelector('.character-card.selected');
        const countryKey = selectedCard ? selectedCard.dataset.country : 'spain';
        
        this.userData = {
            country: countryKey,
            leftPalmColor: document.getElementById('leftPalmColor').value,
            rightPalmColor: document.getElementById('rightPalmColor').value,
            leftPalmColorName: this.getColorName(document.getElementById('leftPalmColor').value),
            rightPalmColorName: this.getColorName(document.getElementById('rightPalmColor').value),
            startingOutfit: {
                top: document.getElementById('startingTop').value,
                bottom: document.getElementById('startingBottom').value,
                details: document.getElementById('startingDetails').value
            },
            finalOutfit: document.getElementById('finalOutfitDescription').value,
            naturalHair: document.getElementById('naturalHair')?.value || 'bruns',
            enableFluo: document.getElementById('enableFluo').checked,
            fluoColor: document.getElementById('fluoColor').value,
            fluoIntensity: document.getElementById('fluoIntensity')?.value || 9,
            hairStyle: document.getElementById('hairStyle')?.value || 'détachés',
            seductionLevel: document.getElementById('seductionLevel')?.value || 9,
            gestures: {
                regards: document.getElementById('gesteRegards')?.checked || false,
                sourires: document.getElementById('gesteSourires')?.checked || false,
                clins: document.getElementById('gesteClins')?.checked || false,
                levres: document.getElementById('gesteLevres')?.checked || false,
                bisous: document.getElementById('gesteBisous')?.checked || false,
                bisousCount: document.getElementById('bisousCount')?.value || 3,
                viens: document.getElementById('gesteViens')?.checked || false,
                viensCount: document.getElementById('viensCount')?.value || 4,
                mains: document.getElementById('gesteMains')?.checked || false,
                cheveux: document.getElementById('gesteCheveux')?.checked || false
            },
            background: document.getElementById('backgroundStyle')?.value || 'auto',
            customBackground: document.getElementById('customBackgroundDesc')?.value || '',
            effects: {
                confettis: document.getElementById('effectConfettis')?.checked || false,
                poudre: document.getElementById('effectPoudre')?.checked || false,
                petales: document.getElementById('effectPétales')?.checked || false,
                fumee: document.getElementById('effectFumee')?.checked || false,
                lumieres: document.getElementById('effectLumières')?.checked || false,
                paillettes: document.getElementById('effectPaillettes')?.checked || false
            },
            // EFFETS AVANCÉS
            effectExplosion: document.getElementById('effectExplosion')?.checked || false,
            effectTeleportation: document.getElementById('effectTeleportation')?.checked || false,
            effectMirror: document.getElementById('effectMirror')?.checked || false,
            effectTimeLapse: document.getElementById('effectTimeLapse')?.checked || false,
            effectHologram: document.getElementById('effectHologram')?.checked || false,
            effectClone: document.getElementById('effectClone')?.checked || false,
            surpriseLevel: document.getElementById('surpriseLevel')?.value || 7,
            
            // EFFETS SPÉCIAUX
            fireEffect: document.getElementById('effectFeu')?.checked || false,
            waterEffect: document.getElementById('effectEau')?.checked || false,
            iceEffect: document.getElementById('effectGlace')?.checked || false,
            lightningEffect: document.getElementById('effectEclairs')?.checked || false,
            butterflyEffect: document.getElementById('effectPapillons')?.checked || false,
            featherEffect: document.getElementById('effectPlumes')?.checked || false,
            laserEffect: document.getElementById('effectLaser')?.checked || false,
            bubbleEffect: document.getElementById('effectBulles')?.checked || false,
            
            // MUSIQUE
            musicStyle: document.getElementById('musicStyle')?.value || 'traditionnelle',
            soundEffects: document.getElementById('soundEffects')?.checked || false,
            
            // MODE ALIEN
            alienMode: document.getElementById('enableAlienMode')?.checked || false,
            alienSkin: document.getElementById('alienSkin')?.checked || false,
            alienSkinColor: document.getElementById('alienSkinColor')?.value || 'argent',
            alienEyes: document.getElementById('alienEyes')?.checked || false,
            alienEyesColor: document.getElementById('alienEyesColor')?.value || 'rouge',
            alienAntenna: document.getElementById('alienAntenna')?.checked || false,
            antennaStyle: document.getElementById('antennaStyle')?.value || 'antennes',
            alienGlow: document.getElementById('alienGlow')?.checked || false,
            glowColor: document.getElementById('glowColor')?.value || 'bleu',
            alienTattoos: document.getElementById('alienTattoos')?.checked || false,
            tattooStyle: document.getElementById('tattooStyle')?.value || 'symboles',
            alienHolograms: document.getElementById('alienHolograms')?.checked || false,
            hologramType: document.getElementById('hologramType')?.value || 'etoiles',
            alienVoice: document.getElementById('alienVoice')?.checked || false,
            alienGravity: document.getElementById('alienGravity')?.checked || false,
            alienTeleportation: document.getElementById('alienTeleportation')?.checked || false,
            
            // 👇 NOUVEAU - MOTS FLOTTANTS (bien placé ici)
            floatingWords: {
                enabled: document.getElementById('enableFloatingWords')?.checked || false,
                words: {
                    follow: document.getElementById('wordFollow')?.checked || false,
                    like: document.getElementById('wordLike')?.checked || false,
                    subscribe: document.getElementById('wordSubscribe')?.checked || false,
                    love: document.getElementById('wordLove')?.checked || false,
                    watch: document.getElementById('wordWatch')?.checked || false,
                    heart: document.getElementById('wordHeart')?.checked || false
                },
                style: document.getElementById('wordStyle')?.value || 'neon',
                movement: document.getElementById('wordMovement')?.value || 'float',
                color: document.getElementById('wordColor')?.value || '#ff6b6b',
                size: document.getElementById('wordSize')?.value || 'medium',
                count: document.getElementById('wordCount')?.value || 'medium'
            }
        };
    }

    getColorName(hex) {
        const colors = {
            '#ff0000': 'rouge passion',
            '#ff6600': 'orange vif',
            '#ff00ff': 'rose fuchsia',
            '#00ff00': 'vert émeraude',
            '#0000ff': 'bleu Majorelle',
            '#ffff00': 'jaune soleil',
            '#000000': 'noir profond',
            '#ffd700': 'or',
            '#c0c0c0': 'argent'
        };
        return colors[hex] || 'couleur personnalisée';
    }

    getSeductionPhrase(level) {
        if (level <= 3) return 'subtile, charmeuse légère';
        if (level <= 6) return 'charmeuse, coquine';
        return 'ultra-séductrice, magnétique, explosive';
    }

    getSurprisePhrase(level) {
        if (level <= 3) return 'surprise subtile';
        if (level <= 6) return 'effet wow';
        if (level <= 8) return 'explosion visuelle';
        return 'EXPÉRIENCE HALLUCINANTE';
    }

    generateMusicText() {
        let musicText = '';
        
        switch(this.userData.musicStyle) {
            case 'traditionnelle':
                musicText = 'Musique traditionnelle authentique du pays';
                break;
            case 'moderne':
                musicText = 'Remix moderne et électro de la musique traditionnelle';
                break;
            case 'epique':
                musicText = 'Musique épique de film, orchestrale et puissante';
                break;
            case 'silence':
                musicText = 'Silence absolu, seulement les bruits de ses pas et de sa respiration';
                break;
            default:
                musicText = 'Musique d\'ambiance adaptée';
        }
        
        if (this.userData.soundEffects) {
            musicText += ', avec effets sonores (baisers, claquements de doigts, froissements de tissu)';
        }
        
        return musicText;
    }

    generateAdvancedEffects() {
        let effects = [];
        
        if (this.userData.effectExplosion) effects.push('explosion de couleurs aveuglante');
        if (this.userData.effectTeleportation) effects.push('effet de téléportation avec distorsion de l\'espace');
        if (this.userData.effectMirror) effects.push('effet miroir avec double d\'elle-même');
        if (this.userData.effectTimeLapse) effects.push('accéléré puis ralenti au moment de la révélation');
        if (this.userData.effectHologram) effects.push('hologrammes flottants autour d\'elle');
        if (this.userData.effectClone) effects.push('duplication en plusieurs clones qui dansent ensemble');
        
        // Effets spéciaux
        if (this.userData.fireEffect) effects.push('flammes tourbillonnantes');
        if (this.userData.waterEffect) effects.push('vagues d\'eau cristalline');
        if (this.userData.iceEffect) effects.push('cristaux de glace étincelants');
        if (this.userData.lightningEffect) effects.push('éclairs zébrant le ciel');
        if (this.userData.butterflyEffect) effects.push('papillons magiques multicolores');
        if (this.userData.featherEffect) effects.push('plumes légères dansantes');
        if (this.userData.laserEffect) effects.push('lasers colorés synchronisés');
        if (this.userData.bubbleEffect) effects.push('bulles scintillantes irisées');
        
        if (effects.length > 0) {
            const surpriseWord = this.getSurprisePhrase(this.userData.surpriseLevel);
            return `\nEFFETS SPECTACULAIRES AVANCÉS (${surpriseWord}) : ${effects.join(', ')}.`;
        }
        return '';
    }

    generateAlienTransformations() {
        if (!this.userData.alienMode) return '';
        
        let alienText = '\n\nTRANSFORMATIONS EXTRA-TERRESTRES (DÉJÀ ACCOMPLIES) :\n';
        
        if (this.userData.alienSkin) {
            alienText += `- Peau transformée : texture ${this.userData.alienSkinColor} irisée, effet métal liquide, reflets holographiques (DÉJÀ VISIBLE)\n`;
        }
        
        if (this.userData.alienEyes) {
            alienText += `- Yeux : devenus lumineux, couleur ${this.userData.alienEyesColor}, avec un éclat surnaturel (DÉJÀ VISIBLE)\n`;
        }
        
        if (this.userData.alienAntenna) {
            const antennaText = this.userData.antennaStyle === 'antennes' ? 'Antennes' : 
                this.userData.antennaStyle === 'cornes' ? 'Cornes' : 
                this.userData.antennaStyle === 'couronne' ? 'Couronne lumineuse' : 'Halo de lumière';
            alienText += `- ${antennaText} sur la tête, qui pulsent en rythme (DÉJÀ PRÉSENTES)\n`;
        }
        
        if (this.userData.alienGlow) {
            alienText += `- Corps phosphorescent : lueur ${this.userData.glowColor} qui émane de sa peau (DÉJÀ VISIBLE)\n`;
        }
        
        if (this.userData.alienTattoos) {
            const tattooText = this.userData.tattooStyle === 'symboles' ? 'Symboles aliens' :
                this.userData.tattooStyle === 'runes' ? 'Runes anciennes' :
                this.userData.tattooStyle === 'galaxie' ? 'Motifs galactiques' : 'Circuits imprimés';
            alienText += `- Tatouages lumineux : motifs ${tattooText} qui s'allument et s'éteignent sur tout son corps (DÉJÀ PRÉSENTS)\n`;
        }
        
        if (this.userData.alienHolograms) {
            const hologramText = this.userData.hologramType === 'etoiles' ? 'Étoiles filantes' :
                this.userData.hologramType === 'planetes' ? 'Planètes miniatures' :
                this.userData.hologramType === 'symboles' ? 'Symboles mystiques' : 'Sphères d\'énergie';
            alienText += `- Hologrammes flottants : des ${hologramText} apparaissent et dansent autour d'elle (DÉJÀ PRÉSENTS)\n`;
        }
        
        if (this.userData.alienVoice) {
            alienText += `- Voix modulée : sons extraterrestres, vibrations cosmiques\n`;
        }
        
        if (this.userData.alienGravity) {
            alienText += `- Effet apesanteur : ses mouvements semblent défier la gravité, elle flotte légèrement\n`;
        }
        
        if (this.userData.alienTeleportation) {
            alienText += `- Effet téléportation : des scintillements lumineux créent une illusion de déplacement instantané\n`;
        }
        
        return alienText;
    }

    // 👇 NOUVELLE FONCTION POUR LES MOTS FLOTTANTS (dans la classe)
    generateFloatingWords() {
        if (!this.userData.floatingWords?.enabled) return '';
        
        let wordsList = [];
        if (this.userData.floatingWords.words.follow) wordsList.push('"Follow me"');
        if (this.userData.floatingWords.words.like) wordsList.push('"Like me"');
        if (this.userData.floatingWords.words.subscribe) wordsList.push('"Subscribe"');
        if (this.userData.floatingWords.words.love) wordsList.push('"Love me"');
        if (this.userData.floatingWords.words.watch) wordsList.push('"Watch me"');
        if (this.userData.floatingWords.words.heart) wordsList.push('❤️ (cœurs)');
        
        if (wordsList.length === 0) return '';
        
        let countText = '';
        switch(this.userData.floatingWords.count) {
            case 'few': countText = '3-4 mots'; break;
            case 'medium': countText = '5-7 mots'; break;
            case 'many': countText = '8-10 mots'; break;
        }
        
        return `
MOTS FLOTTANTS MAGIQUES :
- Des textes ${wordsList.join(', ')} flottent autour d'elle pendant toute la danse
- Style d'affichage : ${this.userData.floatingWords.style} lumineux
- Mouvement : ${this.userData.floatingWords.movement} autour d'elle
- Couleur principale : ${this.userData.floatingWords.color}
- Taille : ${this.userData.floatingWords.size}
- Quantité : ${countText}
- Les mots la suivent dans ses mouvements
- Effet : ils apparaissent et disparaissent magiquement
- Ils scintillent et brillent dans la vidéo`;
    }

    generatePart1() {
        const country = countries[this.userData.country];
        const seductionPhrase = this.getSeductionPhrase(this.userData.seductionLevel);
        
        let gesturesText = '';
        if (this.userData.gestures.regards) gesturesText += '- Elle fixe la caméra avec des regards intenses et charmeurs\n';
        if (this.userData.gestures.sourires) gesturesText += '- Sourires en coin, coquins, charmeurs\n';
        if (this.userData.gestures.clins) gesturesText += '- Clins d\'œil complices et lents\n';
        if (this.userData.gestures.levres) gesturesText += '- Elle mord sa lèvre inférieure en vous fixant\n';
        if (this.userData.gestures.mains) gesturesText += '- Ses mains caressent son corps (cou, épaules, seins, hanches)\n';
        if (this.userData.gestures.cheveux) gesturesText += '- Jeux avec ses cheveux, elle les caresse, les rejette\n';
        if (this.userData.gestures.bisous) {
            gesturesText += `- Elle envoie des baisers du bout des doigts vers la caméra (${this.userData.gestures.bisousCount} fois)\n`;
        }
        if (this.userData.gestures.viens) {
            gesturesText += `- Elle fait le geste "viens vers moi" avec son index (${this.userData.gestures.viensCount} fois)\n`;
        }

        const danceMoves = country.danceMoves?.part1?.join('\n    - ') || 'mouvements sensuels';

        const prompt = `Une transition de danse synchronisée à haute énergie en 4k, basée sur l'image fournie - PREMIÈRE PARTIE de 6 secondes.

LE SUJET :
- Femme magnifique, totalement silencieuse - elle ne parle pas, elle danse uniquement
- Visage parfaitement identique à l'image de référence - traits reconnaissables
- Expression ${seductionPhrase} : elle joue avec le spectateur, le captive, le séduit
- Regards complices et coquins

LES MAINS PEINTES (COULEURS ANNONÇATRICES) :
- Paume gauche : peinture ${this.userData.leftPalmColorName}
- Paume droite : peinture ${this.userData.rightPalmColorName}
- Poudre scintillante sur les doigts
- Les deux couleurs restent parfaitement distinctes et ne se mélangent pas
- Elle joue avec ses mains face caméra, les tourne, les admire
- Ces deux couleurs annoncent les teintes dominantes de sa future tenue

TENUE DE DÉPART (SERA COMPLÈTEMENT REMPLACÉE) :
- Haut : ${this.userData.startingOutfit.top}
- Bas : ${this.userData.startingOutfit.bottom}
- Détails : ${this.userData.startingOutfit.details}
- Cheveux dans leur couleur naturelle : ${this.userData.naturalHair}

DANSE AVANT TRANSFORMATION - MOUVEMENTS PRÉCIS :
La personne exécute une danse ${country.dance} sensuelle et ${seductionPhrase} :
    - ${danceMoves}

GESTES DE SÉDUCTION :
${gesturesText}

JEUX DE REGARDS :
- Elle fixe la caméra droit dans les yeux
- Elle bat des cils lentement
- Elle suit les mouvements du spectateur
- Elle regarde de bas en haut sensuellement

TRANSITION :
Au moment le plus intense de sa danse, elle rapproche ses mains peintes de l'objectif dans un geste théâtral et sensuel, les plaquant contre la caméra pour masquer entièrement l'image, cachant complètement la vue pendant la fin de cette première partie. Elle laisse deviner un sourire mystérieux juste avant que ses mains ne couvrent l'objectif.

IMPORTANT - PRÉPARATION POUR LA PARTIE 2 :
- Pendant que les mains cachent l'objectif (fin de cette partie), elle aura le temps de SE CHANGER COMPLÈTEMENT
- La transformation (nouvelle tenue, nouveaux cheveux, nouveau maquillage, effets) aura lieu HORS CAMÉRA
- La PARTIE 2 commencera avec le résultat FINAL déjà visible`;

        return prompt;
    }

    generatePart2() {
        const country = countries[this.userData.country];
        const seductionPhrase = this.getSeductionPhrase(this.userData.seductionLevel);
        
        const fluoIntensityText = this.userData.fluoIntensity >= 8 ? 'éclatant, quasi phosphorescent' :
                                 this.userData.fluoIntensity >= 5 ? 'brillant' : 'léger';

        // Construction des gestes
        let gesturesText = '';
        if (this.userData.gestures.regards) gesturesText += '- Regards encore plus intenses, magnétiques\n';
        if (this.userData.gestures.sourires) gesturesText += '- Sourires encore plus charmeurs et victorieux\n';
        if (this.userData.gestures.clins) gesturesText += '- Clins d\'œil appuyés et complices\n';
        if (this.userData.gestures.levres) gesturesText += '- Mordillement de la lèvre plus prononcé\n';
        if (this.userData.gestures.mains) gesturesText += '- Caresses plus appuyées sur tout le corps\n';
        if (this.userData.gestures.cheveux) gesturesText += '- Jeux accentués avec ses cheveux fluo\n';
        if (this.userData.gestures.bisous) {
            gesturesText += `- Elle envoie ${this.userData.gestures.bisousCount} baisers à la caméra pendant la danse\n`;
        }
        if (this.userData.gestures.viens) {
            gesturesText += `- Elle fait le geste "viens" ${this.userData.gestures.viensCount} fois, de plus en plus charmeur\n`;
        }

        const danceMoves = country.danceMoves?.part2?.join('\n    - ') || 'mouvements encore plus intenses';

        // Construction des effets de base
        let baseEffects = [];
        if (this.userData.effects.confettis) baseEffects.push('confettis aux couleurs de la tenue');
        if (this.userData.effects.poudre) baseEffects.push('poudre scintillante');
        if (this.userData.effects.petales) baseEffects.push('pluie de pétales');
        if (this.userData.effects.fumee) baseEffects.push('fumée légère');
        if (this.userData.effects.lumieres) baseEffects.push('lumières colorées');
        if (this.userData.effects.paillettes) baseEffects.push('paillettes dans l\'air');
        
        const baseEffectsText = baseEffects.join(', ');

        // Effets avancés
        const advancedEffects = this.generateAdvancedEffects();
        
        // Transformations alien
        const alienTransformations = this.generateAlienTransformations();
        
        // Musique
        const musicText = this.generateMusicText();
        
        // 👇 MOTS FLOTTANTS (ajouté ici)
        const floatingWordsText = this.generateFloatingWords();

        const prompt = `Suite de la transition - DEUXIÈME PARTIE de 6 secondes.

CONTINUITÉ PARFAITE DU VISAGE :
- Le sujet est STRICTEMENT IDENTIQUE à celui de la PARTIE 1
- Mêmes traits, même visage, expression encore plus intense
- Reconnaissable au premier coup d'œil

⚠️ ATTENTION - TRANSFORMATION DÉJÀ ACCOMPLIE ⚠️ :
- Pendant le court instant où les mains masquaient l'objectif (fin de la PARTIE 1), elle a eu le temps de SE CHANGER COMPLÈTEMENT
- La transformation a eu lieu HORS CAMÉRA
- Dès que les mains s'écartent, le résultat FINAL est déjà visible
- AUCUN changement ne doit être visible pendant cette PARTIE 2 (cheveux déjà colorés, tenue déjà portée, maquillage déjà appliqué)

GESTES DE SÉDUCTION IMMÉDIATS DÈS LE RETRAIT DES MAINS :
${this.userData.gestures.bisous ? '- Elle envoie UN BISOUD À LA CAMÉRA dès que ses mains se retirent' : ''}
${this.userData.gestures.viens ? '- Elle fait le geste "VIENS VERS MOI" avec son doigt, lentement, en vous fixant' : ''}
- Sourire victorieux et charmeur

🎵 AMBIANCE SONORE :
${musicText}

NOUVELLE TENUE (TOTALEMENT REMPLACÉE - DÉJÀ PORTÉE) :
Elle porte maintenant une tenue spectaculaire (déjà enfilée pendant la transition) :
${this.userData.finalOutfit}

CHEVEUX TRANSFORMÉS - COULEURS FLUO (DÉJÀ COLORÉS) :
${this.userData.enableFluo ? 
`- CHANGEMENT COMPLET - Cheveux DÉJÀ colorés en ${this.userData.fluoColor} ${fluoIntensityText}
- Intensité fluo maximale - ils brillent littéralement sous la lumière
- Style : ${this.userData.hairStyle}
- Cascade de couleur fluo qui scintille à chaque mouvement (DÈS LA PREMIÈRE IMAGE)
- Reflets néon qui attirent le regard` : 
`- Les cheveux conservent leur couleur naturelle (${this.userData.naturalHair})
- Coiffés élégamment (déjà fait)`}
${alienTransformations}

MAQUILLAGE APPLIQUÉ (DÉJÀ FAIT) :
- Teint parfait et lumineux (déjà appliqué)
- Yeux intensifiés (déjà maquillés)
- Lèvres brillantes (déjà fait)
- Paillettes subtiles (déjà présentes)
- Peau légèrement huilée pour faire scintiller la lumière (déjà préparée)

DANSE APRÈS TRANSFORMATION - MOUVEMENTS ENCORE PLUS INTENSES :
Elle reprend sa danse ${country.dance} avec une énergie décuplée :
    - ${danceMoves}

JEUX DE SÉDUCTION ACCRUS :
${gesturesText}

JEUX AVEC LA NOUVELLE TENUE (DÉJÀ PORTÉE) :
- Jeux avec les éléments de la tenue
- Mise en valeur des atouts
- Découvertes subtiles

JEUX AVEC LES CHEVEUX FLUO (DÉJÀ COLORÉS) :
- Elle passe ses mains dans ses cheveux fluo (déjà colorés)
- Les fait virevolter en tournant
- Joue avec les mèches colorées
- Les cheveux fluo deviennent un élément central de la séduction

${floatingWordsText}

ARRIÈRE-PLAN :
${this.userData.background === 'custom' ? this.userData.customBackground : (country.background || 'studio professionnel')}

${advancedEffects ? advancedEffects + '\n' : ''}
EFFETS SPECTACULAIRES DE BASE :
Au moment où ses mains révèlent la transformation, explosion de ${baseEffectsText}

CAMÉRA ET ÉCLAIRAGE :
- Caméra statique - elle danse POUR le spectateur, face à lui
- Éclairage cinématographique chaleureux et enveloppant
- Lumières spécifiques pour faire ressortir les cheveux fluo et les effets spéciaux
- Ambiance intimiste et professionnelle

RAPPEL IMPORTANT :
- La transformation est DÉJÀ TERMINÉE au début de cette partie
- AUCUNE métamorphose visible pendant ces 6 secondes
- Tout a eu lieu PENDANT que les mains cachaient l'objectif dans la PARTIE 1`;

        return prompt;
    }

    generateConsignes() {
        const country = countries[this.userData.country];
        
        let alienLine = '';
        if (this.userData.alienMode) {
            alienLine = '\n13. MODE EXTRA-TERRESTRE ACTIVÉ : Transformations spectaculaires incluses (peau, yeux, antennes, etc.)';
        }
        
        return `CONSIGNES DE COHÉRENCE ABSOLUE :

1. VISAGE IDENTIQUE : Le sujet de la PARTIE 2 a EXACTEMENT le même visage que la PARTIE 1
2. SILENCE TOTAL : Pas un mot - elle communique par sa danse, ses regards et ses sourires
3. SÉDUCTION MAGNÉTIQUE : Elle est charmeuse, captivante, elle joue avec le spectateur
4. GESTES DE SÉDUCTION DIRECTE : ${this.userData.gestures.bisous ? 'BISOUS à la caméra' : ''} ${this.userData.gestures.viens ? 'et gestes "VIENS"' : ''}
5. TENUE DE DÉPART COMPLÈTEMENT REMPLACÉE : Plus rien de la tenue initiale
6. CHEVEUX ${this.userData.enableFluo ? 'TRANSFORMÉS EN COULEURS FLUO' : 'CONSERVÉS NATURELS'}
7. TRANSITION NATURELLE : Changement réaliste hors caméra
8. TRANSITION IMMÉDIATE : Dès que les mains s'écartent, la nouvelle tenue est visible
9. COULEURS ANNONÇATRICES : ${this.userData.leftPalmColorName} et ${this.userData.rightPalmColorName} des paumes = couleurs dominantes de la tenue finale
10. MOUVEMENTS PRÉCIS : Chorégraphie technique et sensuelle
11. INSPIRATION CULTURELLE : ${country.name} - ${country.dance}
12. ⚠️ TRANSFORMATION DÉJÀ ACCOMPLIE : AUCUN changement visible pendant la PARTIE 2 - tout a eu lieu PENDANT que les mains cachaient l'objectif${alienLine}`;
    }

    generateFullPrompt() {
        this.collectUserData();
        const part1 = this.generatePart1();
        const part2 = this.generatePart2();
        const consignes = this.generateConsignes();
        
        return {
            part1: part1,
            part2: part2,
            consignes: consignes,
            full: part1 + '\n\n' + part2 + '\n\n' + consignes
        };
    }
}

// ==================== INITIALISATION ====================

document.addEventListener('DOMContentLoaded', function() {
    console.log("✅ Application ULTIME démarrée avec TOUS les effets");
    
    // Initialiser les personnages
    initCharacters();
    
    // Initialiser les événements
    initEvents();
    
    // Créer le générateur
    const generator = new PromptGenerator();
    
    // Bouton générer
    document.getElementById('generatePrompt').addEventListener('click', function() {
        const prompts = generator.generateFullPrompt();
        window.lastPrompts = prompts;
        const activeTab = document.querySelector('.tab-btn.active').id;
        displayPrompt(prompts, activeTab);
        updateRecap();
    });
    
    // Gestion des onglets
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            const prompts = window.lastPrompts || { full: '', part1: '', part2: '', consignes: '' };
            displayPrompt(prompts, this.id);
        });
    });
    
    // Copier
    document.getElementById('copyPrompt').addEventListener('click', function() {
        const text = document.getElementById('promptDisplay').innerText;
        navigator.clipboard.writeText(text).then(() => {
            alert('✅ Prompt copié dans le presse-papiers !');
        });
    });
    
    // Exporter
    document.getElementById('exportPrompt').addEventListener('click', function() {
        const text = document.getElementById('promptDisplay').innerText;
        const blob = new Blob([text], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'prompt_transition.txt';
        a.click();
    });
    
    // Effacer
    document.getElementById('clearPrompt').addEventListener('click', function() {
        document.getElementById('promptDisplay').innerHTML = '';
    });
    
    // Suggérer couleurs
    document.getElementById('suggestColors').addEventListener('click', function() {
        const selected = document.querySelector('.character-card.selected');
        if (!selected) return;
        const country = countries[selected.dataset.country];
        
        document.getElementById('leftPalmColor').value = country.palmColors.left;
        document.getElementById('rightPalmColor').value = country.palmColors.right;
    });
    
    // Générer tenue
    document.getElementById('generateOutfit').addEventListener('click', function() {
        const selected = document.querySelector('.character-card.selected');
        if (!selected) return;
        const country = countries[selected.dataset.country];
        
        const outfitDesc = `${country.finalOutfit.description} aux couleurs ${country.finalOutfit.colors.join(' et ')}. 
Éléments : ${country.finalOutfit.elements.join(', ')}. 
Accessoires : ${country.finalOutfit.accessories.join(', ')}.`;
        
        document.getElementById('finalOutfitDescription').value = outfitDesc;
    });
    
    // Intensité fluo
    const fluoIntensity = document.getElementById('fluoIntensity');
    if (fluoIntensity) {
        fluoIntensity.addEventListener('input', function() {
            const val = parseInt(this.value);
            const labels = ['Faible', 'Léger', 'Moyen', 'Brillant', 'Éclatant', 'Intense', 'Fulgurant', 'Phosphorescent', 'Néon', 'AVEUGLANT'];
            document.getElementById('intensityValue').textContent = labels[val-1] || 'Éclatant';
        });
    }
    
    // Upload image
    initImageUpload();
});

// ==================== FONCTIONS ====================

function initCharacters() {
    const grid = document.getElementById('countryGrid');
    if (!grid) return;
    
    let html = '';
    for (const [key, country] of Object.entries(countries)) {
        html += `<div class="character-card" data-country="${key}">${country.name}</div>`;
    }
    grid.innerHTML = html;
    
    // Sélectionner le premier
    const firstCard = document.querySelector('.character-card');
    if (firstCard) {
        firstCard.classList.add('selected');
        document.querySelector('#selectedCountry span').textContent = countries[firstCard.dataset.country].name;
    }
    
    // Événements de clic
    document.querySelectorAll('.character-card').forEach(card => {
        card.addEventListener('click', function() {
            document.querySelectorAll('.character-card').forEach(c => c.classList.remove('selected'));
            this.classList.add('selected');
            document.querySelector('#selectedCountry span').textContent = countries[this.dataset.country].name;
        });
    });
    
    // Recherche
    const searchInput = document.getElementById('characterSearch');
    if (searchInput) {
        searchInput.addEventListener('input', function(e) {
            const search = e.target.value.toLowerCase();
            document.querySelectorAll('.character-card').forEach(card => {
                const text = card.textContent.toLowerCase();
                card.style.display = text.includes(search) ? 'block' : 'none';
            });
        });
    }
}

function initEvents() {
    // Upload area
    const uploadArea = document.getElementById('uploadArea');
    if (uploadArea) {
        uploadArea.addEventListener('click', () => {
            document.getElementById('imageInput').click();
        });
    }
}

function initImageUpload() {
    const uploadArea = document.getElementById('uploadArea');
    const imageInput = document.getElementById('imageInput');
    const imagePreview = document.getElementById('imagePreview');
    const previewImg = document.getElementById('previewImg');
    const removeBtn = document.getElementById('removeImage');
    
    if (!uploadArea) return;
    
    uploadArea.addEventListener('dragover', (e) => {
        e.preventDefault();
        uploadArea.style.borderColor = '#00f3ff';
    });
    
    uploadArea.addEventListener('dragleave', () => {
        uploadArea.style.borderColor = '';
    });
    
    uploadArea.addEventListener('drop', (e) => {
        e.preventDefault();
        uploadArea.style.borderColor = '';
        const file = e.dataTransfer.files[0];
        if (file && file.type.startsWith('image/')) handleImage(file);
    });
    
    imageInput.addEventListener('change', (e) => {
        if (e.target.files[0]) handleImage(e.target.files[0]);
    });
    
    removeBtn.addEventListener('click', () => {
        imagePreview.style.display = 'none';
        uploadArea.style.display = 'block';
        imageInput.value = '';
    });
    
    function handleImage(file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            previewImg.src = e.target.result;
            imagePreview.style.display = 'block';
            uploadArea.style.display = 'none';
        };
        reader.readAsDataURL(file);
    }
}

function displayPrompt(prompts, tabId) {
    const display = document.getElementById('promptDisplay');
    if (!display) return;
    
    switch(tabId) {
        case 'tabFull':
            display.innerHTML = (prompts.full || '').replace(/\n/g, '<br>');
            break;
        case 'tabPart1':
            display.innerHTML = (prompts.part1 || '').replace(/\n/g, '<br>');
            break;
        case 'tabPart2':
            display.innerHTML = (prompts.part2 || '').replace(/\n/g, '<br>');
            break;
        case 'tabConsignes':
            display.innerHTML = (prompts.consignes || '').replace(/\n/g, '<br>');
            break;
    }
}

function updateRecap() {
    const selected = document.querySelector('.character-card.selected');
    if (!selected) return;
    
    const country = countries[selected.dataset.country];
    const fluoActive = document.getElementById('enableFluo').checked ? 'OUI' : 'NON';
    const fluoColor = document.getElementById('fluoColor').value;
    const alienMode = document.getElementById('enableAlienMode')?.checked ? '👽 ACTIVÉ' : 'Désactivé';
    
    const recap = `
🌍 Personnage : ${country.name}
💃 Danse : ${country.dance}
👽 Mode Alien : ${alienMode}
🎨 Couleurs : ${document.getElementById('leftPalmColor').value} / ${document.getElementById('rightPalmColor').value}
💇 Cheveux fluo : ${fluoActive} ${fluoActive === 'OUI' ? '- ' + fluoColor : ''}
💋 Bisous : ${document.getElementById('bisousCount').value}
👉 Geste "viens" : ${document.getElementById('viensCount').value}
    `;
    
    const recapDiv = document.getElementById('recapContent');
    if (recapDiv) recapDiv.innerHTML = recap.replace(/\n/g, '<br>');
}
