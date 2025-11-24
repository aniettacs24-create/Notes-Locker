
let web3;
let contract;

const contractAddress = "0x05C8c6ce1E88e011AE33FDC1E1FC8389463Fe795";
const contractABI = [
    {
        "inputs":[{"internalType":"string","name":"encryptedText","type":"string"}],
        "name":"saveNote",
        "outputs":[],
        "stateMutability":"nonpayable",
        "type":"function"
    },
    {
        "inputs":[],
        "name":"getMyNotes",
        "outputs":[{"components":[{"internalType":"string","name":"encryptedText","type":"string"}],"internalType":"struct NotesLocker.Note[]","type":"tuple[]"}],
        "stateMutability":"view",
        "type":"function"
    }
];

document.getElementById("connectBtn").onclick = async () => {
    if (window.ethereum) {
        web3 = new Web3(window.ethereum);
        await window.ethereum.request({ method: "eth_requestAccounts" });

        contract = new web3.eth.Contract(contractABI, contractAddress);

        document.getElementById("appSection").style.display = "block";
        alert("Connected to MetaMask!");
        loadNotes();
    } else {
        alert("Please install MetaMask!");
    }
};

document.getElementById("saveBtn").onclick = async () => {
    const text = document.getElementById("noteInput").value;

    const accounts = await web3.eth.getAccounts();

    await contract.methods.saveNote(text).send({ from: accounts[0] });

    alert("Note saved!");

    document.getElementById("noteInput").value = "";
    loadNotes();
};

async function loadNotes() {
    const accounts = await web3.eth.getAccounts();
    const notes = await contract.methods.getMyNotes().call({ from: accounts[0] });

    const container = document.getElementById("notesList");
    container.innerHTML = "";

    notes.forEach(n => {
        const card = document.createElement("div");
        card.className = "noteCard";
        card.innerText = n.encryptedText;
        container.appendChild(card);
    });
}