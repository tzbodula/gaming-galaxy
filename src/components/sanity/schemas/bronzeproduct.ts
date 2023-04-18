export default {
    name: 'bronzeproduct',
    title: 'Bronze Product',
    type: 'document',
    fields: [
    // The main product information
      {
        name: 'name',
        title: 'Product Name',
        description: 'The name for the product',
        type: 'string',
      },
      {
        name: 'productSlug',
        title: 'Product Slug',
        description: "The slug for the product",
        type: 'slug',
        options: {
          source: 'title',
          maxLength: 96,
        },
      },

    // Product-specific information 
      {
        name: 'mainHeadline',
        title: 'Headline',
        description: "The headline on the product page",
        type: 'string',
      },
      {
        name: 'subHeadline',
        title: 'Subheadline',
        description: "The subheadline on the product page",
        type: 'string',
      },
      {
        name: 'mainName',
        title: 'Name',
        description: "The name for the main product",
        type: 'string',
      },
      {
        name: 'mainPrice',
        title: 'Price',
        description: "The price for the main product",
        type: 'string',
      },
      {
        name: 'productImage',
        title: 'Image',
        description: "The image for the main product",
        type: 'image',
        options: {
          hotspot: true,
        },
      },      
      {
        name: 'mainContent',
        title: 'Main Content',
        description: "The content for the main product ",
        type: 'blockContent',
      },
      {
        name: 'credentials',
        title: 'Credentials',
        description: "My credentials for making this product ",
        type: 'blockContent',
      },
      {
        name: 'benefits',
        title: 'Benefits',
        description: "The benefits the user will get for purchasing this product ",
        type: 'blockContent',
      },
      {
        name: 'socialProof',
        title: 'Social Proof',
        description: "Quotes by other creators proving what we're talking about.",
        type: 'blockContent',
      },
      {
        name: 'offer',
        title: 'Offer',
        description: "The main offer contained in this product",
        type: 'blockContent',
      },
      {
        name: 'bonus1Name',
        title: 'Bonus 1 Name',
        description: "The name of bonus one",
        type: 'string',
      },
      {
        name: 'bonus1Price',
        title: 'Bonus 1 Price',
        description: "The price of bonus one",
        type: 'string',
      },
      {
        name: 'bonus1Content',
        title: 'Bonus 1 Content',
        description: "The content of bonus one",
        type: 'blockContent',
      },
      {
        name: 'bonus2Name',
        title: 'Bonus 2 Name',
        description: "The name of bonus two",
        type: 'string',
      },
      {
        name: 'bonus2Price',
        title: 'Bonus 2 Price',
        description: "The price of bonus two",
        type: 'string',
      },
      {
        name: 'bonus2Content',
        title: 'Bonus 2 Content',
        description: "The content of bonus two",
        type: 'blockContent',
      },   
      {
        name: 'bonus3Name',
        title: 'Bonus 3 Name',
        description: "The name of bonus three",
        type: 'string',
      },
      {
        name: 'bonus3Price',
        title: 'Bonus 3 Price',
        description: "The price of bonus three",
        type: 'string',
      },
      {
        name: 'bonus3Content',
        title: 'Bonus 3 Content',
        description: "The content of bonus three",
        type: 'blockContent',
      },   
      {
        name: 'bonus4Name',
        title: 'Bonus 4 Name',
        description: "The name of bonus four",
        type: 'string',
      },
      {
        name: 'bonus4Price',
        title: 'Bonus 4 Price',
        description: "The price of bonus four",
        type: 'string',
      },
      {
        name: 'bonus4Content',
        title: 'Bonus 4 Content',
        description: "The content of bonus four",
        type: 'blockContent',
      }, 
      {
        name: 'priceReveal',
        title: 'Price Reveal',
        description: "This is when we reveal our price to the customers",
        type: 'blockContent',
      },
      {
        name: 'scarcity',
        title: 'Scarcity',
        description: "What can make people buy right now?",
        type: 'blockContent',
      },
      {
        name: 'guarantee',
        title: 'Guarantee',
        description: "What can I guarantee to assure results?",
        type: 'blockContent',
      },  
      {
        name: 'cta',
        title: 'Call To Action',
        description: "What can people do right now?",
        type: 'blockContent',
      },  
      {
        name: 'warning',
        title: 'Warning',
        description: "Final warning for people to get them over the edge.",
        type: 'blockContent',
      },             
    ],

  }
  