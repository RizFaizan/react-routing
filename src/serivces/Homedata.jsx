

export const Homedata = async (callback) => {
  const url = "https://webhook.site/0f5a8d38-f15d-4388-968e-077c60e9af1d";
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
