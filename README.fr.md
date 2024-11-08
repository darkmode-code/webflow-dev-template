# Modèle de Développement Webflow

Un modèle pour démarrer tous vos projets Webflow nécessitant du code, en TypeScript.  
Il ressemble à celui de [finsweet](https://github.com/finsweet/developer-starter) mais est facilement personnalisable et le déploiement est simplifié.

## Prérequis

Installez pnpm sur votre ordinateur :

```bash
npm i -g pnpm
```

Obtenez un npm access token : [Comment faire](https://docs.npmjs.com/creating-and-viewing-access-tokens)

## Installation

1. Cliquez sur "Use this template" > [Créer un dépôt](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template#creating-a-repository-from-a-template).
2. Modifiez quelques paramètres dans votre dépôt 

   ```Settings > Secrets and variables > Actions > New repository secret ```
   - Nom : NPM_TOKEN
   - Secret : votre npm token

3. Installez les dépendances :

```bash
pnpm install
```

Vous pouvez maintenant commencer votre projet ! Voici deux scripts utiles :

Mode développement (avec rechargement en direct) :

```bash
pnpm dev
```

Build (pour la production) :

```bash
pnpm build
```

4. Écrivez votre code dans `src/index.ts` (ne modifiez pas `Webflow.push`, mais vous pouvez supprimer `console.log`).

```typescript
Webflow.push(() => {
  // Écrivez votre code ici

  console.log('Heelo World')
})
```

## Déploiement

Commitez tout votre travail

Puis exécutez :

```bash
pnpm release
```

Choisissez entre Major, Minor ou Patch et écrivez un message de commit pour le déploiement.

Poussez votre code.

Lorsque la pipeline CI/CD est terminée sur Github, votre package apparaîtra sur npm.

## Outils

L'avantage de ce modèle est que vous pouvez facilement modifier chaque outil pour l'adapter à votre configuration.

### Finsweet ts-utils (ne pas modifier)

Finsweet a fait un travail ÉNORME en typant le fichier Webflow.js inclus dans tous les projets Webflow.

Avec ceci, vous pouvez accéder à de nombreux types et méthodes non fournis par Webflow.

[Documentation de ts-utils](https://finsweet.com/open-source/ts-utils/)

### ESBuild

Un bundleur et minificateur JavaScript rapide qui compile et emballe le code JavaScript et TypeScript pour le déploiement.

Mettre à jour `builder/esbuild.js`

Il inclut un rechargement en direct dans `builder/live-reload.js`

### TSConfig

Un fichier de configuration pour TypeScript qui spécifie les options du compilateur et les chemins de fichiers nécessaires pour compiler un projet TypeScript.

Mettre à jour `tsconfig.json`

### ESLint

Un outil d'analyse statique de code pour JavaScript qui identifie et corrige les problèmes dans votre code afin de garantir le respect des standards et des bonnes pratiques de codage.

Mettre à jour `eslint.config.js`

### Prettier

Un formateur de code pour JavaScript qui impose un style cohérent en analysant le code et en le reformattant selon ses propres règles.

Mettre à jour le fichier `.prettierrc`

### Husky (Git hooks)

Un outil qui permet aux scripts de hooks Git de s'exécuter automatiquement, aidant à faire respecter les contrôles de qualité et d'autres tâches pendant le processus de développement.

Ajoutez des hooks dans le dossier `.husky`

### bump-version.js (versionnage)

Un script pour gérer et automatiser le versionnage.

Mettre à jour `builder/bump-version.js`

### CI/CD

Cette pipeline utilise GitHub Actions.

#### Release

Publie le package sur npm.

Mettre à jour `.github/workflows/release.yml`
