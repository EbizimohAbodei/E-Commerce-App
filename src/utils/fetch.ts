import axios, { AxiosError } from "axios";

export const uploadMultipleFiles = async (files: File[], url: string) => {
  try {
    let urls = [];
    for (let i = 0; i < files.length; i++) {
      const formdata = new FormData();
      formdata.append("file", files[i]);
      urls.push(axios.post(url, formdata));
    }
    const res: any = await axios.all(urls);
    let output: string[] = [];
    for (let i = 0; i < res.length; i++) {
      let link = res[i].data.location;
      output.push(link);
    }
    return output;
  } catch (e) {
    const error = e as AxiosError;
    if (error.request) {
      console.log("error in request: ", error.request);
    } else {
      console.log(error.response?.data);
    }
  }
};
