

export const Homedata = async (callback) => {
  const url = "https://webhook.site/ae21b955-8d2f-4563-81df-bcbca77f671d";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    console.log(json);
    callback(json)
  } catch (error) {
    console.error(error.message);
  }

}
