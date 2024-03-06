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

- abusaleh
- golam_raiyan
- hasan_ali
- main
- shammo
- shehub
- shishir_ahmed

3. Change the branch

```bashs
git checkout branch_name_here
```

4. start codding

## Push code

**Note:** Make sure before pushing a commit you are on your branch.

Check your current branch with mark \* symbol

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

| **Opetation** | **Api**                                     | **Type** | **Data (type)**                               |
| :------------ | :------------------------------------------ | :------- | :-------------------------------------------- |
| `Create user` | `https://blood-bound.vercel.app/usercreate` | `POST`   | name (string), email (string), photo (string) |
| `Get user` | `https://blood-bound.vercel.app/getuser` | `POST` | email (string) |
| `Get users` | `https://blood-bound.vercel.app/getusers` | `GET` | |
| `Delete user` | `https://blood-bound.vercel.app/userdelete/${id}` | `DELETE` | |

### donor api route

| **Opetation**    | **Api**                                   | **Type** | **Data (type)**                                                                                                                       |
| :--------------- | :------------------------------------------- | :------- | :------------------------------------------------------------------------------------------------------------------------------------ |
| `Create donor`   | `https://blood-bound.vercel.app/donorcreate` | `POST`   | email (string), phone (string), bloodGroup (string), district (string), upazila (string), address (string), lastDonationDate (string) |
| `Get all donors` | `https://blood-bound.vercel.app/getdonars`   | `GET`    |                                                                                                                                       |

### Blood request and donate api route

| **Opetation**          | **Api**                                             | **Type** | **Data (type)** |
| :--------------------- | :-------------------------------------------------- | :------- | :-------------- |
| `Create blood request` | `https://blood-bound.vercel.app/createbloodrequest` | `POST`   | patientName (string), bloodGroup (string), time (date), location (string), phone (string), bloodBag (string), |
| `Get blood request` | `https://blood-bound.vercel.app/getbloodrequests` | `GET`   | |
| `Get blood requests of specific user` | `https://blood-bound.vercel.app/getspecificusersbloodreqs/${email}` | `GET`   | |
| `Blood donate on blood request` | `https://blood-bound.vercel.app/donateonbloodreq` | `POST`   | email (string), username (string) bloodreqId (string), bloodBag (number), date (string) , |

### Payment api route

| **Opetation** | **Api**                                     | **Type** | **Data (type)**                               |
| :------------ | :------------------------------------------ | :------- | :-------------------------------------------- |
| `Stripe payment` | `https://blood-bound.vercel.app/stripe` | `POST`   | token (string), amount (number), campaignId (string), email (string) |

### Blood donation campaign api route

| **Opetation** | **Api**                                     | **Type** | **Data (type)**                               |
| :------------ | :------------------------------------------ | :------- | :-------------------------------------------- |
| `Get all campaigns` | `https://blood-bound.vercel.app/getallcampaigns` | `GET`   | |
| `Get total donation amount and campaings length` | `https://blood-bound.vercel.app/clcDonationAmountAndCampaingsLength` | `GET`   | |
| `Get specific campaign and others` | `https://blood-bound.vercel.app/getspecificcampaignandothers` | `POST` | campaginId (string) |
| `create campaign` | `https://blood-bound.vercel.app/createcampaign` | `POST`   | title (string), description (string), photo (string), startDate (date), endDate (date), address (string), email(string) |
| `Get specific campain donation amount and how many users donated` | `https://blood-bound.vercel.app/calculatedonateamountanduser` | `POST`   | campaginId (string) |
| `Volunteer create` | `https://blood-bound.vercel.app/volunteercreate` | `POST`   | campaingId (address), name (address), email (address), phone (address), address (address) |
| `Volunteer delete` | `https://blood-bound.vercel.app/volunteerdelete` | `DELETE`   | campaignId (string), email(string)(This email should be the volunteer email) |
| `Delete campaign` | `https://blood-bound.vercel.app/campaigndelete/${id}` | `DELETE` | |


### Bio medical services api route

| **Opetation** | **Api**                                     | **Type** | **Data (type)**                               |
| :------------ | :------------------------------------------ | :------- | :-------------------------------------------- |
| `Get all services` | `https://blood-bound.vercel.app/getservices` | `GET`   | |
| `Test booking` | `https://blood-bound.vercel.app/testbooking` | `POST`   | testName (string), userName (string), userEmail (string), date (string), time (string), phone (string), address (string), status (string), price (string), imageUrl (string), |
| `Get all test bookings` | `https://blood-bound.vercel.app/gettestbookings` | `GET`   | |
| `Get test booking of specific user` | `https://blood-bound.vercel.app/gettestbookingsofspecificuser/${email}` | `GET`   | |
| `Delete test booking` | `https://blood-bound.vercel.app/deletetestbooking/${id}` | `DELETE`   | |
| `Change status of a test booking` | `https://blood-bound.vercel.app/statuschangefortestbooking/${id}` | `PATCH`   | id (string) |

### Blog post api route

| **Opetation** | **Api**                                     | **Type** | **Data (type)**                               |
| :------------ | :------------------------------------------ | :------- | :-------------------------------------------- |
| `Create blog post` | `https://blood-bound.vercel.app/createblogpost` | `POST`   | title (string), description (string), photo (string) |
| `Get all blog posts` | `https://blood-bound.vercel.app/getblogposts` | `GET`   | |
| `Get specific blog post` | `https://blood-bound.vercel.app/getblogpost/${id}` | `GET`   | |
| `Delete blog post` | `https://blood-bound.vercel.app/deleteblogpost/${id}` | `DELETE`   | |