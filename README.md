# Notes-Locker

🔐 Notes Locker – Ethereum DApp

Notes Locker is a simple decentralized application (DApp) that lets users securely store personal notes on the Ethereum blockchain.  
The smart contract is deployed using **Remix**, and the front-end is built with HTML, CSS, and JavaScript, interacting with MetaMask through Web3.

This project is designed for beginners learning how to build Ethereum DApps.


🚀 Features

- 🦊 Connect to MetaMask
- 🔒 Save notes directly on the blockchain
- 📥 Retrieve your saved notes
- 🎨 Clean and responsive UI
- 🌐 100% frontend-based (no backend required)
- ⚡ Easy to deploy and test


🧱 Tech Stack

| Component     | Technology |
|---------------|------------|
| Blockchain    | Solidity (Remix) |
| UI            | HTML, CSS, JavaScript |
| Wallet        | MetaMask |
| Interaction   | Web3.js |

---

# 📌 1. Smart Contract Deployment (Remix Workflow)

This DApp is deployed entirely using **Remix** with MetaMask.  
Follow these exact steps to redeploy your own contract:

### ✔ Step 1 — Open Remix  
https://remix.ethereum.org/

### ✔ Step 2 — Create the Contract  
Create a new file: `NotesLocker.sol`

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract NotesLocker {
    mapping(address => string[]) private notes;

    function saveNote(string memory _note) public {
        notes[msg.sender].push(_note);
    }

    function getNotes() public view returns (string[] memory) {
        return notes[msg.sender];
    }
}

✔ Step 3 — Compile

Click Solidity Compiler → Compile NotesLocker.sol

✔ Step 4 — Deploy the Contract

Go to the Deploy & Run tab

Set Environment → Injected Provider (MetaMask)

Click Deploy

✔ Step 5 — Copy Required Values

After deployment:

Copy the Contract Address

Go to Compiler → ABI → Copy the ABI


 change this    ----->  const contractAddress = "YOUR_DEPLOYED_CONTRACT_ADDRESS";
const contractABI = [ ... ];



2. Running the Frontend (Live Server)

This DApp uses only static files, so Live Server is perfect.

✔ Step 1 — Install Live Server (VS Code Extension)
✔ Step 2 — Open your project folder

Make sure it contains:

index.html
style.css
app.js
contract.js

✔ Step 3 — Run the DApp

Right-click index.html → Open with Live Server

Your DApp will open automatically at:

http://127.0.0.1:5500/index.html

🧪 3. Testing the DApp

Open the DApp in the browser

Click Connect MetaMask

Enter a note in the text area

Click Save Note

MetaMask pops up → Confirm the transaction

Your saved notes appear under Your Notes

