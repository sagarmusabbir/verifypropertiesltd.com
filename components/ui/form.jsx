import React from "react";
import FormfacadeEmbed from "@formfacade/embed-react";

export default function MyForm() {
  return (
    <>
      <FormfacadeEmbed
        formFacadeURL="https://formfacade.com/include/114760435190681902493/form/1FAIpQLSfKAeVEvyC0tACIoT9WNPMV5eSBPrkR5Y-FWKUjSA97sYxxbg/classic.js/?div=ff-compose"
        onSubmitForm={() => console.log("Form submitted")}
      />
    </>
  );
}
