import { defineField, defineType } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",

  fields: [
    defineField({
      name: "companyName",
      title: "Company Name",
      type: "string",
    }),

    defineField({
      name: "tagline",
      title: "Tagline",
      type: "text",
      rows: 3,
    }),

    defineField({
      name: "phone",
      title: "Phone Number",
      type: "string",
    }),

    defineField({
      name: "whatsapp",
      title: "WhatsApp Number",
      type: "string",
    }),

    defineField({
      name: "email",
      title: "Email",
      type: "string",
    }),

    defineField({
      name: "address",
      title: "Address",
      type: "text",
      rows: 3,
    }),

    defineField({
      name: "logo",
      title: "Company Logo",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
  ],
});