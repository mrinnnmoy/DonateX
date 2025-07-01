# DonateX

A transparent Web3 donation platform empowering causes and communities with seamless crypto fundraising.

![DonateX-Home](./client/public/donateX-website-design/1.png)


## ⚠️ Problem to Solve.

Donating online often lacks transparency. Donors rarely know where their money goes & nonprofits struggle to manage contributions in a visible, trustworthy way.

Traditional platforms don’t support crypto well and existing Web3 tools can be too complex or technical for everyday users.

There’s a need for a simple, secure and transparent platform that makes crypto donations easy—for both donors and campaign creators.


## ✅ Possible Solution.

**DonateX** is a simple, transparent Web3 donation platform that makes it easy for anyone to support causes using crypto.

Here's how it works:

1. **Campaign Creation**: Anyone can create a fundraising campaign with a title, description and image — stored securely on IPFS.

2. **Crypto Donations**: Supporters can donate in crypto directly to the campaign, using MetaMask or WalletConnect.

3. **On-Chain Transparency**: All donations are recorded on the blockchain, making fund flow visible and verifiable.

4. **Live Donation Tracking**: Each campaign shows real-time totals, so donors can see progress as it happens.


## ⚙️ Architecture.

![Working Architecture](./client/public/donateX-architecture/donateX-process.png)
[Excalidaw File...](https://excalidraw.com/#json=mT_EDiuyR2xpqcj42jurn,VeSfDcnxrnRsewaWReJqqw)

## 🛠 Tools, Languages & Frameworks used.

- **React.js :** For building the frontend user interface.
- **Ethers.js :** To interact with the Ethereum (or Polygon) blockchain.
- **Node.js :** Backend runtime environment for server-side JavaScript.
- **Express.js :** Web framework for building RESTful APIs on Node.js.
- **Solidity :** For writing smart contracts that handle donations and campaign logic.
- **Hardhat :** For compiling, testing and deploying smart contracts.
- **RainbowKit :** For connecting user wallets to the dApp.
- **IPFS :** To store campaign metadata like images and descriptions in a decentralized way.
- **The Graph :** Indexing and querying protocol for fast blockchain data retrieval.


## 👨‍💻 Project building steps.

1. Build the UI and set up routes.
2. Setup wallet integration.
3. Write and deploy the smart contract on the blockchain.
4. Integrate IPFS for storing campaign details.
5. Implement The Graph for querying campaign and donation data.
6. Connect frontend to the blockchain using Ethers.js to enable campaign creation and donations.
7. Display real-time campaign data and total donations in the frontend.
8. Test, debug and deploy the full-stack application.


## 📂 Folder Structure.

* **client:** Contains the frontend codebase.
* **server:** Contains the Solidity smart contracts.

## 🧑‍💻 Contributions to this repo are WELCOME.👋

* 🎨 Any improvements to the design and UI are welcome.
* 🔨 Try to break the website by testing it to find any bugs. If you find any, check if there is an issue already open for it, if there is none, then report it.


## 🔃 Steps to be followed in order to make valid contributions to this repo.

**1.** Fork the [DonateX](https://github.com/mrinnnmoy/DonateX) repo by clicking on the fork button on the top of the page. This will create a copy of this repository in your account.

**2.** Clone the forked repository

        git clone "https://github.com/<your-github-username>/DonateX"

* Download and install Node JS v16.16.0
* Download and install Git.
* Go to the terminal of your code editor and run "npm install" to download packages.
* Run "npm run dev" to start a local server.

**3.** Make necessary changes and commit those changes. <br />
Remember never push anything to the Main branch. <br />

Always change your branch to "develop" using:

    git checkout develop

Again check your current branch using:

    git branch

It should point \*develop

Now add your changes using:

    git add files-you-edited

If there are multiple files you can use:

    git add .

Now create a commit message using:

    git commit -m "<commit-message-goes-here>"

**4.** Push changes to GitHub

    git push origin develop

**5.** Create a Pull Request 👋<br>

Now you go to your repository on GitHub, you’ll see a `Compare & pull request` button. Click on that button and now write a summary of what changes you have done.( Attach images if required). I will review your code and merge it if it passes all the tests.❤️