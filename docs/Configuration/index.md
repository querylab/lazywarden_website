# ⚙️ Configuration


<div style={{ display: 'inline-flex', alignItems: 'center' }}>
  <img src="https://raw.githubusercontent.com/querylab/svg/main/tree2.gif" width="50" style={{ marginRight: '0px' }} />
  <strong style={{ color: '#FFFFF', fontSize: '1.2em' }}>Tree Structure</strong>
</div>

``` PYTHON
lazywarden/
├── app/                           # This directory appears to contain the main application code
│   ├── backup.py                  # Backup functions
│   ├── bitwarden_client.py        # Client to interact with Bitwarden
│   ├── config.py                  # General application configurations
│   ├── imports.py                 # Handles common imports
│   ├── main.py                    # Main entry point of the application
│   ├── notifications.py           # Handles notifications
│   ├── secrets_manager.py         # Manages secrets
│   ├── import_to_bitwarden.py     # Import your bitwarden vault
│   ├── import_to_keepass.py       # Create kdbx database 
│   ├── schedule_backup.py         # For create Schedule Backup
├── config/                        # Directory for configuration files
│   ├── bitwarden-drive-backup-google.json # Configuration for Google Drive
├── scripts/                       # Directory for installation and setup scripts
│   ├── bitwarden-cli-install.py   # Script to install the Bitwarden CLI
│   ├── docker-debian.sh           # Setup script for Debian with Docker
│   ├── docker-ubuntu.sh           # Setup script for Ubuntu with Docker
│   ├── setup-debian-env.sh        # Environment setup for Debian
│   ├── setup-ubuntu-env.sh        # Environment setup for Ubuntu
│   ├── alldecrypt-zip.py          # Decrypt all zip files 
│   ├── json-only-decrypt.py       # Decrypt only json files (optional)
├── backup-drive/
│   ├── (This is where the generated backups will be stored local)
├── .env                           # File for environment variables
├── Dockerfile                     # Docker configuration file to create an application image
├── docker-compose.yml             # Docker Compose Configuration
├── entrypoint.sh                  # Entrypoint script for Docker
└── requirements.txt               # File that lists the project Python dependencies
```
