import axios from "axios";
import env from "../env";

class Api {
  private http = axios.create({
    baseURL: env.ALPHA_ENDPOINT,
  });

  public sendForm(
    firstName: string,
    lastName: string,
    phoneNumber: string,
    email: string,
    isInvestor: boolean,
    investmentRate: string
  ) {
    return this.http.post("/leads/capture", {
      firstName: firstName,
      lastName: lastName,
      phoneNumber: phoneNumber,
      email: email,
      isInvestor: isInvestor,
      investmentRate: investmentRate,
    });
  }
}

export default new Api();
