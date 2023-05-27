import fetch from "isomorphic-unfetch";
import client from "@mailchimp/mailchimp_marketing"
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function userSubscribe(req: NextApiRequest, res: NextApiResponse) {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: "Email is required" });
  }

  try {
    client.setConfig({
        apiKey: process.env.MAILCHIMP_API_KEY,
        server: process.env.MAILCHIMP_API_SERVER,
      });

    const response = await client.lists.setListMember(process.env.MAILCHIMP_AUDIENCE_ID, email, {
        email_address: email,
        status_if_new: "pending",
    });

    console.log("Response from mailchimp: " + JSON.stringify(response))
    if (response.status >= 400) {
      return res.status(400).json({
        error: `There was an error subscribing to the newsletter.
        Please try again later.`,
      });
    }

    return res.status(201).json({ error: "" });
  } catch (error) {
    console.log("ERROR! " + error)
    return res.status(500).json({ error: error.message || error.toString() });
  }
};