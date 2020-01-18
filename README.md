# Groceries App

---
Project Summary:
Money is wasted driving back and forth to the grocery store. we are trying to solve that problem by tracking what you buy and bring into your home. Consider the following scenarios:


I am going to the store and I have a recipe in mind and I know I am going to need Garlic Powder but I think I have it at home. I didn't have it at home and now the $2.33 cost an extra $3-5 in gas to go back.

I am already driving passed a grocery store so I decide to run in and grab milk. When I get home I see that I already had them in the fridge. The milk expired before I could use it all.

Instructions:
Before getting started make a .env file for dotenv and include the following 

```
//.env
AUTH0_DOMAIN = <YOUR_AUTH0_DOMAIN>
API_IDENTIFIER = <YOUR_API_IDENTIFIER>

```

After setting up .env 

```
npm install 
npm start
```



Goals:
Use Grocery store open API to keep track of the thing I have so I don't end up buying the same stuff a dozen times.

It should be easy to add and remove items that are bought and used.

all items should have a shelf life.

Future goals/Ideas
- Notifications when things expire
- recipe suggestions to use things before they expire
- auto grocery list