# 🗄️ Vaultwarden
#### 🔧 How to set up Lazywarden to Backup with Vaultwarden

##### To Backup Vaultwarden using Lazywarden, follow these steps:

- 🛡️ **Bitwarden Secret Manager:**
        Vaultwarden does not have its own Secret Manager, so you must have at least one free official Bitwarden account.
        This account will be used to manage the secrets needed to backup Vaultwarden.

- ⚙️ **Bitwarden Secret Manager configuration:**
        Set up the Secret Manager on your free Bitwarden account. This will act as a ‘container’ that will store the secrets needed to backup Vaultwarden.
        The secrets will only be used from your Bitwarden account.

- 📄 **Required variables:**
        Make sure to set the following variables in your .env file:
            - 🌐 BW_URL: The URL of your Vaultwarden account.
            - 👤 BW_USERNAME: The username of your Vaultwarden account.
            - 🔑 BW_PASSWORD: The password for your Vaultwarden account.
            - 🕑 BW_TOTP_SECRET: The secret code for TOTP authentication, if you are using it in Vaultwarden.