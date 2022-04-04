import React, { useState } from 'react';
import { useMutation, gql } from '@apollo/client';
import "../component/createproducts.css";
const CREATE_LINK_MUTATION = gql`
mutation Mutation($name: String!, $image: String!, $category: String!) {
  createProduct(name: $name, image: $image, category: $category) {
    name
    image
    category {
      name
    }
  }
}`
const CreateProduct = () => {
  const [formState, setFormState] = useState({
    name: '' ,
    image: '' ,
    category: '' ,
   short_desc: '' ,
    price: '' 

  })

  const [CreateProduct] = useMutation(CREATE_LINK_MUTATION, {
    variables: {
      name: formState.name,
      image: formState.image,
      category: formState.category,
      short_desc: formState.short_desc,
      price: formState.price

    }
  });

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          CreateProduct();
          console.log('product created')
          console.log('name:', formState.name)
          console.log('image-path', formState.image)
          console.log('category:', formState.category)
          console.log('short_description:', formState.short_desc)
          console.log('price:', formState.price)
        }}
      >
        <div className="flex flex-column mt3" id="createproductcontainer">
          <h2 id="containertitle">Add a product:</h2> <br></br>
          <input
            className="mb2"
            value={formState.name}
            onChange={(e) =>
              setFormState({
                ...formState,
                name: e.target.value
              })
            }
            type="string"
            placeholder="Name of product"
          />

                    <input
            className="mb2"
            value={formState.image}
            onChange={(e) =>
              setFormState({
                ...formState,
                image: e.target.value
              }) 
            }
            
            type="string"
            placeholder="specify img path"
          />
          <input
            className="mb2"
            value={formState.category}
            onChange={(e) =>
              setFormState({
                ...formState,
                category: e.target.value
              }) 
            }
            
            type="string"
            placeholder="specify category"
          />
                    <input
            className="mb2"
            value={formState.short_desc}
            onChange={(e) =>
              setFormState({
                ...formState,
                short_desc: e.target.value
              }) 
            }
            
            type="string"
            placeholder="specify short description"
          />

          <input
            className="mb2"
            value={formState.price}
            onChange={(e) =>
              setFormState({
                ...formState,
                price: e.target.value
              }) 
            }
            
            type="int"
            placeholder="specify price"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreateProduct;