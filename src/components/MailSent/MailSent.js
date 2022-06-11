import { useDocumentTitle } from "hooks";
import mailsent from "assets/mailsent.svg";

export const MailSent = () => {
  useDocumentTitle("Mail Sent | Fino World");

  return (
    <div className="authentication">
      <form className="authentication__form mailsent">
        <h2>Email has been sent!</h2>
        <p className="authentication__subtitle">
          Please check you inbox and click on the received link to reset the
          password
        </p>
        <div className="mailsent__img-container">
          <img src={mailsent} alt="Mail Sent" className="img-responsive" />
        </div>
        <button className="btn btn--primary authentication__btn" type="submit">
          LOG IN
        </button>
      </form>
    </div>
  );
};
