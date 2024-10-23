# 📢 Warning
##### **Important Note**

- **Large Attachments**: Backing up large files (e.g., MP4 videos, MP3 audio files, high-resolution photos) from your Bitwarden vault may significantly increase the backup time. Uploading these larger backups to cloud services can also be slower. Local storage and data imports are much faster in comparison.
- **High Volume of Attachments**: A large number of attachments may extend the total backup time. Errors could occur when uploading to services like Dropbox, Google Drive, pCloud, MEGA, Seafile, Nextcloud, Storj, Cloudflare R2, or Filebase. If you encounter an error, retrying the backup usually resolves the issue.
- **Bitwarden Secret Manager Setup**: The program requires configuring the Bitwarden Secret Manager for proper functionality. If you don’t have an account, setting a random variable is necessary to ensure the system works correctly.
- **Compatibility**: This tool is compatible with both self-hosted Bitwarden and Vaultwarden instances.
- **Import Limitations**: The Bitwarden API does not yet support import functionality for Vaultwarden or self-hosted Bitwarden.
- **CalDAV Integration**: The CalDAV calendar feature has been tested with the following providers: [Baikal](https://github.com/sabre-io/Baikal), [Fruux](https://fruux.com), [Memotoo](https://www.memotoo.com), [Posteo](https://posteo.de), and [SOGo](https://www.sogo.nu/).
- **Rotate Secrets Regularly**: For better security, periodically rotate the secrets stored in the Bitwarden Secret Manager.
- **Switching Accounts**: If you change Bitwarden accounts, make sure to run the `bw logout` command before logging into a new account.
- **User Privileges**: This program is typically run using the root user.

<div style={{ display: 'inline-flex', alignItems: 'center', marginBottom: '20px' }}>
  <img src="https://raw.githubusercontent.com/querylab/svg/main/alert1.gif" width="30" style={{ marginRight: '10px' }} />
  <img src="https://raw.githubusercontent.com/querylab/svg/main/cloud1.gif" width="30" style={{ marginRight: '10px' }} />
  <img src="https://raw.githubusercontent.com/querylab/svg/main/process2.gif" width="30" style={{ marginRight: '10px' }} />
  <span style={{ fontSize: '23px', fontWeight: 'bold', color: '#FFFFF' }}>Security Recommendation: Run in a Local Environment</span>
</div>

- **Run Locally for Security**: To enhance security, run this project in a local environment within your personal network. This minimizes the risk of external attacks and ensures that sensitive data and credentials remain protected in a controlled setting.
