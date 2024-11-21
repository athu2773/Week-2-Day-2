## Description  
This repository provides a step-by-step guide to understanding Git basics, including installation, essential commands, and their applications. The project is designed to help beginners practice and master version control while creating simple projects with proper documentation.  

## Features  
- Step-by-step Git installation guide.  
- Practical exercises with Git commands (`git init`, `git add`, `git commit`, etc.).  
- Sample projects with multiple commits to demonstrate version control.  
- A cheatsheet for essential Git commands.  
- Reflection on the importance of version control and documentation.  

## Setup Instructions  

### 1. Install Git  
1. Download the Git installer for your operating system from the [official Git website](https://git-scm.com).  
2. Follow the installation wizard steps:  
   - Accept the license agreement.  
   - Choose installation directory.  
   - Configure editor preferences and other options.  
3. Verify installation by running the following command in your terminal:  
   ```bash  
   git --version  
   ```  

### 2. Configure Git  
1. Set your username and email for commits:  
   ```bash  
   git config --global user.name "Your Name"  
   git config --global user.email "your.email@example.com"  
   ```  

### 3. Clone the Repository  
To get started, clone this repository to your local machine:  
```bash  
git clone <repository-url>  
cd <repository-folder>  
```  

## Usage  

### Practice Basic Git Commands  
1. Initialize a Git repository:  
   ```bash  
   git init  
   ```  
2. Create a new file and stage changes:  
   ```bash  
   echo "# Git Basics" > README.md  
   git add README.md  
   ```  
3. Commit the changes:  
   ```bash  
   git commit -m "Initial commit"  
   ```  
4. View the status and log:  
   ```bash  
   git status  
   git log  
   ```  

### Example Project  
1. Create a basic script (e.g., `index.js`) to perform simple tasks like:  
   - Printing patterns.  
   - Finding even and odd numbers in an array.  
2. Track changes using Git commands and make multiple commits.  

## Git Commands Cheatsheet  
| Command              | Description                                     | Example                              |  
|----------------------|-------------------------------------------------|--------------------------------------|  
| `git init`           | Initialize a new Git repository.               | `git init`                           |  
| `git add`            | Stage changes for the next commit.             | `git add <file>`                     |  
| `git commit`         | Commit staged changes to the repository.       | `git commit -m "Message"`            |  
| `git status`         | Show the status of your working directory.     | `git status`                         |  
| `git log`            | View commit history.                           | `git log`                            |  
| `git clone`          | Clone a repository to your local machine.      | `git clone <repo-url>`               |  
| `git config`         | Configure user details for commits.            | `git config --global user.name "Me"` | 