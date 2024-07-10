import React from 'react';
import { Button, Paragraph } from '@contentful/f36-components';
import { FieldAppSDK } from '@contentful/app-sdk';
import { /* useCMA, */ useAutoResizer, useFieldValue, useSDK } from '@contentful/react-apps-toolkit';
import { SingleLineEditor } from "@contentful/field-editor-single-line";
const Field = () => {
  const sdk = useSDK<FieldAppSDK>();
  useAutoResizer();
  const [value, setValue] = useFieldValue<string>();
  const handleClick = async () => {
    const data = await sdk.dialogs.openCurrentApp({
      title: "Title",
      shouldCloseOnEscapePress: true,
      shouldCloseOnOverlayClick: true,
      minHeight: 500,
      parameters: value
    })
    setValue(data)
    console.log(data)
  }
  return (
    <>
      <SingleLineEditor field={sdk.field} locales={sdk.locales} />
      <Button onClick={handleClick}>Select</Button>
    </>
  )
};

export default Field;
