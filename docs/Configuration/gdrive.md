# 📁 Google Drive
<div style={{ display: 'inline-flex', alignItems: 'center' }}>
  <img src="https://raw.githubusercontent.com/querylab/svg/main/drive3.gif" width="70" style={{ verticalAlign: 'middle', marginRight: '10px' }} /> 
  <span style={{ fontWeight: 'bold', color: '#FFFFF' }}>API Configuration (Optional)</span>
</div>

1. Go to this web page [https://console.developers.google.com/iam-admin/serviceaccounts](https://console.developers.google.com/iam-admin/serviceaccounts)
2. Create a New Project.

<a href="https://raw.githubusercontent.com/querylab/svg/refs/heads/main/gdrive_1.png"><img src="https://raw.githubusercontent.com/querylab/svg/refs/heads/main/gdrive_1.png" title="source: github.com" /></a>


3.  Then go to "Service Accounts" and create a new service.

<a href="https://raw.githubusercontent.com/querylab/svg/refs/heads/main/gdrive_2.png"><img src="https://raw.githubusercontent.com/querylab/svg/refs/heads/main/gdrive_2.png" title="source: github.com" /></a>

<a href="https://raw.githubusercontent.com/querylab/svg/refs/heads/main/gdrive_3.png"><img src="https://raw.githubusercontent.com/querylab/svg/refs/heads/main/gdrive_3.png" title="source: github.com" /></a>


4.  Select the role "Actions Admin".

<a href="https://raw.githubusercontent.com/querylab/svg/refs/heads/main/gdrive_4.png"><img src="https://raw.githubusercontent.com/querylab/svg/refs/heads/main/gdrive_4.png" title="source: github.com" /></a>


5.  Download the key in JSON format. This key will be used in our project to upload the Bitwarden backup to Google Drive. Once you obtain the JSON file, store it in the **/config** folder of the project. Name the JSON file **bitwarden-drive-backup-google.json**.

``` BASH
# Place the Google credentials file in the specified path /config

GOOGLE_SERVICE_ACCOUNT_FILE=/home/lazywarden/config/bitwarden-drive-backup-google.json

```
<a href="https://raw.githubusercontent.com/querylab/svg/refs/heads/main/gdrive_5.png"><img src="https://raw.githubusercontent.com/querylab/svg/refs/heads/main/gdrive_5.png" title="source: github.com" /></a>


<a href="https://raw.githubusercontent.com/querylab/svg/refs/heads/main/gdrive_6.png"><img src="https://raw.githubusercontent.com/querylab/svg/refs/heads/main/gdrive_6.png" title="source: github.com" /></a>



6. Go to the following link and enable the Google Drive API:[https://console.cloud.google.com/apis/library](https://console.cloud.google.com/apis/library)

<a href="https://raw.githubusercontent.com/querylab/svg/refs/heads/main/gdrive_7.png"><img src="https://raw.githubusercontent.com/querylab/svg/refs/heads/main/gdrive_7.png" title="source: github.com" /></a>

7. Now that you have enabled the API, go to your Google Drive and create a folder named "Bitwarden-Backup".

<a href="https://raw.githubusercontent.com/querylab/svg/refs/heads/main/gdrive_8.png"><img src="https://raw.githubusercontent.com/querylab/svg/refs/heads/main/gdrive_8.png" title="source: github.com" /></a>

8. Share the "Bitwarden-Backup" folder by clicking on "Share" and share it with the email address created in the Service Account when you set up the project.

<a href="https://raw.githubusercontent.com/querylab/svg/refs/heads/main/gdrive_9.png"><img src="https://raw.githubusercontent.com/querylab/svg/refs/heads/main/gdrive_9.png" title="source: github.com" /></a>

<a href="https://raw.githubusercontent.com/querylab/svg/refs/heads/main/gdrive_10.png"><img src="https://raw.githubusercontent.com/querylab/svg/refs/heads/main/gdrive_10.png" title="source: github.com" /></a>

<a href="https://raw.githubusercontent.com/querylab/svg/refs/heads/main/gdrive_11.png"><img src="https://raw.githubusercontent.com/querylab/svg/refs/heads/main/gdrive_11.png" title="source: github.com" /></a>



9. After sharing the folder, you need to get the ID of this folder to store it in your **.env** file. To find the ID of the “Bitwarden-Backup” folder, open the folder and look at the URL in your browser.

``` BASH
GOOGLE_FOLDER_ID=1qtV4vfIjmXyhDdzIzJ6RiCc-b0M22vsF
```
<a href="https://raw.githubusercontent.com/querylab/svg/refs/heads/main/gdrive_12.png"><img src="https://raw.githubusercontent.com/querylab/svg/refs/heads/main/gdrive_12.png" title="source: github.com" /></a>