# Data Sage

Data Sage is an AI-powered desktop application for seamless data analysis. It combines a modern Electron/React frontend with a Python backend, integrating advanced machine learning and LLM (Large Language Model) capabilities for powerful, user-friendly data exploration.

## Features

- **One-click Desktop App**: No technical setup required—just install and run.
- **Automatic Backend Startup**: Python backend launches automatically with the app.
- **AI Chat Assistant**: Ask questions about your data using natural language (LLM-powered, with RAG).
- **File Upload & Data Import**: Easily upload Excel/CSV files for instant analysis.
- **Data Cleaning**: Automated tools to clean and preprocess your data.
- **Data Summarization**: Get quick summaries and insights from your datasets.
- **Custom & Recommended Charts**: Visualize your data with a variety of chart types.
- **Anomaly Detection**: Identify outliers and unusual patterns.
- **ML Model Integration**: Built-in machine learning for predictions and analysis.
- **Ollama LLM Integration**: Uses local LLMs (like llama3.2:3b) for privacy and speed.
- **Automatic Dependency Installation**: Installs Python packages and pulls LLM models as needed.
- **Cross-platform (Windows)**: Distributed as a single installer (`.exe`).

## Pre-Requisites

- **Windows 10/11** (64-bit)
- **Ollama** (the app will prompt to install if missing)
- **Internet connection** (required on first run to download LLM model and dependencies)
- **Python and Node.js setup required** 

## How to Install & Use

1. Download and run the `Data Sage Setup 0.1.0.exe` installer.
2. Follow the on-screen instructions.
3. On first launch, the app will:
	- Prompt to install Ollama if not present
	- Download the required LLM model (llama3.2:3b).If encoutering problem install using cmd command `ollama pull llama3.2:3b`
	- Install Python dependencies
	- Start backend and open the app
4. Upload your data and start analyzing with AI!

## Disclaimer

- Data Sage is provided as-is, without warranty of any kind. Use at your own risk.
- The app may download large AI models on first use (requires internet and disk space).
- All data processing is local; no data is sent to external servers.
- This is a personal project and not affiliated with any company or organization.

## License

This project is licensed under the **Apache License 2.0**. See the [LICENSE](LICENSE) file for details.
