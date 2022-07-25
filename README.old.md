
# Product Management Front-End

Your task is to **build a product management application** that:

1. Integrates with the provided Product Management API to create, update, delete and show data.
2. Design the view of the page based on the provided UI/UX design.
3. Makes the provided unit tests pass.

Please agree with your hiring team regarding the tech stack choice.

## What you should build

You are required to implement CRUD operations in the application and also the products must be searchable. In the other hand in the form the data of **Category** field should come from the API which is listed bellow. The app consists of a form for submitting product and a products list.


Products list displays the products details such as: title, image, price and etc. for each product.

Here's the UI mockup with hints:

Adobe XD link: https://xd.adobe.com/view/0c8febca-b9d1-484a-8a32-de487672bfad-59dc/

**The above link only opens via VPN if you are living in Iran**

![Product Management Frontend](https://i.ibb.co/VCZbpWP/sampleUX.jpg)


#### The form for creating & updating product

```html
<form ... >
  <input data-type="title" ... />
  <input data-type="price" type="number" ... />
  ...
  <button type="button" ...>Clear</button>
  <button type="submit" ...>Submit</button>
</form>
```

All input **fields should be cleared** after the form is submitted and also the **proper field validations** must be implemented for each input.

#### Products list

Every newly submitted product should go on **the top of the list** and should have an enclosing `<section />` with the following structure:

```html
<section
  data-type="product"
  data-product-id="${product-id}"
  ...
</section>
```

- `${product-id}` - product id of the corresponding product.

## Before you get started

### Get familiar with the API

<details>
<summary>Request examples</summary>

##### Get products list

```
GET https://dummyjson.com/products
```

##### Create a new product

```
POST https://dummyjson.com/products/add
Content-Type: application/json
body: JSON.stringify({
    title: 'BMW Pencil',
    /* other product data */
})
```

##### Get a product by id

```
GET https://dummyjson.com/products/1
```

##### Update a product by id

```
PUT /* or PATCH */ 'https://dummyjson.com/products/1
Content-Type: application/json
body: JSON.stringify({
    title: 'BMW Pen',
    /* or other product data */
})
```

##### Delete a product by id

```
DELETE https://dummyjson.com/products/1
```

##### Search products by name

```
GET https://dummyjson.com/products/search?q=phone
```

##### Get categories list

```
GET https://dummyjson.com/products/categories
```

</details>


## What we expect from you

1. Implement client-side validation of the form data.
2. Implement search box for searching products by name.
3. Get the data of Category field's from API. 
2. Implement error handling for the cases when the API cannot be reached or returns a server error.
3. Ensure that the app remains responsive (i.e. doesn't block the UI) while the data is being loaded.
4. Unit test one or two module of choice. There is no need to test the whole app, as we only want to understand what you take into consideration when writing unit tests.
5. Avoid duplication and extract re-usable modules where it makes sense. We want to see your approach to creating a codebase that is easy to maintain.
6. Push your code to the new `implementation` branch of your git profile. We encourage you to commit and push your changes regularly as it's a good way for you to showcase your thinking process.
7. Await further instructions from the hiring team.

## Time estimate

About **8 hours** depending on your experience level.

Also, there is no countdown. The estimate is for you to plan your time.
