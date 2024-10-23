# 🐍 Python CronJob
<div style={{ display: 'inline-flex', alignItems: 'center' }}>
  <img src="https://raw.githubusercontent.com/querylab/svg/main/snake1.gif" width="40" style={{ verticalAlign: 'middle', marginRight: '10px' }} /> 
  <span style={{ fontWeight: 'bold', color: '#FFFFF' }}>Configuration (Optional)</span>
</div>


To automatically run the backup script in the background using cron, every 24 hours follow these steps:

1. Open the crontab for editing:

```BASH
crontab -e
```

2. Select an editor if you dont have one configured:

``` BASH

Select an editor.  To change later, run 'select-editor'.
  1. /bin/nano        <---- easiest
  2. /usr/bin/vim.basic
  3. /usr/bin/vim.tiny
  4. /bin/ed
Choose 1-4 [1]: 1

```


3. Add the following line to schedule the `main.py` script to run at midnight every day:


``` BASH 

0 0 23 * * /root/lazywarden/venv/bin/python3 /root/lazywarden/app/main.py >> /var/log/lazywarden-cron.log 2>&1

```


4. Save & Close and reload the file. Verify that the cron job is set up correctly:

``` BASH

service cron reload

crontab -l

```
