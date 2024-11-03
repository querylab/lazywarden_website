---
sidebar_position: 3
---

# 🛡️ Bitwarden Secret Manager

<div style={{ display: 'inline-flex', alignItems: 'center' }}>
  <img src="https://raw.githubusercontent.com/querylab/svg/main/toolbox1.gif" width="20" style={{ verticalAlign: 'middle', marginRight: '10px' }} /> 
  <span style={{ fontWeight: 'bold', color: '#FFFFF' }}>To set up secrets management in Bitwarden, follow these steps: </span>
</div>


1) Create a new organisation in your Bitwarden account. This organisation will act as a container to store and organise your secrets, similar to how you manage passwords.

<a href="https://raw.githubusercontent.com/querylab/svg/refs/heads/main/secret_1.png"><img src="https://raw.githubusercontent.com/querylab/svg/refs/heads/main/secret_1.png" title="source: github.com" /></a>

2) Subscribe to the Secret Manager service. This service allows you to securely store an unlimited number of secrets, such as API keys, passwords and certificates. It offers end-to-end encryption, centralised management and access control to protect your sensitive data.

3) After creating your Organization, go to Secret Manager in the tab at the top right.

<a href="https://raw.githubusercontent.com/querylab/svg/refs/heads/main/secret_2.png"><img src="https://raw.githubusercontent.com/querylab/svg/refs/heads/main/secret_2.png" title="source: github.com" /></a>

4) Then create your lazywarden Project.

<a href="https://raw.githubusercontent.com/querylab/svg/refs/heads/main/secret_3.png"><img src="https://raw.githubusercontent.com/querylab/svg/refs/heads/main/secret_3.png" title="source: github.com" /></a>

5) After setting up your Lazywarden project, you need to create the secrets that will be used in the project.


<a href="https://raw.githubusercontent.com/querylab/svg/refs/heads/main/secret_4.png"><img src="https://raw.githubusercontent.com/querylab/svg/refs/heads/main/secret_4.png" title="source: github.com" /></a>

6) With these secrets added, we can now modify our **.env** file to contain our secrets.  Remember to only add the Services you use, you do not need to add all the Services you use. 

``` PYTHON
#---------------------------------------------------------------------------------------
# These are the 6 variables that are mandatory requirements for Bitwarden Secret Manager
BW_URL=00000000-0000-0000-0000-000000000000
BW_USERNAME=00000000-0000-0000-0000-000000000000
BW_PASSWORD=00000000-0000-0000-0000-000000000000
ENCRYPTION_PASSWORD=00000000-0000-0000-0000-000000000000
ZIP_PASSWORD=00000000-0000-0000-0000-000000000000
ZIP_ATTACHMENT_PASSWORD=00000000-0000-0000-0000-000000000000
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

# CalDAV Credentials
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

```

#### If you are going to use Vikunja's service also make sure that the URL to end with the correct structure. 

```YAML
Example: Vikunja http://192.175.88.227:3456/api/v1
```


<a href="https://raw.githubusercontent.com/querylab/svg/refs/heads/main/secret_5.png"><img src="https://raw.githubusercontent.com/querylab/svg/refs/heads/main/secret_5.png" title="source: github.com" /></a>

<a href="https://raw.githubusercontent.com/querylab/svg/refs/heads/main/secret_6.png"><img src="https://raw.githubusercontent.com/querylab/svg/refs/heads/main/secret_6.png" title="source: github.com" /></a>

- If you have TOTP enabled on your Bitwarden account, put the seeds of your TOTP in the **BW_TOTP_SECRET** variable.

<a href="https://raw.githubusercontent.com/querylab/svg/refs/heads/main/secret_7.png"><img src="https://raw.githubusercontent.com/querylab/svg/refs/heads/main/secret_7.png" title="source: github.com" /></a>


#### 🔐 TOTP Activation
If you do not have **TOTP enabled** in your Bitwarden account, simply leave the variable in the **.env** file blank.

#### 📋 Additional Variables
Continue filling in the other variables one by one. For any services for which you do not have an account, simply **leave the variable blank** in the **.env** file. 


- After creating all your secrets, create a Machine Account that will hold our ACCESS_TOKEN.


<a href="https://raw.githubusercontent.com/querylab/svg/refs/heads/main/secret_11.png"><img src="https://raw.githubusercontent.com/querylab/svg/refs/heads/main/secret_11.png" title="source: github.com" /></a>

<a href="https://raw.githubusercontent.com/querylab/svg/refs/heads/main/secret_12.png"><img src="https://raw.githubusercontent.com/querylab/svg/refs/heads/main/secret_12.png" title="source: github.com" /></a>

- Add and save the lazywarden project to your Machine Account.

<a href="https://raw.githubusercontent.com/querylab/svg/refs/heads/main/secret_13.png"><img src="https://raw.githubusercontent.com/querylab/svg/refs/heads/main/secret_13.png" title="source: github.com" /></a>



- Finally, go to Access Tokens and create one to use in our lazywarden project.

<a href="https://raw.githubusercontent.com/querylab/svg/refs/heads/main/secret_14.png"><img src="https://raw.githubusercontent.com/querylab/svg/refs/heads/main/secret_14.png" title="source: github.com" /></a>


- To find the **ORGANIZATION_ID** variable for our **.env** you can get it by visiting the URL when you are in your organization or by running the following command:

``` BASH
bw list organizations
```

``` BASH
ORGANIZATION_ID=212A4880-22f9-1114-b00e-12345234278ac

ACCESS_TOKEN=0.345f5e9c-8730-4a4c-917b-b100003312356.Oj4XzcyGFF222212345kwzV:e5mC4d1111111128/3EQ==
```

<div style={{ display: 'inline-flex', alignItems: 'center', marginBottom: '20px' }}>
  <img src="https://raw.githubusercontent.com/querylab/svg/main/alert1.gif" width="30" style={{ marginRight: '10px' }} />
  <img src="https://raw.githubusercontent.com/querylab/svg/main/pad2.gif" width="30" style={{ marginRight: '10px' }} />
  <img src="https://raw.githubusercontent.com/querylab/svg/main/key2.gif" width="30" style={{ marginRight: '10px' }} />
  <span style={{ fontSize: '23px', fontWeight: 'bold', color: '#FFFFF' }}>Attention: Security Critical Variables</span>
</div>

``` BASH
### These variables contain the passwords for encrypting the backup.
### Change the passwords according to your preferences.

#Contains the encryption password for the JSON file
ENCRYPTION_PASSWORD=p3mTd5SqDqkXQqE!Tpwv27Ecx  


#Contains the encryption password for the first ZIP file
ZIP_PASSWORD=ZCGvq@gwS7QhV@&R3k*x*xN72anybyFHW2RWiBTr  


# Contains the encryption password for the attached ZIP file.
# Where our files will be stored if Bitwarden Premium is enabled.
# If Bitwarden Premium is not enabled, the attachment folder will be empty.
ZIP_ATTACHMENT_PASSWORD=HBLXL9!grer@Uay2edkwTXeZx!E9DxKphNxsNak1knb3dcfx2o   

# Contains the encryption password for KeePass Database (Kdbx).
KEEPASS_PASSWORD=e2zkwTXe21!E9DxKp


```
