# Aesthetical-Engineers-Spring25
Prerequisites

Windows 10/11

WSL (Ubuntu) installed. (wsl --install)
Follow Microsoft’s guide to install WSL.

VS Code installed.
Download VS Code.

Node.js installed in WSL.
Run in Ubuntu/WSL:

sudo apt update && sudo apt install nodejs npm

Setup Instructions
1. Clone the Repository
Open Ubuntu/WSL ('wsl" command can be used) and run:

git clone https://github.com/georgeness/Aesthetical-Engineers-Spring2025.git

2. Navigate to the Project Directory
The repository might clone into a nested folder. Move into the correct directory:

cd Aesthetical-Engineers-Spring2025/Aesthetical-Engineers-Spring2025-master


3. Open the Project in VS Code
From the Ubuntu/WSL terminal, open VS Code:

code .

4. Install Dependencies
In the VS Code terminal (Terminal > New Terminal), run:

npm install

5. Start the Development Server
Run the Next.js development script:

npm run dev


Option 2
 
Step 1: Install Ubuntu and WSL 

Step 2: Open Ubuntu

Step 3 (Optional): Create a folder to place the project into by using: 
```
mkdir "directory name"
```
Then navigate to the directory you want to place the project in by using:
```
cd "directory name"
```

Step 4: Clone repository by using: 
```
git clone https://github.com/georgeness/Aesthetical-Engineers-Spring2025.git
```

Step 5: Move into the cloned repository by using: 
```
cd Aesthetical-Engineers-Spring2025
```

Step 6: Open code by using: 
```
code .
```

Step 7: Visual Studio Code should open. In the top banner, navigate to Terminal>New Terminal

Step 8: In this new terminal, install the required packages needed to run the project by using:
```
npm install
```

Step 9: Finally, to launch the website as a localhost, use this line in the terminal open in Visual Studio Code and click the link it provides: 
```
npm run dev
```

