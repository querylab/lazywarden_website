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
# Bitwarden Secrets

BW_URL=80607bef-1153-4eb6-1111-b1a0013ebdd1
BW_USERNAME=c6a5fc4d-6d36-1111-820a-a1dae99e2f43
BW_PASSWORD=0de9c3be-253d-1111-be10-de0607329ffa
BW_TOTP_SECRET=01726d37-0df7-1111-a78d-96fdc8efd59b
ENCRYPTION_PASSWORD=588b0643-1111-4a78-ba3e-9467ad9c81a7
ZIP_PASSWORD=3bcadf27-446d-47f0-1111-b1469fa58546
ZIP_ATTACHMENT_PASSWORD=89d458e7-9ac4-1111-9f23-95cb4b8cff86

# pCloud Credentials
PCLOUD_USERNAME=8d5f981b-705a-1111-a25d-a2abe925f4e4
PCLOUD_PASSWORD=23351280-0184-1111-99b0-2b6a1bc921ae

# Mega Credentials
MEGA_EMAIL=1dafc95a-63c2-4b66-1111-bd7cd5a2ea5e
MEGA_PASSWORD=51bec27b-7c79-1111-9cef-1be72675a47f

# Dropbox Credentials
DROPBOX_ACCESS_TOKEN=647ff022-1111-47d9-a54f-fef635b23eff
DROPBOX_REFRESH_TOKEN=873e5430-1111-4d62-8bf2-acce1e915a9d
DROPBOX_APP_KEY=81f259ae-d6e4-47b1-1111-6bec568ddc85
DROPBOX_APP_SECRET=0b407a02-ded5-1111-b953-caf8fc79af99

# Todoist Credentials
TODOIST_TOKEN=667321ac-2229-42a1-1111-3c568c9d73e6

# CalDAV Credentials
CALDAV_URL=049c9267-bdb0-4266-1111-b19a00e9b626
CALDAV_USERNAME=6eff84c9-fbeb-1111-ad30-b19a00e9cc09
CALDAV_PASSWORD=492c37fd-46df-1111-abe7-b19a00e9e601

# Nextcloud Credentials
NEXTCLOUD_URL=e375df76-d3b2-1111-83ba-b19a0158fe08
# Example http://192.175.88.112:8400
NEXTCLOUD_USERNAME=a267c8cd-9d13-1111-8729-b19a0159276a
NEXTCLOUD_PASSWORD=7036175d-046b-1111-9797-b19a01594308

# Seafile Credentials
SEAFILE_SERVER_URL=20060dfc-4fa0-1111-8b41-b19b000857e7 
# Example http://192.175.88.212:8200
SEAFILE_USERNAME=9959dabb-ae4c-1111-9fc1-b19b00087d64
SEAFILE_PASSWORD=94e5f170-aedb-1111-b1b9-b19b00088ccd

# Filebase Credentials
FILEBASE_ACCESS_KEY=53ec784f-4b18-1111-9a47-b1a00136efc5
FILEBASE_SECRET_KEY=f99d8d83-57b9-1111-9ace-b1a001370117

# KeePass Password
KEEPASS_PASSWORD=95512b36-32e9-1111-9c15-b1ae0171b2f9

# Storj Credentials
STORJ_ACCESS_KEY=a7d85af3-ad63-1111-b039-b208012c381a
STORJ_SECRET_KEY=1303faf7-b34e-1111-ac43-b208012c4f05
STORJ_ENDPOINT=fb787806-a3f4-1111-8523-b208012c6543

# R2 Credentials
R2_ACCESS_KEY_ID=ffb0d6ed-1111-46ad-8fdf-b2080132c9dd
R2_SECRET_ACCESS_KEY=083b5344-1111-4dd8-909e-b2080132dc52
R2_ENDPOINT_URL=31510979-b5b1-1111-8957-b2080132f436

# Vikunja Credentials
VIKUNJA_API_TOKEN=7e67437c-1489-1111-8fbb-b20801880db2
VIKUNJA_URL=d3b7a73f-ebb9-1111-8dc2-b208018843a6 
#Example for Bitwarden Secret Manager http://192.175.88.227:3456/api/v1

# Google Drive Settings
GOOGLE_SERVICE_ACCOUNT_FILE=/root/lazywarden/config/bitwarden-drive-backup-google.json
GOOGLE_FOLDER_ID=1oWWis81111Tz5qRA3W4YTtO0LjvXFvoA

# Backup Settings
BACKUP_DIR=/root/lazywarden/backup-drive/
CRON_SCHEDULE="0 0 23 * *"
TIMEZONE=America/New_York
TIMESTAMP=2024_10_18_22_47_46

# API URLs for Bitwarden
API_URL=https://vault.bitwarden.com/api
IDENTITY_URL=https://vault.bitwarden.com/identity

# Organization ID
ORGANIZATION_ID=232c1890-1111-40b4-b769-b195012f78af

# Access Token for Bitwarden Authentication
ACCESS_TOKEN=0.34827757-1111-1111-1111-b20a01647f46.WDp3AUjnle1LqlXvs0Ox9xEWzgY8Hp:CKue3vgWTvIQzEmDlBlqGw==

# Notifications and Alerts
TELEGRAM_TOKEN=
TELEGRAM_CHAT_ID=
DISCORD_WEBHOOK_URL=
SLACK_WEBHOOK_URL=

# SMTP Configuration for Email Notifications
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