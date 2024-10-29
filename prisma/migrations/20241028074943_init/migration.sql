-- CreateTable
CREATE TABLE "Utilisateur" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nom" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "motDePasse" TEXT NOT NULL,
    "statut" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Commande" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "clientId" INTEGER NOT NULL,
    "agentId" INTEGER,
    "dateDemande" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "dateCollecte" DATETIME,
    "statut" TEXT NOT NULL,
    "typeDeDechet" TEXT NOT NULL,
    "adresse" TEXT NOT NULL,
    CONSTRAINT "Commande_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Utilisateur" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Commande_agentId_fkey" FOREIGN KEY ("agentId") REFERENCES "Utilisateur" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Dechet" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "type" TEXT NOT NULL,
    "description" TEXT
);

-- CreateTable
CREATE TABLE "ZoneDeCollecte" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nom" TEXT NOT NULL,
    "description" TEXT
);

-- CreateTable
CREATE TABLE "Notification" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "utilisateurId" INTEGER NOT NULL,
    "message" TEXT NOT NULL,
    "dateEnvoi" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "statut" INTEGER NOT NULL,
    CONSTRAINT "Notification_utilisateurId_fkey" FOREIGN KEY ("utilisateurId") REFERENCES "Utilisateur" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "HistoriqueCollecte" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "commandeId" INTEGER NOT NULL,
    "dateCollecte" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "remarques" TEXT,
    CONSTRAINT "HistoriqueCollecte_commandeId_fkey" FOREIGN KEY ("commandeId") REFERENCES "Commande" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_ZoneAgents" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_ZoneAgents_A_fkey" FOREIGN KEY ("A") REFERENCES "Utilisateur" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_ZoneAgents_B_fkey" FOREIGN KEY ("B") REFERENCES "ZoneDeCollecte" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_DechetCommandes" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_DechetCommandes_A_fkey" FOREIGN KEY ("A") REFERENCES "Commande" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_DechetCommandes_B_fkey" FOREIGN KEY ("B") REFERENCES "Dechet" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Utilisateur_email_key" ON "Utilisateur"("email");

-- CreateIndex
CREATE UNIQUE INDEX "_ZoneAgents_AB_unique" ON "_ZoneAgents"("A", "B");

-- CreateIndex
CREATE INDEX "_ZoneAgents_B_index" ON "_ZoneAgents"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_DechetCommandes_AB_unique" ON "_DechetCommandes"("A", "B");

-- CreateIndex
CREATE INDEX "_DechetCommandes_B_index" ON "_DechetCommandes"("B");
