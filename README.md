# ECSC Challenge Trophy 2026

1. Install Node.js (LTS) from https://nodejs.org.
2. Extract the zip, open the `ecsc-cricket` folder that contains `server.js`, click the address bar, type `cmd`, press Enter.
3. Run: `node server.js`
4. Public site: http://localhost:3000   Admin panel: http://localhost:3000/admin (type the address; there is no link on the public site).
5. Default admin password: `ECS2026`. Change it: `set ADMIN_PASSWORD=MyPass` then `node server.js` (PowerShell: `$env:ADMIN_PASSWORD="MyPass"; node server.js`).
6. Demo data is loaded. To start your own tournament: Admin > Teams & Players > Reset all data, then Tournament Setup > Teams > Groups > Battles & Fixtures (set the playing XI) > Live Scoring.
   Tournament Setup now includes **Balls per over** (default 6). It drives over formatting, run rates, economy and NRR; each match remembers the value it started with.
7. Port 3000 busy? Close the old server window, or `set PORT=3001` and run again.
8. Same Wi-Fi: run `ipconfig`, open http://YOUR-IP:3000 on phones. Allow Node.js in Windows Firewall if asked.
9. Own domain: host it on a service that runs Node.js (not Vercel/static hosting), set ADMIN_PASSWORD, keep `data.json` on a persistent disk.

## Deploying (Render or similar)
Start command: `node server.js`. No build step. Environment variables: `ADMIN_PASSWORD` (required), `DATA_FILE` (path on a persistent disk, e.g. `/data/data.json`). The host's `PORT` is picked up automatically.

Playing players per side (Tournament Setup) is a maximum. A match can start with fewer players (2 or more per side); wickets per innings = the smaller side's playing players minus 1.
