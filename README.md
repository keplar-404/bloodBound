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

```bash
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

### donor api route

| **Opetation**    | **Api**                                      | **Type** | **Data (type)**                                                                                                                       |
| :--------------- | :------------------------------------------- | :------- | :------------------------------------------------------------------------------------------------------------------------------------ |
| `Create donor`   | `https://blood-bound.vercel.app/donorcreate` | `POST`   | email (string), phone (string), bloodGroup (string), district (string), upazila (string), address (string), lastDonationDate (string) |
| `Get all donors` | `https://blood-bound.vercel.app/getdonars`   | `GET`    |                                                                                                                                       |

### Blood request api route

| **Opetation**          | **Api**                                             | **Type** | **Data (type)** |
| :--------------------- | :-------------------------------------------------- | :------- | :-------------- |
| `Create blood request` | `https://blood-bound.vercel.app/createbloodrequest` | `POST`   | patientName (string), bloodGroup (string), time (date), location (string), phone (string), bloodBag (string), |
| `Get blood request` | `https://blood-bound.vercel.app/getbloodrequests` | `GET`   | |

### Payment api route

| **Opetation** | **Api**                                     | **Type** | **Data (type)**                               |
| :------------ | :------------------------------------------ | :------- | :-------------------------------------------- |
| `Stripe payment` | `https://blood-bound.vercel.app/stripe` | `POST`   | token (string), amount (number), campaignId (string), email (string) |
