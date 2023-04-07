This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
2nd api(Normal CategoriesID):-
{
    TopCAtegoryID:"",
    TopCategoryDisplayName:"",
    NormalCategoryList:-[
    {
    NormalCategoriesId:"",
    NormalCategoriesDisplayName:"",
    isthistrue:true,
    },
     {
    NormalCategoriesId:"",
    NormalCategoriesDisplayName:"",
    isthistrue:false
    },
    ]
    SubCategoryList:-[{
        SubCategoriesId:"",
        SubCategoriesDisplayName:"",
        SubCAtegoriesImage:""
    }]
}
const data = [
  {
    CustomRowname:"",
    Product1name:"",
    Product2name:"",
    Product3nmae:"",
  },
  {
    CustomRowname:"",
    Product1name:"",
    Product2name:"",
    Product3nmae:"",
  },
  {
    CustomRowname:"",
    Product1name:"",
    Product2name:"",
    Product3nmae:"",
  },
]
const data=[
  {
   ProductName:"",
   ProductImg:"",
   SubCategoryId:"",
  },
  {
   ProductName:"",
   ProductImg:"",
   SubCategoryId:"",
  },
]
(Sub CatgeoryId) -4125  4133 - 4126,
const comparisondata:-{
  "topCategoryId": 4133,
    "topCategoryDisplayName": "Sports",
    "normalCategoriesList": [
        {
            "normalCategoryId": 4136,
            "normalCategoryDisplayName": "PS5",
            "isThisInputId": true
        },
        {
            "normalCategoryId": 4137,
            "normalCategoryDisplayName": "PS4",
            "isThisInputId": false
        }
    ],
    SubCategoriesID:"",
    SubCategoriesDisplayName:"",
    OthersSubCategory:[{
      SubCategoryName:"",
      SubCAtegoryImage:"",
      subcategoryID:"",
    }],(based on normal Category)
    "tabledata":[                                   6 + 1=7 
       {
            Award:"AWARD",
            AwardImg:"",          
            Position:"",
            Image:"",
            availableat:"AVAILABLE AT",  
            details:"DETAILS",
            comparison:"COMPARISON",
            Customeronamazon:"CUSTOMER ON AMAZON",
            /* -----
            features:"FEATURES",
            comparisonResult:"COMPARISON RESULT",
            brand:"BRAND",
            */[custom + step6 comparison data]
        },
        {  
            Award:"Winner",
            AwardImg:"image.png",
            Position:"1",
            Image:"abcd4.png,Grohtherm 800 Thermostate,3-4 Days",[imagelink,ProductDisplayName,DeliveryIn]
            Customeronamazon:"4.5,4.889 Testimonials",[Rating,Review]
            details:"View Details",
             comparison:"About 159€ To Offer",(Price),
              availableat:"Amazon",
              /*---
            comparisonResult:"Very Good,1.0",[custom row data+Comparison data]
            brand:"Maico",
            features:"Grohe EcoJoy: Saving function for reduced More<br/>The desired temperature in a flash.<br/>Protection against excessively hot temperatures..", *--/
        },
        {
         Award:"",
         AwardImg:"",
         Position:"5",
        Image:"abcd.png,Grohtherm 800 Thermostate",
        Customeronamazon:"4.5,4.889 Testimonials",
        details:"View Details",
        comparisonResult:"Very Good,1.1",
        comparison:"About 159€ To Offer",
        brand:"Maico",
        features:"Grohe EcoJoy: Saving function for reduced More<br/>The desired temperature in a flash.<br/>Protection against excessively hot temperatures..",
        availableat:"Amazon"
    }
    ],
   SubCatgeoryAdvice:{
    "Title": "Heavy",
        "Description": "Now",
        "AdviceTitle": "Anything",
        "AdviceDescription": "Something",
        "OverviewDescription": "",
        "OverviewImage": "test1Pic.jpg",
        "OverviewImageTitle": "",
        "CostsDescription": "",
        "BrandDescription": "",
        "ReportsDescription": ""
   }
}
ProductId:-
{
  "topCategoryId": 4133,
    "topCategoryDisplayName": "Sports",
    "normalCategoriesList": [
        {
            "normalCategoryId": 4136,
            "normalCategoryDisplayName": "PS5",
            "isThisInputId": true
        },
        {
            "normalCategoryId": 4137,
            "normalCategoryDisplayName": "PS4",
            "isThisInputId": false
        }
    ],
    SubCategoriesId;"",
    SubCategoriesDisplayName:"",
    ProductDisplayName:"",
  Images:["",""],
  ProducTRelatedInfo:-{

  },
  otherSProduct:[
   {
    ProductName:"",
    ProductImage:PrimaryImage,    4125 - 4120 -4110
    Rank:"",
    firstAward:"",
    SecondAward:"",
    firstAwardIcon:"",
    price:""
   }
  ],
  OthersSubCategory:[{
      SubCategoryName:"",
      SubCAtegoryImage:"",
      subcategoryID:"",
    }],(based on normal Category)
}
{
topCategoryId: 4175,
  topCategoryDisplayName: 'Test123',
  normalCategoriesList: [
    {
      normalCategoryId: 4220,
      normalCategoryDisplayName: 'Computer & Internet',
      normalCategoryImage: null
    },
    {
      normalCategoryId: 4221,
      normalCategoryDisplayName: 'Börse & Geld',
      normalCategoryImage: null
    }
  ],
  level3CategoryList:-[{
      level3CategoryId: 4220,
      level3CategoryDisplayName: 'Computer & Internet',
      level3CategoryImage: null
  }] -(based on level3)
  }
  Normal Categories api:-
  api/frontend/getSubcategoriesFromNormalCategoryId
  SubCategorydata {
  topCategoryId: 4175,
  topCategoryDisplayName: 'Test123',
  normalCategoriesList: [
    {
      normalCategoryId: 4220,
      normalCategoryDisplayName: 'Computer & Internet',
      isThisInputId: true
    },
    {
      normalCategoryId: 4221,
      normalCategoryDisplayName: 'Börse & Geld',
      isThisInputId: false
    }
  ],
  level3CategoriesList:[
    {
      level3CategoryId: 4220,
      level3CategoryDisplayName: 'Computer & Internet',
      isThisInputId: false
    },
  ]
  subCategoriesList: [
    {
      subCategoryId: 4222,
      subCategoryDisplayName: 'Microsoft',
      subCategoryImage: null
    },
    {
      subCategoryId: 4223,
      subCategoryDisplayName: 'Hardware & Technik',
      subCategoryImage: null
    }
  ]
}
comparison data:-
api/frontend/getComparisonData
topCategoryId: 4175,
  topCategoryDisplayName: 'Test123',
  normalCategoriesList: [
    {
      normalCategoryId: 4220,
      normalCategoryDisplayName: 'Computer & Internet',
      isThisInputId: true
    },
    {
      normalCategoryId: 4221,
      normalCategoryDisplayName: 'Börse & Geld',
      isThisInputId: false
    }
  ],
  level3CategoriesList:[
    {
      level3CategoryId: 4220,
      level3CategoryDisplayName: 'Computer & Internet',
      isThisInputId: false
    },
  ]
  subCategoryId: 4222,
  subCategoryDisplayName: 'Microsoft',
  otherSubCategoriesList: [
    {
      subCategoryId: 4223,
      subCategoryDisplayName: 'Hardware & Technik',
      subCategoryImage: null
    }
  ],
  
  subCategoryAdvice: {
    Title: '',
    Description: '',
    AdviceTitle: '',
    AdviceDescription: '',
    OverviewDescription: '',
    OverviewImage: '',
    OverviewImageTitle: '',
    CostsDescription: '',
    BrandDescription: '',
    ReportsDescription: ''
  }
  Add Product By Category:-(Params:-categoryId) (Get)
  {
   CatgeoryList:[{
    CatgeoryId:"",
    CatgeoryDisplayName:""
   }],
   ProductList:[{
    ProductId:"",
    ProductDisplayName:"",
   }]
  }
  Level-3 (SubCategoryID:-101)
  api/getsubactegory?categoryId=101&amazoncatgeoryid=&view=1
  {
    categoryList:-[{
     catgeoryId:""(Level-4 categoryId),
     categoryDisplayName:""
    }],
    productList:-[{

    }]
  }
  Level-4 (amazoncategoryId:-4910)
  api/getsubcategory?categoryId=&amazoncategoryid=4910
  4012=50000
  {
    parentcategorybrowsenodeid:"40000",
    innerparent:{
          parentcategorybrowsenodeid:"50000",
    }
  }
  Free shipping available -need to write proper way
  position wrong