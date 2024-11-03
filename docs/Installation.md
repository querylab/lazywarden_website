---
sidebar_position: 2
---

# 🛠️ Installation

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="local" label="Ubuntu/Debian" default>

Install the [lazywarden](https://github.com/querylab/lazywarden)

- Clone the repository

``` BASH
    git clone https://github.com/querylab/lazywarden.git
    cd lazywarden
```

- Run the script to install all the dependencies and system requirements in this case I am using **ubuntu** as my operating system.
 
``` BASH
cd lazywarden/scripts
chmod +x setup-ubuntu-env.sh
./setup-ubuntu-env.sh
```


- First, ensure you are in the root directory of the project `lazywarden/`:

``` BASH
cd .. 
source venv/bin/activate
```
- Now Install Bitwarden CLI using the `bitwarden-cli-install.py` script, which will install all CLI dependencies:

``` PYTHON
python3 scripts/bitwarden-cli-install.py
```

- Change the system timezone using the following command. Replace `Region/City` with the desired timezone (e.g., `America/New_York`):

``` BASH
timedatectl set-timezone America/New_York
```

- Run the Lazywarden program. Navigate to the `app/` folder and execute `main.py`:

``` PYTHON
cd app
python3 main.py
```

</TabItem>

<TabItem value="docker" label="Try it with Docker Compose">

<div style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
  <img src="https://raw.githubusercontent.com/querylab/svg/main/whale1.gif" width="40" style={{ verticalAlign: 'middle' }} /> 
  <a href="https://hub.docker.com/r/querylab/lazywarden" style={{ color: '#068FFF', textDecoration: 'none', fontWeight: 'bold' }}>Official Docker Image</a>
</div>



The Docker container will run the `main.py` script every 24 hours to back up Bitwarden and upload it to the configured cloud services. Notifications will be sent to the specified services in case of success or failure. You can modify the backup frequency according to your needs, such as monthly, daily, or hourly.

``` YAML
services:
  lazywarden:
    container_name: lazywarden
    hostname: lazywarden
    image: querylab/lazywarden:latest
    env_file:
      - .env
    environment:
      UNLOCK_VAULT: "true"
    volumes:
      - /root/lazywarden/config:/root/lazywarden/config
      - /root/lazywarden/backup-drive:/root/lazywarden/backup-drive/
      - /root/lazywarden/.env:/app/.env 
    restart: unless-stopped

```

- Required Environment Variable 

``` BASH
#---------------------------------------------------------------------------------------
# These are the 6 variables that are mandatory requirements for Bitwarden Secret Manager
BW_URL=f22bba66-e55d-1111-9a93-abf0dfad069e
BW_USERNAME=5eb0f2bb-1111-4e42-94f8-9333fda803cf
BW_PASSWORD=ba4dc990-1111-4d18-ae6b-0b899d513759
ENCRYPTION_PASSWORD=103c803c-1111-40d4-8578-8b3134c6e93e
ZIP_PASSWORD=2f9fb3a2-96a3-1111-990d-5d6399153e11
ZIP_ATTACHMENT_PASSWORD=b2abc553-1111-4b49-9172-1a94f9072715

#---------------------------------------------------------------------------------------

# TOTP Seed for Aegis,Authy,Ente,GoogleAuth (Optional)
BW_TOTP_SECRET=

# pCloud Credentials (Optional)
PCLOUD_USERNAME=
PCLOUD_PASSWORD=

# Mega Credentials (Optional)
MEGA_EMAIL=
MEGA_PASSWORD=

# Dropbox Credentials (Optional)
DROPBOX_ACCESS_TOKEN=
DROPBOX_REFRESH_TOKEN=
DROPBOX_APP_KEY=
DROPBOX_APP_SECRET=

# Todoist Credentials (Optional)
TODOIST_TOKEN=

# CalDAV Credentials (Optional)
CALDAV_URL=
CALDAV_USERNAME=
CALDAV_PASSWORD=

# Nextcloud Credentials (Optional)
NEXTCLOUD_URL=
NEXTCLOUD_USERNAME=
NEXTCLOUD_PASSWORD=

# Seafile Credentials (Optional)
SEAFILE_SERVER_URL=
SEAFILE_USERNAME=
SEAFILE_PASSWORD=

# Filebase Credentials (Optional)
FILEBASE_ACCESS_KEY=
FILEBASE_SECRET_KEY=

# KeePass Password (Optional)
KEEPASS_PASSWORD=

# Storj Credentials (Optional)
STORJ_ACCESS_KEY=
STORJ_SECRET_KEY=
STORJ_ENDPOINT=

# R2 Credentials (Optional)
R2_ACCESS_KEY_ID=
R2_SECRET_ACCESS_KEY=
R2_ENDPOINT_URL=

# Vikunja Credentials (Optional)
VIKUNJA_API_TOKEN=
VIKUNJA_URL=

# Backblaze B2 Credentials (Optional)
B2_APP_KEY_ID=
B2_APP_KEY=

# Google Drive Settings
GOOGLE_SERVICE_ACCOUNT_FILE=/root/lazywarden/config/bitwarden-drive-backup-google.json
GOOGLE_FOLDER_ID=

# Backup Settings
BACKUP_DIR=/root/lazywarden/backup-drive/
CRON_SCHEDULE="0 0 23 * *"
TIMEZONE=America/New_York
TIMESTAMP=2024_10_31_13_03_29

  
# API URLs for Bitwarden
API_URL=https://vault.bitwarden.com/api
IDENTITY_URL=https://vault.bitwarden.com/identity

# Organization ID
ORGANIZATION_ID=

# Access Token for Bitwarden Authentication
ACCESS_TOKEN=

# Notifications and Alerts (Optional)
TELEGRAM_TOKEN=
TELEGRAM_CHAT_ID=
DISCORD_WEBHOOK_URL=
SLACK_WEBHOOK_URL=
NTFY_URL=

# SMTP Configuration for Email Notifications (Optional)
SMTP_SERVER=mail.smtp2go.com
SMTP_PORT=8025
SMTP_USERNAME=
SMTP_PASSWORD=
EMAIL_RECIPIENT=
SENDER_EMAIL=
```


</TabItem>

</Tabs>

:::tip

- If you encounter an error when running `main.py`, it may be related to missing or outdated libraries. To fix this, I recommend running the following command to install all the necessary dependencies:

``` PYTHON
 pip install -r requirements.txt
```

:::