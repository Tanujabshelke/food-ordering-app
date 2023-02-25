import axios from "axios";

async function useHttpsRequest(requestType = "POST") {
  let responseData;
  try {
    if (requestType === "GET") {
      let resData = await axios.get("https://dummyjson.com/quotes");
      responseData = resData?.data?.quotes[0];
      console.log("responseData", responseData);
    }
  } catch (e) {
    responseData = e.message;
    return responseData;
  }

  return responseData;
}

export default useHttpsRequest;
