# For contributers
Follow this steps to setup project on your pc.

## Installation

1. Clone the git repo and install node modules
```bash 
git clone https://github.com/keplar-404/bloodBound.git
cd ./bloodBound
npm i
```

2. Pick the branch name 
* abusaleh
* golam_raiyan
* hasan_ali
* main
* shammo
* shehub
* shishir_ahmed

3. Change the branch 
```bash
git checkout branch_name_here
```
4. start codding

## Push code
**Note:** Make sure before pushing a commit you are on your branch. 

Check your current branch with mark * symbol
```bash 
git branch
```
1. 
```bash 
git add .
git commit -m "your commit message here"
git push origin -u your_branch_name_here
```
2. After that a link will appear on your console. Click on it. It will open a pull req link. Create pull req from browser GUI.




## API Reference

#### Test api

```
GET https://blood-bound.vercel.app
```
### User api route

| **Opetation**  | **Api** | **Type**     | **Data (type)**                |
| :-------- | :-------- | :------- | :------------------------- |
| `Create` | `https://blood-bound.vercel.app/usercreate` |`POST` | username (string), email (string), phone (number) |
| `Update` | `https://blood-bound.vercel.app/userupdate`|`PUT`|username (string), email (string), phone (number), id (string)|
| `Blood req create` | `https://blood-bound.vercel.app/bloodrequest`|`POST`|PatientName (string), bloodGroup (string), time (date), location (string), phone (number), bloodBag (number)|
| `Blood req get` | `https://blood-bound.vercel.app/bloodrequest`|`GET`||


### Donor api route
| **Opetation**  | **Api** | **Type**     | **Data (type)**                |
| :-------- | :-------- | :------- | :------------------------- |
| `Create` | `https://blood-bound.vercel.app/donorcreate`|`POST`|userName (string), email (string), phone (number), photo (string), district (string), subDistrict (string), address (string), lastTimeDonate (date), bloodGroup (string)|
| `Get` | `https://blood-bound.vercel.app/getdonars`|`GET`||

### Blood donation campaign api route
| **Opetation**  | **Api** | **Type**     | **Data (type)**                |
| :-------- | :-------- | :------- | :------------------------- |
| `Create` | `https://blood-bound.vercel.app/campaigncreate`|`POST`| title (string), description (string), startDate (date), endDate (date), division (string), district (string), subDistrict (string), userId (string)|
| `Update` | `https://blood-bound.vercel.app/campaignupdate`|`PUT`| title (string), description (string), startDate (date), endDate (date), division (string), district (string), subDistrict (string), id (string),|
| `Delete` | `https://blood-bound.vercel.app/campaigndelete`|`DELETE`| userId (string), id (string)|
| `Get user campaigns` | `https://blood-bound.vercel.app/campaigns`|`POST`| userId (string)|
| `Get user specific campaigns` | `https://blood-bound.vercel.app/campaign`|`POST`| id (string), userId (string)|

