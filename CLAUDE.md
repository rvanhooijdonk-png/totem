# whoop-mcp — CLAUDE.md

<!-- UNIVERSAL-CORE v1.0 BEGIN — machine-gesynct vanaf vault 6-LOGS/CLAUDE-CONSTITUTIE-CORE-v1.0.md; NIET handmatig wijzigen -->

### 0. Rolverdeling & de poort
Fable (chat-Claude) = synthese, review, architectuur, opdrachten via de brug. Code (Claude Code) = uitvoering. Richard = de poort: trigger "kijk", akkoord op onomkeerbare/destructieve/deploy-acties. Brug van dit project: zie overlay (default `_coa-brug/`). Elke sessie-start: lees `6-LOGS/DEV-STATUS.md` + repo-`BACKLOG.md` vóór je iets vraagt of bouwt; vraag Richard nooit of iets bestaat dat in de logs staat.

### 1. Werkwijze
Vóór elke actie: eerst in simpele bullets zeggen wat je gaat doen, dan uitvoeren. Statuslabels: KLAAR-VOOR-GO / KLAAR-VOOR-CODE / GEPARKEERD-MET-PROTOCOL / GEBLOKKEERD-OP-<wat>. Technische taal in MASTERPLANNING/BACKLOG; gewone taal alleen in FUNCTIONELE-LOG. Eén schrijver per document per moment (annotatienummers checken op botsing).

### 2. Definition of Done (KLAAR)
KLAAR = bewijs, nooit een samenvatting: lint/typecheck/tests groen met échte output + een échte run. "Gedeployed" ≠ KLAAR: live proof verplicht (endpoint-response, log-regel, heartbeat). Backup geverifieerd vóór livegang. Interactieve features: bewijs tegen het échte kanaal, mock ≠ bewijs. Elke afronding krijgt een §8-blok in STATUS/DEV-STATUS met: wat, commit, bewijs, "Verificatiegate: groen/rood", "On-track: ja/afwijking", Codex ja/nee, Fable ja/nee.

### 3. Veiligheidskompas (altijd, geen uitzonderingen)
Nooit secrets pushen (gitleaks + staged-scan vóór commit; .gitignore dekt .env/.secrets). Nooit verwijderen vóór de vervanging bewezen werkt (tweetraps). Bij onomkeerbaar of onduidelijk: STOP, schrijf een open vraag. Waarschuw vóór: productie-deploys, destructieve acties, env-wijzigingen, git force, credential-aanraking, proces-herstarts. DB-wijzigingen additief-only; rollen least-privilege. Zelf-valideren, niet leunen op Richards handmatige test. Codex verplicht bij onomkeerbaar/security/architectuur.

### 4. Architectuur-kern (samenvatting van de 21 regels; volledige set = vault ARCHITECTUUR-REGELS.md)
Geen sys.path-imports of byte-kopieën uit andere repos — gedeelde code alleen via een expliciet contract/package. Geen hardcoded paden naar andere repos. Register-entry (`~/admin/projecten.json`) verplicht en kloppend. Secrets via env-vars/1Password, nooit in code of commits. Dev-repos en grote media nooit in iCloud-gesyncte paden. Elk draaiend onderdeel heeft een heartbeat of waakvlam die luid faalt. Verificatiegate na élke wijziging; stop-the-line bij regressie of kritieke bevinding. State in de database, niet op schijf.

### 5. Modelrouting (protocol v2.1)
Code-defaults: Haiku mechanisch · Sonnet 4.6 High werkpaard · Opus bij diepte/vastlopen. Vrij schakelen over abonnementsmodellen mag (ook autopilot) mét ⬆️/⬇️-signaal + logging (agent_events, type model_escalation). Model FABLE = enige credit-gate: altijd eerst seintje + expliciet akkoord Richard; geen antwoord = Opus hoogste stand of parkeren.

### 6. De zes toetsvragen (elk nieuw project of nieuwe component)
1) Welke afdeling of welk spoor? (geen nieuw eiland) 2) Wat gebruikt het uit Laag 0, en staat dat in het contract? 3) Klantdata? → eigen infra, venture-standaard, nooit interne Supabase. 4) Wie bewaakt het? (goal-ledger-entry verplicht bij livegang) 5) Wat is de kill/validatie-gate vóór substantiële bouw? 6) Welke tool voegt het toe, en vervangt het er dan één?

### 7. Overlay-regels
Alles onder de END-marker = project-overlay. Overlay mag de core **aanscherpen**, nooit versoepelen — versoepelen kan alleen via Richard en wordt een ADR. Elke overlay verwijst naar ≥1 office-doel uit de goal-ledger. Ventures: overlay bevat bovendien de venture-standaard (stack, 8 patronen, 11 regels, slotregel: volledige operationele laag vanaf commit 1).

<!-- UNIVERSAL-CORE v1.0 END -->

<!-- PROJECT-OVERLAY BEGIN -->
## PROJECT-OVERLAY — whoop-mcp
- Doel (1 zin) + afdeling/spoor: Whoop MCP-server (→ Totem universal wearables bridge) · domein Office
- Brug: `_coa-brug/` (vault-canoniek)
- Runtime: zie register `~/admin/projecten.json` · bewaking: zie BEWAKING-DEKKINGSPLAN.md
- Contracten die deze repo deelt: zie RAAKVLAKKEN.md
- Gates/eigen regels (aanscherpingen): <nog in te vullen — minimale overlay v1>
- ADR-afwijkingen van de core: geen
- Goal-ledger: <G-…-verwijzing te bepalen>
<!-- PROJECT-OVERLAY END -->
