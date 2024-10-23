# 📦 Dropbox
<div style={{ display: 'inline-flex', alignItems: 'center' }}>
  <img src="https://raw.githubusercontent.com/querylab/svg/main/dropbox.gif" width="70" style={{ verticalAlign: 'middle', marginRight: '10px' }} /> 
  <span style={{ fontWeight: 'bold', color: '#FFFFF' }}>API Configuration (Optional)</span>
</div>


- By following these steps, your Dropbox Token will remain active and will not expire every 4 hours.


1. Go to https://www.dropbox.com/developers/apps/create 
 -  Create a new project.
 
 <a href="https://raw.githubusercontent.com/querylab/svg/refs/heads/main/dropbox_1.png"><img src="https://raw.githubusercontent.com/querylab/svg/refs/heads/main/dropbox_1.png" title="source: github.com" /></a>

<a href="https://raw.githubusercontent.com/querylab/svg/refs/heads/main/dropbox_2.png"><img src="https://raw.githubusercontent.com/querylab/svg/refs/heads/main/dropbox_2.png" title="source: github.com" /></a>


- Create Permissions

<a href="https://raw.githubusercontent.com/querylab/svg/refs/heads/main/dropbox_3.png"><img src="https://raw.githubusercontent.com/querylab/svg/refs/heads/main/dropbox_3.png" title="source: github.com" /></a>

2. Obtain the Authorization Code

- Open a browser and navigate to the following URL, replacing `<App key>` with your App Key:

``` HTML
https://www.dropbox.com/oauth2/authorize?token_access_type=offline&response_type=code&client_id=<App key>
```

<a href="https://raw.githubusercontent.com/querylab/svg/refs/heads/main/dropbox_4.png"><img src="https://raw.githubusercontent.com/querylab/svg/refs/heads/main/dropbox_4.png" title="source: github.com" /></a>

<a href="https://raw.githubusercontent.com/querylab/svg/refs/heads/main/dropbox_5.png"><img src="https://raw.githubusercontent.com/querylab/svg/refs/heads/main/dropbox_5.png" title="source: github.com" /></a>


<a href="https://raw.githubusercontent.com/querylab/svg/refs/heads/main/dropbox_6.png"><img src="https://raw.githubusercontent.com/querylab/svg/refs/heads/main/dropbox_6.png" title="source: github.com" /></a>

3. Obtain the Authorization Token

Run the following command in the terminal, making sure to replace `<received code>`, `<App key>`, and `<App secret>` with the correct values:

``` BASH
curl https://api.dropbox.com/oauth2/token \
-d code=<received code> \
-d grant_type=authorization_code \
-u <App key>:<App secret>

#Example
curl https://api.dropbox.com/oauth2/token \
-d code=G4sTbrY9DMoAAAAAAAAAQTeLtVHACmv1tVaWYLYCGvA \
-d grant_type=authorization_code \
-u 7on1ofs1236ki:b6bl6jg123lm8iz
```

- When you run the command, you will receive a response like this:

``` BASH
 "access_token": "sl.B3hxfHXr123459z8_TS230pcLcLNbJ1234Hj-ccZmG5XCcQrN-Wb6ESMs0PSzwOtROxLb6XRaj6mUzHU1g8G60canTvjkWBBaNzVY1234hH2FEOhlwseaNcnQ9RyPn6vh",
  "token_type": "bearer",
  "expires_in": 14400,
  "refresh_token": "WtG6MI5YdccAAAAAAAAAAcAvu1234nB6skR3BmpgH3x5Reb-ae7FsLuNQ5-mZkk",
  "scope": "account_info.read",
  "uid": "143786425",
  "account_id": "dbid:BBAnJyzGYtm3-WP9a2HkL1TL8FVgPl5s-VM"
```

- Now use this new `refresh_token`, `access_token` along with the previous `<App key>`, and `<App secret>` to fill in the secret variables needed in Bitwarden Secret Manager:

``` BASH
#Example
      DROPBOX_ACCESS_TOKEN=sl.B3hxfHXrU12345z8_TS230pcLcLNbJj019MyrVHj-ccZmG5XCcQrN-Wb6ESMs0PSzwOtROxLb612345g8G60canTvjkWBBaNzVYP15cx5h12345NcnQ9RyPn6vh
      DROPBOX_REFRESH_TOKEN=WtG6MI5Yd1234AAAAAAcAvuFd9usnB6skR3BmpgH3x5Reb-ae7FsLuNQ5-mZkk
      DROPBOX_APP_KEY=1on14fs123456ki
      DROPBOX_APP_SECRET=b1bl12345m8iz

```