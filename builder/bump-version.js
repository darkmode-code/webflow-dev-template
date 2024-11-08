#!/usr/bin/env node

import prompts from "prompts";
import { execSync } from "child_process";

(async () => {
  const response = await prompts([
    {
      type: "select",
      name: "bumpType",
      message: "Choisissez le type d'incrémentation de version :",
      choices: [
        { title: "Patch", value: "patch" },
        { title: "Minor", value: "minor" },
        { title: "Major", value: "major" },
      ],
      initial: 0,
    },
    {
      type: "text",
      name: "description",
      message: "Entrez une description pour le commit de version :",
      initial: "Nouvelle version",
    },
  ]);

  const { bumpType, description } = response;

  if (!bumpType) {
    console.log("Aucun type de bump sélectionné, opération annulée.");
    process.exit(1);
  }

  try {
    execSync(`pnpm version ${bumpType} -m "publish v%s - ${description}"`, {
      stdio: "inherit",
    });

    console.log(`Version incrémentée en ${bumpType} avec succès !`);
  } catch (error) {
    console.error("Erreur lors de l'incrémentation de la version :", error.message);
    process.exit(1);
  }
})();
