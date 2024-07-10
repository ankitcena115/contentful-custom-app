import React, { useEffect, useState } from 'react';
import { EntityList, EntityListItem, Paragraph, Spinner } from '@contentful/f36-components';
import { DialogAppSDK } from '@contentful/app-sdk';
import { /* useCMA, */ useSDK } from '@contentful/react-apps-toolkit';
import { url, token } from "../constants"
const Dialog = () => {
  const sdk = useSDK<DialogAppSDK>();

  const [products, setProducts] = useState<any>(null)

  useEffect(() => {
    const getProductsData = async () => {
      fetch((url), {
        headers: { Authorization: token }
      })
        .then(resp => resp.json())
        .then(res => setProducts(res))
    };

    getProductsData(); // run it, run it

    return () => {
      // this now gets called when the component unmounts
    };
  }, [])
  if (!products) {
    return <Spinner />
  }
  console.log("products", products)

  return (
    <>
      {/* {sdk.parameters.invocation} */}
      {products?.data && 
      <EntityList>
        {products?.data?.map((eachProd: any) => {
          console.log("eachProd", eachProd)
          return (
            <EntityListItem
              key={eachProd?.id}
              title={eachProd?.iso_alpha2}
              description={eachProd?.name}
              onClick={() => {
                sdk.close(eachProd?.name)
              }}
              thumbnailUrl={"https://gsf-staging.agilecollab.com/media/mf_webp/jpg/media/catalog/product/cache/dbcfcaf060346aff1001d2f39a98173f/r/i/rinr246.webp"}
            />
          )
        })}
      </EntityList>
      
      }
    </>
  )
};

export default Dialog;
